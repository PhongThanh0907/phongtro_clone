import React, { ReactElement } from "react";

const Button = ({
  title,
  icon,
  style,
}: {
  title: string;
  style: string;
  icon?: ReactElement;
}) => {
  return (
    <div
      className={`duration-300 font-semibold text-sm flex items-center justify-center rounded-md cursor-pointer gap-0.5 ${style}`}
    >
      {title}
      {icon}
    </div>
  );
};

export default Button;
