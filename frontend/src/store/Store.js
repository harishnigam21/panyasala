import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./slices/productSlice";
const myStore = configureStore({
  reducer: { product: productSlice },
});
export default myStore;
