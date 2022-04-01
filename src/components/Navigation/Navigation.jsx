import { Link } from 'react-router-dom';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { IconContext } from 'react-icons';
import { useSelector } from 'react-redux';

import './/Navigation.css';

const Navigation = () => {
  const { cartTotalQuantity } = useSelector((state) => state.cart);

  return (
    <nav className='nav-bar'>
      <Link to='/'>
        <h2>React-Redux-Shop</h2>
      </Link>
      <Link to='/cart'>
        <div className='nav-bag'>
          <IconContext.Provider value={{ className: 'cart-icon' }}>
            <AiOutlineShoppingCart />
          </IconContext.Provider>
          <div className='bag-quantity'>
            <span>{cartTotalQuantity}</span>
          </div>
        </div>
      </Link>
    </nav>
  );
};

export default Navigation;
