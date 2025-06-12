import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, increaseQuantity, decreaseQuantity } from '../redux/cartSlice';
import { Link } from 'react-router-dom';

const CartPage = () => {
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const totalCost = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cart.map(item => (
        <div key={item.id} className="cart-item">
          <img src={item.image} alt={item.name} />
          <h3>{item.name}</h3>
          <p>Unit Price: ${item.price}</p>
          <p>Total: ${item.price * item.quantity}</p>
          <div>
            <button onClick={() => dispatch(decreaseQuantity(item.id))}>-</button>
            <span> {item.quantity} </span>
            <button onClick={() => dispatch(increaseQuantity(item.id))}>+</button>
            <button onClick={() => dispatch(removeFromCart(item.id))}>Delete</button>
          </div>
        </div>
      ))}
      <h3>Total Cost: ${totalCost}</h3>
      <Link to="/products"><button>Continue Shopping</button></Link>
      <button>Checkout</button>
    </div>
  );
};

export default CartPage;
