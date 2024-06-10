import React from 'react';
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Contact() {
    const inputClass = 'border-2 border-greeen text-greeen text-sm placeholder-greeen capitalize rounded-md py-2 px-4 bg-gray-500 ';

    return (
        <form action="">
            <div className=''>
            <div className='flex items-center flex-col w-3/4 bg-grey py-12 mx-auto my-40'>
                <h1 className=' my-10 text-greeen  text-5xl hover:text-6xl shadow-lg hover:cursor-pointer'>Let's work together</h1>
            <div className='flex flex-col space-y-4 w-1/2  '>
                <div className='flex space-x-4'>
                    <input type="text" placeholder='Enter firstname...' className={`${inputClass}  w-1/2 focus:outline-none`} />
                    <input type="text" placeholder='Enter lastname...' className={`${inputClass}  w-1/2 focus:outline-none` } />
                </div>

                <div className='flex space-x-4'>
                    <input type="email" placeholder='Enter email...' className={`${inputClass}  w-1/2 focus:outline-none`} />
                    <input type="password" placeholder='Enter password...' className={`${inputClass}  w-1/2 focus:outline-none`} />
                </div>

                <textarea name="description" placeholder='type your message here...' className={`${inputClass} h-32 w-full focus:outline-none`} />
                 
                <button className='bg-greeen text-white px-4 py-2 rounded-lg hover:bg-greeen-dark'>Submit</button>
            </div>
            <div className='mt-6'>
                <div className='flex '>
                    <FaPhoneAlt />
                    <a href="tel:+21690007761" className='text-gray-300 text-sm'> +21690007761</a>
                </div>
                <div className='flex'>
                    <MdEmail />
                    <a href="mailto:tassnymelaroussy@gmail.com" className='text-gray-300 text-sm'> tassnymelaroussy@gmail.com</a>
                </div>
            </div>

            
            </div></div>
        </form>
    );
}

export default Contact;
