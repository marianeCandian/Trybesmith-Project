import { Request, Response } from 'express';
import { IProducts } from '../interfaces';
import productsService from '../services/products.service';

const getAllProducts = async (req:Request, res: Response) => {
  const products = await productsService.getAll();
  return res.status(200).json(products);
};

const create = async (req:Request, res: Response) => {
  const product = req.body as IProducts;
  
  const data = await productsService.create(product);

  return res.status(201).json(data);
};

const productsController = { getAllProducts, create };

export default productsController;