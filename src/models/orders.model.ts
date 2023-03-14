import { RowDataPacket } from 'mysql2';
import connection from './connection';
import { IOrders } from '../interfaces';

const getAll = async (): Promise<IOrders[]> => {
  const [orders] = await connection.execute<RowDataPacket[] & IOrders[]>(`
  SELECT orders.id, orders.user_id As userId, JSON_ARRAYAGG(products.id) AS productsIds 
  FROM Trybesmith.orders AS orders
  LEFT JOIN Trybesmith.products AS products ON orders.id = products.order_id
  GROUP BY orders.id`);

  return orders;
};

const orderModel = { getAll };

export default orderModel;
