import React, { useEffect } from "react";
import Hero from "../componeents/HeroScholor";
import Steps from "../componeents/Steps";
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
      className="conatainer-scholor"
      animate={{ x: "0" }}
      initial={{ x: "-100vw" }}
      transition={{
        duration: 1,
      }}
      exit={{ x: "-100vw" }}
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
