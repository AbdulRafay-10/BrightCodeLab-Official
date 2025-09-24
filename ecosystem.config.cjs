module.exports = {
  apps: [
    {
      name: "Brightcodelab",
      script: "serve",
      args: ["-s", "dist", "-l", "3012"],
      cwd: "/root/applications/Brightcodelab/BrightCodeLab/react",
      env: {
        NODE_ENV: "production",
      },
    },
  ],
};
