import React from "react";
import { motion } from "framer-motion";

import Seperator from "./Seperator";
// const Card = (props) => {
//   return (
//     <div className="xl:w-1/4 md:w-1/2 p-4 ">
//       <div className="bg-gray-100 p-6 rounded-lg hover:shadow-xl hover:bg-gray-200 duration-700">
//         <img
//           className="h-40 rounded w-full object-fill object-center mb-6"
//           src={require(`../Static/images/${props.imgsrc}`)}
//           alt="content"
//         />
//         <h3 className="tracking-widest text-teal-500 text-xs font-medium title-font">
//           {props.subtitle}
//         </h3>
//         <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
//           {props.course}
//         </h2>
//         <p className="leading-relaxed text-base">{props.content}</p>
//       </div>
//     </div>
//   );
// };

export default function Content() {
  return (
    <>
      <Seperator />
      <div className="w-screen bg-black">
        <section className="text-white body-font">
          <div className="container px-5 py-24 mx-auto flex flex-wrap">
            <div className="flex w-full mb-20 flex-wrap">
              <h1 className="sm:text-4xl text-3xl font-bold title-font text-white  lg:w-2/3 lg:mb-0 mb-4">
                Learn From Industry Experts In Our{" "}
                <span className="text-yellow-600 animate-hue">
                  Live Webinars
                </span>
              </h1>
              <p class="lg:pl-6 lg:w-1/3 mx-auto leading-relaxed text-base text-right">
                <button className="px-8 py-3 font-bold rounded focus:shadow-outline focus:outline-none transition duration-300 inline-block bg-yellow-700 hover:bg-yellow-900 lg:ml-6 mt-6 lg:mt-0 animate-hue">
                  Join Today
                </button>
              </p>
            </div>

            <div className="flex flex-wrap flex-col lg:flex-row md:-m-2 -m-1">
              <div className="flex flex-wrap w-full lg:w-1/2">
                <div className="md:p-2 p-1 w-full lg:w-1/2">
                  <motion.img
                    whileHover={{
                      scale: 1.1,
                      border: "solid",
                    }}
                    whileTap={{ scale: 0.9 }}
                    alt="gallery"
                    className="w-full object-cover h-full object-center block cursor-pointer"
                    src="https://pixabay.com/images/download/students-377789_640.jpg"
                  />
                </div>
                <div className="md:p-2 p-1 w-full lg:w-1/2">
                  <motion.img
                    whileHover={{
                      scale: 1.1,
                      border: "solid",
                    }}
                    whileTap={{ scale: 0.9 }}
                    alt="gallery"
                    className="w-full object-cover h-full object-center block cursor-pointer"
                    src="https://pixabay.com/get/57e5d04a494faa0df7c5997cc22133761d37dce057_640.jpg"
                  />
                </div>
                <div className="md:p-2 p-1 w-full">
                  <motion.img
                    whileHover={{
                      scale: 1.1,
                      border: "solid",
                    }}
                    whileTap={{ scale: 0.9 }}
                    alt="gallery"
                    className="w-full h-full object-cover object-center block cursor-pointer"
                    src="https://pixabay.com/get/53e9d1434352b10ff3d89960c62d3e7a1d37d6e15758_640.jpg"
                  />
                </div>
              </div>
              <div className="flex flex-wrap w-full lg:w-1/2">
                <div className="md:p-2 p-1 w-full">
                  <motion.img
                    whileHover={{
                      scale: 1.1,
                      border: "solid",
                    }}
                    whileTap={{ scale: 0.9 }}
                    alt="gallery"
                    className="w-full h-full object-cover object-center block cursor-pointer"
                    src="https://pixabay.com/images/download/workplace-1245776_640.jpg"
                  />
                </div>
                <div className="md:p-2 p-1 w-full lg:w-1/2">
                  <motion.img
                    whileHover={{
                      scale: 1.1,
                      border: "solid",
                    }}
                    whileTap={{ scale: 0.9 }}
                    alt="gallery"
                    className="w-full object-cover h-full object-center block cursor-pointer"
                    src="https://pixabay.com/images/download/students-377789_640.jpg"
                  />
                </div>
                <div className="md:p-2 p-1 w-full lg:w-1/2">
                  <motion.img
                    whileHover={{
                      scale: 1.1,
                      border: "solid",
                    }}
                    whileTap={{ scale: 0.9 }}
                    alt="gallery"
                    className="w-full object-cover h-full object-center block cursor-pointer"
                    src="https://pixabay.com/get/57e5d04a494faa0df7c5997cc22133761d37dce057_640.jpg"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
