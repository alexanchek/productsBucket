import axios from "axios";
import { IProduct } from "../interfaces/Product.interface";

export const productService = {
  getProducts: async(): Promise<IProduct[]> => {
    try {
      const { data } = await axios.get('https://fakestoreapi.com/products');
      return data;
    } catch (e: any) {
      throw new Error(e);
    }
  }
}