import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    
    removeItem: (state, action) => {
      state.cartItems = state.cartItems.filter((_, index) => index !== action.payload);
    },
    
    addToCart: (state, action) => {
      const itemExists = state.cartItems.find(item => item.id === action.payload.id);
      if (itemExists) {
        itemExists.quantity += 1; 
      } else {
        state.cartItems.push({ ...action.payload, quantity: 1 });
      }
    },
  },
});

export const { addToCart, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
