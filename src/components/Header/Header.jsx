import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { RiMenu3Fill } from "react-icons/ri";
import MobileNav from "./MobileNav";

const Header = () => {
  const [menu, setMenu] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <div className="flex justify-between bg-black px-[15px] sm:px-10 py-5 text-white items-center text-[16px] font-[700] w-full">
        <div className="logo">
          <h2
            onClick={() => navigate("/")}
            className="sm:text-[32px] text-[26px] cursor-pointer"
          >
            Shopping App
          </h2>
        </div>
        <div className="hidden sm:block">
          <ul className="flex items-center justify-center gap-5 font-[600] cursor-pointer">
            <li className="hover:opacity-60">
              <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                  isActive ? "active" : ""
                }
              >
                Home
              </NavLink>
            </li>
            <li className="hover:opacity-60">Products</li>
          </ul>
        </div>
        <div onClick={() => setMenu((pre) => !pre)} className="sm:hidden">
          <RiMenu3Fill size={"25px"} />
        </div>
      </div>
      {menu && <MobileNav setMenu={setMenu} />}
    </>
  );
};

export default Header;
