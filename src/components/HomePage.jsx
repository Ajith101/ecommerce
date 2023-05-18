import React, { useEffect } from "react";
import Container from "./layout/Container";
import ProductCard from "./ProductCard/ProductCard";
import Loader from "./loader/Loader";
import Carousel from "./carousel/Carousel";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "./redux/features/productSlice";

const HomePage = () => {
  const { products, loading } = useSelector((state) => ({
    ...state.products,
  }));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  return (
    <>
      {loading && <Loader />}
      <Container>
        {!loading && <Carousel productList={products} />}
        <div className="min-h-[100vh] mb-[40px]">
          <div className="">
            <h2 className="text-[18px] mb-[25px]">FEATURED PRODUCTTS</h2>
            <div className="grid sm:grid-cols-3 grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-y-[5px] gap-x-[5px] sm:gap-x-[20px] sm:gap-y-[20px]">
              {products?.map((item) => {
                return <ProductCard item={item} key={item.id} />;
              })}
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default HomePage;
