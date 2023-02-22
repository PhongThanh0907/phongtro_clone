import React from "react";
import { Link, useLocation } from "react-router-dom";
import { menuBar } from "../../constants/MenuOptions";

const MenuBar = () => {
  const location = useLocation();

  return (
    <div className="bg-mblue text-white font-semibold">
      <div className="w-1100 mx-auto flex text-sm">
        {menuBar.map((item, index) => (
          <Link
            key={index}
            className={`${
              location.pathname === item.path
                ? "bg-mred"
                : "hover:bg-[#ff0f39] duration-300"
            } px-3 py-2.5  active:bg-[#ce0024]`}
            to={item.path}
          >
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MenuBar;
