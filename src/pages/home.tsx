import ShinyButton from "@/components/ui/shiny-button";
import { useNavigate } from "react-router-dom";
import "./home.css"
import Particles from "@/components/ui/particles";

export default function Home() {
  const color = "#ffffff";
  const navigate = useNavigate();

  const handleClick =() => {
      navigate("/landing");
  }
 
  return (
    <>
    <div className="relative flex h-screen w-screen flex-col items-center justify-center overflow-hidden bg-black md:shadow-xl">
      <span className="pointer-events-none z-10 whitespace-pre-wrap text-center text-8xl font-semibold leading-none">
      <div className="main-container">
      <img
          src="src/assets/Pluto.png"
          alt="Logo"
          className="main-logo" 
        />
        <p className="text-xl font-medium tracking-tight text-white">
           Shop a lot? Eat out a lot? Do not worry about money ever again! All you need is 1000+ followers
        </p>
        </div>
       <img
          className="absolute top-20 left-40 planet"
          src="src/assets/neon-planet (1).png"
          alt=""
          style={{width:'100px'}}
        />
        <img
          className="absolute top-60 right-24 planet"
          src="src/assets/icons8-new-moon-96.png"
          alt=""
        />
        <img
          className="absolute bottom-10 left-20 planet"
          src="src/assets/icons8-sci-fi-96.png"
          alt=""
        />
      </span>
      <ShinyButton onClick={handleClick} className="custom-button z-50 px-4 py-3 text-lg bg-teal-700 text-black font-bold hover:bg-teal-600 transition">
          HOW DOES IT WORK?
       </ShinyButton>

      <Particles
        className="absolute inset-0 z-0"
        quantity={75}
        ease={80}
        color={color}
        refresh
      />
      
    </div>
    </>
  );
}


