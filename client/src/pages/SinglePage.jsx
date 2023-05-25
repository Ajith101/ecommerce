import React from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../ApiServices/useFetch";
import Container from "../components/layout/Container";
import Loader from "../components/loader/Loader";
import { useDispatch } from "react-redux";
import { addToCart } from "../components/redux/features/productSlice";

const SinglePage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { productList, loading } = useFetch(`api/products/${id}`);

  return (
    <Container>
      <div className="my-[25px] flex min-h-[100vh] flex-col gap-[60px] md:flex-row">
        {loading ? (
          <Loader />
        ) : (
          <>
            {productList ? (
              <>
                <div className="flex h-[320px] w-full items-center justify-center md:h-[550px] md:w-[450px]">
                  <img
                    src={productList?.image}
                    className="h-full w-full object-contain"
                    alt=""
                  />
                </div>
                <div className="flex w-full flex-col gap-[20px] lg:w-[50%]">
                  <div className="flex flex-col gap-[5px]">
                    <h2 className="text-[16px] text-slate-400">
                      {productList?.category}
                    </h2>
                    <h2 className="text-[22px] font-[700] sm:text-[32px]">
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
                  <div className="flex items-center justify-start gap-2 md:gap-5">
                    <button className="cursor-pointer rounded-[4px] bg-sky-600 px-[30px] py-[10px] font-[600] text-white hover:opacity-80 lg:px-[60px]">
                      Buy Now
                    </button>
                    <button
                      onClick={() =>
                        dispatch(addToCart({ ...productList, qty: 1 }))
                      }
                      className="cursor-pointer rounded-[4px] bg-teal-600 px-[60px] py-[10px] font-[600] text-white hover:opacity-80"
                    >
                      Add To Cart
                    </button>
                  </div>
                </div>
              </>
            ) : (
              <div className="flex items-center justify-center text-[22px]">
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
