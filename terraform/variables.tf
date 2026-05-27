variable "aws_region" {
  description = "Región AWS donde se crean los recursos (excepto el certificado SSL)"
  type        = string
  default     = "eu-west-1" # Irlanda — la más cercana a España
}

variable "bucket_name" {
  description = "Nombre del bucket S3. Debe ser único a nivel mundial en AWS."
  type        = string
  default     = "sarahoces-portfolio"
}

variable "contact_email" {
  description = "Email donde Sara recibe los mensajes del formulario de contacto"
  type        = string
  default     = "sarasaezhoces@gmail.com"
}
