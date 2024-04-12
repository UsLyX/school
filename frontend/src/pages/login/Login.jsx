import React from 'react'
import { Outlet } from 'react-router-dom'

const Login = () => {
  return (
    <div style={{flex: 1, display: 'flex'}}>
      <Outlet />
    </div>
  )
}

export default Login
