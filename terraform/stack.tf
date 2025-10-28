resource "portainer_stack" "terrastack-docs" {
  name            = "terrastack-docs"
  deployment_type = "standalone"
  method          = "file"
  endpoint_id     = var.portainer_endpoint_id
  pull_image      = true
  stack_file_path = "${path.module}../docker-compose.yml"
}
