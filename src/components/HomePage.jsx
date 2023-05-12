import React from "react";
import Container from "./layout/Container";
import { useFetch } from "../ApiServices/useFetch";
import ProductCard from "./ProductCard/ProductCard";
import Loader from "./loader/Loader";
import Carousel from "./carousel/Carousel";

const HomePage = () => {
  const { productList, loading } = useFetch("/products");

  return (
    <>
      {loading && <Loader />}
      <Container>
        {!loading && <Carousel productList={productList} />}
        <div className="min-h-[100vh] mb-[40px]">
          <div className="">
            <h2 className="text-[18px] mb-[25px]">FEATURED PRODUCTTS</h2>
            <div className="grid sm:grid-cols-3 grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-y-[5px] gap-x-[5px] sm:gap-x-[20px] sm:gap-y-[20px]">
              {productList?.map((item) => {
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
