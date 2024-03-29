import React, { useEffect, useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    onSearch?.(searchText);
  }, [searchText]);

  return (
    <div className="w-[300px] h-[40px] border-[1px] px-2 flex gap-1 items-center border-lightgray rounded-[10px] bg-white">
      <img
        className="border-r-[1px] border-lightgray pr-2"
        src="/icons/search.svg"
      />
      <input
        onChange={(e) => {
          setSearchText(e.target?.value);
        }}
        placeholder="Search or type"
        className="pl-2 w-full h-full placeholder:text-[14px] placeholder:font-satoshiRegular"
      />
    </div>
  );
};

export default SearchBar;
