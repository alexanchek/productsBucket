import { FC } from 'react';
import Product from '../Product/Product';
import { IProductsProps } from './Products.interface';

const Products: FC<IProductsProps> = ({ products }) => {
  return (
    <div className='container mx-auto max-w-2xl pt-5'>
      {products.length > 0 &&
        <>
          {
            products.map(product => (
              <Product key={product.id} product={product}/>
            ))
          }
        </>
      }
    </div>
  );
};

export default Products;