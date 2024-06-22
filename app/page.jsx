
// import "./src/input.css";
import Hero from "./components/Hero";
import { Partners } from "./components";
import { Contact } from "./components";
import StructureSection from "./components/StructureSection";
import JoinSection from "./components/JoinSection";

export default function Home() {
  return (
    <>
      <Hero />
      <Partners />
      <Contact />
      <div className="bg-black text-white flex flex-col items-center">
        <div className="container max-w-[1300px] flex flex-col mt-10">
          <StructureSection />
          <JoinSection />
        </div>
      </div> 
    </>
  );
}
