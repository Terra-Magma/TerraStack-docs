module.exports = {
  apps: [
    {
      name: 'terrastack-docs',
      script: 'serve',
      watch: ['.'],
      autorestart: true,
      ignore_watch: ['node_modules', 'out'],
      post_update: ['npm install', 'npm run build'],
      env: {
        PM2_SERVE_PATH: '.',
        PM2_SERVE_PORT: 3000,
      },
    },
  ],
};
