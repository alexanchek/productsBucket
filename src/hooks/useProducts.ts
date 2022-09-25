import { useEffect, useState } from "react";
import { IProduct } from "../interfaces/Product.interface";
import { productService } from "../services/productService";

const useProducts = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const getProducts = async () => {
      try {
        setError('');
        setLoading(true);
        const data = await productService.getProducts();
        setProducts(data);
        setLoading(false);
      } catch (e) {
        console.log(e);
        setProducts([]);
        setLoading(false);
        setError('');
      } 
    };

    getProducts();
  }, []);

  return { products, loading, error }
}

export { useProducts };