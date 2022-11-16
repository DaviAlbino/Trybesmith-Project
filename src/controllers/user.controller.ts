import { Request, Response } from 'express';
import UserService from '../services/user.service';

export default class UserController {
  private userService = new UserService();

  public insertUser = async (req: Request, res: Response) => {
    const user = req.body;
    const token = await this.userService.insertUser(user);
    res.status(201).json({ token });
  };
}