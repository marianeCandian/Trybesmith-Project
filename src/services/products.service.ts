import { IProducts } from '../interfaces';
import productsModel from '../models/products.model';

const create = async (product: IProducts): Promise<IProducts> => {
  const data = await productsModel.create(product);
  return data;
};

const productsService = { create };

export default productsService;