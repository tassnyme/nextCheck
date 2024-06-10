import Navbar from '@/components/Navbar'
import Contact from '@/components/Contact'
import Present from '@/components/Present'
import About from '@/components/About'


import React from 'react'

function page() {
  return (
    <div className=" bg-gray-900  min-h-screen">
        <Navbar/>
       <div className='my-64'>      <Contact/>
       </div> 
    </div>
  )
}

export default page
