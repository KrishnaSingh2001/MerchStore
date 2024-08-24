import { createSlice } from "@reduxjs/toolkit";
import { logout } from "./userRedux"; // Ensure the import path is correct

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      state.quantity += 1;
      state.products.push(action.payload);
      state.total += action.payload.price * action.payload.quantity;
    },
    resetCart: (state) => {
      state.products = [];
      state.quantity = 0;
      state.total = 0;
    },
    increaseQuantity: (state, action) => {
      const product = state.products.find(item => item._id === action.payload);
      if (product) {
        product.quantity += 1;
        state.total += product.price;
      }
    },
    decreaseQuantity: (state, action) => {
      const product = state.products.find(item => item._id === action.payload);
      if (product && product.quantity > 1) {
        product.quantity -= 1;
        state.total -= product.price;
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(logout, (state) => {
      state.products = [];
      state.quantity = 0;
      state.total = 0;
    });
  },
});

export const { addProduct, resetCart, increaseQuantity, decreaseQuantity } = cartSlice.actions;
export default cartSlice.reducer;


/*import { createSlice } from "@reduxjs/toolkit";
import { logout } from "./userRedux"; // Ensure the import path is correct

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      state.quantity += 1;
      state.products.push(action.payload);
      state.total += action.payload.price * action.payload.quantity;
    },
    resetCart: (state) => {
      state.products = [];
      state.quantity = 0;
      state.total = 0;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(logout, (state) => {
      state.products = [];
      state.quantity = 0;
      state.total = 0;
    });
  },
});

export const { addProduct, resetCart } = cartSlice.actions;
export default cartSlice.reducer;

/*
import { createSlice } from "@reduxjs/toolkit";
import { logout } from "./userREDUX";
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      state.quantity += 1;
      state.products.push(action.payload);
      state.total += action.payload.price * action.payload.quantity;
    },
    resetCart: (state) => {
      state.products = [];
      state.quantity = 0;
      state.total = 0;
    },
    // You can add more reducers here
    extraReducers: (builder) => {
      builder.addCase(logout, (state) => {
        state.products = [];
        state.quantity = 0;
        state.total = 0;
      });
  },}
});

export const { addProduct ,resetCart } = cartSlice.actions;
export default cartSlice.reducer; // Default export

*/