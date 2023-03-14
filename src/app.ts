import express from 'express';
import productsController from './controllers/products.controller';
import userController from './controllers/user.controller';

const app = express();

app.use(express.json());

app.post('/products', productsController.create);
app.get('/products', productsController.getAllProducts);
app.post('/users', userController.createUser);

export default app;
