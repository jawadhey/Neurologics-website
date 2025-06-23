import React, { useEffect, useRef } from "react";
import vector from "/vector1.png";

import gsap from "gsap";
export default function Hero() {
  const headingRef = useRef(null);
  // const cardRefs = useRef([]);
  const dolorRef = useRef(null);
  const consecteturRef = useRef(null);

  useEffect(() => {
    // Animate heading
    gsap.from(headingRef.current, {
      opacity: 0,
      y: -50,
      duration: 1,
      ease: "power3.out",
    });

    // Animate vector image
    gsap.from(".vector-line", {
      opacity: 0,
      x: -20,
      duration: 1,
      delay: 0.5,
      ease: "power3.out",
    });


  }, []);

  return (
    <section className="max-w-[1240px] mx-auto bg-[#EDEDED] left-0 right-0 z-50 px-2 sm:px-4 lg:px-6">
      {/* Top Label */}
      <div className="text-center pb-8">
        <span
          className="inline-block px-5 py-3 rounded-full text-sm text-gray-500 text-[15px] font-medium"
          style={{
            background:
              "linear-gradient(180deg, rgba(67, 0, 255, 0) 0%, rgba(67, 0, 255, 0.08) 100%)",
          }}
        >
          Innovative platforms
        </span>
      </div>
  
      {/* Main Heading */}
      <h1
        ref={headingRef}
        className="text-center text-[26px] md:text-5xl font-bold mb-8 md:leading-tight"
      >
        Empowering{" "}
        <span
          className="text-black px-2 py-1 rounded"
          style={{
            background: "linear-gradient(90deg, #FF0000, #FF6666)",
            backgroundSize: "200% auto",
          }}
        >
          innovation
        </span>{" "}
        with custom tech{" "}
        <span
          className="text-black px-2 py-1 rounded"
          style={{
            background: "linear-gradient(90deg, #FFD700, #FFEF8B)",
            backgroundSize: "200% auto",
          }}
        >
          solutions
        </span>{" "}
        — from concept to code, we build{" "}
        <span className="relative font-bold">
          <span ref={dolorRef} className="text-black">
            future-ready
          </span>{" "}
          <span ref={consecteturRef} className="ml-2 text-black">
            platforms.
          </span>
          <img
            src={vector}
            alt="line vector"
            className="vector-line absolute left-[2px] md:top-[40px] top-[20px]"
          />
        </span>
      </h1>
  
      {/* Sub Text */}
      <p className="text-center max-w-2xl mx-auto text-[#1E1E1E] font-[400] mb-6">
        NeuroLogics builds smart, scalable digital platforms to help businesses grow and adapt. From strategy to deployment, we deliver custom tech solutions across web, mobile, and cloud. Turn your ideas into impactful digital experiences with our expert team.
      </p>
  
      {/* Buttons */}
      <div className="flex justify-center gap-4 mb-10">
        <button className="bg-[#4300FF] text-white px-6 py-2 font-semibold rounded-full hover:bg-indigo-700 transition">
          Get Started
        </button>
        <button className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-300 transition">
          Learn More
        </button>
      </div>
    </section>
  );
  
  
  
  
  
}
