variable "portainer_url" {
  type = string
}

variable "portainer_api_key" {
  type      = string
  sensitive = true
}

variable "github_registry_username" {
  type = string
}

variable "github_registry_access_token" {
  type      = string
  sensitive = true
}

variable "portainer_endpoint_id" {
  type        = number
  description = "Portainer endpoint ID for stack deployment"
  default     = 1
}
