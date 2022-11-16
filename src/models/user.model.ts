import { ResultSetHeader } from 'mysql2/promise';
import IUser from '../interfaces/IUser';
import mysql from './connection';

export default class UserModel {
  private connection = mysql;

  public insertUser = async (user: IUser): Promise<void> => {
    const { username, classe, level, password } = user;
    await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Users (username, classe, level, password) VALUES (?, ?, ?, ?)',
      [username, classe, level, password],
    );
  };
}