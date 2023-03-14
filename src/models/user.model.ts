import { ResultSetHeader, RowDataPacket } from 'mysql2';

import connection from './connection';
import { IUser, ILogin } from '../interfaces';

const create = async (user: IUser) => {
  const { username, vocation, level, password } = user;

  const query = `
    INSERT INTO Trybesmith.users (username, vocation, level, password ) VALUES (?, ?, ?, ?)`;
  const values = [username, vocation, level, password];
  
  await connection.execute<ResultSetHeader>(query, values);
};

const login = async (user: ILogin): Promise<IUser[]> => {
  const { username } = user;

  const [rows] = await connection.execute<RowDataPacket[] & IUser[]>(`
    SELECT * FROM Trybesmith.users WHERE username = ?`, [username]);
  return rows;
};

const userModel = { create, login };

export default userModel;