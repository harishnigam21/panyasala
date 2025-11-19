import { createSlice } from "@reduxjs/toolkit";
import { FetchData } from "../../assets/hooks/useFetch";
const getProduct = async () => {
  const data = await FetchData("https://dummyjson.com/products", "GET");
  return data.products;
};
const productSlice = createSlice({
  name: "products",
  initialState: {
    products: await getProduct(),
  },
  reducers: {
    addProduct: (state, action) => {
      state.products.push(action.payload);
    },
  },
});
export const { addProduct } = productSlice.actions;
export default productSlice.reducer;
