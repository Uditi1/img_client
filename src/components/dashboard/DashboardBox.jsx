import React from "react";

const DashboardBox = ({srcicons, title, count}) => {
  return (
    <div className="flex gap-3 items-center justify-center w-[345px] h-[150px] bg-white rounded-[20px] shadow-sm">
      <div className="2xl:h-[80px] 2xl:w-[80px] xl:h-[80px] xl:w-[80px] lg:h-[80px] lg:w-[80px] md:h-[60px] md:w-[60px] bg-wheat 2xl:rounded-[20px] xl:rounded-[20px] lg:rounded-[20px] md:rounded-[10px] flex items-center justify-center">
        <img  src={srcicons} />
      </div>

      <div className="flex flex-col">
        <p className="font-satoshiMedium 2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[12px] text-darkBlue opacity-[0.5]">{title}</p>
        <p className="font-satoshiBold 2xl:text-[32px] xl:text-[32px] lg:text-[32px] md:text-[25px] text-darkBlue">{count}</p>
      </div>
    </div>
  );
};

export default DashboardBox;
