import React, { useEffect } from "react";
import Hero from "../componeents/HeroHome";
import Content from "../componeents/Content";
import { motion } from "framer-motion";

export default function Home() {
  useEffect(() => {
    //document.querySelector(".home").classList.toggle("nav-highlight");
    setTimeout(
      () => document.querySelector("#loader").classList.add("hidden-loader"),
      2000
    );
    return () => {
      // document.querySelector(".home").classList.toggle("nav-highlight");
    };
  }, []);
  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0.5 }}
      exit={{ opacity: 0.5 }}
      transition={{
        duration: 1.5,
      }}
    >
      {/*<br />*/}

      <Hero />

      <Content />
    </motion.div>
  );
}
