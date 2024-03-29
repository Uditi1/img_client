import React from "react";
import IconButton from "../buttons/IconButton";

const TableContainer = ({
  leftOneElement,
  leftTwoElement,
  buttonText,
  buttonShow,
  left,
  right,
  rightOneElement,
  rightTwoElement,
  children,
}) => {
  return (
    <div className="flex flex-col mt-4 ">
      <div className="flex  items-center justify-between">
        <div className="flex  gap-4">
          {leftOneElement}
         {left && <div className="border-l-[1px] border-lightgray pl-4">
            {leftTwoElement}
          </div>}
        </div>

        <div className="flex gap-2">
          {buttonShow ? (
            <IconButton>{buttonText}</IconButton>
          ) : (
            <div className="flex 2xl:flex-row xl:flex-row lg:flex-row md:flex-col md:items-end gap-4">
              {rightOneElement}
             {right && <div className="border-l-[1px] border-lightgray pl-4">
                {rightTwoElement}
              </div>}
            </div>
          )}
        </div>
      </div>

      {children}
    </div>
  );
};

export default TableContainer;
