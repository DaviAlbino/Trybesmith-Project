import { RowDataPacket } from 'mysql2';
import IOrder from '../interfaces/IOrders';
import mysql from './connection';

export default class OrderModel {
  private connection = mysql;

  public findAllOrders = async (): Promise<IOrder[]> => {
    const [result] = await this.connection.execute<IOrder[] & RowDataPacket[]>(
      `SELECT Ord.id, Ord.userId, JSON_ARRAYAGG(Pr.id) as 'productsIds'
       FROM Trybesmith.Orders AS Ord
       INNER JOIN Trybesmith.Products AS Pr
       ON Pr.orderId = Ord.id
       GROUP BY Ord.id`,
    );
    return result;
  };
}