import AnimatedGridPattern from "@/components/ui/animated-grid-pattern";
import "./landing.css";
import { cn } from "@/lib/utils";
import { NeonGradientCard } from "@/components/ui/neon-gradient-card";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import ScrollableLine from "./scrollableLine";
import ShineBorder from "@/components/ui/shine-border";
import { MarqueeDemo } from "./marquee";

gsap.registerPlugin(ScrollTrigger);

export default function landing() {
  return (
    <>
      <div className="relative flex min-h-screen w-screen overflow-hidden p-4 custom-page bg-black grid-background">
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark custom-navbar">
            <img
              className="w-26 h-10 custom-image"
              src="src/assets/pluto.png"
              alt=""
            />
          </nav>

          <AnimatedGridPattern
            numSquares={30}
            maxOpacity={0.1}
            duration={3}
            repeatDelay={1}
            className={cn(
              "absolute top-0 left-0 w-full h-full z-0 y-0",
              "[mask-image:radial-gradient(1500px_circle_at_center,white,transparent)]"
            )}
          />

          <div className="grand-parent">
            <div className="box">
              <NeonGradientCard className="custom items-center  text-center card-neon ">
                <span className="custom-intro pointer-events-none z-10 whitespace-pre-wrap bg-gradient-to-br from-[#ff2975] from-35% to-[#00FFF1] bg-clip-text text-center text-6xl font-bold leading-none tracking-tighter text-white dark:drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]">
                  GET UPTO 90% OFF <br></br>
                  ON SHOPPING ONLINE AND DINING OUT.
                </span>
              </NeonGradientCard>
            </div>

            <div className="text3">WHAT PLUTO IS</div>

            <div className="card-grandparent">
              <div className="data-card-parent">
                <ShineBorder
                  className="relative flex flex-col items-center justify-center overflow-hidden rounded-lg border-3px bg-background md:shadow-xl custom-data-card-1"
                  color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
                >
                  <span className="pointer-events-none whitespace-pre-wrap text-center text-5xl font-semibold leading-none text-white">
                    Shop for your favorite products
                  </span>
                </ShineBorder>

                <ShineBorder
                  className="relative flex flex-col items-center justify-center overflow-hidden rounded-lg border-3px bg-background md:shadow-xl custom-data-card-2"
                  color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
                >
                  <span
                    className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10 custom-shining-card-text
                "
                  >
                    Dine at your favorite places
                  </span>
                </ShineBorder>

                <ShineBorder
                  className="relative flex flex-col items-center justify-center overflow-hidden rounded-lg border-3px bg-background md:shadow-xl custom-data-card-3"
                  color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
                >
                  <span
                    className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10 custom-shining-card-text
                "
                  >
                    Start your influencer journey today
                  </span>
                </ShineBorder>

                <ShineBorder
                  className="relative flex flex-col items-center justify-center overflow-hidden rounded-lg border-3px bg-background md:shadow-xl custom-data-card-4"
                  color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
                >
                  <span className="pointer-events-none whitespace-pre-wrap text-center text-5xl font-semibold leading-none text-white">
                    All you need is 1000+ followers
                  </span>
                </ShineBorder>
              </div>
            </div>
            <img className="musical-note" src="src/assets/note.png" alt="" />
            <img className="arrow" src="src/assets/gstrings.png" alt="" />
            <img className="rainbow" src="src/assets/cam.png" alt="" />
          </div>

          <div className="text2">HOW YOU ASK?</div>

          <div className="scroll-grand-parent">
            <div className="parent">
              <div className="div1">
                SHOP/DINE{" "}
                <p className="small-paras-inside">from our partner brands.</p>
              </div>
              <div className="div2">
                {" "}
                <img className="icons" src="src/assets/post.png" alt="" />
              </div>
              <div className="div3">
                EARN{" "}
                <p className="small-paras-inside">Get cashbacks upto 80%.</p>
              </div>
              <div className="div4">
                <img className="icons" src="src/assets/buy.png" alt="" />{" "}
              </div>
              <div className="div5">
                POST{" "}
                <p className="small-paras-inside">Post a picture/reel/story.</p>
              </div>
              <div className="div6">
                <img className="icons" src="src/assets/cashback.png" alt="" />{" "}
              </div>
              <div className="div7">
                <ScrollableLine />
              </div>
            </div>
          </div>

          <MarqueeDemo />

          <div className="text">JOIN PLUTO TODAY</div>
        </div>
      </div>
    </>
  );
}
