import orderModel from '../models/orders.model';
import { IOrders } from '../interfaces';

const getAll = async (): Promise<IOrders[]> => {
  const orders = await orderModel.getAll();
  return orders;
};

const ordersService = { getAll };

export default ordersService;