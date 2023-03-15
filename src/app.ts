import express from 'express';
import orderController from './controllers/order.controller';
import productsController from './controllers/products.controller';
import userController from './controllers/user.controller';
import validateLogin from './middlewares/userMiddleware';
import { validateProductName, validateProductAmount } from './middlewares/productsMiddleware';

const app = express();

app.use(express.json());

app.post('/products', validateProductName, validateProductAmount, productsController.create);
app.get('/orders', orderController.getAllOrders);
app.get('/products', productsController.getAllProducts);
app.post('/users', userController.createUser);
app.post('/login', validateLogin, userController.login);

export default app;
