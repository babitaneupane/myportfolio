import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Footer from "./components/Footer";

export default function Home() {
  return (
   <>
  
   <Hero />
   <About />
   <Skills />
   <Experience />
  <Project />
   <Contact />
  

   </>
  ); 
}
