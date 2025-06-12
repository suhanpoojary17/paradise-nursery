import React from 'react';
import { useDispatch } from 'react-redux';
import { increment, decrement, removeItem } from '../redux/cartSlice';

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <div style={{ border: '1px solid gray', padding: '10px', margin: '10px' }}>
      <img src={item.image} alt={item.name} width="100" />
      <h3>{item.name}</h3>
      <p>Unit Price: ${item.price}</p>
      <p>Total: ${item.price * item.quantity}</p>
      <div>
        <button onClick={() => dispatch(decrement(item.id))}>-</button>
        <span style={{ margin: '0 10px' }}>{item.quantity}</span>
        <button onClick={() => dispatch(increment(item.id))}>+</button>
      </div>
      <button onClick={() => dispatch(removeItem(item.id))}>Delete</button>
    </div>
  );
};

export default CartItem;
