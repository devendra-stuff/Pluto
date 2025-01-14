import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './scrollableLine.css'

gsap.registerPlugin(ScrollTrigger);

const ScrollableLine = () => {
  useEffect(() => {
    gsap.to('.scroll-line', {
      scrollTrigger: {
        trigger: '.scroll-line',          // Trigger animation when the line enters the viewport
        start: "top center",              // Start when the bottom of the element hits the top of the viewport
        end: "bottom center-100",          // End after the line moves down by 90% of the viewport height
        scrub: true,                     // Scrub the animation based on scroll position
      },
      height: "80vh",                     // The height the line will grow to
      ease: 'power1.out',                       // No easing for smooth transition
    });
  }, []);

  return (
    <div className='timeline'> {/* Added height for scrolling */}
      <div
        className="scroll-line"
        style={{
          width: '5px',         // Set the width of the line
          backgroundColor: 'white',
          height: '0%',         // Initially set the height to 0%    // Set an initial position for the line (optional) 
        }}
      ></div>
      <div className='scroll-line2'
      style={{
          width: '5px',         // Set the width of the line
          backgroundColor: 'teal',
          height: '80vh',         // Initially set the height to 0%    // Set an initial position for the line (optional) 
        }}>
      </div>
    </div>
  );
};

export default ScrollableLine;
