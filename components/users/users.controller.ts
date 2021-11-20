import { Request, Response } from 'express';
import UsersService from './users.service';

const UsersController = {
  async create(req: Request, res: Response) {
    try {
      const userCreated = await UsersService.create(req.body);
      res.json(userCreated);
    } catch (e: any) {
      res.json({ error: e.message });
    }
  },
  async findAll(req: Request, res: Response) {
    try {
      const users = await UsersService.findAll();
      res.json(users);
    } catch (e: any) {
      res.json({ error: e.message });
    }
  },
  async addExercise(req: Request, res: Response) {
    try {
      const userUpdated = await UsersService.addExercise(req.params.id, req.body);
      res.json(userUpdated);
    } catch (e: any) {
      res.json({ error: e.message });
    }
  },
  async findUser(req: Request, res: Response) {
    try {
      const user = await UsersService.findUser(req.params.id);
      res.json(user);
    } catch (e: any) {
      res.json({ error: e.message });
    }
  },
};

export default UsersController;
