import React from 'react';
import products from '../data/products';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';

const ProductsPage = () => {
  const dispatch = useDispatch();

  return (
    <div className="products">
      {products.map(product => (
        <div key={product.id} className="product-card">
          <img src={product.image} alt={product.name} />
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <p>${product.price}</p>
          <button onClick={() => dispatch(addToCart(product))}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default ProductsPage;
