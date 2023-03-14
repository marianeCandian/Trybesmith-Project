import { Request, Response } from 'express';
import { IProducts } from '../interfaces';
import productsService from '../services/products.service';

const create = async (req:Request, res: Response) => {
  const product = req.body as IProducts;
  
  const data = await productsService.create(product);

  return res.status(201).json(data);
};

const productsController = { create };

export default productsController;