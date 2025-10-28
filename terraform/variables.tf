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

variable "terramagma_local_ip" {
  type        = string
  description = "Local IP address of the Terramagma host"
}

variable "postgres_connection_string" {
  type        = string
  description = "Connection string for the PostgreSQL backend"
}
