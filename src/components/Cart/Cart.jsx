import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { BsArrowLeftCircleFill } from 'react-icons/bs';
import { IconContext } from 'react-icons';

import './Cart.css';
import {
  decreaseQuantity,
  removeFromCart,
  addToCart,
  clearCart,
  subtotal,
} from '../../redux/cartSlice';

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(subtotal());
  }, [cart, dispatch]);

  const handleRemoveFromCart = (cartItem) => {
    dispatch(removeFromCart(cartItem));
  };

  const handleDecreaseQuantity = (cartItem) => {
    dispatch(decreaseQuantity(cartItem));
  };

  const handleIncreaseQuantity = (cartItem) => {
    dispatch(addToCart(cartItem));
  };

  const handleClearCart = (cartItem) => {
    dispatch(clearCart(cartItem));
  };
  return (
    <div className='cart-container'>
      <h2>Your Cart</h2>
      {cart.cartItems.length == 0 ? (
        <div className='cart-empty'>
          <p>Your Cart is Empty</p>
          <div>
            <Link to='/'>
              <IconContext.Provider value={{ className: 'lower-right-arrow' }}>
                <BsArrowLeftCircleFill />
              </IconContext.Provider>
              <span>Back to Shop page</span>
            </Link>
          </div>
        </div>
      ) : (
        <div>
          <div className='titles'>
            <h3 className='product-title'>Product</h3>
            <h3 className='price'>Price</h3>
            <h3 className='quantity'>Quantity</h3>
            <h3 className='total'>Total</h3>
            <h3 className='total'></h3>
          </div>
          <div className='cart-items'>
            {cart.cartItems?.map((cartItem) => (
              <div className='cart-item' key={cartItem.id}>
                <div className='cart-product'>
                  <img src={cartItem.image} alt={cartItem.name} />
                  <div>
                    <h3>{cartItem.name}</h3>
                    <h3>{cartItem.description}</h3>
                    <button onClick={() => handleRemoveFromCart(cartItem)}>
                      Remove
                    </button>
                  </div>
                </div>
                <div className='cart-produuct-price'>{cartItem.price}</div>
                <div className='cart-product-quantity'>
                  <button onClick={() => handleDecreaseQuantity(cartItem)}>
                    -
                  </button>
                  <div className='count'>{cartItem.cartQuantity}</div>
                  <button onClick={() => handleIncreaseQuantity(cartItem)}>
                    +
                  </button>
                </div>
                <div className='cart-product-total-price'>
                  ${cartItem.cartQuantity * cartItem.price}
                </div>
              </div>
            ))}
          </div>
          <div className='cart-summary'>
            <button className='clear-cart' onClick={() => handleClearCart()}>
              Clear Cart
            </button>
            <div className='cart-checkout'>
              <div className='subtotal'>
                <span>Subtotal</span>
                <span className='amount'>${cart.cartTotalAmount}</span>
              </div>
              <p>Taxes and Shipping are excluded</p>
              <button>Checkout</button>
              <div className='continue-shopping'>
                <Link to='/'>
                  <IconContext.Provider
                    value={{ className: 'lower-right-arrow' }}
                  >
                    <BsArrowLeftCircleFill />
                  </IconContext.Provider>

                  <span>Continue Shopping</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
