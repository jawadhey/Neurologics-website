import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

export const ProgressCard = () => {
  const departments = ["UI", "UX", "DS", "HR", "QA"];
  const levels = ["Trainee", "3–5 years", "5+ years"];

  const progress = {
    UI: 3,
    UX: 4,
    DS: 7,
    HR: 3,
    QA: 3,
  };

  const totalDots = 10;

  return (
    <div className="p-6 bg-white rounded-2xl shadow-md max-w-md">
      <h2 className="text-lg font-semibold mb-4">Progress</h2>
      <div className="space-y-1">
        {departments.map((dept) => (
          <div key={dept} className="flex items-center justify-between">
            <div className="flex space-x-1">
              {Array.from({ length: totalDots }).map((_, idx) => (
                <span
                  key={idx}
                  className={`w-4 h-4 rounded-full ${
                    idx < progress[dept] ? "bg-orange-500" : "bg-gray-200"
                  }`}
                />
              ))}
            </div>
            <span className="ml-2 w-10 text-sm text-right">{dept}</span>
          </div>
        ))}
      </div>
      <div className="mt-1 flex justify-between text-xs text-gray-500">
        {levels.map((level, idx) => (
          <span key={idx}>{level}</span>
        ))}
      </div>
    </div>
  );
};

// export default ProgressCard;

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "JAN", value: 3200 },
  { name: "FEB", value: 4500 },
  { name: "MAR", value: 3700 },
  { name: "APR", value: 4000 },
  { name: "MAY", value: 3300 },
  { name: "JUN", value: 4700 },
  { name: "JUL", value: 4400 },
];

export default function AnalyticsChart() {
  return (
    <div className="bg-[#1c1c1c] rounded-xl p-6 text-white w-full h-full">
      <h2 className="text-sm font-medium mb-1">Analytics</h2>
      <p className="text-2xl font-semibold mb-4">5k+</p>
      <ResponsiveContainer width="100%" height={100}>
        <LineChart data={data}>
          <CartesianGrid vertical={false} strokeDasharray="3 3" stroke="#333" />
          <XAxis
            dataKey="name"
            stroke="#999"
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            stroke="#999"
            axisLine={false}
            tickLine={false}
            ticks={[1000, 2000, 3000, 4000, 5000]}
            domain={[1000, 5000]}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "#333",
              border: "none",
              color: "white",
            }}
          />
          <Line
            type="monotone"
            dataKey="value"
            stroke="#ff5722"
            strokeWidth={3}
            dot={{ fill: "#ff5722", r: 5 }}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export function ReviewCard() {
  const avatars = [
    "https://randomuser.me/api/portraits/men/75.jpg",
    "https://randomuser.me/api/portraits/women/65.jpg",
    "https://randomuser.me/api/portraits/men/64.jpg",
    "https://randomuser.me/api/portraits/men/45.jpg",
  ];

  return (
    <div className="bg-white h-full rounded-xl p-4 shadow-md w-full  relative">
      <div className="absolute top-0 left-0 w-0 h-0 border-l-[20px] border-l-transparent border-b-[20px] border-b-[#6A0DAD] rounded-tl-xl"></div>
      <p className="text-sm font-semibold text-gray-900 mb-1">
        <span className="text-black font-bold">15K</span> reviews on
      </p>
      <div className="flex items-center text-[#6A0DAD] mb-3">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 fill-current"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.072 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.073 3.292c.3.921-.755 1.688-1.54 1.118L10 13.347l-2.8 2.035c-.784.57-1.838-.197-1.539-1.118l1.072-3.292a1 1 0 00-.364-1.118L3.57 8.719c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.072-3.292z" />
          </svg>
        ))}
      </div>
      <div className="flex items-center gap-2">
        <span className="text-lg font-semibold text-gray-800">↻ 4.9</span>
        <div className="flex -space-x-2">
          {avatars.map((src, i) => (
            <img
              key={i}
              src={src}
              alt="avatar"
              className="w-8 h-8 rounded-full border-2 border-white shadow"
            />
          ))}
          <div className="w-8 h-8 rounded-full bg-[#6A0DAD] text-white text-xs font-medium flex items-center justify-center border-2 border-white shadow">
            15K
          </div>
        </div>
      </div>
    </div>
  );
}

export function NotificationCard() {
  return (
    <div className="bg-white w-full h-full rounded-xl p-6 shadow-md text-center">
      <h3 className="text-gray-800 font-medium mb-4">Notifications</h3>
      <div className="w-16 h-16 rounded-full bg-[#4A00FF] mx-auto flex items-center justify-center mb-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V4a2 2 0 10-4 0v1.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
          />
        </svg>
      </div>
      <p className="text-3xl font-bold text-[#4A00FF] mb-2">236k</p>
      <p className="text-gray-600 text-sm">People views on this product</p>
    </div>
  );
}

export const CreditCard = () => {
  return (
    <div className=" w-full  h-full rounded-2xl p-4 text-white bg-gradient-to-b from-pink-500 to-purple-600 relative shadow-lg">
      <div className="flex justify-between items-start mb-16">
        <span className="text-sm font-semibold">Basic</span>
        <div className="w-10 h-6 rounded-md bg-white flex items-center justify-center">
          <div className="relative w-5 h-5">
            <div className="absolute w-3.5 h-3.5 bg-red-600 rounded-full left-0"></div>
            <div className="absolute w-3.5 h-3.5 bg-yellow-400 rounded-full left-2"></div>
          </div>
        </div>
      </div>

      <div className="mt-4">
        <p className="text-sm opacity-80">Jhon Doe</p>
        <p className="text-lg tracking-widest font-semibold mt-1">
          1234 **** **** 90
        </p>
      </div>
    </div>
  );
};

import { useEffect, useRef } from "react";
import gsap from "gsap";

export const StatsCards = () => {
  const redCircleRef = useRef(null);
  const blueCircleRef = useRef(null);

  useEffect(() => {
    // Animate background circles with GSAP loop
    gsap.to(redCircleRef.current, {
      y: 20,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });

    gsap.to(blueCircleRef.current, {
      x: -30,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });
  }, []);

  return (
    <div className="relative sm:min-h-[475px]  min-h-[100vh]  flex items-center justify-center bg-[#EDEDED] overflow-hidden px-6 mt-12">
      {/* Background Circles */}

      <div
        ref={redCircleRef}
        className="absolute left-38  bottom-0 sm-bottom-12 w-40 h-40 bg-red-500 rounded-full opacity-80 z-0"
      />
      <div
        ref={blueCircleRef}
        className="absolute right-0 top-0  w-52 sm-w-60 md:w-72 h-52 sm:h-60 md:h-72 bg-blue-600 rounded-full opacity-80 z-0"
      />
      {/* Cards Container */}
      <div className="relative z-10 flex flex-wrap justify-center gap-6">
        {[
          { color: "bg-blue-500", text: "25+", desc: "Platforms Launched", sub: "Tailored digital solutions across industries." },
          { color: "bg-red-500", text: "10+", desc: "Active Partnerships", sub: "Driving growth through long-term tech alliances." },
          { color: "bg-green-500", text: "5+", desc: "Years of Experience", sub: "Building scalable web, mobile, and cloud platforms." },
        ].map((card, idx) => (
          <div
            key={idx}
            className="w-full  sm:w-[247px] h-[240px]  sm-h-[300px]  glass-card flex flex-col items-start  justify-between space-y-4 transition-transform duration-300 hover:scale-105"
          >
            {/* Colored Icon Circle */}
            <div
              className={`w-8 h-8 ${card.color} rounded-full flex items-center justify-center text-white text-sm`}
            >
              <span>👥</span>
            </div>
            {/* Stat Text */}
            <div>
              <h2 className="text-6xl font-extrabold  text-[#1E1E1E]">
                {card.text}
              </h2>
              <p className="text-[20px] text-[#999999]">{card.desc}</p>
              <p className="text-sm text-[#999999]">{card.sub}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

import Vector10 from "/Vector10.png";
import PressLogo from "/Presslogo.png";
import Vector11 from "/Vector11.png";
import press1 from "/press1.png";

export const MediaLogoBanner = () => {
  const bannerRef = useRef(null);
  const logosRef = useRef(null);

  const mediaLogos = [
    {
      name: "The Washington Post",
      logo: Vector10,
      className: "text-white font-serif text-lg font-bold",
    },
    {
      name: "Bloomberg",
      logo: PressLogo,
      className: "text-white font-bold text-xl tracking-wide",
    },
    {
      name: "TechCrunch",
      logo: Vector11,
      className: "text-white font-bold text-lg",
    },
    {
      name: "WIRED",
      logo: press1,
      className: "text-white font-bold text-xl tracking-[0.2em]",
    },
  ];

  // Duplicate for smooth infinite scroll
  const duplicatedLogos = [...mediaLogos, ...mediaLogos];

  useEffect(() => {
    if (!bannerRef.current || !logosRef.current) return;

    const banner = bannerRef.current;
    const logosContainer = logosRef.current;

    // Banner fade-in animation
    gsap.fromTo(
      banner,
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
      }
    );

    // Infinite marquee animation
    gsap.to(logosContainer, {
      xPercent: -50,
      repeat: -1,
      duration: 20,
      ease: "linear",
      modifiers: {
        xPercent: gsap.utils.wrap(-100, 0),
      },
    });

    // Hover scale animation
    const logoElements = logosContainer.children;
    Array.from(logoElements).forEach((logo) => {
      const element = logo;

      element.addEventListener("mouseenter", () => {
        gsap.to(element, {
          scale: 1.1,
          duration: 0.3,
          ease: "power2.out",
        });
      });

      element.addEventListener("mouseleave", () => {
        gsap.to(element, {
          scale: 1,
          duration: 0.3,
          ease: "power2.out",
        });
      });
    });

    return () => {
      gsap.killTweensOf([banner, logosContainer]);
    };
  }, []);

  return (
    <div
      ref={bannerRef}
      className="w-full bg-gradient-to-r from-gray-800 via-gray-900 to-black py-6 overflow-hidden"
    >
      <div className="relative max-w-[1280px] px-6 mx-auto h-[110px] flex items-center overflow-hidden">
        <div
          ref={logosRef}
          className="flex items-center gap-16 whitespace-nowrap"
          style={{ width: "200%" }}
        >
          {duplicatedLogos.map((media, index) => (
            <div
              key={index}
              className={`${media.className} cursor-pointer transition-all duration-300 hover:brightness-110 flex-shrink-0 px-8`}
            >
              <img
                src={media.logo}
                alt={media.name}
                className="h-8 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// services

import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  RocketIcon,
  WrenchIcon,
  SmartphoneIcon,
  CodeIcon,
  MessageCircleQuestion,
  FacebookIcon,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export const ServicesSection = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      cardsRef.current,
      {
        opacity: 0,
        y: 100,
      },
      {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "restart none none none",
        },
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power4.out",
        stagger: 0.3,
      }
    );
  }, []);

  return (
    <div className="bg-white">
      <section
        ref={sectionRef}
        className="py-12 px-4 md:px-6 lg:px-20 max-w-[1280px] mx-auto   text-center"
      >
        <h2 className="text-2xl md:text-3xl font-bold mb-2">Our Services</h2>
        <p className="text-gray-600 max-w-xl mx-auto mb-10">
          From design to deployment, our services are built to accelerate your digital success. Explore how NeuroLogics helps businesses thrive with smart, scalable tech solutions.
        </p>

        <div className="sm:grid sm:grid-cols-3 sm:grid-rows-2 sm:gap-2 flex flex-col gap-4">
          <div
            ref={(el) => (cardsRef.current[0] = el)}
            className="col-span-1 row-span-2 bg-gradient-to-b from-white from-0% to-[#dedede1a] to-2% rounded-2xl p-6 shadow-md text-left flex flex-col justify-between"
          >
            <img src="./screensm.jpg" alt="Macbook" />
            <h3 className="font-semibold text-lg mb-2">Complete Digital Solutions Under One Roof</h3>
            <p className="text-sm text-gray-600">
              At NeuroLogics, we don't just offer services—we deliver end-to-end digital transformation. From intuitive design to full-stack development and growth strategies, we power every stage of your digital journey.
            </p>
          </div>

          <div
            ref={(el) => (cardsRef.current[1] = el)}
            className="bg-gradient-to-b from-white from-0% to-[#dedede1a] to-2% rounded-2xl p-6 shadow-md flex flex-col justify-between"
          >
            <div className="w-10 h-10 bg-violet-600 rounded-lg flex items-center justify-center mb-4">
              <RocketIcon className="text-white w-5 h-5" />
            </div>
            <h3 className="font-semibold text-left text-lg">UI/UX Design</h3>
            <p className="text-left text-sm text-gray-600">
              Crafting user-first, intuitive designs that elevate digital experiences and boost engagement.
            </p>
          </div>

          <div
            ref={(el) => (cardsRef.current[2] = el)}
            className="bg-gradient-to-b from-white from-0% to-[#dedede1a] to-2%   rounded-2xl p-6 shadow-md flex flex-col justify-between"
          >
            <div className="w-10 h-10 bg-red-500 rounded-lg flex items-center justify-center mb-4">
              <WrenchIcon className="text-white w-5 h-5" />
            </div>
            <h3 className="font-semibold text-left text-lg">Web & App Development</h3>
            <p className="text-left text-sm text-gray-600">
              Building fast, secure, and scalable web and mobile applications tailored to your goals.
            </p>
          </div>

          <div
            ref={(el) => (cardsRef.current[3] = el)}
            className="bg-gradient-to-b from-white from-0% to-[#dedede1a] to-2% rounded-2xl p-6 shadow-md flex flex-col justify-between"
          >
            <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center mb-4">
              <SmartphoneIcon className="text-white w-5 h-5" />
            </div>
            <h3 className="font-semibold text-left text-lg">Digital Marketing</h3>
            <p className="text-left text-sm text-gray-600">
              Driving visibility, traffic, and conversion through smart, data-driven strategies.
            </p>
          </div>

          <div
            ref={(el) => (cardsRef.current[4] = el)}
            className="bg-gradient-to-b from-white from-0% to-[#dedede1a] to-2% rounded-2xl p-6 shadow-md flex flex-col justify-between"
          >
            <div className="w-10 h-10 bg-yellow-400 rounded-lg flex items-center justify-center mb-4">
              <CodeIcon className="text-white w-5 h-5" />
            </div>
            <h3 className="font-semibold text-left text-lg">Product-Based Services</h3>
            <p className="text-left text-sm text-gray-600">
              Offering tailored support, integration, and enhancement for NeuroLogics' proprietary tech solutions.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

// icons spread

// import slack from "/slack.png"
// import googlemeet from "/googlemeet.png"
// import vscode  from "/vs_code.png"
// import python  from "/python.png"
// import notion from "/notion.png"
// import nodejs from "/node_js.png"
// import micresoft from "/microsoft.png"
// import github from "/github.png"
// import git from "/git.png"
// import figma from "/figma.png"
// import apple from "/apple.png"
// import css3 from "/css_3.png"
// import android from "/android.png"
// import adobeXd from "/adobe_xd.png"
// import adobePhotoshop from "/adobe_photoshop.png"
// import adobeIllustrator from "/adobe_illustrator.png"
// import js from "/js.png"
// gsap.registerPlugin(ScrollTrigger);

// const icons = [
//   slack,googlemeet , js , vscode  ,python, notion , nodejs, micresoft, github, git, figma, apple, css3,adobeIllustrator, android, adobeXd, adobePhotoshop

// ];

// // Replace these with real images later

// gsap.registerPlugin(ScrollTrigger);

// export const TechIconsSpread = () => {
//   const containerRef = useRef(null);
//   const iconRefs = useRef([]);

//   useEffect(() => {
//     iconRefs.current = iconRefs.current.slice(0, icons.length);

//     const ctx = gsap.context(() => {
//       gsap.set(iconRefs.current, {
//         x: 0,
//         y: 0,
//         scale: 0.3,
//         opacity: 0,
//       });

//       ScrollTrigger.create({
//         trigger: containerRef.current,
//         start: "top 80%",
//         toggleActions: "restart none none reverse", // ensures re-animating on re-entry
//         onEnter: () => {
//           gsap.to(iconRefs.current, {
//             x: (i) => Math.cos(i * 1.3) * 60,
//             y: (i) => Math.sin(i * 1.4) * 60,
//             opacity: 1,
//             scale: 1,
//             duration: 1,
//             ease: "back.out(1.7)",
//             stagger: 0.05,
//             onComplete: () => {
//               iconRefs.current.forEach((icon) => {
//                 gsap.to(icon, {
//                   x: `+=${Math.random() * 10 - 5}`,
//                   y: `+=${Math.random() * 10 - 5}`,
//                   repeat: -1,
//                   yoyo: true,
//                   duration: 2 + Math.random(),
//                   ease: "sine.inOut",
//                 });
//               });
//             },
//           });
//         },
//         onLeaveBack: () => {
//           gsap.set(iconRefs.current, {
//             x: 0,
//             y: 0,
//             scale: 0.3,
//             opacity: 0,
//           });
//         },
//       });
//     }, containerRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <section
//       ref={containerRef}
//       className="py-16 px-6 md:px-20 bg-gray-100 flex flex-col md:flex-row items-center justify-between gap-10"
//     >
//       <div className="max-w-xl text-left">
//         <h2 className="text-2xl md:text-3xl font-bold mb-4">
//           Lorem ipsum dolor sit amet consectetur. Blandit aliquet malesuada
//           tristique adipiscing nunc. Iaculis ipsum.
//         </h2>
//         <p className="text-gray-600">
//           Lorem ipsum dolor sit amet consectetur. Adipiscing nunc ac mi libero
//           tellus massa sed etiam nis. Phasellus vitae adipiscing imperdiet
//           elit. Vitae pulvinar et feugiat lobortis accumsan tempor aliquam.
//         </p>
//       </div>
//       <div className="grid grid-cols-4 gap-4 w-full max-w-md">
//         {icons.map((Icon, index) => (
//           <div
//             key={index}
//             ref={(el) => (iconRefs.current[index] = el)}
//             className="w-14 h-14 bg-white rounded-xl shadow-md flex items-center justify-center"
//           >
//             <img src={icons[index]}/>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

export const TechIconsSpread = () => {
  const containerRef = useRef(null);
  const iconRefs = useRef([]);
  const textRef = useRef(null);

  const icons = [
    { src: "/slack.png", name: "Slack" },
    { src: "/googlemeet.png", name: "Google Meet" },
    { src: "/js.png", name: "JavaScript" },
    { src: "/vs_code.png", name: "VS Code" },
    { src: "/python.png", name: "Python" },
    { src: "/notion.png", name: "Notion" },
    { src: "/node_js.png", name: "Node.js" },
    { src: "/microsoft.png", name: "Microsoft" },
    { src: "/github.png", name: "GitHub" },
    { src: "/git.png", name: "Git" },
    { src: "/figma.png", name: "Figma" },
    { src: "/apple.png", name: "Apple" },
    { src: "/css_3.png", name: "CSS3" },
    { src: "/adobe_illustrator.png", name: "Adobe Illustrator" },
    { src: "/android.png", name: "Android" },
    { src: "/adobe_xd.png", name: "Adobe XD" },
    { src: "/adobe_photoshop.png", name: "Adobe Photoshop" },
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    iconRefs.current = iconRefs.current.slice(0, icons.length);

    const ctx = gsap.context(() => {
      // Initial state
      gsap.set(iconRefs.current, {
        scale: 0,
        opacity: 0,
        rotation: 180,
      });

      gsap.set(textRef.current, {
        x: -50,
        opacity: 0,
      });

      // Create ScrollTrigger animation
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "restart none none reverse",
        onEnter: () => {
          // Animate text first
          gsap.to(textRef.current, {
            x: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
          });

          // Then animate icons with stagger
          gsap.to(iconRefs.current, {
            scale: 1,
            opacity: 1,
            rotation: 0,
            duration: 0.6,
            ease: "back.out(1.7)",
            stagger: {
              amount: 0.8,
              from: "random",
            },
            delay: 0.3,
            onComplete: () => {
              // Add floating animation
              iconRefs.current.forEach((icon, index) => {
                if (icon) {
                  gsap.to(icon, {
                    y: `+=${Math.sin(index) * 8}`,
                    x: `+=${Math.cos(index) * 5}`,
                    rotation: `+=${Math.random() * 10 - 5}`,
                    repeat: -1,
                    yoyo: true,
                    duration: 2 + Math.random() * 2,
                    ease: "sine.inOut",
                    delay: Math.random() * 2,
                  });
                }
              });
            },
          });
        },
        onLeaveBack: () => {
          gsap.killTweensOf(iconRefs.current);
          gsap.set(iconRefs.current, {
            scale: 0,
            opacity: 0,
            rotation: 180,
            x: 0,
            y: 0,
          });
          gsap.set(textRef.current, {
            x: -50,
            opacity: 0,
          });
        },
      });

      // Add hover animations
      iconRefs.current.forEach((icon) => {
        if (icon) {
          icon.addEventListener("mouseenter", () => {
            gsap.to(icon, {
              scale: 1.2,
              rotation: 360,
              duration: 0.3,
              ease: "power2.out",
            });
          });

          icon.addEventListener("mouseleave", () => {
            gsap.to(icon, {
              scale: 1,
              rotation: 0,
              duration: 0.3,
              ease: "power2.out",
            });
          });
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className=" py-6 md:py-16 px-6 md:px-12 lg:px-20 bg-gradient-to-br from-gray-50 to-gray-100 min-h-[70vh] flex items-center"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <div ref={textRef} className="space-y-6">
            <h2 className="text-2xl md:text-3xl lg:text-3xl font-bold text-gray-900 leading-tight">
              Cutting-Edge Technologies and Proven Techniques That Power Every Project
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              We leverage the latest tools, frameworks, and industry best practices to build high-performance digital platforms. At NeuroLogics, staying ahead of the curve is part of our DNA. We use modern technologies like React, Node.js, Flutter, Python, and cloud services such as AWS and Firebase to create fast, secure, and scalable solutions. Our team follows agile methodologies, CI/CD pipelines, and responsive design principles to ensure seamless development and efficient delivery. Whether it's front-end brilliance, back-end architecture, or mobile responsiveness—we combine innovation with reliability to deliver tech that lasts.
            </p>
          </div>

          {/* Icons Grid */}
          <div className="relative">
            <div className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-4 gap-4 md:gap-4">
              {icons.map((icon, index) => (
                <div
                  key={index}
                  ref={(el) => (iconRefs.current[index] = el)}
                  className="w-20 h-20 md:w-16 md:h-16 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex items-center justify-center cursor-pointer group overflow-hidden"
                >
                  <img
                    src={icon.src}
                    alt={icon.name}
                    className="w-8 h-8 md:w-10 md:h-10 object-contain group-hover:scale-110 transition-transform duration-300"
                    onError={(e) => {
                      const target = e.target;
                      target.style.display = "none";
                    }}
                  />
                </div>
              ))}
            </div>

            {/* Decorative background elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-100 rounded-full opacity-20 -z-10"></div>
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-purple-100 rounded-full opacity-20 -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

// download section

// gsap.registerPlugin(ScrollTrigger);

// export const DownloadSection = () => {
//   const sectionRef = useRef(null);

//   useEffect(() => {
//     gsap.fromTo(
//       sectionRef.current,
//       { opacity: 0, y: 50 },
//       {
//         opacity: 1,
//         y: 0,
//         duration: 1.2,
//         ease: "power3.out",
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: "top 80%",
//           toggleActions: "play none none reset",
//         },
//       }
//     );
//   }, []);

//   return (
//     <div className="w-full bg-[#1E1E1E] ">
//   <section
//       ref={sectionRef}
//       className=" max-w-[1280px] mx-auto    bg-[#1E1E1E] overflow-hidden   relative text-white flex flex-col md:flex-row  justify-between"
//     >

//       <img src="/image12.png" className=" iis absolute w-[386px]   left-0  md:left-[30%] rotate-28   top-0 sm:top-[10%] -z-10 h-[386px]" alt="" />
//       {/* Left Phone Preview */}
//       <div className="hidden  sm:w-1/2 md:flex justify-center relative pt-12">
//           {/* Placeholder image for phone screen */}
//           <img
//             src="/ex1.png"
//             alt="App Preview"
//             className=" object-contain w-[341px] h-[550px]    absolute -bottom-[2%]  left-[25%]"
//           />
//       </div>

//       {/* Right Content */}
//       <div className=" px-[40px] pt-[100px] md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left backdrop-blur-[10px] bg-white/10 h-full ">
//         <h2 className="text-2xl md:text-3xl font-bold mb-4">
//           Lorem ipsum dolor sit amet consectetur. <br /> Blandit aliquet malesuada.
//         </h2>
//         <p className="text-white  font-medium mb-6 max-w-lg">
//           Lorem ipsum dolor sit amet consectetur. Adipiscing nunc ac mi libero tellus massa sed enim. Phasellus vitae adipiscing imperdiet elit placerat.
//         </p>

//         {/* Buttons */}
//         <div className="flex  flex-row sm:flex-row gap-4 mb-10  self-end">
//           <a href="#" className="flex items-center px-4 py-2 bg-white/20 rounded-md">

//             <img
//               src="/googleplay.png"
//               alt="Get it on Google Play"
//               className="h-[19px] w-[25px] object-contain"
//             />
//             <div className="flex flex-col">
//                   <span className="text-[12px]">Get it on</span>
//                   <span className=" font-semibold text-[12px]">Google Play</span>
//             </div>
//           </a>
//           <a href="#" className="flex items-center px-4 py-2 bg-white/20 rounded-md">
//             <img
//               src="/applelogo.png"
//               alt="Download on the App Store"
//               className="h-[19px] w-[25px] object-contain"
//             />
//              <div className="flex flex-col">
//                   <span className="text-[12px]">Get it on</span>
//                   <span className="font-semibold text-[12px]">App Store</span>
//             </div>
//           </a>
//         </div>

//         {/* Stats */}
//         <div className="flex flex-col py-4  sm:flex-row   gap-4 w-full justify-center md:justify-start">
//           {[1, 2, 3].map((item, index) => (
//             <div
//               key={index}
//               className="backdrop-blur-md bg-white/10 border border-white/20 rounded-xl px-6 py-4 text-center"
//             >
//               <h3 className="text-2xl font-bold">100+</h3>
//               <p className="text-sm text-gray-300">Lorem ipsum dolor</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//     </div>

//   );
// };

gsap.registerPlugin(ScrollTrigger);

export const DownloadSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    // Animate section on enter & re-enter
    const anim = () => {
      gsap.fromTo(
        sectionRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
        }
      );
    };

    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top 80%",
      onEnter: anim,
      onEnterBack: anim,
    });

    // Floating animation on .iis image
    gsap.to(".iis", {
      y: -20,
      duration: 2,
      ease: "power1.inOut",
      repeat: -1,
      yoyo: true,
    });
  }, []);

  return (
    <div className="w-full bg-[#1E1E1E] ">
      <section
        ref={sectionRef}
        className=" max-w-[1280px] mx-auto    bg-[#1E1E1E] overflow-hidden   relative text-white flex flex-col md:flex-row  justify-between"
      >
        <img
          src="/image12.png"
          className=" iis absolute w-[386px]   left-0  md:left-[30%] rotate-28   top-0 sm:top-[10%] -z-10 h-[386px]"
          alt=""
        />
        {/* Left Phone Preview */}
        <div className="hidden  sm:w-1/2 md:flex justify-center relative pt-12">
          <img
            src="/ex1.png"
            alt="App Preview"
            className=" object-contain w-[341px] h-[550px]    absolute -bottom-[2%]  left-[25%]"
          />
        </div>

        {/* Right Content */}
        <div className=" px-[12px] md:px-[40px] pt-[100px] md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left backdrop-blur-[10px] bg-white/10 h-full ">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Experience the Flavors of Asia at Your Fingertips. Download the Asian Cart App Today
          </h2>
          <p className="text-white  font-medium mb-6 ">
            Shop spices with ease, convenience, and confidence—right from your phone. The Asian Cart app brings the full marketplace experience to your mobile device. Browse a wide range of authentic spices, get personalized recommendations, enjoy secure payments, and track your orders in real-time. Designed for speed and simplicity, the app ensures a smooth shopping journey—from cart to kitchen. Download now and explore the rich taste of tradition, delivered.
          </p>

          {/* Buttons */}
          <div className="flex  flex-row sm:flex-row gap-4 mb-10  self-end">
            <a
              href="#"
              className="flex items-center px-4 py-2 bg-white/20 rounded-md"
            >
              <img
                src="/googleplay.png"
                alt="Get it on Google Play"
                className="h-[19px] w-[25px] object-contain"
              />
              <div className="flex flex-col">
                <span className="text-[12px]">Get it on</span>
                <span className=" font-semibold text-[12px]">Google Play</span>
              </div>
            </a>
            <a
              href="#"
              className="flex items-center px-4 py-2 bg-white/20 rounded-md"
            >
              <img
                src="/applelogo.png"
                alt="Download on the App Store"
                className="h-[19px] w-[25px] object-contain"
              />
              <div className="flex flex-col">
                <span className="text-[12px]">Get it on</span>
                <span className="font-semibold text-[12px]">App Store</span>
              </div>
            </a>
          </div>

          {/* Stats */}
          <div className="flex flex-col py-4  sm:flex-row   gap-4 w-full justify-center md:justify-start">
            {[
              { value: "10,000+", label: "App Downloads" },
              { value: "500+", label: "Products Available" },
              { value: "4.8", label: "Average Rating" },
            ].map((stat, index) => (
              <div
                key={index}
                className="backdrop-blur-md bg-white/10 border border-white/20 rounded-xl px-6 py-4 text-center"
              >
                <h3 className="text-2xl font-bold">{stat.value}</h3>
                <p className="text-sm text-gray-300">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

// faqs section

// FaqComponent.jsx

gsap.registerPlugin(ScrollTrigger);

const faqs = [
  {
    question: "What services does NeuroLogics offer?",
    answer:
      "We provide end-to-end digital solutions including UI/UX design, web and mobile development, digital marketing, tech consulting, and support for our own digital products.",
  },
  {
    question: "Can I get a custom solution tailored to my business?",
    answer:
      "Absolutely. We specialize in building custom platforms that match your specific goals, workflow, and industry requirements.",
  },
  {
    question: "What industries do you serve?",
    answer:
      "Our solutions are industry-agnostic, but we've successfully worked across eCommerce, logistics, travel, healthtech, and more.",
  },
  {
    question: "Is the Asian Cart app free to use?",
    answer:
      "Yes, the app is completely free to download and use. You only pay for the products you purchase.",
  },
  {
    question: "How can I get in touch for a project or consultation?",
    answer:
      "You can contact us through our website's contact form, email, or phone. We'll get back to you quickly to discuss your needs.",
  },
];

export const FaqComponent = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const containerRef = useRef(null);
  const rocketRef = useRef(null);

  const toggleFAQ = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  useEffect(() => {
    const element = containerRef.current;

    const ctx = gsap.context(() => {
      // Animate the entire section when it comes into view
      gsap.fromTo(
        element,
        { autoAlpha: 0, y: 50 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: element,
            start: "top 80%",
            toggleActions: "play none none reset",
            markers: false,
          },
        }
      );

      // Infinite floating rocket animation
      gsap.to(rocketRef.current, {
        y: -20,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="bg-gradient-to-br from-[#FFE3E3] via-[#FFFFFF] to-[#D2D1FF]">
      <div
        ref={containerRef}
        className="max-w-[1280px] mx-auto w-full min-h-[80vh] flex flex-col lg:flex-row items-start justify-center gap-8 px-6 py-12 "
      >
        {/* Left Side */}
        <div className=" min-h-[428px] backdrop-blur-lg rounded-2xl p-6 sm:p-8 max-w-xl shadow-lg relative flex-1">
          <span className="text-sm text-gray-700 mb-2 bg-white/60 backdrop-blur-md border border-white/30 px-4 py-2 rounded-3xl flex items-center justify-center w-[190px]">
            Frequently Asked Questions
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-800 text-sm leading-relaxed">
            We understand that starting a digital project—or exploring a new platform—can come with a lot of questions. That's why we've compiled answers to the most common inquiries from clients and users alike. Whether you're curious about our services, development process, or specific product features like the Asian Cart app, this section is here to give you clarity and confidence as you engage with NeuroLogics.
          </p>
          <img
            ref={rocketRef}
            src="/rocket.png"
            alt="rocket"
            className=" hidden   md:block absolute w-32 right-0 sm:w-32 bottom-[-20px] sm:bottom-[-30px] sm:right-[-30px]  left-0 rotate-45"
          />
        </div>

        {/* Right Side */}
        <div className="flex-1 flex flex-col gap-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white/40 backdrop-blur-md border border-white/20 rounded-xl p-4 shadow-md transition-all duration-300 cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex items-start gap-3">
                <div className="min-w-6 min-h-6  p-1 bg-[#34C759] flex items-center justify-center rounded">
                  <MessageCircleQuestion color="white" size={16} />
                </div>
                <div>
                  <h3 className="font-semibold text-black text-sm sm:text-base">
                    {faq.question}
                  </h3>
                  {activeIndex === index && (
                    <p className="text-sm text-gray-800 mt-2">{faq.answer}</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// footer

import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Dribbble,
  HandMetal,
  Github,
} from "lucide-react";
gsap.registerPlugin(ScrollTrigger);

export const FooterComponent = () => {
  const footerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        footerRef.current,
        { autoAlpha: 0, y: 50 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 90%",
            toggleActions: "play none none reset",
          },
        }
      );
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer
      ref={footerRef}
      className="bg-gradient-to-br from-[#FFE3E3] via-[#FFFFFF] to-[#D2D1FF] text-black px-6 py-10 md:py-16 lg:px-20 w-full"
    >
      <div className="max-w-7xl mx-auto   grid gap-8 md:grid-cols-3">
        <div className="md:col-span-2 bg-red-400">
          <h2 className="text-lg sm:text-xl font-semibold">
            Lorem ipsum dolor sit amet consectetur.{" "}
            <span className="text-indigo-600 font-bold">Facilisis non.</span>
          </h2>
          <p className="text-sm text-gray-700 mt-2">
            Lorem ipsum dolor sit amet consectetur.
          </p>
        </div>

        <div className="flex flex-col items-start gap-3 justify-center">
          <div className="flex gap-2">
            <button className="bg-indigo-600 text-white px-4 py-2 text-sm rounded-md">
              Contact Us
            </button>
            <button className="bg-white text-black px-4 py-2 text-sm rounded-md">
              Learn More
            </button>
          </div>
          <span className="text-sm font-semibold text-indigo-600 mt-3">
            Get Asian Cart app
          </span>
          <div className="flex gap-2">
            <img src="/appstore.png" alt="App Store" className="h-10" />
            <img src="/googleplay.png" alt="Google Play" className="h-10" />
          </div>
        </div>

        <div className="md:col-span-3 border-t border-gray-300 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8">
            <div className="flex items-center gap-2">
              <img src="/logo.png" alt="logo" className="h-6" />
              <p className="text-sm text-gray-600">
                Design amazing digital experiences that create more happy in the
                world.
              </p>
            </div>
            <nav className="flex flex-wrap gap-4 text-sm text-indigo-600 font-medium">
              <a href="#">Home</a>
              <a href="#">Services</a>
              <a href="#">Projects</a>
              <a href="#">About Us</a>
              <a href="#">Contact Us</a>
            </nav>
          </div>

          <div className="flex items-center gap-4 mt-6 md:mt-0">
            <Facebook className="w-5 h-5 text-gray-600" />
            <Linkedin className="w-5 h-5 text-gray-600" />
            <Instagram className="w-5 h-5 text-gray-600" />
            <Twitter className="w-5 h-5 text-gray-600" />
            <Github className="w-5 h-5 text-gray-600" />
            <HandMetal className="w-5 h-5 text-gray-600" />
            <Dribbble className="w-5 h-5 text-gray-600" />
          </div>
        </div>

        <div className="md:col-span-3 text-center text-xs text-gray-500 mt-6">
          © 2077 Untitled UI. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

// footer



// hero contact page



gsap.registerPlugin(ScrollTrigger);

export function ContactHero() {
  const imageRefs = useRef([]);
  const titleRef = useRef(null);
  const paraRef = useRef(null);

  useEffect(() => {
    // Animate main container
    gsap.from(".contact-hero-container", {
      opacity: 0,
      y: 50,
      duration: 1.2,
      ease: "power2.out",
    });

    // Animate headline and paragraph
    gsap.from(titleRef.current, {
      opacity: 0,
      y: 40,
      duration: 1.2,
      delay: 0.3,
      ease: "power3.out",
    });

    gsap.from(paraRef.current, {
      opacity: 0,
      y: 30,
      duration: 1,
      delay: 0.6,
      ease: "power3.out",
    });

    // Animate each floating image
    imageRefs.current.forEach((img, i) => {
      gsap.fromTo(
        img,
        { scale: 0.9, opacity: 0 },
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          delay: i * 0.1,
          ease: "power2.out",
        }
      );

      // Infinite float animation
      gsap.to(img, {
        y: "+=15",
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    });
  }, []);

  return (
    <div className="overflow-hidden">
      <div className="relative">
        <div className="pt-14 contact-hero-container">
          <img
            src="/f20.png"
            className="absolute left-[50%] translate-x-[-50%] top-[30%]"
            alt=""
          />

          {/* Floating Icons */}
          <img
            ref={(el) => (imageRefs.current[0] = el)}
            src="/rocket.png"
            className="absolute bottom-[1%] w-[120px] sm:w-[140px] md:w-[166px]"
            alt=""
          />
          <img
            ref={(el) => (imageRefs.current[1] = el)}
            src="/Bitgreen.png"
            className="absolute top-[8%] left-[52%] w-[64px] sm:w-[80px]"
            alt=""
          />
          <img
            ref={(el) => (imageRefs.current[2] = el)}
            src="/Mythos.png"
            className="absolute top-[15%] right-[14%] w-[64px] sm:w-[80px]"
            alt=""
          />
          <img
            ref={(el) => (imageRefs.current[3] = el)}
            src="/Joystream2.png"
            className="absolute top-[25%] right-[22%] w-[64px] sm:w-[80px]"
            alt=""
          />
          <img
            ref={(el) => (imageRefs.current[4] = el)}
            src="/camera.png"
            className="absolute left-[10%] top-[27%] w-[72px] sm:w-[96px]"
            alt=""
          />
          <img
            ref={(el) => (imageRefs.current[5] = el)}
            src="/Darwinia2.png"
            className="absolute top-[12%] left-[7%] w-[64px] sm:w-[80px]"
            alt=""
          />
          <img
            ref={(el) => (imageRefs.current[6] = el)}
            src="/Astar.png"
            className="absolute top-[4%] right-[26%] w-[64px] sm:w-[80px]"
            alt=""
          />

          {/* Hero Content */}
          <section className="max-w-[1240px] mx-auto bg-transparent relative pt-[100px] px-4 z-50">
            <div className="text-center pb-8">
              <span
                className="inline-block px-5 py-3 rounded-full text-sm text-gray-500 font-medium"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(67, 0, 255, 0) 0%, rgba(67, 0, 255, 0.08) 100%)",
                }}
              >
                Explore Our Tech Stack
              </span>
            </div>

            <h1
              ref={titleRef}
              className="text-center text-[26px] md:text-5xl font-bold mb-8 md:leading-tight"
            >
              Smart{" "}
              <span
                className="text-black px-2 py-1 rounded"
                style={{
                  background: "linear-gradient(90deg, #FF0000, #FF6666)",
                  backgroundSize: "200% auto",
                }}
              >
                tech
              </span>{" "}
              meets your
              <span
                className="ml-2 px-2 py-1 rounded text-black"
                style={{
                  background: "linear-gradient(90deg, #FFD700, #FFEF8B)",
                  backgroundSize: "200% auto",
                }}
              >
                bold vision.
              </span>
              <br />
              Delivering results at the speed of{" "}
              <span className="relative font-bold">
                innovation.
                <img
                  src={"/vector1.png"}
                  alt="line vector"
                  className="vector-line absolute left-[2px] md:top-[40px] top-[20px]"
                />
              </span>
            </h1>

            <p
              ref={paraRef}
              className="text-center max-w-2xl mx-auto text-[#1E1E1E] font-[400] mb-6"
            >
              At NeuroLogics, we turn breakthrough ideas into scalable platforms.
              With modern frameworks and cloud tools like React, Flutter, Firebase,
              and AWS—we build future-ready solutions that move your business forward.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}


// _________________________-

gsap.registerPlugin(ScrollTrigger);


import { BrainCog, LayoutTemplate, Code2, Rocket } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export const WorkingMethodology = () => {
  const sectionRef = useRef(null);
  const glassRef = useRef(null);
  const redCircleRef = useRef(null);
  const purpleCircleRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "restart none none reset",
        },
      }
    );

    gsap.from(".kk", {
      opacity: 0,
      scale: 0.8,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        toggleActions: "restart none none reset",
      },
    });

    gsap.utils.toArray(".method-card").forEach((card, index) => {
      gsap.from(card, {
        opacity: 0,
        y: 40,
        duration: 0.8,
        delay: 0.2 + index * 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "restart none none reset",
        },
      });
    });

    gsap.to(redCircleRef.current, {
      x: 50,
      y: 30,
      duration: 6,
      yoyo: true,
      repeat: -1,
      ease: "sine.inOut",
    });

    gsap.to(purpleCircleRef.current, {
      x: -50,
      y: -40,
      duration: 7,
      yoyo: true,
      repeat: -1,
      ease: "sine.inOut",
    });
  }, []);

  const icons = {
    Ideate: <BrainCog className="w-6 h-6" />,
    Design: <LayoutTemplate className="w-6 h-6" />,
    Develop: <Code2 className="w-6 h-6" />,
    Deploy: <Rocket className="w-6 h-6" />,
  };

  return (
    <section
      ref={sectionRef}
      className="relative bg-gray-100 overflow-hidden py-20 px-4 md:px-16"
    >
      {/* Circles */}
      <div
        ref={redCircleRef}
        className="absolute w-72 h-72 bg-[#FF3B30] rounded-full top-[-60px] left-[-60px] opacity-60 z-0"
      ></div>
      <div
        ref={purpleCircleRef}
        className="absolute w-96 h-96 bg-purple-600 rounded-full bottom-[-100px] right-[-80px] opacity-70 z-0"
      ></div>

      <div className="max-w-[1280px] mx-auto relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">
        {/* KK Image */}
        <img
          ref={glassRef}
          src="/glass.png"
          alt="glass"
          className="kk h-[200px] w-[200px] absolute -right-8 -top-[20%] z-10"
        />

        {/* Content Box */}
        <div className="backdrop-blur-[20px] bg-white/60 rounded-2xl p-6 md:p-10 shadow-md w-full">
          <h2 className="text-xl md:text-2xl font-bold text-black mb-2">
            Our Methodology
          </h2>
          <p className="text-sm text-[#1E1E1E] mb-4 max-w-[572px]">
            At NeuroLogics, we believe that a successful digital product is born from a clear, well-structured process. Our methodology is designed to align with your business goals at every stage—from the first spark of an idea to post-launch optimization. We work closely with you to understand your needs, transform them into smart designs, develop with precision, and deploy solutions that are reliable, scalable, and future-ready. It's a collaborative, end-to-end approach that ensures innovation, efficiency, and long-term impact.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                title: "Ideate",
                desc: "We kick off by diving deep into your business goals, market needs, and user expectations—laying a strong strategic foundation for the product ahead.",
              },
              {
                title: "Design",
                desc: "Our team crafts thoughtful, user-centered interfaces that not only look great but also enhance usability and engagement across every screen.",
              },
              {
                title: "Develop",
                desc: "Using modern frameworks and best coding practices, we build secure, scalable, and high-performance web and mobile applications that grow with your business.",
              },
              {
                title: "Deploy",
                desc: "With careful testing and optimization, we launch your product smoothly—followed by continuous support and improvements to keep it running at its best.",
              },
            ].map((card, i) => (
              <div
                key={i}
                className="method-card bg-white rounded-xl shadow-md px-4 py-6 flex flex-col items-center text-center"
              >
                <div className="bg-violet-600 text-white rounded-full p-3 mb-4 flex items-center justify-center">
                  {icons[card.title]}
                </div>
                <h3 className="font-semibold text-gray-800 mb-1">
                  {card.title}
                </h3>
                <p className="text-sm text-gray-600">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};


// contact

gsap.registerPlugin(ScrollTrigger);

export const ContactSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full min-h-screen flex flex-col lg:flex-row"
    >
      {/* Left Form Section */}
      <div className="w-full lg:w-1/2 bg-[#6C2BD9] text-white p-10 flex flex-col justify-center">
        <span className="mb-2 inline-block bg-white/10 px-3 py-1 rounded-full text-sm">
          Touch result
        </span>
        <h2 className="text-3xl md:text-4xl font-bold mb-2">
          Start with a <span className="text-yellow-400">Message</span>
        </h2>
        <form className="mt-6 space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full px-4 py-2 rounded-md bg-white/20 text-white placeholder-white focus:outline-none"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 rounded-md bg-white/20 text-white placeholder-white focus:outline-none"
          />
          <div className="flex gap-4">
            <input
              type="text"
              placeholder="Phone Number"
              className="w-1/2 px-4 py-2 rounded-md bg-white/20 text-white placeholder-white focus:outline-none"
            />
            <input
              type="text"
              placeholder="City"
              className="w-1/2 px-4 py-2 rounded-md bg-white/20 text-white placeholder-white focus:outline-none"
            />
          </div>
          <textarea
            placeholder="Message"
            rows="4"
            className="w-full px-4 py-2 rounded-md bg-white/20 text-white placeholder-white focus:outline-none"
          />
        </form>
      </div>

      {/* Right Image Section */}
      <div className="w-full lg:w-1/2 relative">
        <img
          src="/group-photo.png"
          alt="Group of students"
          className="w-full h-full object-cover"
        />
        <div className="absolute top-6 left-6 bg-white/80 px-4 py-2 rounded shadow text-sm font-semibold text-gray-900">
          It starts with you
        </div>
        <div className="absolute top-14 left-6 bg-yellow-400 px-5 py-2 rounded-md text-lg font-bold text-gray-900">
          Don't miss out!
        </div>
        {/* Decorative shapes */}
        <div className="absolute top-0 left-0 w-28 h-28 border-8 border-yellow-400 rounded-full animate-pulse opacity-20" />
        <div className="absolute bottom-0 right-0 w-32 h-32 border-8 border-purple-600 rounded-full animate-ping opacity-30" />
      </div>
    </section>
  );
};

// contact

export function Contact() {
  const sectionRef = useRef(null);
  const handRef = useRef(null);

  useEffect(() => {
    // Fade up animation on view
    gsap.fromTo(
      sectionRef.current,
      { autoAlpha: 0, y: 50 },
      {
        autoAlpha: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      }
    );

    // Shake animation for hand
    gsap.to(handRef.current, {
      rotation: 15,
      yoyo: true,
      repeat: -1,
      duration: 0.5,
      ease: "power1.inOut",
    });
  }, []);

  return (
    <div className="bg-gradient-to-r from-gray-100 to-gray-200 p-6">
      <section
        ref={sectionRef}
        className="min-h-screen max-w-[1280px] mx-auto flex items-center justify-center "
      >
        <div className="flex flex-col md:flex-row gap-8 bg-white rounded-2xl shadow-xl p-8 w-full max-w-5xl">
          {/* Left Content */}
          <div className="flex-1 space-y-4">
            <h2 className="text-2xl font-bold">Contact Us</h2>
            <p className="text-sm text-gray-600">
            Have a project in mind or just want to connect? We’re here to help. Let’s build something great together—reach out today!
            </p>
            <button className="bg-purple-600 text-white px-4 py-2 rounded-md text-sm hover:bg-purple-700">
              Learn More
            </button>
            <div className="mt-6 flex justify-end">
              <img
                ref={handRef}
                src="https://em-content.zobj.net/source/microsoft-teams/337/waving-hand_1f44b.png"
                alt="waving hand"
                className="w-32 h-32"
              />
            </div>
          </div>

          {/* Right Content - Contact Form */}
          <div className="flex-1 space-y-4">
            <h2 className="text-2xl font-bold">Send us a Message</h2>
            <form className="space-y-3">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full px-4 py-2  bg-gradient-to-b from-gray-50 to-white  border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
              <input
                type="text"
                placeholder="Phone Number"
                className="w-full px-4 py-2 border bg-gradient-to-b from-gray-50 to-white border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-2 border border-gray-300  bg-gradient-to-b from-gray-50 to-white rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
              <textarea
                placeholder="Message"
                className="w-full px-4 py-2 border border-gray-300  bg-gradient-to-b from-gray-50 to-white rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 min-h-[100px]"
              ></textarea>
              <button
                type="submit"
                className="bg-purple-600 text-white px-6 py-2 rounded-md hover:bg-purple-700"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

// \map

gsap.registerPlugin(ScrollTrigger);

export function ContactMapSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    // Fade up animation on view
    gsap.fromTo(
      sectionRef.current,
      { autoAlpha: 0, y: 50 },
      {
        autoAlpha: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-100 to-gray-200 mdp-6 sm:px-2"
    >
      <div className="flex flex-col md:flex-row gap-8 bg-white rounded-2xl shadow-xl p-4 w-full max-w-6xl">
        {/* Left Content - Map */}
        <div className="flex-1 space-y-4">
          <h2 className="text-2xl font-bold">Find Us</h2>
          {/* <iframe
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19804.247331735055!2d-0.1285905!3d51.5032975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604c1d0c69755%3A0x912496d9c8440f11!2sLondon%20Eye!5e0!3m2!1sen!2suk!4v1717583891427!5m2!1sen!2suk"
            className="w-full md:h-[609px]  rounded-md border"
            allowFullScreen=""
            loading="lazy"
          ></iframe> */}
          <iframe
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d13303.682358795668!2d73.10540909435271!3d33.529450209223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sAster%206%2C%20Riverview%20hill%20%2C%20Bahria%20%20Phase%207%20%2C%20Rwalpindi%20Pakistan%20!5e0!3m2!1sen!2s!4v1750664296985!5m2!1sen!2s"
          className="w-full md:h-[609px]  rounded-md border"
          allowFullScreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"></iframe>
          <div className="flex flex-col md:flex-row items-center justify-between text-sm text-gray-700 pt-2">
            <div className="flex items-center gap-2  ">
              <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
              info@neurologics.com 
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
              +923325281886 
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
              +92312508859
            </div>
          </div>
        </div>

        {/* Right Content - Contact Form */}
        <div className="flex-1 space-y-4">
          <h2 className="text-2xl font-bold">Contact Us</h2>
          <p className="text-sm text-gray-600">
          Ready to bring your vision to life? Fill out the form below and our expert team will connect with you to discuss how NeuroLogics can craft the perfect digital solution for your business.


          </p>
          <form className="space-y-3 flex flex-col gap-4">
            <input
              type="text"
              placeholder="First Name"
              className="w-full px-4 py-2  bg-gradient-to-b from-gray-50 to-white  border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="w-full px-4 py-2 bg-gradient-to-b from-gray-50 to-white  border  border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
            <input
              type="text"
              placeholder="Phone Number"
              className="w-full px-4 py-2 border   bg-gradient-to-b from-gray-50 to-white  border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
            <input
              type="text"
              placeholder="Address"
              className="w-full px-4 py-2 border bg-gradient-to-b from-gray-50 to-white border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 border  bg-gradient-to-b from-gray-50 to-white border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
            <textarea
              placeholder="Message"
              className="w-full px-4 py-2 border bg-gradient-to-b from-gray-50 to-white border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 min-h-[100px]"
            ></textarea>
            <button
              type="submit"
              className="bg-purple-600 text-white  px-6 py-2 rounded-md hover:bg-purple-700"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

// 22

gsap.registerPlugin(ScrollTrigger);

export function WhoWeAreSection() {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(sectionRef.current, {
        autoAlpha: 0,
        y: 50,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      gsap.from(contentRef.current, {
        opacity: 0,
        y: 40,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="bg-[#f5f5f5] ">
      <section ref={sectionRef} className="max-w-[1280px] mx-auto px-6 py-12   ">
        <div className='bg-[#EDEDED] flex justify-between gap-4 p-[20px] rounded-xl mb-[40px] items-center md:flex-row flex-col  '>
          <div className="">
            <h1 className="text-[27px] font-bold">Who we are ? </h1>
            <p className="max-w-[508px] pt-[14px]">
            We craft future-ready platforms that help businesses grow. From design to deployment, our solutions are smart, scalable, and built to last.
            </p>
          </div>
          <button className="p-[13px] bg-[#4300FF]  hover:bg-[#400FF] transition text-white rounded-xl">Contact Us</button>
        </div>
        <div
          className="flex flex-col md:flex-row items-center gap-8"
          ref={contentRef}
        >
          <div className="md:w-1/2 w-full">
            <img
              src="/whoweare.jpg"
              alt="developers working"
              className="rounded-lg w-full h-auto object-cover"
            />
          </div>

          <div className="md:w-1/2 w-full">
            <h2 className="text-2xl font-semibold mb-2">Who We Are</h2>
            <p className="text-gray-600 mb-4">
              Lorem ipsum dolor sit amet consectetur. Felis neque fermentum
              tellus consectetur imperdiet iaculis elit arcu.
            </p>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet consectetur. Commodo nisl vulputate
              purus tortor facilisis nulla odio quam. Purus placerat condimentum
              diam placerat massa nibh. A nibh habitant aliquam facilisi. Arcu
              parturient in orci mi amet ac non et quam at. Sem sit in interdum
              habitant nec mollis. Orci laoreet metus sodales placerat lorem.
              Massa accidit ut faucibus rhoncus aliquet. Id scelerisque metus
              sed ut massa sagittis integer eu. Viverra tristique suspendisse
              pretium praesent, risus porttitor id adipiscing egestas sit
              condimentum.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

//

gsap.registerPlugin(ScrollTrigger);

const timelineData = [
  {
    title: "Idea and Team",
    image: "/i1.jpg",
  },
  {
    title: "Startup",
    image: "/i2.jpg",
  },
  {
    title: "System Ideation",
    image: "/i3.jpg",
  },
  {
    title: "Product MVP",
    image: "/i4.jpg",
  },
];

export function WhoWeAreSection2() {
  const sectionRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    gsap.fromTo(
      sectionRef.current,
      { autoAlpha: 0, y: 50 },
      {
        autoAlpha: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="min-h-screen bg-black text-white px-6 py-12 flex flex-col items-center justify-center"
    >
      <div className="w-full max-w-6xl">
        <div className="mb-8">
          <p className="text-sm text-gray-300">NeuroLogics Journey</p>
          <h2 className="text-3xl font-bold mb-2">Our Journey</h2>
          <p className="text-gray-400 max-w-xl">
          NeuroLogics evolves ideas into innovative, scalable tech solutions. Here’s how we bring your vision to life — from spark to solution.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {timelineData.map((item, index) => (
            <div
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`cursor-pointer transform transition duration-500 rounded-xl overflow-hidden shadow-lg ${
                activeIndex === index
                  ? "scale-110 rotate-2 z-10"
                  : "opacity-60 hover:opacity-100"
              }`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover"
              />
              <p
                className={`text-center text-sm py-2 ${
                  activeIndex === index
                    ? "text-yellow-400 font-bold"
                    : "text-gray-300"
                }`}
              >
                {item.title}
              </p>
            </div>
          ))}
        </div>

        <div className="relative w-full h-8 flex items-center justify-between">
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-700 transform -translate-y-1/2"></div>
          {timelineData.map((_, index) => (
            <div
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`relative z-10 h-5 w-5 rounded-full border-2 border-white cursor-pointer transition-all duration-300 ${
                activeIndex === index
                  ? "bg-yellow-400 scale-125"
                  : "bg-gray-600"
              }`}
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
}

// team

"use client";


import { ChevronLeft, ChevronRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const teamData = [
  {
    name: "Muhammad Jawad",
    image: "/jawad.jpg",
    role: "CEO",
  },
  {
    name: "Saima Tamaz",
    image: "/saimaTamaz.jpeg",
    role: "COO Islamabad",
  },
  {
    name: "Tahir Farooq",
    image: "/tahirFarooq.jpeg",
    role: "Business Development Officer France",
  },
  {
    name: "Muhammad Ehsan",
    image: "/muhammadEhsan.jpeg",
    role: "Business Development Officer Germany",
  },
];

export function ExpertTeamSection() {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const cardRefs = useRef([]);
  const [scrollIndex, setScrollIndex] = useState(0);

  useEffect(() => {
    gsap.fromTo(
      sectionRef.current,
      { autoAlpha: 0, y: 50 },
      {
        autoAlpha: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      }
    );

    cardRefs.current.forEach((card, i) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: i * 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
          },
        }
      );
    });
  }, []);

  const handleScroll = (direction) => {
    const container = containerRef.current;
    const cardWidth = container.firstChild.offsetWidth + 16;
    const visibleCards = Math.floor(container.offsetWidth / cardWidth);
    const maxIndex = teamData.length - visibleCards;
    let newIndex = direction === "next" ? scrollIndex + 1 : scrollIndex - 1;
    newIndex = Math.max(0, Math.min(newIndex, maxIndex));
    setScrollIndex(newIndex);
    container.scrollTo({ left: newIndex * cardWidth, behavior: "smooth" });
  };

  return (
    <section ref={sectionRef} className="px-6 py-12 max-w-7xl mx-auto w-full">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-10 gap-6">
        <div>
          <span className="text-sm text-gray-500 bg-slate-100 px-4 py-2 rounded-full inline-block mb-2">
            Executive Team
          </span>
          <h2 className="text-3xl font-bold mb-2">Our Expert Team</h2>
          <p className="text-gray-600 max-w-xl">
            Meet the minds behind NeuroLogics. Our skilled team blends creativity, strategy, and tech to craft impactful digital platforms.
          </p>
        </div>
        <div className="flex gap-3">
          <button
            onClick={() => handleScroll("prev")}
            className="bg-gray-200 p-2 rounded-full hover:bg-gray-300"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => handleScroll("next")}
            className="bg-[#5A00F0] text-white p-2 rounded-full hover:bg-purple-700"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div
        ref={containerRef}
        className="flex gap-4 overflow-hidden no-scrollbar scroll-smooth"
        style={{ scrollbarWidth: "none" }}
      >
        {teamData.map((member, idx) => (
          <div
            ref={(el) => (cardRefs.current[idx] = el)}
            key={idx}
            className="w-[260px] sm:w-[280px] flex-shrink-0 bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-60 object-cover object-center"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800">
                {member.name}
              </h3>
              <p className="text-sm text-gray-500">{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}



// our projects
"use client";
import { ShoppingCart, Ship, Truck, MapPin } from "lucide-react";

export function OurProjects() {
  return (
    <div className="bg-white py-4 pb-6">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="flex flex-col items-center py-8">
          <h1 className="text-2xl font-bold py-4">Our Projects</h1>
          <p className="max-w-[508px] text-center">
            Explore how NeuroLogics transforms ideas into impactful digital platforms tailored to real-world business needs.
          </p>
        </div>

        {/* cards grid */}
        <div className="min-h-[80vh] grid grid-cols-4 gap-4">
          <div className="bg-blue-300 lg:col-span-2 row-span-2 sm:col-span-2 col-span-4">
            <img src="/img900.jpg" className="h-full object-cover" alt="" />
          </div>

          {/* Card: Asian Cart */}
          <div className="lg:col-span-1 sm:col-span-2 col-span-4 px-5 pt-5 flex flex-col rounded-xl gap-4 bg-[#DEDEDE]">
            <div>
              <div className="w-[48px] h-[48px] rounded-2xl bg-red-500 flex items-center justify-center text-white">
                <ShoppingCart size={20} />
              </div>
            </div>
            <div>
              <h4 className="font-bold text-[22px]">Asain Cart</h4>
              <p className="text-sm text-[#999999] pb-4">
                An intuitive eCommerce platform designed to sell and manage a wide variety of authentic spices online.
              </p>
              <img src="/ScreenPart.png" />
            </div>
          </div>

          {/* Card: Oil Shipper */}
          <div className="lg:col-span-1 sm:col-span-2 col-span-4 px-5 pt-5 flex flex-col gap-4 rounded-xl bg-[#DEDEDE]">
            <div>
              <div className="w-[48px] h-[48px] rounded-2xl bg-red-500 flex items-center justify-center text-white">
                <Ship size={20} />
              </div>
            </div>
            <div>
              <h4 className="font-bold text-[22px]">Oil Shipper</h4>
              <p className="text-sm text-[#999999] pb-4">
                A smart logistics system built to streamline oil shipping operations with real-time tracking and management.
              </p>
              <img src="/ScreenPart.png" />
            </div>
          </div>

          {/* Card: Tanker */}
          <div className="lg:col-span-1 sm:col-span-2 col-span-4 px-5 pt-5 flex flex-col gap-4 rounded-xl bg-[#DEDEDE]">
            <div>
              <div className="w-[48px] h-[48px] rounded-2xl bg-red-500 flex items-center justify-center text-white">
                <Truck size={20} />
              </div>
            </div>
            <div>
              <h4 className="font-bold text-[22px]">Tanker</h4>
              <p className="text-sm text-[#999999] pb-4">
                A robust trucking management solution developed to optimize fleet operations and logistics workflows.
              </p>
              <img src="/ScreenPart.png" />
            </div>
          </div>

          {/* Card: TripPano */}
          <div className="lg:col-span-1 sm:col-span-2 col-span-4 px-5 pt-5 flex flex-col gap-4 rounded-xl bg-[#DEDEDE]">
            <div>
              <div className="w-[48px] h-[48px] rounded-2xl bg-red-500 flex items-center justify-center text-white">
                <MapPin size={20} />
              </div>
            </div>
            <div>
              <h4 className="font-bold text-[22px]">TripPano</h4>
              <p className="text-sm text-[#999999] pb-4">
                A user-friendly mobile app for seamless trip planning, booking, and travel itinerary management.
              </p>
              <img src="/ScreenPart.png" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// hero 2
gsap.registerPlugin(ScrollTrigger);

export function Hero2() {
  const headingRef = useRef(null);
  const sectionRef = useRef(null);

  const img1Ref = useRef(null);
  const img2Ref = useRef(null);
  const img3Ref = useRef(null);

  useEffect(() => {
    // Fade-up animation on scroll
    gsap.from(sectionRef.current, {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
      },
    });

    // Heading animation on mount
    gsap.from(headingRef.current, {
      opacity: 0,
      y: -50,
      duration: 1,
      ease: "power3.out",
    });

    // Animate vector line
    gsap.from(".vector-line", {
      opacity: 0,
      x: -20,
      duration: 1,
      delay: 0.5,
      ease: "power3.out",
    });

    // Faster and infinite 360 rotation animation
    gsap.to(img1Ref.current, {
      rotate: 360,
      repeat: -1,
      duration: 6, // was 10
      ease: "none",
    });

    gsap.to(img2Ref.current, {
      rotate: 360,
      repeat: -1,
      duration: 8, // was 14
      ease: "none",
    });

    gsap.to(img3Ref.current, {
      rotate: 360,
      repeat: -1,
      duration: 10, // was 20
      ease: "none",
    });

    // Floating animation for phone mockup
    gsap.to(".mockup-float", {
      y: 15,
      repeat: -1,
      yoyo: true,
      duration: 2,
      ease: "sine.inOut",
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="max-w-[1240px] mx-auto top-2  left-0 right-0 z-50 px-2 sm:px-4 lg:px-6"
    >
      {/* Top Label */}
      <div className="text-center mb-8">
        <span
          className="inline-block px-5 py-3 rounded-full text-sm text-gray-500 text-[15px] font-medium"
          style={{
            background:
              "linear-gradient(180deg, rgba(67, 0, 255, 0) 0%, rgba(67, 0, 255, 0.08) 100%)",
          }}
        >
          Empowering Digital Innovation for Forward-Thinking Businesses
        </span>
      </div>

      {/* Main Heading */}
      <h1
        ref={headingRef}
        className="text-center text-[26px] md:text-5xl font-bold mb-8 md:leading-tight"
      >
        Custom-Built Tech Solutions That Drive Growth From Concept to Code.<br />
        <span
          className="text-black px-2 py-1 rounded"
          style={{
            background: "linear-gradient(90deg, #FFffff, #FF6666)",
            backgroundSize: "200% auto",
          }}
        >
          We Build Future-Ready Platforms
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

      {/* animated section */}
      <div className="relative min-h-[500px] max-w-[1280px] max-auto px-6 ">
        {/* Small images */}
        <div
          ref={img1Ref}
          className="w-[48px] h-[48px] absolute top-[11%]  left-[0%]  sm:left-[23%] rounded-2xl bg-blue-700"
        >
          <img src="./Joystream.png" alt="" />
        </div>
        <img
          ref={img2Ref}
          src="./Bitgreen.png"
          className="absolute sm:top-[42%]   bottom-[0%]  left-[16%]"
          alt=""
        />
        <img
          ref={img3Ref}
          src="./DeepBrain.png"
          className="absolute right-[13%] w-[30px] h-[30px] sm:w-[80px] sm:h-[80px]   -top-[2%] md:top-[38%]"
          alt=""
        />

        <img
          src="/frame31.png"
          className="absolute left-[24%] top-[10%]  sm:top-[29%] z-10"
          alt=""
        />
        <img
          src="/frame30.png"
          className="absolute left-[56%] top-[34%] z-10"
          alt=""
        />

        {/* Large images */}
        <img src="/f20.png" alt="" />
        <img
          src="/mockup1.png"
          className="mockup-float absolute top-10 sm:w-[380px] w-[280px] left-[50%] transform -translate-x-1/2"
          alt=""
        />
      </div>
    </section>
  );
}

// asian cart

export function AsianCard() {
  const formRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      formRef.current,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out", delay: 0.2 }
    );
  }, []);

  return (
    <div className="max-w-[1280px] mx-auto mt-[100px] px-6">
      {/* Heading Section */}
      <div className="text-center flex flex-col justify-center items-center">
        <h3 className="text-[#1E1E1E] text-[27px] font-bold">Asain Card</h3>
        <p className="text-[#1E1E1E] max-w-[508px] pt-4 text-[17px]">
        An eCommerce platform built to simplify the online sale of spices with a smooth, user-friendly shopping experience. 
        </p>
      </div>

      {/* Card & Macbook Images */}
      <div className="flex justify-center items-center flex-col">
        <div className="mt-[50px] flex flex-col justify-center items-center">
          <img src="./mackbook.png" alt="Macbook" />
        </div>
        <div
          className="md:max-w-[59vw] w-[100vw] 
         flex justify-center items-center bg-red-500"
        >
          <img src="./cards.png" alt="Cards" className="w-full" />
        </div>

        {/* Form + Image Section */}
        <div className="w-full md:max-w-[59vw] bg-[#7537ea] ">
          <div className="flex flex-col md:flex-row w-full">
            {/* Form Side */}
            <div
              ref={formRef}
              className="md:flex-1 p-4 overflow-auto"
              style={{ maxHeight: "100%" }}
            >
              <div className="bg-slate-50 rounded-2xl w-fit py-4 px-4 text-sm flex items-center justify-center mb-3">
                Touch us Out
              </div>
              <h2 className="text-white text-xl font-semibold mb-4">
                Start With a message
              </h2>

              <form action="" className="space-y-4">
                {/* Fullname */}
                <div>
                  <label className="block text-white text-sm mb-1">
                    Fullname
                  </label>
                  <input
                    type="text"
                    name="fullname"
                    placeholder="Your name"
                    className="w-full bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-4 py-2 text-white placeholder-white/60 focus:outline-none"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-white text-sm mb-1">Email</label>
                  <input
                    type="text"
                    name="email"
                    placeholder="Your email"
                    className="w-full bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-4 py-2 text-white placeholder-white/60 focus:outline-none"
                  />
                </div>

                {/* Phone & City */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white text-sm mb-1">
                      Phone number
                    </label>
                    <input
                      type="text"
                      name="phonenumber"
                      placeholder="Your phone"
                      className="w-full bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-4 py-2 text-white placeholder-white/60 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-white text-sm mb-1">
                      City
                    </label>
                    <input
                      type="text"
                      name="city"
                      placeholder="Your city"
                      className="w-full bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-4 py-2 text-white placeholder-white/60 focus:outline-none"
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-white text-sm mb-1">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows="4"
                    placeholder="Write your message..."
                    className="w-full bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-4 py-2 text-white placeholder-white/60 focus:outline-none resize-none"
                  ></textarea>
                </div>
              </form>
            </div>

            {/* Image Side */}
            <div className="hidden md:flex  md:flex-1 max-h-full">
              <img
                src="/group.jpeg"
                className="w-full h-full object-cover rounded-b-xl md:rounded-none md:rounded-r-xl"
                alt="Group"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// graphs

import { BarChart, Bar, LabelList, Cell } from "recharts";

// Data for the chart
const data2 = [
  { day: 11, value: 58 },
  { day: 12, value: 45 },
  { day: 13, value: 63 },
  { day: 14, value: 64, highlight: true }, // Highlighted bar
  { day: 15, value: 35 },
  { day: 16, value: 50 },
  { day: 17, value: 48 },
  { day: 18, value: 55 },
  { day: 19, value: 39 },
  { day: 20, value: 51 },
];

// Custom tooltip
const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length && payload[0].payload.highlight) {
    return (
      <div className="bg-black text-white text-xs px-2 py-1 rounded-lg shadow">
        {payload[0].value}%
      </div>
    );
  }
  return null;
};

export const ProgressChart = () => {
  return (
    <div className="bg-gray-200 p-6 rounded-xl w-full">
      <h2 className="text-lg font-semibold mb-4">Progress</h2>
      <div className="w-full h-56">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data2}>
            <XAxis
              dataKey="day"
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12 }}
            />
            <Tooltip
              content={<CustomTooltip />}
              cursor={{ fill: "transparent" }}
            />
            <Bar
              dataKey="value"
              radius={[10, 10, 0, 0]}
              barSize={20}
              background={{ fill: "#d1d5db", radius: [10, 10, 0, 0] }} // light gray
            >
              <LabelList
                dataKey="value"
                content={({ x, y, value, index }) => {
                  const isHighlighted = data2[index].highlight;
                  if (!isHighlighted) return null;
                  return (
                    <text
                      x={x + 10}
                      y={y - 10}
                      fill="#fff"
                      textAnchor="middle"
                      className="text-xs font-medium"
                    >
                      {value}%
                    </text>
                  );
                }}
              />
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={entry.highlight ? "#ff5722" : "#1f2937"} // orange & dark gray
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

// Chart 1: PerformanceChart.jsx

const performanceData = [
  { name: "1", value: 72 },
  { name: "2", value: 76 },
  { name: "3", value: 62 },
  { name: "4", value: 78 },
  { name: "5", value: 65 },
  { name: "6", value: 70 },
  { name: "7", value: 79 },
  { name: "8", value: 80 },
  { name: "9", value: 76 },
  { name: "10", value: 79 },
];

export const PerformanceChart = () => {
  return (
    <div className="bg-purple-800 text-white p-4 rounded-2xl w-[371px]">
      <div className="text-xs bg-purple-500 inline-block px-2 py-1 rounded-full mb-2">
        PERFORMANCE
      </div>
      <div className="text-4xl font-bold">+280%</div>
      <div className="text-sm mb-4">in the past 30 days</div>
      <ResponsiveContainer width="100%" height={120}>
        <BarChart data={performanceData}>
          <XAxis dataKey="name" hide />
          <YAxis hide />
          <Tooltip />
          <Bar dataKey="value" radius={[5, 5, 0, 0]} barSize={12}>
            {performanceData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill="#d9a5f2" />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
      <div className="text-xs mt-2 text-center">SEE ALL</div>
    </div>
  );
};

// Chart 2: TrendsChart.jsx

const trendsData = [
  { name: "Mon", value: 50 },
  { name: "Tue", value: 60 },
  { name: "Wed", value: 70 },
  { name: "Thu", value: 72 },
  { name: "Fri", value: 66 },
  { name: "Sat", value: 65 },
  { name: "Sun", value: 67 },
];

export const TrendsChart = () => {
  return (
    <div className="bg-blue-200 text-black p-4 rounded-xl w-[184px]">
      <div className="text-xl font-bold mb-2">Trends</div>
      <div className="text-3xl font-bold mb-4">72,5%</div>
      <ResponsiveContainer width="100%" height={80}>
        <BarChart data={trendsData}>
          <XAxis dataKey="name" hide />
          <Tooltip />
          <Bar dataKey="value" radius={[10, 10, 0, 0]} barSize={12}>
            {trendsData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill="#0066ff" />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

// Chart 3: SkillsRadarChart.jsx
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
} from "recharts";
import Hero from "./Hero";
import { Link } from "react-router-dom";

const skillsData = [
  { subject: "UI", A: 82 },
  { subject: "UX", A: 72 },
  { subject: "Soft skills", A: 88 },
  { subject: "Design", A: 78 },
  { subject: "Skill set", A: 75 },
];

export const SkillsRadarChart = () => {
  return (
    <div className="bg-lime-200 text-black p-4 rounded-2xl w-[285px]">
      <div className="text-xl font-semibold mb-2">Skill set</div>
      <ResponsiveContainer width="100%" height={250}>
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={skillsData}>
          <PolarGrid stroke="#999" />
          <PolarAngleAxis dataKey="subject" />
          <PolarRadiusAxis angle={30} domain={[0, 100]} />
          <Radar
            name="Skill"
            dataKey="A"
            stroke="#333"
            fill="#008080"
            fillOpacity={0.6}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

//

// Chart 4: AnalyticsLineChart.jsx

const analyticsData = [
  { month: "JAN", a: 40, b: 20 },
  { month: "FEB", a: 60, b: 30 },
  { month: "MAR", a: 50, b: 45 },
  { month: "APR", a: 70, b: 50 },
  { month: "MAY", a: 80, b: 55 },
  { month: "JUN", a: 65, b: 60 },
  { month: "JUL", a: 90, b: 70 },
  { month: "AUG", a: 100, b: 85 },
];

export const AnalyticsLineChart = () => {
  return (
    <div className="bg-white text-black p-4 rounded-xl  w-[371px] h-[184px] shadow">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-lg font-semibold">Analytics</h3>
        <span className="text-xs text-gray-500">2024–2025</span>
      </div>
      <ResponsiveContainer width="100%" height={140}>
        <LineChart data={analyticsData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis hide />
          <Tooltip />
          <Line type="monotone" dataKey="a" stroke="#ec4899" strokeWidth={3} />
          <Line type="monotone" dataKey="b" stroke="#22d3ee" strokeWidth={3} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

// services grid
"use client";







gsap.registerPlugin(ScrollTrigger);

export function ServicesGrid() {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <div ref={sectionRef} className="max-w-[1280px] min-h-screen px-6 mx-auto">
      <div className="text-center mb-8">
        <span
          className="inline-block px-5 py-3 rounded-full text-sm text-gray-500 text-[15px] font-medium"
          style={{
            background:
              "linear-gradient(180deg, rgba(67, 0, 255, 0) 0%, rgba(67, 0, 255, 0.08) 100%)",
          }}
        >
          Our Services
        </span>
      </div>

      {/* heading */}
      <div className="text-center mb-6 w-full flex justify-center">
        <h1 className="sm:text-[50px] text-[35px] leading-16 font-bold max-w-[892px]">
          Scalable 
          <span className="text-black px-2 py-1 rounded" style={{ background: "linear-gradient(90deg, #FFffff, #FF6666)", backgroundSize: "200% auto", }} > Digital Solutions</span>That Grow With You
        </h1>
      </div>

      {/* Sub Text */}
      <p className="text-center max-w-2xl mx-auto text-[#1E1E1E] font-[400] mb-6">
        We build future-ready web, mobile, and cloud platforms tailored to your business goals. From strategy to deployment, NeuroLogics delivers innovation that drives success.
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

      <div className="sm:grid hidden grid-rows-2  grid-cols-6 ">
        <div className="col-start-1 col-end-3 row-start-1 row-end-3">
          <img src="./img102.jpg" className="w-full h-full object-cover" alt="" />
        </div>
        <div className="col-start-2 col-end-5 row-start-1 pb-4 px-4 row-end-2 bg-[#EDEDED]">
          <ProgressChart />
        </div>
        <div className="row-start-1 row-end-3 col-start-5 col-end-8">
          <img src="./img101.jpg" className="w-full h-full object-cover" alt="" />
        </div>
        <div className="row-start-2 row-end-3 col-start-3 col-end-6 relative z-14 px-4 pt-4 bg-[#EDEDED]">
          <AnalyticsChart />
        </div>
      </div>

      <div className="grid sm:hidden grid-rows-2 grid-cols-2 ">
        <div className="col-span-2 row-span-2 bg-[#EDEDED]">
          <ProgressChart />
        </div>
        <div className="col-span-2 row-span-2 bg-[#EDEDED]">
          <AnalyticsChart />
        </div>
      </div>
    </div>
  );
}

// About us Hero
export function AboutHero() {
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(sectionRef.current, {
        autoAlpha: 0,
        y: 50,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      gsap.from(cardRefs.current, {
        opacity: 0,
        y: 40,
        duration: 1,
        stagger: 0.3,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative max-w-[1280px] mx-auto left-0 right-0 z-50 px-2 sm:px-4 lg:px-6"
    >
      {/* Top Label */}
      <div className="text-center mb-8">
        <span
          className="inline-block px-5 py-3 rounded-full text-sm text-gray-500 text-[15px] font-medium"
          style={{
            background:
              "linear-gradient(180deg, rgba(67, 0, 255, 0) 0%, rgba(67, 0, 255, 0.08) 100%)",
          }}
        >
          Driving Innovation
        </span>
      </div>

      {/* heading */}
      <div className="text-center mb-6 w-full flex justify-center">
        <h1 className="sm:text-[50px] text-[35px] leading-12 font-bold max-w-[892px]">
        Powering Innovation Through Custom Digital Solutions
        </h1>
      </div>

      {/* Sub Text */}
      <p className="text-center max-w-2xl mx-auto text-[#1E1E1E] font-[400] mb-6">
      At NeuroLogics, we specialize in building future-ready platforms that help businesses grow. With expert teams and cutting-edge tech, we turn bold ideas into smart, scalable digital experiences.
      </p>

        <div className="flex justify-center gap-4 mb-10">
              <button className="bg-[#4300FF] text-white px-6 py-2 font-semibold rounded-full hover:bg-indigo-700 transition">
                Get Started
              </button>
              <button className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-300 transition">
                Learn More
              </button>
            </div>

      {/* cards */}
      <div className="relative h-[600px] -z-1">
        <img src="/f20.png" alt="" />
        <div
          className="absolute top-0"
          ref={(el) => (cardRefs.current[0] = el)}
        >
          <PerformanceChart />
        </div>
        <div
          className="absolute sm:left-[25%] sm:top-[30%] top-[31%] left-[12%]"
          ref={(el) => (cardRefs.current[1] = el)}
        >
          <TrendsChart />
        </div>
        <div
          className="absolute sm:right-[0%] md:left-[42%] top-[8%] sm:top-[0%]"
          ref={(el) => (cardRefs.current[2] = el)}
        >
          <SkillsRadarChart />
        </div>
        <div
          className="absolute top-[50%] sm:top-[50%] right-0 sm:left-[10%] lg:left-[31%]"
          ref={(el) => (cardRefs.current[3] = el)}
        >
          <AnalyticsLineChart />
        </div>

        <div className="absolute right-[4%] bottom-0">
          <img
            src="/rocket.png"
            className="hidden sm:block left-[64%] rotate-[21deg] w-[200px]  md:w-[400px] bottom-[0%] md:bottom-[18%]"
            alt=""
          />
        </div>
      </div>
      <img
        src="/v3.png"
        className="absolute bottom-0 -left-[12%] z-[-2]"
        alt=""
      />
    </section>
  );
}

// footer


gsap.registerPlugin(ScrollTrigger);

export const Footer = () => {
  const footerRef = useRef(null);

  useEffect(() => {
    const el = footerRef.current;

    gsap.fromTo(
      el,
      { autoAlpha: 0, y: 50 },
      {
        autoAlpha: 1,
        y: 0,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 90%",
        },
      }
    );
  }, []);

  return (
    <div className="bg-gradient-to-r from-[#F9DCDC] via-[#E7E1F5] to-[#DCD9F9] ">
      <footer
        ref={footerRef}
        className=" max-w-[1280px] mx-auto bg-gradient-to-r from-[#F9DCDC] via-[#E7E1F5] to-[#DCD9F9] rounded-2xl  p-6 shadow backdrop-blur-xl text-gray-800"
      >
        {/* Top section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 border-b border-white/30 pb-6">
          <div className="max-w-[750px]">
            <h2 className="text-xl sm:text-2xl font-semibold text-black">
            Smart solutions for modern businesses.{" "}
              <span className="text-violet-600 font-bold">Built to scale, designed to perform.</span>
            </h2>
            <p className="text-gray-600 mt-2">
            We help you turn digital ideas into real-world impact—fast, secure, and future-ready.
            </p>
          </div>
          <div className="flex gap-4">
            <button className="bg-violet-600 text-white px-5 py-2 rounded-md shadow">
              Contact Us
            </button>
            <button className="bg-white text-black px-5 py-2 rounded-md shadow border border-gray-200">
              Learn More
            </button>
          </div>
        </div>

        {/* Middle section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 pt-8 ">
          {/* Logo and description */}
          <div className="flex flex-col gap-2 max-w-sm pb-6">
            <img src="/logo.png" alt="logo" className="w-24" />
            <p className="text-sm text-gray-700">
              Design amazing digital experiences that create more happy in the
              world.
            </p>
          </div>

          {/* App download */}
          <div className="flex flex-col gap-2">
            <span className="text-violet-700 font-semibold">
              Get Asian Cart app
            </span>
            <div className="flex flex-col gap-2">
              <img src="/appstore.png" alt="App Store" className="w-28" />
              <img
                src="/googlestorebadge.png"
                alt="Google Play"
                className="w-28"
              />
            </div>
          </div>
        </div>
        {/* Navigation links */}
        <nav className="flex flex-wrap gap-2 mt-4   sm:gap-6 text-sm text-blue-800 font-semibold border-b border-white/30 pb-4">
          <Link to="/">Home</Link>
          <Link to="/services">Services</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/about-us">About Us</Link>
          <Link to="/contact-us">Contact Us</Link>
        </nav>

        {/* Bottom section */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-6 text-sm text-gray-500">
          <p>© 2025 Neurologics. All rights reserved.</p>
          <div className="flex gap-4 mt-2 md:mt-0 text-gray-400 text-xl">
            <Instagram color="#999999" />
            <FacebookIcon color="#999999" />
            <i className="fab fa-facebook"></i>
            <i className="fab fa-github"></i>
            <i className="fab fa-dribbble"></i>
          </div>
        </div>
      </footer>
    </div>
  );
};

// who we are

gsap.registerPlugin(ScrollTrigger);

export function WhoWeAre() {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(sectionRef.current, {
        autoAlpha: 0,
        y: 50,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      gsap.from(contentRef.current, {
        opacity: 0,
        y: 40,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="bg-[#f5f5f5] ">
      <section ref={sectionRef} className="max-w-[1280px] mx-auto px-6 py-12   ">
        <div className='bg-[#EDEDED] flex justify-between gap-4 p-[20px] rounded-xl mb-[40px] items-center md:flex-row flex-col  '>
          <div className="">
            <h1 className="text-[27px] font-bold">Who we are ? </h1>
            <p className="max-w-[508px] pt-[14px]">
            We craft future-ready platforms that help businesses grow. From design to deployment, our solutions are smart, scalable, and built to last.
            </p>
          </div>
          <button className="p-[13px] bg-[#4300FF]  hover:bg-[#400FF] transition text-white rounded-xl">Contact Us</button>
        </div>
        <div
          className="flex flex-col md:flex-row items-center gap-8"
          ref={contentRef}
        >
          <div className="md:w-1/2 w-full">
            <img
              src="/whoweare.jpg"
              alt="developers working"
              className="rounded-lg w-full h-auto object-cover"
            />
          </div>

          <div className="md:w-1/2 w-full">
            <h2 className="text-2xl font-semibold mb-2">Who We Are</h2>
            <p className="text-gray-600 mb-4">
            Driving digital excellence through innovation and custom technology.
            </p>
            <p className="text-gray-700">
              At NeuroLogics, we specialize in building scalable digital platforms that empower businesses to thrive in an ever-changing tech landscape. With over 5 years of experience and 25+ successful product launches, our team turns complex ideas into seamless web, mobile, and cloud solutions. We don’t just develop software—we deliver strategy, design, and long-term growth. From startups to enterprises, we partner with clients to create future-ready digital experiences that truly make an impact.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
