import React, { useEffect, useState } from "react";
import Hero from "../componeents/HeroHome";
import Content from "../componeents/Content";
import { motion } from "framer-motion";

export default function Home() {
  const [loadedImages, isLoaded] = useState(0);

  useEffect(() => {
    //document.querySelector(".home").classList.toggle("nav-highlight");
    document.querySelectorAll("img").forEach((img) => {
      img.addEventListener("load", (e) => {
        isLoaded((prevState) => prevState + 1);
      });
    });
    return () => {
      document.querySelector("#loader").classList.remove("hidden-loader");
    };
  }, []);
  useEffect(() => {
    console.log(loadedImages);
    if (loadedImages > 9)
      document.querySelector("#loader").classList.add("hidden-loader");
  }, [loadedImages]);
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
