import { FaHandSparkles, FaRegSmileWink } from "react-icons/fa";

function About() {
   // Run this effect only once on component mount

  return (
    <div className="flex flex-col items-center space-y-8 py-40 ">
        <h1 className=" text-greeen  text-5xl hover:text-6xl shadow-lg hover:cursor-pointer">More About Me</h1>
    
        <pre className="text-xl">
          I'm Tassnyme, a young student who studies at the higher institute of computer science in mahdia  
          <p>and a beginner passionate frontend developer that can work with so many tools like </p>  
          <p><span className="text-greeen ">"React-Js ", "Javascript", "Next-Js", "Typescript", "Tailwindcss"</span>.</p> 
          <p>I'm eager to face new challenges and create an excellent career</p>
          <p>thanks to my curiosity, passion, and work. I'm able to build dynamic, responsive user interfaces . </p>
          <p>See you below to keep in touch!</p>
        </pre>
        <FaRegSmileWink  size={56} className="hover:text-greeen  hover:cursor-pointer"/>
      </div>
    
  );
}

export default About;
