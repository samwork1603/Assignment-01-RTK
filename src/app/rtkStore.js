import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../features/cartSlice';

const store = configureStore({
  reducer: {
    cartReducer: cartReducer, 
  },
});

export default store;
