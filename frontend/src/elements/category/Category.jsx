import React from 'react'

const Category = ({children, color, className}) => {
  return <p className={`${color === 'green' ? 'text-[#00F8AD]' : 'text-[#FF6551]'} font-bold text-base ${className}`}>{children}</p>
}

export default Category
