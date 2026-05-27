# Necesitamos el ID de la cuenta AWS para la política del bucket
data "aws_caller_identity" "current" {}

# El bucket donde subiremos los archivos del portfolio (la carpeta out/)
resource "aws_s3_bucket" "portfolio" {
  bucket = var.bucket_name
}

# Bloquea el acceso público directo al bucket.
# Los archivos SOLO son accesibles a través de CloudFront, nunca directamente.
resource "aws_s3_bucket_public_access_block" "portfolio" {
  bucket = aws_s3_bucket.portfolio.id

  block_public_acls       = true
  block_public_policy     = true
  ignore_public_acls      = true
  restrict_public_buckets = true
}

# Política que autoriza a CloudFront (y solo a CloudFront) a leer los archivos.
# La condición "AWS:SourceArn" asegura que solo NUESTRA distribución puede acceder,
# no cualquier otra distribución CloudFront del mundo.
resource "aws_s3_bucket_policy" "portfolio" {
  bucket = aws_s3_bucket.portfolio.id

  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [{
      Effect    = "Allow"
      Principal = { Service = "cloudfront.amazonaws.com" }
      Action    = "s3:GetObject"
      Resource  = "${aws_s3_bucket.portfolio.arn}/*"
      Condition = {
        StringEquals = {
          "AWS:SourceArn" = "arn:aws:cloudfront::${data.aws_caller_identity.current.account_id}:distribution/${aws_cloudfront_distribution.cdn.id}"
        }
      }
    }]
  })
}
