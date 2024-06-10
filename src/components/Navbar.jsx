import Link from 'next/link';
import React from 'react';
function Navbar() {
  const nav = ['home', 'about', 'projects', 'contact']; // Corrected the array declaration

  return (
    <div className=' flex justify-center relative'>
    <div className='flex justify-center flex-row py-6 w-full text-xl space-x-6 items-center fixed bg-grey'>
      <div className='text-red hover:text-green hover:shadow-custom '><Link href='/'>portfolio</Link></div> {/* Corrected 'greeen' to 'green' */}
      <div className='flex flex-row px-60 space-x-8 '>
        {nav.map((item, index) => (
          <div key={index} className='hover:shadow-custom'><Link href={`/${item}`}>{item}</Link></div>
        ))}
      </div>
      <div>
        <a href="/moncv.pdf" target="_blank" rel="noopener noreferrer">
          <button className='hover:bg-greeen rounded-2xl  border-greeen  border-4 text-white px-4 py-2  flex items-center'>Hire me!</button> {/* Corrected 'greeen' to 'green' */}
        </a>
      </div>
    </div></div>
  );
}

export default Navbar;
