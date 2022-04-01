import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';

import { useGetAllProductsQuery } from '../../redux/productApi';
import { addToCart } from '../../redux/cartSlice';
import './Home.css';

const Home = () => {
  const { data, error, isLoading } = useGetAllProductsQuery();
  const dispatch = useDispatch();
  const history = useHistory();
  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    history.push('/cart');
  };
  return (
    <div className='home-container'>
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>An Error Occured</p>
      ) : (
        <>
          <h2>Arrived</h2>
          <div className='products'>
            {data?.map((product) => (
              <div key={product.id} className='product'>
                <h3>{product.name}</h3>
                <img src={product.image} alt={product.name} />
                <div className='details'>
                  <span>{product.description}</span>
                  <span className='price'>${product.price}</span>
                </div>
                <button onClick={() => handleAddToCart(product)}>
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
