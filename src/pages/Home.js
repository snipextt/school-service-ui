import React from "react";
import Hero from "../componeents/HeroHome";
import Content from "../componeents/Content";
import Contact from "../componeents/Contact";
import Carousel from "../componeents/Carousel";
import Features from "../componeents/Features";

export default function Home() {
  return (
    <div>
      <br />
      <Carousel />
      <Hero />
      <hr />
      <Content />
      <Features />
    </div>
  );
}
