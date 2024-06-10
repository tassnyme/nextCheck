import Navbar from '@/components/Navbar'
import Present from '@/components/Present'
import React from 'react'

function page() {
    const hoverr =''
  return (
    <div className=" bg-gray-900">
      <Navbar/>
      <div  className='flex items-center justify-center min-h-screen'><Present/>  
      </div>
    </div>
  )
}

export default page
