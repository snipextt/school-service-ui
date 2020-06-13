import React from "react";
import Team from "../componeents/Team";
import Contact from "../componeents/Contact";

export default function About() {
  return (
    <div>
      <section className="text-gray-700 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              IT Hub School
            </h1>
            <p className="mb-8 leading-relaxed">
              We are an outsourced Project taking and online-training providing
              company founded by Gaurav Roy. Our company has 2 main motives: On
              one hand, we deliver the best & professional learning modules that
              are job-oriented and practical in nature. On the other hand, we
              take freelance projects and outsourced projects from different
              companies worldwide, and smartly deliver the project on time with
              accuracy and efficiency.
              <br />
              <br />
              We take up projects having genres: tutorial writing, Tech-Writing,
              blog-Writing, non-technical content writing,
              Online-Classes,e-Training, news writing, troubleshooting, game
              development, web development, top-class school & college project
              creation, Penetration Testing, Bug-Hunting, educational content
              creation, video creation & editing, Cyber-Security consulting,
              career consultant, study materials creation, software development,
              mobile app development, research, Logo designing, banner
              designing, etc.
            </p>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="https://dummyimage.com/720x600"
            />
          </div>
        </div>
      </section>

      <Team />
      <Contact />
    </div>
  );
}
