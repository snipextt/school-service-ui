import React, { useEffect, useState } from "react";
import Hero from "../componeents/HeroHome";
import Content from "../componeents/Content";
import Features from "../componeents/Features";
import { motion } from "framer-motion";
import Zoom from "react-reveal/Zoom";

export default function Home() {
  const [imageLoaded, setImageLoaded] = useState(false);
  useEffect(() => {
    document.querySelector(".home").classList.toggle("nav-highlight");
    setTimeout(
      () => document.querySelector("#loader").classList.add("hidden-loader"),
      2000
    );
    return () => {
      document.querySelector(".home").classList.toggle("nav-highlight");
    };
  }, [imageLoaded]);
  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{
        duration: 1.5,
      }}
    >
      <br />

      <Hero />
      <div className="content-home ">
        <Zoom>
          <Content />
          <Features />
        </Zoom>
      </div>
    </motion.div>
  );
}
