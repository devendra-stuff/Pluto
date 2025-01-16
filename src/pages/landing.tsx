import AnimatedGridPattern from "@/components/ui/animated-grid-pattern";
import "./landing.css";
import { cn } from "@/lib/utils";
import { NeonGradientCard } from "@/components/ui/neon-gradient-card";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import ScrollableLine from "./scrollableLine";
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
            <div className="data-card-parent">
              <div className="div-neon">
                <NeonGradientCard className="custom items-center text-center card-neon custom-card-neon">
                  <div className="total-container">
                    <p className="intro-main">Shop from your favorite brands.</p>
                    <div className="neon-container-side">
                      <p className="intro">Get that product you always wanted.</p>
                      <img src="src/assets/price.png" alt="" />
                    </div>
                  </div>
                </NeonGradientCard>
              </div>

              <div className="div-neon">
                <NeonGradientCard className="custom items-center text-center card-neon custom-card-neon">
                  <div className="total-container">
                    <p className="intro-main">Dine at your favorite places.</p>
                    <div className="neon-container-side">
                      <p className="intro">Get reservations at places you never get easily.</p>
                      <img src="src/assets/wine.png" alt="" />
                    </div>
                  </div>
                </NeonGradientCard>
              </div>

              <div className="div-neon">
                <NeonGradientCard className="custom items-center text-center card-neon custom-card-neon">
                  <div className="total-container">
                    <p className="intro-main">This is your 0-1 launchpad</p>
                    <div className="neon-container-side">
                      <p className="intro">
                        Start your influencer journey today!
                      </p>
                      <img src="src/assets/cam.png" alt="" />
                    </div>
                  </div>
                </NeonGradientCard>
              </div>

              <div className="div-neon">
                <NeonGradientCard className="custom items-center text-center card-neon custom-card-neon">
                  <div className="total-container">
                    <p className="intro-main">All you is 1000+ followers</p>
                    <div className="neon-container-side">
                      <p className="intro">Get started right out after you get approved.</p>
                      <img src="src/assets/instagram.png" alt="" />
                    </div>
                  </div>
                </NeonGradientCard>
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
