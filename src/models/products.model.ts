import { ResultSetHeader, RowDataPacket } from 'mysql2';

import connection from './connection';
import { IProducts } from '../interfaces';

const getAll = async (): Promise<IProducts[]> => {
  const [products] = await connection.execute<RowDataPacket[] & IProducts[]>(`
  SELECT * FROM Trybesmith.products`);

  return products;
};

const create = async (product: IProducts): Promise<IProducts> => {
  const { name, amount } = product;

  const query = 'INSERT INTO Trybesmith.products (name, amount) VALUES (?, ?)';
  const values = [name, amount];
  
  const [result] = await connection.execute<ResultSetHeader>(query, values);
  const { insertId: id } = result;

  const newPorduct: IProducts = { id, name, amount };
  return newPorduct;
};

const productsModel = { getAll, create };

export default productsModel;