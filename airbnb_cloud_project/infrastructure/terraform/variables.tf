variable "aws_region" {
  description = "The AWS region to deploy resources"
  type        = string
  default     = "us-east-1"
}

variable "project_name" {
  description = "The name prefix for all resources"
  type        = string
  default     = "airbnb-cloud-project"
}
