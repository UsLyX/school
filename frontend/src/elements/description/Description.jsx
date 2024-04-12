import React from 'react'

const Description = ({children, color, className}) => {
  return <p className={`w-[35%] ${color === 'white' ? 'text-white' : 'text-[#737373]'} text-sm ${className}`}>{children}</p>
}

export default Description
