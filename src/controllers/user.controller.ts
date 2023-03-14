import { Request, Response } from 'express';
import { IUser } from '../interfaces';
import userService from '../services/user.service';

const createUser = async (req:Request, res:Response) => {
  const user = req.body as IUser;

  const token = await userService.create(user);

  return res.status(201).json({ token });
};

const userController = { createUser };

export default userController;