import { Request, Response } from 'express';
import { IUser, ILogin } from '../interfaces';
import userService from '../services/user.service';

const createUser = async (req:Request, res:Response) => {
  const user = req.body as IUser;

  const token = await userService.create(user);

  return res.status(201).json({ token });
};

const login = async (req: Request, res: Response) => {
  const userCredentials = req.body as ILogin;
  const { status, data, error } = await userService.login(userCredentials);

  return error
    ? res.status(status).json(error)
    : res.status(status).json(data);
};

const userController = { createUser, login };

export default userController;