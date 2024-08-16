import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

export const cartSlice = createSlice({
  name: "cartReducer",
  initialState,
  reducers: {
    addCart: (state, action) => {
      const { outletName, item } = action.payload;
      const cartItem = { ...item, id: `${outletName}-${item.id}` };
      
      
      const existingItem = state.cart.find((check) => check.id === cartItem.id);
      
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cart.push({ ...cartItem, quantity: 1 });
      }
    },

    removeCart: (state, action) => {
      const { outletName, item } = action.payload;
      const cartItemId = `${outletName}-${item.id}`;
      
      const existingItem = state.cart.find((check) => check.id === cartItemId);
      
      if (existingItem) {
        if (existingItem.quantity > 1) {
          existingItem.quantity -= 1;
        } else {
          state.cart = state.cart.filter((check) => check.id !== cartItemId);
        }
      }
    },
  },
});

export const { addCart, removeCart } = cartSlice.actions;
export default cartSlice.reducer;
