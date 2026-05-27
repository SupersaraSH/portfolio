terraform {
  required_version = ">= 1.5"

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
    archive = {
      source  = "hashicorp/archive"
      version = "~> 2.0"
    }
  }
}

# Proveedor principal: donde vivirán S3, Lambda, API Gateway y SES
provider "aws" {
  region = var.aws_region
}

# Proveedor secundario en us-east-1: los certificados SSL de CloudFront
# solo se pueden crear en esta región (requisito de AWS, no nuestro)
provider "aws" {
  alias  = "us_east_1"
  region = "us-east-1"
}
