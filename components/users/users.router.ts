import { Router } from 'express';
import UsersController from './users.controller';

const UsersRouter = Router();

UsersRouter.post('/', UsersController.create);
UsersRouter.get('/', UsersController.findAll);

export default UsersRouter;
