import UserModel from '../models/user.model';
import IUser from '../interfaces/IUser';
import newToken from '../utils/jwt.util';

export default class UserService {
  private userModel = new UserModel();
    
  public insertUser = async (user: IUser): Promise<string> => {
    await this.userModel.insertUser(user);
    return newToken(user);
  };
}