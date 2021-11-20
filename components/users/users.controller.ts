import { Request, Response } from 'express';
import UsersService from './users.service';

const UsersController = {
  async create(req: Request, res: Response) {
    try {
      console.log(req.body);
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
};

export default UsersController;
