import React, { useEffect } from "react";
import Hero from "../componeents/HeroScholor";
import Steps from "../componeents/Steps";
import { motion } from "framer-motion";

export default function Scholorship() {
  useEffect(() => {
    document.querySelector(".scholorships").classList.toggle("nav-highlight");
    window.scrollTo(0, 0);
    setTimeout(
      () => document.querySelector("#loader").classList.add("hidden-loader"),
      2000
    );
    return () => {
      document.querySelector(".scholorships").classList.toggle("nav-highlight");
    };
  }, []);
  return (
    <motion.div
      className="conatainer-scholor"
      animate={{ x: "0" }}
      initial={{ x: "-100vw" }}
      transition={{
        duration: 1,
      }}
      exit={{ x: "-100vw" }}
    >
      <Hero />
      <Steps />
    </motion.div>
  );
}
