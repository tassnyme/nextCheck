import React from 'react';
import { MdFileDownload } from 'react-icons/md';
import { FiGithub } from 'react-icons/fi';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { FaFacebookF } from 'react-icons/fa';
function Present() {
  const Accounts = [
    { url: "https://github.com/tassnyme", Icon: FiGithub },
    { url: "https://www.linkedin.com/in/tassnyme-ben-laroussy-829071204/", Icon: FaLinkedinIn },
    { url: "https://x.com/TTassnyme", Icon: FaXTwitter },
    { url: "https://www.facebook.com/tassnyme.laroussy/", Icon: FaFacebookF },
  ];

  return (
    <div className='flex '>
    <div className=' flex flex-col space-y-8 my-12 mx-56 py-56 px-56 w-2/5 pt-56'>
      <pre><h3>Frontend Developer</h3></pre>
      
      <h1 className="text-5xl">Hello I'm </h1>
      <h1 className=' text-5xl text-greeen'>Tassnyme Ben Laroussy</h1>
      <pre>
      <p>I excel at ReactJS, NextJS, and TailwindCSS in creating a</p> 
          <p>responsive and dynamic user interface.</p>
      <p>I am proficient in various programming languages and technologies </p>
      </pre>
      <div className='flex space-x-4 items-center '>
        <a  href="/moncv.pdf" target="_blank" rel="noopener noreferrer"><button className=' hover:bg-greeen rounded-2xl  border-greeen  border-4 text-white px-4 py-2  flex items-center'>
          Download CV
          <MdFileDownload className='ml-2' />
        </button></a>
        <div className='flex space-x-4 flex-start '>
          {Accounts.map(({ url, Icon }, index) => (
            <div key={index} className='flex rounded-full w-8 h-8 justify-center items-center border-greeen border-4 hover:bg-greeen  '>
              <a href={url} target='_blank' rel='noopener noreferrer'>
                <Icon size={18} className='text-greeen hover:text-white' />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
    
    <div className='w-3/5  mt-56 -ml-32 px-4'>
        <img src="./profile.jpg" alt="" className='w-124 h-124 rounded-full  '/>
        <div className="ani"></div>
    </div>
    

    
    </div>
  );
}

export default Present;
