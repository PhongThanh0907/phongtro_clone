import React from "react";
import { Link } from "react-router-dom";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import { PlusCircleIcon } from "@heroicons/react/24/outline";

import Logo from "../../assets/logo-phongtro.svg";
import { menuHeader } from "../../constants/MenuOptions";
import Button from "../Button/Button";

const Header = () => {
  return (
    <div className="flex w-1100 mx-auto justify-between">
      <div>
        <img
          id="img-element"
          className="cursor-pointer w-60 h-[70px]"
          src={Logo}
          alt="logo"
        />
        <Tooltip anchorId="img-element" place="bottom">
          <p>Cho thuê phòng trọ, nhà trọ, tìm phòng trọ</p>
        </Tooltip>
      </div>
      <div className="flex items-center gap-6">
        <div className="flex gap-6">
          {menuHeader.map((item, index) => (
            <Link
              className="flex items-center gap-1 font-semibold"
              key={index}
              to={item.path}
            >
              {item.icon}
              <span className="text-sm hover:underline duration-200">
                {item.title}
              </span>
            </Link>
          ))}
        </div>
        <div>
          <Button
            title="Đăng tin mới"
            style="bg-mred text-white hover:bg-[#ff0f39] active:bg-[#ce0024] px-3 py-2.5"
            icon={<PlusCircleIcon className="h-5 w-5 mt-0.5" />}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
