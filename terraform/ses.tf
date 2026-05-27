# Registra el email de contacto en SES.
# Cuando hagas "terraform apply" por primera vez, AWS enviará un email
# de verificación a esta dirección. Debes hacer clic en el enlace
# antes de que el formulario pueda enviar emails reales.
resource "aws_ses_email_identity" "contact" {
  email = var.contact_email
}
