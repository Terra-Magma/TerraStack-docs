module.exports = {
  apps: [
    {
      name: 'terrastack-docs',
      script: 'serve',
      autorestart: true,
      env: {
        PM2_SERVE_PATH: './out',
        PM2_SERVE_PORT: 3000,
      },
    },
  ],
};
