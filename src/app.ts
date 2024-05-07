import express from 'express';
import orderController from './controllers/order.controller';
import productsController from './controllers/products.controller';
import userController from './controllers/user.controller';
import { validateLogin,
  validateUserName,
  validatePassword, validateLevel, validateVocation } from './middlewares/userMiddleware';
import { validateProductName, validateProductAmount } from './middlewares/productsMiddleware';

const app = express();

app.use(express.json());

app.post('/products', validateProductName, validateProductAmount, productsController.create);
app.get('/orders', orderController.getAllOrders);
app.post('/orders');
app.get('/products', productsController.getAllProducts);
app.post(
  '/users',
  validateUserName,
  validateVocation,
  validateLevel,
  validatePassword,
  userController.createUser,
);
app.post('/login', validateLogin, userController.login);

export default app;
