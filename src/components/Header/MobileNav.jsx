import React from "react";
import { NavLink } from "react-router-dom";

const MobileNav = ({ menu, setMenu }) => {
  return (
    <div
      className={`absolute top-[100%] z-40 sm:hidden ${
        menu ? "right-0" : "right-[-100%]"
      } flex h-screen w-2/3 items-center justify-center bg-slate-800 text-white transition-all duration-500 ease-in`}
    >
      <ul className="flex flex-col gap-5">
        <li className="hover:opacity-60">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Home
          </NavLink>
        </li>
        <li className="hover:opacity-60">
          <NavLink
            onClick={() => setMenu(false)}
            to="/signup"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Sign Up
          </NavLink>
        </li>
        <li className="hover:opacity-60">
          <NavLink
            onClick={() => setMenu(false)}
            to="/signin"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Sign In
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default MobileNav;
