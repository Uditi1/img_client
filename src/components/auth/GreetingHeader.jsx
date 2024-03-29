import React from "react";

const GreetingHeader = ({title, subTitle}) => {
  return (
    <div className="flex flex-col">
      <p className="font-satoshiBold text-center text-[32px] text-darkBlue">
        {title}
      </p>
      <p className="font-satoshiRegular text-center text-[16px] text-gray">
        {subTitle}
      </p>
    </div>
  );
};

export default GreetingHeader;
