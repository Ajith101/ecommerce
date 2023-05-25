import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../redux/features/productSlice";

const ProductCard = ({ item }) => {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  return (
    <div className="flex items-center relative flex-col justify-between p-[10px] shadow-md sm:shadow-new rounded-[4px]">
      <div className="h-[150px] sm:h-[200px]">
        <img
          src={item.image}
          onClick={() => navigate(`/products/${item.id}`)}
          className="w-full h-full object-cover cursor-pointer"
          alt=""
        />
      </div>
      <div className="py-[8px] flex flex-col gap-[4px]">
        <h2
          className="cursor-pointer"
          onClick={() => navigate(`/products/${item.id}`)}
        >
          {item.title}
        </h2>
        <h2 className="text-center">
          {"$ "}
          <span className="text-red-500">{item.price}</span>
        </h2>
      </div>
      <div className="">
        <button
          onClick={() => dispatch(addToCart({ ...item, qty: 1 }))}
          className="rounded-[4px] border-[2px] border-slate-400 px-[20px] py-[5px]"
        >
          Add To Cart
        </button>
      </div>

      <div className="absolute top-2 left-2 rounded-[50%] w-[30px] h-[30px] flex items-center justify-center text-[13px] font-[400] text-white bg-pink-500">
        {item.rating.count}
      </div>
    </div>
  );
};

export default ProductCard;
