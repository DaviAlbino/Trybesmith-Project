import { IProduct } from '../interfaces/IProduct';
import ProductModel from '../models/product.model';

export default class ProductService {
  public productModel = new ProductModel();

  public insert = async (name: string, amount: string): Promise<IProduct> => {
    const result = await this.productModel.insert(name, amount);
    return result;
  };
}
