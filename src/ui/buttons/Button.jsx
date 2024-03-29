import React from "react";

const Button = ({ onClick, children, className, type, ...rest }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={` rounded-[8px] font-satoshiMedium ${className || ""}`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
