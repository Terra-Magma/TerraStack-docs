resource "portainer_stack" "terrastack-docs" {
  name            = "terrastack-docs"
  deployment_type = "standalone"
  method          = "file"
  endpoint_id     = portainer_environment.terramagma-web-host.id
  pull_image      = true
  stack_file_path = "${path.module}/../docker-compose.yml"
}
