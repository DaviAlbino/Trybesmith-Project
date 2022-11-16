import { Router } from 'express';
import OrderController from '../controllers/orders.controller';

const orderRouter = Router();

const orderController = new OrderController();

orderRouter.get('/', orderController.findAllOrders.bind(orderController));

export default orderRouter;