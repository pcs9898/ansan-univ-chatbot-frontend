module.exports = {
  apps: [
    {
      name: "ansan-univ-chatbot-frontend",
      script: "node_modules/next/dist/bin/next",
      autorestart: true,
      args: "start",
      env: {
        NODE_ENV: "production",
      },
    },
  ],
};
