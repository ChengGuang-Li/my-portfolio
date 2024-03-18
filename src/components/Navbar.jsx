import { useState } from "react";
import { NavLink } from "react-router-dom";
import { HiMenuAlt2 } from "react-icons/hi";
import { MdClose } from "react-icons/md";
import { navLinks } from "../constants/index";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <header className="header">
      <NavLink
        to="/"
        className="w-10 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md"
      >
        <p className="blue-gradient_text"> V </p>
      </NavLink>

      <div className="flex flex-1 justify-end items-center">
        <div
          className="w-[28px] h-[28px] flex justify-center items-center object-contain cursor-pointer text-3xl text-slate-900"
          onClick={() => setToggle(!toggle)}
        >
          {toggle ? <MdClose /> : <HiMenuAlt2 />}
        </div>

        <div
          className={`${
            toggle ? "flex" : "hidden"
          } p-1.6 black-gradient absolute top-12 right-0 mx-4 my-2 min-w-[80px] z-20 rounded-xl`}
        >
          <ul className="list-none flex justify-end items-start flex-col gap-4 ">
            {navLinks.map((link) => (
              <li
                key={link.id}
                className={`${({ isActive }) =>
                  isActive
                    ? "text-white"
                    : "text-"} font-poppins font-medium cursor-pointer ${
                  window.innerWidth > 390 ? "text-base" : "text-xs"
                }`}
                onClick={() => {
                  setToggle(!toggle);
                }}
              >
                <NavLink to={`/${link.id}`} activeclassname="text-white">
                  {link.title}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
