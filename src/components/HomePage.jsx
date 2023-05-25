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
        <div className="mb-[40px] min-h-[100vh]">
          <div className="">
            <h2 className="mb-[25px] text-[18px]">FEATURED PRODUCTTS</h2>
            <div className="grid grid-cols-2 gap-x-[5px] gap-y-[5px] sm:grid-cols-3 sm:gap-x-[20px] sm:gap-y-[20px] md:grid-cols-4 lg:grid-cols-5">
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
