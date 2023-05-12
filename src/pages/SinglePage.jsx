import React from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../ApiServices/useFetch";
import Container from "../components/layout/Container";
import Loader from "../components/loader/Loader";

const SinglePage = () => {
  const { id } = useParams();
  const { productList, loading } = useFetch(`/products/${id}`);

  return (
    <Container>
      <div className="min-h-[100vh] my-[25px] flex flex-col md:flex-row gap-[60px]">
        {loading ? (
          <Loader />
        ) : (
          <>
            {productList ? (
              <>
                <div className="md:w-[450px] w-full h-[320px] flex justify-center items-center md:h-[550px]">
                  <img
                    src={productList?.image}
                    className="w-full h-full object-contain"
                    alt=""
                  />
                </div>
                <div className="flex flex-col gap-[20px] w-full lg:w-[50%]">
                  <div className="flex flex-col gap-[5px]">
                    <h2 className="text-[16px] text-slate-400">
                      {productList?.category}
                    </h2>
                    <h2 className="sm:text-[32px] text-[22px] font-[700]">
                      {productList?.title}
                    </h2>
                  </div>
                  <div>
                    <h2 className="text-[16px] font-[600]">
                      {"$ "}{" "}
                      <span className="text-red-500">{productList?.price}</span>
                    </h2>
                    <h2 className="text-[16px] font-[400]">
                      Rating {": "}
                      <span className="font-[700]">
                        {productList?.rating?.rate}
                      </span>
                    </h2>
                  </div>
                  <h2 className="text-[16px] font-[400] text-slate-500">
                    {productList?.description}
                  </h2>
                  <h2 className="text-[16px] font-[400]">
                    Quantity :{" "}
                    <span className="font-[700]">
                      {productList?.rating?.count} nos
                    </span>
                  </h2>
                  <div className="flex justify-start items-center gap-2 md:gap-5">
                    <button className="bg-sky-600 hover:opacity-80 cursor-pointer text-white px-[30px] lg:px-[60px] py-[10px] rounded-[4px] font-[600]">
                      Buy Now
                    </button>
                    <button className="bg-teal-600 hover:opacity-80 cursor-pointer text-white px-[60px] py-[10px] rounded-[4px] font-[600]">
                      Add To Cart
                    </button>
                  </div>
                </div>
              </>
            ) : (
              <div className="flex justify-center items-center text-[22px]">
                No Itemes Found
              </div>
            )}
          </>
        )}
      </div>
    </Container>
  );
};

export default SinglePage;
