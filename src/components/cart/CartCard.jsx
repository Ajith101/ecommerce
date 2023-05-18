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
      <div className="flex w-full h-full border-b-[1px] pb-[10px] gap-3">
        <div className="w-[80px] h-[80px]">
          <img
            onClick={() => navigate(`/products/${item.id}`)}
            src={item.image}
            className="w-full h-full object-cover cursor-pointer"
            alt=""
          />
        </div>{" "}
        <div className="min-w-[250px] w-[250px]">
          <h2
            onClick={() => navigate(`/products/${item.id}`)}
            className="text-[16px] text-slate-600 cursor-pointer"
          >
            {item.title}
          </h2>
        </div>
        <div className="flex justify-center gap-5 max-w-[80px] h-full">
          <div>
            <button
              onClick={() => {
                item.qty === 1
                  ? dispatch(removeItemes(item.id))
                  : dispatch(decreaseQty(item.id));
              }}
              className="shadow-xl w-[35px] h-[35px] border-[1px] text-center p-[2px] rounded-full flex justify-center items-center text-[35px]"
            >
              {"-"}
            </button>
          </div>
          <h2>{item?.qty}</h2>
          <div>
            <button
              onClick={() => dispatch(increaseQty(item.id))}
              className="shadow-xl w-[35px] h-[35px] border-[1px] text-center p-[2px] rounded-full flex justify-center items-center text-[18px]"
            >
              +
            </button>
          </div>
        </div>
        <div className="max-w-[120px] flex flex-col justify-between ml-[20px]">
          <h2 className="text-center text-slate-600">
            {"$ "}
            <span className="text-black">{item.price}</span>
          </h2>
          <h2
            onClick={() => dispatch(removeItemes(item.id))}
            className="text-red-500 cursor-pointer"
          >
            Remove
          </h2>
        </div>
      </div>
    </>
  );
};

export default CartCard;
