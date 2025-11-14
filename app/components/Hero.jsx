"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useState, useEffect } from "react";

const Hero = () => {
  const { scrollYProgress } = useScroll();

  // Scroll animations
  const headingY = useTransform(scrollYProgress, [0, 0.2], [0, -40]);
  const headingOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.4]);

  // Mouse parallax
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [windowSize, setWindowSize] = useState({ w: 0, h: 0 });

  const handleMouseMove = (e) => {
    if (!windowSize.w) return;
    const x = (e.clientX / windowSize.w - 0.5) * 20;
    const y = (e.clientY / windowSize.h - 0.5) * -20;
    setMouse({ x, y });
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      setWindowSize({ w: window.innerWidth, h: window.innerHeight });
      window.addEventListener("mousemove", handleMouseMove);
      return () => window.removeEventListener("mousemove", handleMouseMove);
    }
  }, []);

  return (

    <section
      id="home"
      onMouseMove={handleMouseMove}
      className="relative h-screen w-full text-white"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-80 z-0"
        style={{ backgroundImage: "url('/background1.jpg')" }}
      />
      
      
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 2, ease: "easeInOut" }}
        className="absolute z-10 top-1/2 left-0 w-full h-[1px] bg-black/30 origin-left"
      />
      

      {/* Floating shapes */}
      <motion.div
        animate={{ y: [0, -15, 0], rotate: [0, 15, -15, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute top-1/3 left-16 w-24 h-24 border-2 border-black/30 rounded-lg"
      />
      <motion.div
        animate={{ y: [0, 20, 0], rotate: [0, -10, 10, 0] }}
        transition={{ duration: 12, repeat: Infinity }}
        className="absolute bottom-1/4 right-12 w-40 h-40 border-2 border-black/20 rounded-full"
      />

      {/* Particles */}
      {windowSize.w > 0 &&
        [...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-[3px] h-[3px] bg-[#5f8b98]/50 rounded-full"
            initial={{
              x: Math.random() * windowSize.w,
              y: Math.random() * windowSize.h,
              opacity: 0.3,
            }}
            animate={{
              y: ["0%", "-40%", "0%"],
              opacity: [0.3, 0.7, 0.3],
              scale: [1, 1.4, 1],
            }}
            transition={{
              duration: 6 + Math.random() * 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}

      {/* HERO CONTENT */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center h-full px-6">

        {/* HEADING */}
        <motion.h1
          style={{ y: headingY, opacity: headingOpacity }}
          initial={{ opacity: 0, y: 40 }}
          animate={{
            opacity: 1,
            y: 0,
            rotateX: mouse.y,
            rotateY: mouse.x,
          }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight"
        >
          <span className="text-[#a74c33] z-10">Design 2 </span>
          <span className=" text-[#59d9ff]">Estimate</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          style={{
            opacity: useTransform(scrollYProgress, [0, 0.2], [1, 0.3]),
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-4 text-lg md:text-2xl text-gray-900 max-w-2xl leading-relaxed"
        >

          From design sketches to construction perfection — we plan, estimate,
          and build with precision.
        </motion.p>

        {/* Buttons */}
        <motion.div
          style={{
            opacity: useTransform(scrollYProgress, [0, 0.15], [1, 0]),
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="mt-8 flex flex-wrap justify-center gap-4"
        >
          <button
            onClick={() =>
              document.getElementById("contact")?.scrollIntoView({
                behavior: "smooth",
              })
            }
            className="px-8 py-3 bg-[#976759] text-white font-semibold rounded-full shadow-lg hover:bg-[#825845] transition"
          >
            Get Estimate
          </button>

          <button
            onClick={() =>
              document.getElementById("services")?.scrollIntoView({
                behavior: "smooth",
              })
            }
            className="px-8 py-3 border-2 border-[#60d3f6] text-[#ffffff] font-semibold rounded-full hover:bg-[#5f8b98] hover:text-white transition"
          >
            Our Services
          </button>
        </motion.div>
      </div>

      


    </section>
  );
};

export default Hero;
