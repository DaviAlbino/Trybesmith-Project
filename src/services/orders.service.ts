import IOrder from '../interfaces/IOrders';
import OrderModel from '../models/order.model';

export default class OrderService {
  private orderModel = new OrderModel();

  public findAllOrders = async (): Promise<IOrder[]> => {
    const result = await this.orderModel.findAllOrders();
    return result;
  };
}