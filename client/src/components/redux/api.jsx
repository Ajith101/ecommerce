import axios from "axios";

const API = axios.create({
  baseURL: "https://ecommerce-backend-new.vercel.app/",
});

export const allProducts = () => API.get("api/products");
