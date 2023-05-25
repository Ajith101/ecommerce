import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as api from "../api";

export const getAllProducts = createAsyncThunk(
  "products/getAllProducts",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.allProducts();
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const LocalStorageItemes = () => {
  const localCartItemes = localStorage.getItem("cartItemes");
  if (localCartItemes) {
    return JSON.parse(localStorage.getItem("cartItemes"));
  } else {
    return [];
  }
};

const products = createSlice({
  name: "products",
  initialState: {
    loading: false,
    products: [],
    cartItemes: LocalStorageItemes(),
    error: "",
  },
  reducers: {
    addToCart: (state, action) => {
      const checkItemExist = state.cartItemes.some(
        (itemes) => itemes.id === action.payload.id
      );
      if (checkItemExist) {
        return state;
      }
      state.cartItemes = [...state.cartItemes, action.payload];
      localStorage.setItem("cartItemes", JSON.stringify([...state.cartItemes]));
    },
    increaseQty: (state, action) => {
      const newList = [...state.cartItemes];
      newList.forEach((item) => {
        item.id === action.payload ? { ...item, qty: item.qty++ } : item;
      });
      localStorage.setItem("cartItemes", JSON.stringify([...state.cartItemes]));
    },
    decreaseQty: (state, action) => {
      const newList = [...state.cartItemes];

      newList.forEach((item) => {
        item.id === action.payload
          ? { ...item, qty: item.qty === 1 ? 1 : item.qty-- }
          : item;
      });
      localStorage.setItem("cartItemes", JSON.stringify([...state.cartItemes]));
    },
    removeItemes: (state, action) => {
      state.cartItemes = [
        ...state.cartItemes.filter((item) => item.id !== action.payload),
      ];
      localStorage.setItem("cartItemes", JSON.stringify([...state.cartItemes]));
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllProducts.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getAllProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(getAllProducts.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

export const { addToCart, increaseQty, decreaseQty, removeItemes } =
  products.actions;
export default products.reducer;
