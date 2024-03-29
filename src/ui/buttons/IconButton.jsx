import React from 'react'

const IconButton = ({ children, className, srcimage, onClick, ...rest }) => {
  return (
    <div
    onClick={onClick}
    className={` cursor-pointer rounded-[8px] flex justify-center items-center gap-2 text-white font-satoshiMedium text-[14px] ${
      className || ""
    }`}
    {...rest}
  >
    <img src={srcimage} />
    {children}
  </div>
  )
}

export default IconButton