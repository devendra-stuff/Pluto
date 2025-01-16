import ShinyButton from "@/components/ui/shiny-button";
import { useNavigate } from "react-router-dom";
import "./home.css"
// import Particles from "@/components/ui/particles";
import { LampContainer } from "@/components/ui/lamp";
import { motion } from "framer-motion";

export default function Home() {
  //const color = "#ffffff";
  const navigate = useNavigate();

  const handleClick =() => {
      navigate("/landing");
  }
 
  return (
    <>
    {/* <div className="relative flex h-screen w-screen flex-col items-center justify-center overflow-hidden bg-black md:shadow-xl">
      <span className="pointer-events-none z-10 whitespace-pre-wrap text-center text-8xl font-semibold leading-none">
      <div className="main-container">
      <img
          src="src/assets/Pluto.png"
          alt="Logo"
          className="main-logo" 
        />
        <p className="text-xl font-medium tracking-tight text-white">
            Get upto 80% off on shopping and dining out!! All you need is 1000+ followers
        </p>
        </div>
       <img
          className="absolute top-20 left-40 planet"
          src="src/assets/neon-planet (1).png"
          alt=""
          style={{width:'100px'}}
        />
        <img
          className="absolute top-60 right-24 moon"
          src="src/assets/icons8-new-moon-96.png"
          alt=""
        />
        <img
          className="absolute bottom-10 left-20 ufo"
          src="src/assets/icons8-sci-fi-96.png"
          alt=""
        />
      </span>

       <ShinyButton className="custom-button" onClick={handleClick}>HOW DOES IT WORK?</ShinyButton>;

      <Particles
        className="absolute inset-0 z-0"
        quantity={75}
        ease={80}
        color={color}
        refresh
      />
      
    </div> */}

    <div className="lamp-grandparent">
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 200 }}
        whileInView={{ opacity: 1, y: 195 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="bg-gradient-to-br from-slate-300 to-slate-500 py-6 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
      >
        <div className="lamp-container">
        <img
          src="src/assets/Pluto.png"
          alt="Logo"
          className="main-logo" 
        />
        <p className="text-xl font-medium tracking-tight text-white">
            Get upto 80% off on shopping and dining out!! All you need is 1000+ followers
        </p>
        <ShinyButton className="custom-button" onClick={handleClick}>HOW DOES IT WORK?</ShinyButton>
        
        </div>
      </motion.h1>
    </LampContainer>
    </div>
    </>
  );
}


