import { configureStore } from '@reduxjs/toolkit';

import productReducer from './productSlice';
import { productsApi } from './productApi';
import cartReducer from './cartSlice';

export const store = configureStore({
  reducer: {
    products: productReducer,
    cart: cartReducer,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(productsApi.middleware);
  },
});
