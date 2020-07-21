import React, { useEffect, useState } from "react";
import tw from "twin.macro";
import Team from "../componeents/Team";
import { motion } from "framer-motion";
import meetingImage from "../Static/meeting.jpg";
import schoolImage from "../Static/school.jpg";
import Testimontial from "../componeents/Testimonial";
let secondary = "yellow-700";
let white = "white";

const Hero = tw.div`absolute top-0 w-full h-full bg-center bg-cover`;
const Overlay = tw.span`w-full h-full absolute opacity-50 bg-black`;
const Svg = tw.svg`absolute bottom-0 overflow-hidden`;
const Polygon = tw.polygon`text-gray-900 fill-current`;
const CardsAbout1 = tw.div`flex flex-col md:flex-row flex-wrap px-6 mt-6 md:mt-40`;
const CardsAbout2 = tw.div`flex flex-col md:flex-row-reverse flex-wrap px-6 my-6 md:my-8`;
const ImgAbout = tw.img` md:w-2/6  w-full`;
const TitleHeader = tw.h2`lg:text-left text-center text-white text-3xl lg:text-5xl font-black font-sans leading-tight md:w-5/6`;
const DescriptionContainer = tw.div`lg:px-10 w-full flex flex-col justify-center items-center md:w-4/6`;
const SubtitleHeader = tw.p`my-4 text-lg lg:text-left lg:my-0 text-center text-${white}`;

const HightlighterText = tw.span`text-${secondary}`;
const Content = tw.p`text-white lg:text-left text-center lg:w-5/6 w-full font-medium pt-6 text-xl`;
const BlueButton = tw.button`bg-${secondary} hover:bg-yellow-900 text-white font-bold py-2 px-4 rounded`;
const ServiceSection = tw.div`flex flex-col flex-wrap justify-center items-center my-12 md:my-40`;
const ServiceContent = tw.p`leading-relaxed text-base text-white`;
const ServiceContainer = tw.div`p-4 md:w-1/3 md:mb-0 mb-6 flex flex-col text-center items-center`;
const CenteredHeader = tw.h2`text-center text-white text-3xl lg:text-5xl font-black font-sans leading-tight lg:w-5/6`;
const ContentCenter = tw.span`flex justify-center lg:justify-start my-8 w-full`;

export default function About() {
  const [loadedImages, isLoaded] = useState(0);

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
    if (loadedImages > 4)
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
          <div className="md:container w-full mx-auto px-4 ">
            <div className="relative flex flex-col min-w-0 break-words bg-black w-full mb-6 shadow-xl rounded-lg -mt-64 ">
              <CardsAbout2>
                <ImgAbout src={meetingImage}></ImgAbout>
                <DescriptionContainer>
                  <TitleHeader>
                    <SubtitleHeader>About Placement Gurukul</SubtitleHeader>
                    We are a <HightlighterText>
                      Modern Service
                    </HightlighterText>{" "}
                    agency.
                  </TitleHeader>
                  <Content>
                    We work on projects having genres: tutorial writing,
                    Tech-Writing, blog-Writing, non-technical content writing,
                    news writing, troubleshooting, game development, web
                    development, top-class school & college project creation,
                    Penetration Testing, Bug-Hunting, educational content
                    creation, video creation & editing, Cyber-Security
                    consulting, career consultant, study materials creation,
                    software development, mobile app development, research, Logo
                    designing, banner designing.
                    <ContentCenter>
                      <BlueButton>Our Services</BlueButton>
                    </ContentCenter>
                  </Content>
                </DescriptionContainer>
              </CardsAbout2>
              <CardsAbout1>
                <ImgAbout src={schoolImage}></ImgAbout>
                <DescriptionContainer>
                  <TitleHeader>
                    <SubtitleHeader>Our Vision</SubtitleHeader>
                    <HightlighterText>
                      Affordable{" "}
                      <HightlighterText
                        style={{
                          color: "#EEE",
                        }}
                      >
                        Education For
                      </HightlighterText>{" "}
                      Everyone.
                    </HightlighterText>
                  </TitleHeader>
                  <Content>
                    We Conduct placement and job oriented webinars and courses
                    for our students. Most of our live webinars are free of cost
                    and available for everyone. At Placement Gurukul, we
                    strongly believe in Affordable Education for everyone and
                    hence we cut our profits to minimum in our online sessions
                    and webinars. TO ensure tthe quality of education, all the
                    training modules are made by the company leaders which
                    includes the lasest topics and technoligies.
                    <ContentCenter>
                      <BlueButton>Learn With Us!</BlueButton>
                    </ContentCenter>
                  </Content>
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
                  Cust<HightlighterText>omer Supp</HightlighterText>ort
                </CenteredHeader>
                <div className="flex mt-6 justify-center">
                  <div className="w-20 h-1 rounded-full bg-yellow-500 inline-flex"></div>
                </div>
                <section className="text-gray-700 body-font">
                  <div className="container px-5 py-16 mx-auto">
                    <div className="flex flex-wrap justify-center sm:-m-4 -mx-4 -mb-10 -mt-4">
                      <ServiceContainer>
                        <div className="text-white p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-yellow-700 animate-hue">
                          <i className="fas fa-graduation-cap text-xl"></i>
                        </div>
                        <div className="flex-grow">
                          <h2 className="text-white text-lg title-font font-medium mb-3">
                            Best Project Ideas
                          </h2>
                          <ServiceContent>
                            We share the best projects ideas and approach with
                            our clients to thier technical projects and issues.
                            Sharing is caring after all.
                          </ServiceContent>
                        </div>
                      </ServiceContainer>
                      <ServiceContainer>
                        <div className="text-white p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-yellow-700 animate-hue">
                          <i className="fas fa-graduation-cap text-xl"></i>
                        </div>
                        <div className="flex-grow">
                          <h2 className="text-white text-lg title-font font-medium mb-3">
                            On Time Services
                          </h2>
                          <ServiceContent>
                            We deliver on time! At Placement Gurukul, we
                            strongly believe that Time is Money and we make sure
                            that our clients don't loose any of their money.
                          </ServiceContent>
                        </div>
                      </ServiceContainer>
                      <ServiceContainer>
                        <div className="text-white p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-yellow-700 animate-hue">
                          <i className="fas fa-graduation-cap text-xl"></i>
                        </div>
                        <div className="flex-grow">
                          <h2 className="text-white text-lg title-font font-medium mb-3">
                            24/7 Support
                          </h2>
                          <ServiceContent>
                            Even after delivering our service, we provide
                            technical support to our clients free of cost for a
                            period to make sure they have a smooth experience
                            with our products.
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
