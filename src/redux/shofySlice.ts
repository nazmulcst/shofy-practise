import { createSlice } from "@reduxjs/toolkit";
import { ProductType } from "../../type";
import toast from "react-hot-toast";

interface InitialState {
  cart: ProductType[];
  userInfo: any;
}

const initialState: InitialState = {
  cart: [],
  userInfo: null,
};

export const shofySlice = createSlice({
  name: "shopy",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingProduct = state.cart.find(
        (item) => item?.id === action?.payload?.id
      );
      if (existingProduct) {
        existingProduct.quantity! += 1;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },
    increaseQuantity: (state, action) => {
      const existingProduct = state.cart.find(
        (item) => item?.id === action?.payload
      );
      if (existingProduct) {
        existingProduct.quantity! += 1;
      }
    },
    decreaseQuantity: (state, action) => {
      const existingProduct = state.cart.find(
        (item) => item?.id === action?.payload
      );
      if (existingProduct) {
        existingProduct.quantity! -= 1;
      }
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item?.id !== action.payload);
    },
    addUser: (state, action) => {
      state.userInfo = action.payload;
    },
    removeUser: (state) => {
      state.userInfo = null;
    },
  },
});

export const {
  addToCart,
  addUser,
  removeUser,
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
} = shofySlice.actions;
export default shofySlice.reducer;
