import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { RiMenu3Fill } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";
import { BsCart } from "react-icons/bs";
import MobileNav from "./MobileNav";
import { useSelector } from "react-redux";

const Header = () => {
  const { cartItemes } = useSelector((state) => ({ ...state.products }));
  const [menu, setMenu] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <div className="relative flex h-full w-full items-center justify-between bg-slate-800 px-[15px] py-5 text-[16px] font-[700] text-white sm:px-10">
        <div className="logo">
          <h2
            onClick={() => navigate("/")}
            className="cursor-pointer text-[26px] sm:text-[32px]"
          >
            Shopping App
          </h2>
        </div>

        <div className="">
          <ul className="flex cursor-pointer items-center justify-center gap-5 font-[600]">
            <li onClick={() => navigate("/cart")} className="relative">
              <BsCart size={"25px"} className="cursor-pointer text-white" />
              <div className="z-100 absolute right-[-15px] top-[-15px] flex h-[25px] w-[25px] cursor-pointer items-center justify-center rounded-full border-[1px] border-white bg-slate-400 text-white">
                {cartItemes?.length}
              </div>
            </li>

            <li className="hidden hover:opacity-60 sm:block">
              <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                  isActive ? "active" : ""
                }
              >
                Home
              </NavLink>
            </li>
            <li className="hidden hover:opacity-60 sm:block">Products</li>
            <li className="sm:hidden">
              <div onClick={() => setMenu((pre) => !pre)} className="sm:hidden">
                {menu ? (
                  <AiOutlineClose size={"25px"} />
                ) : (
                  <RiMenu3Fill size={"25px"} />
                )}
              </div>
            </li>
          </ul>
        </div>
        {/* <MobileNav menu={menu} setMenu={setMenu} /> */}
      </div>
    </>
  );
};

export default Header;
