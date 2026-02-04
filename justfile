set dotenv-load := true

[working-directory('terraform')]
terraform action:
    @echo "Running terraform plan..."
    terraform {{ action }} -var="gcp_project_id=$GCP_PROJECT_ID" -var="github_registry_access_token=$GITHUB_REGISTRY_ACCESS_TOKEN"
