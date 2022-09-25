import { FC, MouseEvent, useState } from "react";
import { IProductProps } from "./Product.interface";

const Product: FC<IProductProps> = ({ product }) => {
  const [showDetails, setShowDetails ] = useState<boolean>(false);

  const btnClassName = !showDetails ? 'bg-yellow-400' : 'bg-blue-400';

  const onClick = () => {
    setShowDetails(!showDetails);
  }

  return (
    <div
      className='border py-2 px-4 rounded flex flex-col items-center mb-2'
    >
      <img src={product.image} className="w-1/6" alt={product.title}/>
      <p>{product.title}</p>
      <p className="font-bold">{product.price}</p>
      <button
        className={`py-2 px-4 border ${btnClassName}`}
        onClick={onClick}
      >{ !showDetails ? 'Show' : 'Hide' } Detalis</button>

    { showDetails &&
    <div>
      {product.description}  
    </div>}

    </div>
  );
};

export default Product;