import React, { useEffect, useState } from "react";
import DateInputBox from "../../ui/inputs/DateInputBox";

const DateGroup = ({ onFromDate, onToDate }) => {
  const [fromDate, setFromDate] = useState(null);
  const [toDate, setToDate] = useState(null);

  useEffect(() => {
    onFromDate?.(fromDate);
  }, [fromDate]);

  useEffect(() => {
    onToDate?.(toDate);
  }, [toDate]);

  return (
    <div className="flex gap-3">
      <div className="flex gap-2 items-center">
        <p className="font-satoshiRegular text-[12px] text-darkBlue">From</p>
        <DateInputBox onSetDate={setFromDate} />
      </div>

      <div className="flex gap-2 items-center">
        <p className="font-satoshiRegular text-[12px] text-darkBlue">To</p>
        <DateInputBox min={fromDate} onSetDate={setToDate} />
      </div>
    </div>
  );
};

export default DateGroup;
