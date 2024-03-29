import moment from "moment";
import React from "react";

const GuestTableData = ({ data }) => {
  return (
    <>
      {data?.map((item, index) => {
        const isOddRow = index % 2 === 0; // Check if the row index is odd

        return (
          <tr
            key={index}
            className={`w-full ${isOddRow ? "bg-[#F7F4FF]" : ""}`}
          >
            <td className="font-poppins w-[60%] 2xl:text-[16px] xl:text-[14px] lg:text-[14px] md:text-[12px] pl-6 pt-[1vw] pb-[1vw] text-black_two">
              {item?.user}
            </td>
            <td className="font-poppins w-[40%] 2xl:text-[16px] xl:text-[14px] lg:text-[14px] md:text-[12px] text-black_two">
              {moment(item?.date).format("LLL")}
            </td>
          </tr>
        );
      })}

      {data?.length <= 0 && (
        <tr>
          <td className="text-center" colSpan={7}>
            <div className="flex items-center justify-center h-full">
              <p className="font-satoshiRegular text-[15px]">No Data Found</p>
            </div>
          </td>
        </tr>
      )}
    </>
  );
};

export default GuestTableData;
