import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { ObjectId } from "mongodb";

export const fetchUser = createAsyncThunk(
  "/users/getUserData",
  async (thunkApi) => {
    const response = await fetch(
      "https://tiny-moxie-58820c.netlify.app/api/checkUserLoggedIn",
      { method: "GET", credentials: "include" }
    );
    const data = await response.json();
    return data.user;
  }
);

const initialState = {
  name: String,
  email: String,
  cart: [],
  wishlist: [],
  _id: String,
} as any;

interface CartItem {
  title: string;
  image: string;
  originalPrice: number;
  finalPrice: number;
  discount: number;
  _id: string;
}

const userSlice = createSlice({
  name: "userData",
  initialState,
  reducers: {
    addToCart(state, action) { 
      state.cart.push(action.payload);
    },
    removeFromCart(state, action) {
      const updatedCart = state.cart.filter(
        (item: CartItem) => item._id !== action.payload
      );
      return {
        ...state,
        cart: updatedCart,
      };
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      return { ...state, ...action.payload };
    });
  },
});

export const { addToCart, removeFromCart } = userSlice.actions;
export default userSlice.reducer;
