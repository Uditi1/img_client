import React from 'react'

const TableButton = ({ onClick, children, className, type, ...rest }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={` rounded-full font-satoshiMedium 2xl:text-[14px] xl:text-[12px] lg:text-[12px] md:text-[12px] flex items-center justify-center ${className || ""}`}
      {...rest}
    >
      {children}
    </button>
  )
}

export default TableButton