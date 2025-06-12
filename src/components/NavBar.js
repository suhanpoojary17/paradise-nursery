import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const totalQuantity = useSelector((state) =>
    state.cart.cartItems.reduce((total, item) => total + item.quantity, 0)
  );

  return (
    <nav>
      <Link to="/">Home</Link> | 
      <Link to="/products">Products</Link> | 
      <Link to="/cart">Cart ({totalQuantity})</Link>
    </nav>
  );
}

export default Navbar;
