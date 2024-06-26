import jwt, { SignOptions } from 'jsonwebtoken';
import { ILogin, IUser } from '../interfaces';
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

const generateToken = (payload: ILogin) => jwt.sign(payload, JWT_SECRET, JWT_CONFIG);

const login = async (user: ILogin) => {
  const users = await userModel.login(user);
  if (users.length === 0 || users[0].password !== user.password) {
    return { status: 401, error: { message: 'Username or password invalid' } };
  }
  const { username, password } = user;
  const payload = { username, password };
  const token = generateToken(payload);
  return { status: 200, data: { token } };
};

const userService = { create, login };

export default userService;