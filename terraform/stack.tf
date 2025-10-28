resource "portainer_stack" "terrastack-docs" {
  name            = "terrastack-docs"
  deployment_type = "standalone"
  method          = "file"
  endpoint_id     = 1
  pull_image      = true
  stack_file_path = "../docker-compose.yml"
}
