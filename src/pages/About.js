import React, { useEffect } from "react";
import Team from "../componeents/Team";
import Contact from "../componeents/Contact";
import { motion } from "framer-motion";
import Zoom from "react-reveal/Zoom";

export default function About() {
  useEffect(() => {
    document.querySelector(".about").classList.toggle("nav-highlight");
    setTimeout(
      () => document.querySelector("#loader").classList.add("hidden-loader"),
      2000
    );
    return () => {
      document.querySelector(".about").classList.toggle("nav-highlight");
    };
  }, []);
  return (
    <motion.div
      animate={{ x: "0" }}
      initial={{ x: "-100vw" }}
      transition={{
        duration: 1,
        ease: "easeIn",
      }}
    >
      <section className="text-gray-700 body-font">
        <div className="container mx-auto flex py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-20 md:pr-12 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center about-hero ">
            <h1 className="title-font sm:text-4xl text-3xl font-medium text-gray-900 my-0">
              IT Hub School
            </h1>
            <div className="h-1 w-20 bg-teal-500 rounded mb-4" />
            <p className="mb-8 leading-relaxed p-6 lg:p-0 text-center">
              We are an outsourced Project taking and online-training providing
              company founded by Gaurav Roy. Our company has 2 main motives: On
              one hand, we deliver the best & professional learning modules that
              are job-oriented and practical in nature. On the other hand, we
              take freelance projects and outsourced projects from different
              companies worldwide, and smartly deliver the project on time with
              accuracy and efficiency.
            </p>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 ml-8">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src={require("../Static/pm.jpg")}
            />
          </div>
        </div>
      </section>
      <Team />
      <Zoom>
        <Contact />
      </Zoom>
    </motion.div>
  );
}
