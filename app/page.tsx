import Approach from "@/components/Approach";
import { AboutUsCards } from "@/components/Cards";
import Hero from "@/components/Hero";
import ProjectShowCase from "@/components/ProjectShowCase";
import Services from "@/components/Services";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data/index";
import Image from "next/image";
import { FaHome } from "react-icons/fa"

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems}/>
        <Hero />  
        <AboutUsCards />
        <ProjectShowCase /> 
        <Services />
        <Approach />
      </div>
    </main>
  );
}
