import React from "react";

const TableHeader = ({
  tHeading,
  children,
}) => {
  return (
    <div className="w-full h-full mt-6 rounded-[20px] border-[#E6DDFF] border-[1px]">
      <table className="bg-white px-4 rounded-bl-[20px] rounded-br-[20px]  rounded-tl-[20px] rounded-tr-[20px] w-full ">
        <thead className="">
          <tr className="">
            {tHeading.map((item, index) => {
              return (
                <th
                  className={`font-satoshiMedium py-4 text-left 2xl:text-[16px] xl:text-[14px] lg:text-[14px] md:text-[12px] text-darkBlue ${
                    index === 0 ? "pl-6" : ""
                  }`}
                  key={index}
                >
                  {item}
                </th>
              );
            })}
          </tr>
        </thead>

        <tbody className="w-full text-left">{children}</tbody>
      </table>
    </div>
  );
};

export default TableHeader;
