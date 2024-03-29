import React from 'react'

const Header = ({title}) => {
  return (
    <div className='flex w-full'><p className='font-satoshiMedium text-[28px] text-darkBlue'>{title}</p></div>
  )
}

export default Header