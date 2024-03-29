import React from "react";

const OneImage = ({likeCount, bookmarkCount, srcimage, onClickDelete}) => {
  return (
    <div className="relative -z-9 w-[200px] h-[200px] rounded-[20px]">
      <img className="rounded-[20px] h-[200px] w-[200px]" src={srcimage} />
      <div onClick={onClickDelete} className="absolute top-3 cursor-pointer left-36 w-[40px] h-[40px] rounded-[20px] bg-red flex items-center justify-center">
        <img src="/icons/trash-white.svg" />
      </div>
      <div className="absolute top-36 left-3 flex gap-3 items-center">
        <div className="w-[80px] h-[40px] justify-center rounded-[20px] bg-[#00000080] flex items-center gap-1">
          <img src="/icons/heart.svg" />
          <p className="text-white text-[14px] font-satoshiRegular">{likeCount}</p>
        </div>

        <div className="w-[80px] h-[40px] justify-center rounded-[20px] bg-[#00000080] flex items-center gap-1">
          <img src="/icons/archive-tick.svg" />
          <p className="text-white text-[14px] font-satoshiRegular">{bookmarkCount}</p>
        </div>
      </div>
    </div>
  );
};

export default OneImage;
