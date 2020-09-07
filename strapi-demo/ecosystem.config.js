module.exports = {
  apps: [
    {
      name: 'app',
      script: 'npm',
      args: 'start',
      env: {
        NODE_ENV: 'production',
        DATABASE_HOST: 'localhost', // database Endpoint under 'Connectivity & Security' tab
        DATABASE_PORT: '27017',
        DATABASE_NAME: 'strapi', // DB name under 'Configuration' tab
        DATABASE_USERNAME: 'strapi', // default username
        DATABASE_PASSWORD: 'strapi',
      },
    },
  ],
};
