module.exports = {
  apps: [
    {
      name: "portpolio",
      script: "node_modules/next/dist/bin/next",
      args: "start",
      env: {
        PORT: "3000",
      },
    },
  ],
};
