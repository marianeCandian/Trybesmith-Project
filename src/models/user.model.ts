import { ResultSetHeader } from 'mysql2';

import connection from './connection';
import { IUser } from '../interfaces';

const create = async (user: IUser) => {
  const { username, vocation, level, password } = user;

  const query = `
    INSERT INTO Trybesmith.users (username, vocation, level, password ) VALUES (?, ?, ?, ?)`;
  const values = [username, vocation, level, password];
  
  const [rows] = await connection.execute<ResultSetHeader>(query, values);

  return rows;
};

const userModel = { create };

export default userModel;