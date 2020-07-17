import React, { useEffect } from "react";
import tw from "twin.macro";
import { motion } from "framer-motion";
import OfficeImage from "../Static/office.jpg";

const Hero = tw.div`absolute top-0 w-full h-full bg-center bg-cover`;
const Overlay = tw.span`w-full h-full absolute opacity-50 bg-black`;
const Svg = tw.svg`absolute bottom-0 overflow-hidden`;
const Polygon = tw.polygon`text-gray-900 fill-current`;
const TitleHeader = tw.h2` text-center text-gray-800 text-3xl lg:text-5xl font-black font-sans leading-tight my-4`;
const BlogContent = tw.div`flex flex-col w-full px-8 lg:px-40 justify-center items-center my-12`;
const BlogImage = tw.img`w-full bg-cover mb-12`;
const HightlighterText = tw.span`text-yellow-700  `;
const PostContainer = tw.div`w-full mb-12`;
const PostHeaders = tw.h1`lg:text-4xl text-3xl text-white mb-2`;
const PostContent = tw.p`text-lg leading-relaxed text-white font-sans`;
export default function About() {
  useEffect(() => {
    //document.querySelector(".about").classList.toggle("nav-highlight");
    setTimeout(
      () => document.querySelector("#loader").classList.add("hidden-loader"),
      2000
    );
    return () => {
      //document.querySelector(".about").classList.toggle("nav-highlight");
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
      <main className="profile-page">
        <section className="relative block" style={{ height: "500px" }}>
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
          <div className="container mx-auto px-4">
            <div className="relative flex flex-col min-w-0 break-words bg-black w-full mb-6 shadow-xl rounded-lg -mt-64">
              <TitleHeader>
                <HightlighterText>
                  Placement <span className="text-white">Gurukul</span> Blog
                </HightlighterText>
              </TitleHeader>
              <BlogContent>
                <BlogImage src={OfficeImage} />
                <PostContainer>
                  <PostHeaders>Placement Gurukul Company</PostHeaders>
                  <PostContent>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum
                  </PostContent>
                </PostContainer>
                <BlogImage src={OfficeImage} />
                <PostContainer>
                  <PostHeaders>Placement Gurukul Company</PostHeaders>
                  <PostContent>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum
                  </PostContent>
                </PostContainer>
                <BlogImage src={OfficeImage} />
                <PostContainer>
                  <PostHeaders>Placement Gurukul Company</PostHeaders>
                  <PostContent>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum
                  </PostContent>
                </PostContainer>
                <BlogImage src={OfficeImage} />
                <PostContainer>
                  <PostHeaders>Placement Gurukul Company</PostHeaders>
                  <PostContent>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum
                  </PostContent>
                </PostContainer>
              </BlogContent>
            </div>
          </div>
        </section>
      </main>
    </motion.div>
  );
}
