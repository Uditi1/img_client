import React, { useEffect, useState } from "react";

const Dropdown = ({ isActive, onDropdown }) => {
  const [dropdown, setDropdown] = useState();

  useEffect(() => {
    onDropdown?.(dropdown);
  }, [dropdown]);

  return (
    <select
      onChange={(e) => setDropdown(e.target.value)}
      className="border-[1px] bg-white font-satoshiRegular text-[14px] text-darkBlue px-2 w-[120px] h-[40px] rounded-[10px] border-lightgray"
    >
      <option value="">All Status</option>
      <option value={true}>{isActive ? "Active" : "Published"}</option>
      <option value={false}>{isActive ? "Inactive" : "Unpublished"}</option>
    </select>
  );
};

export default Dropdown;
