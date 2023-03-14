import { NextFunction, Request, Response } from 'express';

import { IUser } from '../interfaces';

const validateLogin = (req:Request, res:Response, next:NextFunction) => {
  const { username, password } = req.body as IUser;
  if (!username) {
    return res.status(400).json({ message: '"username" is required' });
  }
  if (!password) {
    return res.status(400).json({ message: '"password" is required' });
  }
  return next();
};

export default validateLogin;