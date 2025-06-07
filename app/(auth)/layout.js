import React from 'react'

function AuthLayout({children}) {
  return (
    <div className='flex justify-center w-screen h-screen items-center'>
        {children}
    </div>
  )
}

export default AuthLayout