import axios from "axios";

const API = axios.create({ baseURL: "https://fakestoreapi.com" });

export const allProducts = () => API.get("/products");
