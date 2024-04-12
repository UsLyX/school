import React from 'react'

const Title = ({children, color}) => {
  return <p className={`${color === 'white' ? 'text-white' :'text-[#252B42]'} font-bold text-4xl my-[10px]`}>{children}</p>
}

export default Title
