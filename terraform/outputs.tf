output "cloudfront_url" {
  description = "URL del portfolio (CloudFront). Úsala para acceder a la web."
  value       = "https://${aws_cloudfront_distribution.cdn.domain_name}"
}

output "contact_api_url" {
  description = "URL del endpoint del formulario de contacto. Ponla en NEXT_PUBLIC_CONTACT_API_URL."
  value       = "${aws_apigatewayv2_stage.contact.invoke_url}contact"
}

output "s3_bucket_name" {
  description = "Nombre del bucket S3. Lo necesitas para el comando 'aws s3 sync'."
  value       = aws_s3_bucket.portfolio.bucket
}
