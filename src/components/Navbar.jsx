import React from 'react'

export default function Navbar() {
  return (
    <div className="bg-gray-800">
      <div className='h-16 flex items-center'>
        <p className='text-white text-2xl font-bold px-8 cursor-pointer' onClick={() => window.location.href = "/"}>Employee Management System</p>
      </div>
    </div>
  )
}
