import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice'; // Adjust the path if needed

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
