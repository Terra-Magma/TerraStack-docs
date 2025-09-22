module.exports = {
  apps: [
    {
      name: 'terrastack-docs',
      script: 'server.js',
      watch: '.',
      autorestart: true,
      ignore_watch: ['node_modules', 'out'],
      pre_reload: 'npm install && npm run build',
      post_update: 'npm install && npm run build',
      env: {
        NODE_ENV: 'production',
        PORT: 3000,
      },
    },
  ],
};
