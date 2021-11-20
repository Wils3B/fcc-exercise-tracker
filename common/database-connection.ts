import mongoose, { ConnectOptions } from 'mongoose';
import config from '../config';

const connectToDatabase = () => {
  const options: ConnectOptions = {
    autoIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };
  return mongoose
    .connect(config.database.url, options)
    .then((db) => {
      console.info('Successfully connection to the database');

      const { connection } = db;
      connection.on('error', (err) => {
        console.error('error with mongoose connection', err);
      });

      connection.on('disconnected', () => {
        console.info('Database Connection Disconnected');
      });

      process.on('SIGINT', () => {
        connection.close(() => {
          console.info('Connection to mongo db closed');
        });
      });
    })
    .catch((err) => {
      console.error('Unable to connect to the database');
      console.error(err);
      throw err;
    });
};

export default connectToDatabase;
