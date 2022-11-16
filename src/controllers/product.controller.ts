import { Request, Response } from 'express';
import ProductService from '../services/product.service';

export default class ProductController {
  private productService = new ProductService();

  public insert = async (req: Request, res: Response) => {
    const { name, amount } = req.body;
    const insertNewId = await this.productService.insert(name, amount);
    res.status(201).json(insertNewId);
  };

  public findAll = async (_req: Request, res: Response) => {
    const result = await this.productService.findAll();
    res.status(200).json(result);
  };
}