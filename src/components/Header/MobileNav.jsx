import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { NavLink } from "react-router-dom";

const MobileNav = ({ setMenu }) => {
  return (
    <div className="sm:hidden z-30 top-0 fixed w-2/3 bg-black text-white right-0 h-screen flex justify-center items-center">
      <ul className="flex flex-col gap-5">
        <li className="hover:opacity-60">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Home
          </NavLink>
        </li>
      </ul>
      <div className="fixed top-[25px] right-[25px] cursor-pointer">
        <AiOutlineClose onClick={() => setMenu(false)} size={"25px"} />
      </div>
    </div>
  );
};

export default MobileNav;
