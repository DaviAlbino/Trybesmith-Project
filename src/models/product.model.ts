import { ResultSetHeader } from 'mysql2';
import mysql from './connection';
import { IProduct } from '../interfaces/IProduct';

export default class ProductModel {
  private connection = mysql;

  public insert = async (name: string, amount: string): Promise<IProduct> => {
    const [result] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?)',
      [name, amount],
    );

    const { insertId } = result;
    return { id: insertId, name, amount };
  };
}