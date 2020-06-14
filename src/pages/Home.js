import React, { useEffect } from "react";
import Hero from "../componeents/HeroHome";
import Content from "../componeents/Content";
import Carousel from "../componeents/Carousel";
import Features from "../componeents/Features";
import { motion } from "framer-motion";
import Zoom from "react-reveal/Zoom";

export default function Home() {
  useEffect(() => {
    document.querySelector(".home").classList.toggle("nav-highlight");
    window.scrollTo(0, 0);
    setTimeout(
      () => document.querySelector("#loader").classList.add("hidden-loader"),
      2000
    );
    return () => {
      document.querySelector(".home").classList.toggle("nav-highlight");
    };
  }, []);
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
      <Carousel />
      <Zoom>
        <Hero />
        <div className="content-home ">
          <Content />
          <Features />
        </div>
      </Zoom>
    </motion.div>
  );
}
