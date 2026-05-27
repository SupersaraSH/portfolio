# Terraform empaqueta el código en un .zip automáticamente.
# Cada vez que el código cambie, el hash cambia y Terraform sube la nueva versión.
data "archive_file" "lambda_zip" {
  type        = "zip"
  source_file = "${path.module}/lambda/contact.mjs"
  output_path = "${path.module}/lambda/contact.zip"
}

# --- IAM: Permisos de la Lambda ---

# El "rol" es la identidad de la Lambda dentro de AWS.
# Este bloque le dice a AWS: "permite que el servicio Lambda asuma este rol".
resource "aws_iam_role" "lambda_exec" {
  name = "sarahoces-contact-lambda-role"

  assume_role_policy = jsonencode({
    Version = "2012-10-17"
    Statement = [{
      Effect    = "Allow"
      Principal = { Service = "lambda.amazonaws.com" }
      Action    = "sts:AssumeRole"
    }]
  })
}

# Política adjunta al rol: qué acciones concretas puede hacer la Lambda.
# Dos permisos:
# 1. ses:SendEmail — para enviar el email de contacto
# 2. logs:* — para escribir logs en CloudWatch (imprescindible para depurar errores)
resource "aws_iam_role_policy" "lambda_policy" {
  name = "sarahoces-contact-lambda-policy"
  role = aws_iam_role.lambda_exec.id

  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Effect   = "Allow"
        Action   = "ses:SendEmail"
        Resource = "*"
      },
      {
        Effect = "Allow"
        Action = [
          "logs:CreateLogGroup",
          "logs:CreateLogStream",
          "logs:PutLogEvents",
        ]
        Resource = "arn:aws:logs:*:*:*"
      },
    ]
  })
}

# --- La función Lambda en sí ---

resource "aws_lambda_function" "contact" {
  function_name = "sarahoces-contact"
  filename      = data.archive_file.lambda_zip.output_path
  # source_code_hash detecta si el .zip cambió desde el último apply.
  # Si no cambió, Terraform no sube nada (más eficiente).
  source_code_hash = data.archive_file.lambda_zip.output_base64sha256

  runtime = "nodejs22.x"
  handler = "contact.handler" # archivo "contact.mjs", función exportada "handler"
  role    = aws_iam_role.lambda_exec.arn
  timeout = 10 # segundos máximos de ejecución (enviar un email es rápido)

  # Variables de entorno accesibles dentro del código como process.env.X
  environment {
    variables = {
      CONTACT_EMAIL = var.contact_email
    }
  }
}

# Permiso para que API Gateway pueda invocar esta Lambda
resource "aws_lambda_permission" "apigw" {
  statement_id  = "AllowAPIGatewayInvoke"
  action        = "lambda:InvokeFunction"
  function_name = aws_lambda_function.contact.function_name
  principal     = "apigateway.amazonaws.com"
  source_arn    = "${aws_apigatewayv2_api.contact.execution_arn}/*/*"
}
