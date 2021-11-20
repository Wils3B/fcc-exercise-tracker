import { Router } from 'express';
import UsersController from './users.controller';

const UsersRouter = Router();

UsersRouter.post('/', UsersController.create);
UsersRouter.get('/', UsersController.findAll);
UsersRouter.post('/:id/exercises', UsersController.addExercise);
UsersRouter.get('/:id/logs', UsersController.findUser);

export default UsersRouter;
