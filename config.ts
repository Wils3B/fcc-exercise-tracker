require('dotenv').config();

export default {
  app: {
    port: process.env.PORT ? parseInt(process.env.PORT, 10) : 8081,
    isDev: process.env.NODE_ENV === 'development',
    isProd: process.env.NODE_ENV === 'production',
  },
  database: {
    url: process.env.DATABASE_URL || 'mongodb://localhost:27017/exerciseTracker',
  },
};
