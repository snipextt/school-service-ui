import React, { useEffect } from "react";
import Hero from "../componeents/HeroScholor";
import Carousel from "../componeents/Carousel";
import Form from "../componeents/Form";
import { motion } from "framer-motion";
import Zoom from "react-reveal/Zoom";

export default function Scholorship() {
  useEffect(() => {
    //document.querySelector(".scholorships").classList.toggle("nav-highlight");
    setTimeout(
      () => document.querySelector("#loader").classList.add("hidden-loader"),
      2000
    );
    return () => {
      //document.querySelector(".scholorships").classList.toggle("nav-highlight");
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
      <Carousel />

      <section className="relative py-16 bg-gray-300 ">
        <Zoom>
          <Hero />
        </Zoom>
      </section>
      <Zoom>
        <Form />
      </Zoom>
    </motion.div>
  );
}
