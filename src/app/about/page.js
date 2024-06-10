import About from '@/components/About'
import Present from '@/components/Present'
import Navbar from '@/components/Navbar'

import React from 'react'

function page() {
  return (
    <div className=" bg-gray-900">
      <Navbar/>
      <div className='flex items-center justify-center min-h-screen'>      <About/>
      </div>
    </div>
  )
}

export default page
