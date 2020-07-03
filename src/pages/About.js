import React, { useEffect } from "react";
import tw from "twin.macro";
import Team from "../componeents/Team";
import { motion } from "framer-motion";
import testImage from "../Static/images/himanshu.jpg";
import Testimontial from "../componeents/Testimonial";

const Hero = tw.div`absolute top-0 w-full h-full bg-center bg-cover`;
const Overlay = tw.span`w-full h-full absolute opacity-50 bg-black`;
const Svg = tw.svg`absolute bottom-0 overflow-hidden`;
const Polygon = tw.polygon`text-gray-300 fill-current`;
const CardsAbout1 = tw.div`flex flex-col md:flex-row flex-wrap px-6 mt-6 md:mt-8`;
const CardsAbout2 = tw.div`flex flex-col md:flex-row-reverse flex-wrap px-6 my-6 md:my-8`;
const ImgAbout = tw.img` lg:w-2/5 w-full`;
const TitleHeader = tw.h2`lg:text-left text-center text-gray-800 text-3xl lg:text-5xl font-black font-sans leading-tight lg:w-5/6`;
const DescriptionContainer = tw.div`lg:px-10 w-full lg:w-3/5`;
const SubtitleHeader = tw.h3`my-4 text-lg lg:text-left lg:my-0 text-center text-blue-400`;
const HightlighterText = tw.span`text-red-600`;
const Content = tw.p`text-gray-700 lg:text-left text-center lg:w-5/6 w-full font-medium pt-6 text-xl`;
const BlueButton = tw.button`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded`;
const ServiceSection = tw.div`flex flex-col flex-wrap justify-center items-center my-24`;
const ServiceContent = tw.p`leading-relaxed text-base`;
const ServiceContainer = tw.div`p-4 md:w-1/4 md:mb-0 mb-6 flex flex-col text-center items-center`;
const SvgWrapper = tw.div`w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0`;
const CenteredHeader = tw.h2`text-center text-gray-800 text-3xl lg:text-5xl font-black font-sans leading-tight lg:w-5/6`;
const ContentCenter = tw.div`flex justify-center lg:justify-start my-12`;

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
              backgroundImage:
                "url('https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2710&q=80')",
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
        <section className="relative py-16 bg-gray-300">
          <div className="container mx-auto px-4">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
              <CardsAbout2>
                <ImgAbout src={testImage}></ImgAbout>
                <DescriptionContainer>
                  <SubtitleHeader>About Placement Gurukul</SubtitleHeader>
                  <TitleHeader>
                    We are a <HightlighterText>Modern Design</HightlighterText>{" "}
                    agency.
                  </TitleHeader>
                  <Content>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </Content>
                  <ContentCenter>
                    <BlueButton>It Works</BlueButton>
                  </ContentCenter>
                </DescriptionContainer>
              </CardsAbout2>
              <CardsAbout1>
                <ImgAbout src={testImage}></ImgAbout>
                <DescriptionContainer>
                  <SubtitleHeader>Our Vision</SubtitleHeader>
                  <TitleHeader>
                    <HightlighterText>
                      Affordable{" "}
                      <HightlighterText
                        style={{
                          color: "#2D3748",
                        }}
                      >
                        Education For
                      </HightlighterText>{" "}
                      Everyone.
                    </HightlighterText>
                  </TitleHeader>
                  <Content>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </Content>
                  <ContentCenter>
                    <BlueButton>It Works</BlueButton>
                  </ContentCenter>
                </DescriptionContainer>
              </CardsAbout1>
              <ServiceSection>
                <SubtitleHeader
                  style={{
                    marginBottom: "0.75rem",
                  }}
                >
                  Our Values
                </SubtitleHeader>
                <CenteredHeader>
                  Cus<HightlighterText>tomer Supp</HightlighterText>ort
                </CenteredHeader>
                <div class="flex mt-6 justify-center">
                  <div class="w-20 h-1 rounded-full bg-red-500 inline-flex"></div>
                </div>
                <section className="text-gray-700 body-font">
                  <div className="container px-5 py-16 mx-auto">
                    <div className="flex flex-wrap justify-center sm:-m-4 -mx-4 -mb-10 -mt-4">
                      <ServiceContainer>
                        <SvgWrapper>
                          <img
                            src={require("../Static/shield-icon.svg")}
                            alt=""
                          ></img>
                        </SvgWrapper>
                        <div className="flex-grow">
                          <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                            Shooting Stars
                          </h2>
                          <ServiceContent>
                            Blue bottle crucifix vinyl post-ironic four dollar
                            toast vegan taxidermy. Gastropub indxgo juice
                            poutine, ramps microdosing banh mi pug VHS try-hard.
                          </ServiceContent>
                        </div>
                      </ServiceContainer>
                      <ServiceContainer>
                        <SvgWrapper>
                          <img
                            src={require("../Static/shield-icon.svg")}
                            alt=""
                          ></img>
                        </SvgWrapper>
                        <div className="flex-grow">
                          <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                            The Catalyzer
                          </h2>
                          <ServiceContent>
                            Blue bottle crucifix vinyl post-ironic four dollar
                            toast vegan taxidermy. Gastropub indxgo juice
                            poutine, ramps microdosing banh mi pug VHS try-hard.
                          </ServiceContent>
                        </div>
                      </ServiceContainer>
                      <ServiceContainer>
                        <SvgWrapper>
                          <img
                            src={require("../Static/shield-icon.svg")}
                            alt=""
                          ></img>
                        </SvgWrapper>
                        <div className="flex-grow">
                          <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                            Neptune
                          </h2>
                          <ServiceContent>
                            Blue bottle crucifix vinyl post-ironic four dollar
                            toast vegan taxidermy. Gastropub indxgo juice
                            poutine, ramps microdosing banh mi pug VHS try-hard.
                          </ServiceContent>
                        </div>
                      </ServiceContainer>
                    </div>
                  </div>
                </section>
              </ServiceSection>
              <Testimontial />
              <SubtitleHeader
                style={{
                  textAlign: "center",
                }}
              >
                Our Team
              </SubtitleHeader>
              <Team />
            </div>
          </div>
        </section>
      </main>
    </motion.div>
  );
}
