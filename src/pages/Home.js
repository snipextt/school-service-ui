import React from "react";
import Hero from "../componeents/Hero";
import Content from "../componeents/Content";
import Contact from "../componeents/Contact";
import Carousel from "../componeents/Carousel";

export default function Home() {
  return (
    <div>
      <br />
      <Carousel />
      <Hero />
      <hr />
      <Content />
      <Contact />
    </div>
  );
}
