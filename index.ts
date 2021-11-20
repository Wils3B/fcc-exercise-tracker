import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import config from './config';
import UsersRouter from './components/users/users.router';
import connectToDatabase from './common/database-connection';

async function bootstrap() {
  const app = express();

  await connectToDatabase();

  app.use(cors());
  app.use(morgan(config.app.isProd ? 'common' : 'dev'));
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());

  app.get('/', (req, res) => {
    res.send({ success: true, message: 'Welcome' });
  });

  app.use('/api/users', UsersRouter);

  app.listen(config.app.port, () => {
    console.log('⚡️[server]: Server is running');
  });
}

bootstrap();
