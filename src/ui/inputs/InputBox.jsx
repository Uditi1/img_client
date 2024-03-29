import React from "react";

const InputBox = ({ label, type, id, placeholder, value, onChange, srcimage, className, inputClassName }) => {
  return (
    <div className="mb-4 w-full">
      <label htmlFor={id} className="block mb-1 font-satoshiMedium text-darkBlue text-[16px]">
        {label}
      </label>
      <div
        className={`flex items-center w-full h-[60px] border-[1px] gap-1 px-3 py-2 rounded-[10px] ${
          className || ""
        } `}
      >
        <img src={srcimage} />
        <input
          type={type}
          id={id}
          className={`font-satoshiRegular w-full text-[14px] focus:outline-none focus:border-wheat ${
            inputClassName || ""
          }`}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      </div>
    </div>
  );
};

export default InputBox;
