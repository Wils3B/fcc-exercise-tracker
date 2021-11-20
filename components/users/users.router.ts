import { Router } from 'express';
import UsersController from './users.controller';

const UsersRouter = Router();

UsersRouter.post('/', UsersController.create);
UsersRouter.get('/', UsersController.findAll);
UsersRouter.post('/:id/exercises', UsersController.addExercise);

export default UsersRouter;
