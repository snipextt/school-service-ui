import React, { useEffect } from "react";
import Hero from "../componeents/HeroScholor";
import Steps from "../componeents/Steps";
import Carousel from "../componeents/Carousel";
import Form from "../componeents/Form";
import { motion } from "framer-motion";
import Zoom from "react-reveal/Zoom";

export default function Scholorship() {
  useEffect(() => {
    document.querySelector(".scholorships").classList.toggle("nav-highlight");
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
      <br />
      <Carousel />
      <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-2 mt-4 lg:mb-4 text-center">
        Apply for a Scholorship
      </h1>
      <div className="flex lg:flex-row flex-col">
        <Zoom>
          <Steps />
          <Hero />
        </Zoom>
      </div>
      <Zoom>
        <Form />
      </Zoom>
    </motion.div>
  );
}
