module.exports = {
  apps: [
    {
      name: 'terrastack-docs',
      script: 'server.js',
      watch: '.',
    },
  ],

  deploy: {
    production: {
      user: 'SSH_USERNAME',
      host: 'SSH_HOSTMACHINE',
      ref: 'origin/main',
      repo: 'git@github.com:terra-master/terrastack-docs.git',
      path: 'C:/inetpub/TerraMagma',
      'pre-deploy-local': '',
      'post-deploy': 'npm install && pm2 reload ecosystem.config.js --env production',
      'pre-setup': '',
    },
  },
};
