import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
const imgArr = [
  "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80",
  "https://i.picsum.photos/id/860/1200/900.jpg?hmac=rI-XmvhYIwkysPTCrfboCialw6I16eUxMyLbh5UQ6gQ",
  "https://i.picsum.photos/id/405/1200/900.jpg?hmac=wI4dgAeSAmvSpxRO0bp1pH40xU6xe36PF6-fNu89kq8",
];
export default function Hero() {
  const [heroImage, setHeroImage] = useState(
    "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80"
  );
  const [index, setIndex] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      setHeroImage(imgArr[index]);
      setIndex((prev) => (prev === imgArr.length - 1 ? 0 : prev + 1));
    }, 6000);
  }, [index]);
  return (
    <div>
      <div
        className="relative pt-16 pb-32 flex content-center items-center justify-center"
        style={{
          minHeight: "75vh",
        }}
      >
        <video autoPlay loop id="myVideo">
          <source
            src={require("../Static/Countdown - 2637.mp4")}
            type="video/mp4"
          />
        </video>
        <div className="absolute top-0 w-full h-full bg-center bg-cover">
          <span
            id="blackOverlay"
            className="w-full h-full absolute opacity-75 bg-black"
          ></span>
        </div>

        <div className="container relative mx-auto">
          <div className="items-center flex flex-wrap">
            <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
              <div className="pr-12">
                <h1 className="text-white font-semibold pl-8 lg: pl-0 text-4xl">
                  Learn From Us
                </h1>
                <p className="mt-4 text-lg text-gray-300 pl-8 lg:pl-0">
                  With the best experts from all over the industry, IT Hub is
                  capable of delivering the best educations. Join us in our
                  upcoming sessions and learn how to kickstart your carrer in no
                  time!
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
          style={{ height: "70px", transform: "translateZ(0)" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-gray-900 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
      </div>
      <section className="pb-20 bg-gray-900 -mt-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap">
            <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
              <div className="relative flex flex-col min-w-0 break-words bg-black w-full mb-8 shadow-lg rounded-lg">
                <div className="px-4 py-5 flex-auto">
                  <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-600">
                    <i className="fas fa-award"></i>
                  </div>
                  <h6 className="text-xl text-white font-semibold">
                    Excellent Teachers
                  </h6>
                  <p className="mt-2 mb-4 text-white">
                    Learn the way, you might never have imagined. At IT Hub, we
                    believe in quality education and teachers.
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full md:w-4/12 px-4 text-center">
              <div className="relative flex flex-col min-w-0 break-words bg-black w-full mb-8 shadow-lg rounded-lg">
                <div className="px-4 py-5 flex-auto">
                  <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-600">
                    <i className="fas fa-retweet"></i>
                  </div>
                  <h6 className="text-xl font-semibold text-white">
                    Hands On Expereience
                  </h6>
                  <p className="mt-2 mb-4 text-white">
                    Make projects as you progress your way learning with us.
                    Learn the best Industry practices with our experts.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-6 w-full md:w-4/12 px-4 text-center">
              <div className="relative flex flex-col min-w-0 break-words bg-black w-full mb-8 shadow-lg rounded-lg">
                <div className="px-4 py-5 flex-auto">
                  <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-600">
                    <i className="fas fa-fingerprint"></i>
                  </div>
                  <h6 className="text-xl text-white font-semibold">
                    Learn Remotely
                  </h6>
                  <p className="mt-2 mb-4 text-white">
                    Make projects as you progress your way learning with us.
                    Learn the best Industry practices with our experts.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center mt-32">
            <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
              <div className="text-white p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-red-600">
                <i className="fas fa-graduation-cap text-xl"></i>
              </div>
              <h3 className="text-3xl mb-2 text-white font-semibold leading-normal">
                Join Our Webinars
              </h3>
              <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-white">
                Bored by staring at the screen and listening to recorded
                lectures? Join IT HUB School, this is your one stop solution
                when it comes to Live Training. We deliver the best &
                professional learning modules that are job-oriented and
                practical in nature.
              </p>
              <button className="inline-flex rounded-lg my-6 duration-700 text-white bg-red-700 border-0 py-2 px-6 focus:outline-none hover:bg-red-900 rounded text-lg shadow-xl">
                Enroll now !
              </button>
            </div>

            <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-red-600">
                <img
                  alt="..."
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80"
                  className="w-full align-middle rounded-t-lg"
                />
                <blockquote className="relative p-8 mb-4">
                  <svg
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 583 95"
                    className="absolute left-0 w-full block"
                    style={{
                      height: "95px",
                      top: "-94px",
                    }}
                  >
                    <polygon
                      points="-30,95 583,95 583,65"
                      className="text-red-600 fill-current"
                    ></polygon>
                  </svg>
                  <h4 className="text-l font-bold text-white">
                    Everything You Need To Learn
                  </h4>
                  <p className="text-md font-light mt-2 text-white">
                    Join your best classroom remotely and learn from the best of
                    Instructors. We love sharing knowledge and have a strong
                    sense of affordable education for all!
                  </p>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
