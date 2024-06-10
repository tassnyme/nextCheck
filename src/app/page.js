import About from "@/components/About";
import Contact from "@/components/Contact";
import Navbar from "@/components/Navbar";
import Present from "@/components/Present";

export default function Home() {
 
  return (
    <div className=" bg-gray-900">
      
      <Navbar  />
      <Present/>
      <About />
      {/* <Projects/> */}
      <Contact/>




    <p className="px-5">made with love by tasstoussa in 09/06/2024</p>
    
    
    </div>
  );
}
