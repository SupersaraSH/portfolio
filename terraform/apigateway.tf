# El API en sí: define el nombre y activa CORS para permitir peticiones
# desde el dominio del portfolio (navegadores bloquean peticiones cross-origin
# si el servidor no las autoriza explícitamente)
resource "aws_apigatewayv2_api" "contact" {
  name          = "sarahoces-contact-api"
  protocol_type = "HTTP"

  cors_configuration {
    allow_origins = ["*"] # En producción se podría restringir al dominio de Sara
    allow_methods = ["POST", "OPTIONS"]
    allow_headers = ["Content-Type"]
  }
}

# Integración: conecta el API Gateway con la Lambda.
# "AWS_PROXY" significa que API Gateway pasa la petición completa a Lambda
# (headers, body, método HTTP...) sin modificarla.
resource "aws_apigatewayv2_integration" "contact" {
  api_id                 = aws_apigatewayv2_api.contact.id
  integration_type       = "AWS_PROXY"
  integration_uri        = aws_lambda_function.contact.invoke_arn
  payload_format_version = "2.0"
}

# Ruta: "cuando llegue un POST a /contact, usa esta integración"
resource "aws_apigatewayv2_route" "contact" {
  api_id    = aws_apigatewayv2_api.contact.id
  route_key = "POST /contact"
  target    = "integrations/${aws_apigatewayv2_integration.contact.id}"
}

# Stage: el "entorno" del API. "$default" es el único stage en HTTP API v2
# y se despliega automáticamente. La URL resultante será:
# https://<id>.execute-api.<region>.amazonaws.com/contact
resource "aws_apigatewayv2_stage" "contact" {
  api_id      = aws_apigatewayv2_api.contact.id
  name        = "$default"
  auto_deploy = true # Cada cambio en la API se despliega automáticamente
}
