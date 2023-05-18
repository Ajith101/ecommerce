import React from "react";
import { useSelector } from "react-redux";
import CartCard from "./CartCard";

const CartList = () => {
  const { cartItemes } = useSelector((state) => ({ ...state.products }));

  const displayCartItemes = cartItemes?.map((itemes) => {
    return <CartCard item={itemes} key={itemes.id} />;
  });

  return (
    <div className="min-h-screen p-[60px] w-full flex gap-5">
      <div className="w-[70%] text-slate-600">
        <div className="bg-slate-100 flex flex-col p-[15px] rounded-[4px] my-[40px]">
          <h2 className="text-[18px] font-[700]">Your Cart</h2>
          <h3>Total Itemes : {cartItemes?.length} </h3>
          <h3>Total Quantity : {cartItemes?.length} </h3>
        </div>
        <div className="flex flex-col gap-3 ml-[120px]">
          {displayCartItemes}
        </div>
      </div>
      <div className="w-[30%] flex flex-col my-[40px] p-[8px]">
        <div className="shadow-lg rounded-[4px]">
          <div className="bg-slate-200 flex flex-col p-[15px] rounded-[4px]">
            <h2 className="text-[18px] font-[700]">You Pay</h2>
            <h3>Check Our order Policy</h3>
          </div>
          <div className="bg-slate-600 text-white p-[15px] rounded-[4px]">
            You Can Pay .... on This Order
          </div>
          <div className="bg-slate-50 p-[15px] rounded-[4px] flex flex-col gap-[8px]">
            <h2 className="text-[18px] font-[700] border-b-[1px] py-[4px]">
              Total Price {"$"} 22222
            </h2>
            <h3 className="border-b-[1px] py-[4px]">Distributor Price -20</h3>
            <h3 className="border-b-[1px] py-[4px]">Discount 40</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartList;
