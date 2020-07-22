import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import tw from "twin.macro";
import { motion } from "framer-motion";
import OfficeImage from "../Static/office.jpg";
import WorkImage from "../Static/images/app.jpg";
import CyberImage from "../Static/images/cyber-min.png";

const Hero = tw.div`absolute top-0 w-full h-full bg-center bg-cover`;
const Overlay = tw.span`w-full h-full absolute opacity-50 bg-black`;
const Svg = tw.svg`absolute bottom-0 overflow-hidden`;
const Polygon = tw.polygon`text-gray-900 fill-current`;
const TitleHeader = tw.h2` text-center text-gray-800 text-3xl lg:text-5xl font-black font-sans leading-tight my-4`;
const BlogContent = tw.div`flex flex-row flex-wrap w-full px-8 lg:px-32 justify-center items-center my-12`;
const HightlighterText = tw.span`text-yellow-700  `;
const FeaturedCard = tw.div`w-full xl:w-11/12 flex flex-col md:flex-row text-white bg-white rounded-lg `;
const FeaturedImage = tw.img`object-cover h-80 w-full md:w-1/2 lg:w-8/12`;
const FeaturedHeader = tw.h2`text-lg md:pt-8 text-center md:text-left font-bold text-yellow-600`;
const FeaturedContent = tw.div`mt-8 md:mt-0 md:ml-8 w-full text-black px-4`;
const BlogCard = tw.div`w-full md:w-1/2 xl:w-1/3 text-black mt-12 xl:mt-40 lg:px-6 rounded-lg`;
const CardHeader = tw.h2`text-lg md:pt-2 text-center md:text-left rounded-t-lg font-bold text-yellow-600`;
const CardImage = tw.img`w-full object-cover`;
const CardContent = tw.div`bg-white w-full rounded-b-lg pb-8`;

export default function About() {
  const [loadedImages, isLoaded] = useState(1);

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
    if (loadedImages)
      document.querySelector("#loader").classList.add("hidden-loader");
  }, [loadedImages]);
  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{
        duration: 1.5,
      }}
    >
      <main className="profile-page">
        <section className="relative block" style={{ height: "450px" }}>
          <Hero
            style={{
              backgroundImage: `url(${require("../Static/board.jpg")})`,
            }}
          >
            <Overlay id="blackOverlay"></Overlay>
          </Hero>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
            style={{ height: "70px", transform: "translateZ(0)" }}
          >
            <Svg
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <Polygon points="2560 0 2560 100 0 100"></Polygon>
            </Svg>
          </div>
        </section>
        <section className="relative py-16 bg-gray-900">
          <div className="w-full mx-auto px-4">
            <div className="relative flex flex-col min-w-0 break-words bg-black w-full mb-6 shadow-xl rounded-lg -mt-64">
              <TitleHeader>
                <HightlighterText>
                  Featured <span className="text-white">Blog</span> Post
                </HightlighterText>
              </TitleHeader>
              <BlogContent>
                <FeaturedCard>
                  <FeaturedImage src={OfficeImage}></FeaturedImage>
                  <FeaturedContent>
                    <FeaturedHeader>Placement Gurukul Company</FeaturedHeader>
                    <div class="flex justify-center md:justify-start ">
                      <div class="w-16 h-1 rounded-full bg-yellow-600 inline-flex"></div>
                    </div>
                    <div className="h-full my-8">
                      Join our family of happy customers. At Placement Gurukul,
                      we strongly believe in quality and therefore provide the
                      best of services at an affordable price.
                      <Link
                        to="/blog"
                        className="text-yellow-600 flex items-center my-2 lg:mb-0"
                      >
                        Continue Reading
                        <svg
                          className="w-4 h-4 ml-2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M5 12h14" />
                          <path d="M12 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </FeaturedContent>
                </FeaturedCard>

                <BlogCard>
                  <CardImage src={OfficeImage}></CardImage>
                  <CardContent>
                    <div className="px-4 pt-8 ">
                      <CardHeader>Placement Gurukul Company</CardHeader>
                      <div class="flex justify-center md:justify-start mb-4">
                        <div class="w-16 h-1 rounded-full bg-yellow-600 inline-flex"></div>
                      </div>
                      Join our family of happy customers. At Placement Gurukul,
                      we strongly believe in quality and therefore provide the
                      best of services at an affordable price.
                      <Link
                        to="/blog"
                        className="text-yellow-600 flex items-center my-2 lg:mb-0"
                      >
                        Continue Reading
                        <svg
                          className="w-4 h-4 ml-2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M5 12h14" />
                          <path d="M12 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </CardContent>
                </BlogCard>
                <BlogCard>
                  <CardImage src={OfficeImage}></CardImage>
                  <CardContent>
                    <div className="px-4 pt-8 ">
                      <CardHeader>Placement Gurukul Company</CardHeader>
                      <div class="flex justify-center md:justify-start mb-4">
                        <div class="w-16 h-1 rounded-full bg-yellow-600 inline-flex"></div>
                      </div>
                      Join our family of happy customers. At Placement Gurukul,
                      we strongly believe in quality and therefore provide the
                      best of services at an affordable price.
                      <Link
                        to="/blog"
                        className="text-yellow-600 flex items-center my-2 lg:mb-0"
                      >
                        Continue Reading
                        <svg
                          className="w-4 h-4 ml-2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M5 12h14" />
                          <path d="M12 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </CardContent>
                </BlogCard>
                <BlogCard>
                  <CardImage src={WorkImage}></CardImage>
                  <CardContent>
                    <div className="px-4 pt-8 ">
                      <CardHeader>Application Software</CardHeader>
                      <div class="flex justify-center md:justify-start mb-4">
                        <div class="w-16 h-1 rounded-full bg-yellow-600 inline-flex"></div>
                      </div>
                      Every user who is digitally active (and using computers,
                      smartphones or any other digital assets) makes use of
                      software daily. Computer systems are divided into 2 major
                      components: the hardware and the software. This article
                      will make you understand about the software and
                      specifically the application software.
                      <Link
                        to="/blog/app"
                        className="text-yellow-600 flex items-center my-2 lg:mb-0"
                      >
                        Continue Reading
                        <svg
                          className="w-4 h-4 ml-2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M5 12h14" />
                          <path d="M12 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </CardContent>
                </BlogCard>
                <BlogCard>
                  <CardImage src={CyberImage}></CardImage>
                  <CardContent>
                    <div className="px-4 pt-8 ">
                      <CardHeader>Cybersecurity and Web</CardHeader>
                      <div class="flex justify-center md:justify-start mb-4">
                        <div class="w-16 h-1 rounded-full bg-yellow-600 inline-flex"></div>
                      </div>
                      We live in an Era where technology is advancing at an
                      unprecedented rate with that the rate of cyberthreats is
                      also increasing rapidly. This year has been very tough on
                      IT industry. With many more people working on online
                      platforms due to the pandemic covid-19, when the whole
                      world has become fully dependent on technology..
                      <Link
                        to="/blog/cybersecurity"
                        className="text-yellow-600 flex items-center my-2 lg:mb-0"
                      >
                        Continue Reading
                        <svg
                          className="w-4 h-4 ml-2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M5 12h14" />
                          <path d="M12 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </CardContent>
                </BlogCard>
                <BlogCard>
                  <CardImage src={WorkImage}></CardImage>
                  <CardContent>
                    <div className="px-4 pt-8 ">
                      <CardHeader>Application Software</CardHeader>
                      <div class="flex justify-center md:justify-start mb-4">
                        <div class="w-16 h-1 rounded-full bg-yellow-600 inline-flex"></div>
                      </div>
                      Every user who is digitally active (and using computers,
                      smartphones or any other digital assets) makes use of
                      software daily. Computer systems are divided into 2 major
                      components: the hardware and the software. This article
                      will make you understand about the software and
                      specifically the application software.
                      <Link
                        to="/blog/app"
                        className="text-yellow-600 flex items-center my-2 lg:mb-0"
                      >
                        Continue Reading
                        <svg
                          className="w-4 h-4 ml-2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M5 12h14" />
                          <path d="M12 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </CardContent>
                </BlogCard>
              </BlogContent>
            </div>
          </div>
        </section>
      </main>
    </motion.div>
  );
}
