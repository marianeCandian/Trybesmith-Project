import { IProducts } from '../interfaces';
import productsModel from '../models/products.model';

const getAll = async (): Promise<IProducts[]> => {
  const products = await productsModel.getAll();
  return products;
};

const create = async (product: IProducts): Promise<IProducts> => {
  const data = await productsModel.create(product);
  return data;
};

const productsService = { getAll, create };

export default productsService;