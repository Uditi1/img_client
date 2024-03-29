import React from "react";

const OnePopup = ({ srcimage, onClickDelete }) => {
  return (
    <div className="relative -z-9 w-[200px] h-[200px] rounded-[20px]">
      <img src={srcimage} className="rounded-[20px] h-[200px] w-[200px]" />
      <div
        onClick={onClickDelete}
        className="absolute top-3 cursor-pointer left-36 w-[40px] h-[40px] rounded-[20px] bg-red flex items-center justify-center"
      >
        <img src="/icons/trash-white.svg" />
      </div>
    </div>
  );
};

export default OnePopup;
