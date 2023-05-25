import React from "react";
import { useDispatch } from "react-redux";
import {
  decreaseQty,
  increaseQty,
  removeItemes,
} from "../redux/features/productSlice";
import { useNavigate } from "react-router-dom";

const CartCard = ({ item }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <>
      <div className="flex h-full w-full justify-between gap-[5px] border-b-[1px] pb-[10px] md:w-fit">
        <div className="h-[80px] w-[80px]">
          <img
            onClick={() => navigate(`/products/${item.id}`)}
            src={item.image}
            className="h-full w-full cursor-pointer object-cover"
            alt=""
          />
        </div>{" "}
        <div className="w-[40%] md:w-[250px]">
          <h2
            onClick={() => navigate(`/products/${item.id}`)}
            className="cursor-pointer text-[16px] text-slate-600"
          >
            {item.title}
          </h2>
        </div>
        <div className="flex h-full max-w-[80px] justify-center gap-5">
          <div>
            <button
              onClick={() => {
                item.qty === 1
                  ? dispatch(removeItemes(item.id))
                  : dispatch(decreaseQty(item.id));
              }}
              className="flex h-[35px] w-[35px] items-center justify-center rounded-full border-[1px] p-[2px] text-center text-[35px] shadow-xl"
            >
              {"-"}
            </button>
          </div>
          <h2>{item?.qty}</h2>
          <div>
            <button
              onClick={() => dispatch(increaseQty(item.id))}
              className="flex h-[35px] w-[35px] items-center justify-center rounded-full border-[1px] p-[2px] text-center text-[18px] shadow-xl"
            >
              +
            </button>
          </div>
        </div>
        <div className="flex max-w-[120px] flex-col justify-between">
          <h2 className="ml-[20px] text-center text-slate-600">
            {"$ "}
            <span className="text-black">{item.price}</span>
          </h2>
          <h2
            onClick={() => dispatch(removeItemes(item.id))}
            className="cursor-pointer text-red-500"
          >
            Remove
          </h2>
        </div>
      </div>
    </>
  );
};

export default CartCard;
