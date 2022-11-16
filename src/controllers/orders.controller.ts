import { Request, Response } from 'express';
import OrderService from '../services/orders.service';

export default class OrderController {
  private orderService = new OrderService();

  public findAllOrders = async (req: Request, res: Response) => {
    const result = await this.orderService.findAllOrders();
    res.status(200).json(result);
  };
}