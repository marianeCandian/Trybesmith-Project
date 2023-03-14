import { Request, Response } from 'express';
import ordersService from '../services/order.service';

const getAllOrders = async (_req: Request, res: Response) => {
  const orders = await ordersService.getAll();
  return res.status(200).json(orders);
};

const orderController = { getAllOrders };

export default orderController;