import jwt, { SignOptions } from 'jsonwebtoken';
import { IUser } from '../interfaces';
import userModel from '../models/user.model';

const JWT_SECRET = process.env.JWT_SECRET || 'Trybe';

const JWT_CONFIG: SignOptions = {
  algorithm: 'HS256',
  expiresIn: '7d',
};

const create = async (user: IUser) => {
  const { username, vocation, level } = user;
  await userModel.create(user);
  const payload = { username, vocation, level };
  // console.log(payload);
  const token = jwt.sign(payload, JWT_SECRET, JWT_CONFIG);
  return token;
};

const userService = { create };

export default userService;