import React, { useEffect } from "react";
import tw from "twin.macro"; //eslint-disable-line
import { css } from "styled-components/macro"; //eslint-disable-line

import Hero from "../componeents/components/hero/BackgroundAsImage";
import Services from "../componeents/components/features/DashedBorderSixFeatures";
import Contact from "../componeents/components/forms/TwoColContactUsWithIllustration";
import Faqs from "../componeents/components/faqs/SimpleWithSideImage";

const Container = tw.div`bg-gray-200 w-full`;

export default () => {
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
