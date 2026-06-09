# OAC = Origin Access Control. Es el "carnet de identidad" que CloudFront
# presenta a S3 para demostrar que tiene permiso de leer los archivos.
# Certificado SSL para sarahoces.dev — debe estar en us-east-1 (requisito de CloudFront)
resource "aws_acm_certificate" "portfolio" {
  provider                  = aws.us_east_1
  domain_name               = "sarahoces.dev"
  subject_alternative_names = ["www.sarahoces.dev"]
  validation_method         = "DNS"

  lifecycle {
    create_before_destroy = true
  }
}

# Terraform espera aquí hasta que AWS confirme que el dominio es tuyo.
# Tú tendrás que añadir los registros CNAME en DonDominio mientras espera.
resource "aws_acm_certificate_validation" "portfolio" {
  provider                = aws.us_east_1
  certificate_arn         = aws_acm_certificate.portfolio.arn
  validation_record_fqdns = [for record in aws_acm_certificate.portfolio.domain_validation_options : record.resource_record_name]
}

resource "aws_cloudfront_origin_access_control" "s3_oac" {
  name                              = "${var.bucket_name}-oac"
  origin_access_control_origin_type = "s3"
  signing_behavior                  = "always"
  signing_protocol                  = "sigv4"
}

# CloudFront Function: se ejecuta en el edge (el servidor más cercano al usuario)
# antes de que la petición llegue a S3.
#
# Problema que resuelve: Next.js genera "about.html" pero el navegador pide "/about".
# S3 no mapea automáticamente "/about" → "about.html".
# Este script añade ".html" a las URLs que no tienen extensión.
#
# Ejemplos:
#   /about              → /about.html        ✓
#   /dev/projects/lynve → /dev/projects/lynve.html  ✓
#   /_next/static/foo.js → /_next/static/foo.js     (sin cambio, ya tiene extensión)
#   /images/foto.jpg    → /images/foto.jpg          (sin cambio)
resource "aws_cloudfront_function" "url_rewrite" {
  name    = "${var.bucket_name}-url-rewrite"
  runtime = "cloudfront-js-2.0"
  code    = <<-EOF
    function handler(event) {
      var uri = event.request.uri;
      if (uri !== '/' && !uri.includes('.')) {
        event.request.uri = uri + '.html';
      }
      return event.request;
    }
  EOF
}

resource "aws_cloudfront_distribution" "cdn" {
  enabled             = true
  default_root_object = "index.html"
  price_class         = "PriceClass_100"
  aliases             = ["sarahoces.dev", "www.sarahoces.dev"]
  depends_on          = [aws_acm_certificate_validation.portfolio]

  # De dónde sacar los archivos: nuestro bucket S3
  origin {
    domain_name              = aws_s3_bucket.portfolio.bucket_regional_domain_name
    origin_id                = "s3-portfolio"
    origin_access_control_id = aws_cloudfront_origin_access_control.s3_oac.id
  }

  # Cómo gestionar las peticiones a los archivos estáticos
  default_cache_behavior {
    target_origin_id       = "s3-portfolio"
    viewer_protocol_policy = "redirect-to-https" # HTTP → redirige a HTTPS automáticamente
    allowed_methods        = ["GET", "HEAD"]
    cached_methods         = ["GET", "HEAD"]
    compress               = true # Comprime JS/CSS/HTML con gzip antes de enviar

    forwarded_values {
      query_string = false
      cookies { forward = "none" }
    }

    # Aplica nuestra función de reescritura de URLs en cada petición
    function_association {
      event_type   = "viewer-request"
      function_arn = aws_cloudfront_function.url_rewrite.arn
    }
  }

  # Si S3 devuelve un 404 (archivo no existe), CloudFront sirve nuestra página 404
  custom_error_response {
    error_code         = 404
    response_code      = 404
    response_page_path = "/404.html"
  }

  # Sin restricciones geográficas (accesible desde cualquier país)
  restrictions {
    geo_restriction { restriction_type = "none" }
  }

  viewer_certificate {
    acm_certificate_arn      = aws_acm_certificate.portfolio.arn
    ssl_support_method       = "sni-only"
    minimum_protocol_version = "TLSv1.2_2021"
  }
}
