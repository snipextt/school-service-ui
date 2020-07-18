import React, { useEffect, useState } from "react";
import tw from "twin.macro"; //eslint-disable-line
import { css } from "styled-components/macro"; //eslint-disable-line

import Hero from "../componeents/components/hero/BackgroundAsImage";
import Services from "../componeents/components/features/DashedBorderSixFeatures";
import Contact from "../componeents/components/forms/TwoColContactUsWithIllustration";
import Faqs from "../componeents/components/faqs/SimpleWithSideImage";

const Container = tw.div`bg-black w-full px-4`;

export default () => {
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
    <>
      <Hero />
      <Container>
        <Services />
        <Faqs />
        <Contact />
      </Container>
    </>
  );
};
