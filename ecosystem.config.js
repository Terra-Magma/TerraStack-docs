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
      host: 'localhost',
      ref: 'origin/main',
      repo: 'git@github.com:terra-master/terrastack-docs.git',
      path: '/Users/sbarnes/Code/terrastack-test',
      'pre-deploy-local': '',
      'post-deploy': 'npm install && pm2 reload ecosystem.config.js --env production',
      'pre-setup': '',
    },
  },
};
