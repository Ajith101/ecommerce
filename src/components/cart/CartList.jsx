import React from "react";
import { useSelector } from "react-redux";
import CartCard from "./CartCard";

const CartList = () => {
  const { cartItemes } = useSelector((state) => ({ ...state.products }));

  // display cartItemes
  const displayCartItemes = cartItemes?.map((itemes) => {
    return <CartCard item={itemes} key={itemes.id} />;
  });

  // total Quantity of all cart itemes
  const totalQuantity =
    cartItemes.length &&
    cartItemes?.map((itemes) => itemes.qty).reduce((x, y) => x + y);

  return (
    <div className="flex min-h-screen w-full flex-col gap-5 p-[20px] md:flex-row lg:p-[60px]">
      <div className="w-full text-slate-600 md:w-[70%]">
        <div className="my-[40px] flex flex-col rounded-[4px] bg-slate-100 p-[15px]">
          <h2 className="text-[18px] font-[700]">Your Cart</h2>
          <h3>Total Itemes : {cartItemes?.length} </h3>
          <h3>Total Quantity : {totalQuantity && totalQuantity} </h3>
        </div>
        <div className="flex flex-col gap-3 lg:ml-[120px]">
          {displayCartItemes}
        </div>
      </div>
      <div className="my-[40px] flex w-full flex-col md:w-[30%] md:p-[8px]">
        <div className="rounded-[4px] shadow-lg">
          <div className="flex flex-col rounded-[4px] bg-slate-200 p-[15px]">
            <h2 className="text-[18px] font-[700]">You Pay</h2>
            <h3>Check Our order Policy</h3>
          </div>
          <div className="rounded-[4px] bg-slate-600 p-[15px] text-white">
            You Can Pay .... on This Order
          </div>
          <div className="flex flex-col gap-[8px] rounded-[4px] bg-slate-50 p-[15px]">
            <h2 className="border-b-[1px] py-[4px] text-[18px] font-[700]">
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
