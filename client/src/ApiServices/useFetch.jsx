import axios from "axios";
import { useEffect, useState } from "react";

export const useFetch = (link) => {
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(true);

  const BASE_URL = "https://ecommerce-backend-new.vercel.app/";

  const getDatas = async () => {
    const response = await axios.get(`${BASE_URL}${link}`);
    setProductList(response.data);
    setLoading(false);
  };

  useEffect(() => {
    getDatas();
  }, []);

  return { productList, loading };
};
