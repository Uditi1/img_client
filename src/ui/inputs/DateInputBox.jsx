import React, { useEffect, useState } from "react";

const DateInputBox = ({ onSetDate, min }) => {
  
  const [Date, setDate] = useState("");

  useEffect(() => {
    onSetDate?.(Date);
  }, [Date]);

  return (
    <div className="bg-white border-[1px] flex items-center justify-center border-lightgray font-satoshiRegular text-darkBlue px-2 w-[130px] h-[40px] rounded-[10px] text-[14px]">
      <input
        onChange={(e) => {
          setDate(e.target.value);
        }}
        min={min}
        className="w-full h-full"
        type="date"
      />
    </div>
  );
};

export default DateInputBox;
