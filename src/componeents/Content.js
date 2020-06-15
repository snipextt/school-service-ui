import React from "react";

const Card = (props) => {
  return (
    <div className="xl:w-1/4 md:w-1/2 p-4 ">
      <div className="bg-gray-100 p-6 rounded-lg hover:shadow-xl hover:bg-gray-200 duration-700">
        <img
          className="h-40 rounded w-full object-fill object-center mb-6"
          src={require(`../Static/images/${props.imgsrc}`)}
          alt="content"
        />
        <h3 className="tracking-widest text-teal-500 text-xs font-medium title-font">
          {props.subtitle}
        </h3>
        <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
          {props.course}
        </h2>
        <p className="leading-relaxed text-base">{props.content}</p>
      </div>
    </div>
  );
};

export default function Content() {
  return (
    <div id="webinar" className="mt-24">
      <section className="text-gray-700 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap w-full mb-20">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
                Upcoming Sessions
              </h1>
              <div className="h-1 w-20 bg-red-600 rounded" />
            </div>
          </div>
          <div className="flex flex-wrap -m-4 ">
            <Card
              subtitle="Sahaj Oboroi's"
              course="Intro to Python Programming"
              content="GirlScript Tech Lead | Python Developer"
              imgsrc="3.png"
            />
            <Card
              subtitle="Vishwajit Nerkar's"
              course="Front End Master"
              content="Microsoft STC Trainer | Josh Talks Speaker | Technical
                  Recruiter"
              imgsrc="1.png"
            />
            <Card
              subtitle="Tushar Verma's"
              course="Bug Bounty Training"
              content="Bug Hunter"
              imgsrc="2.png"
            />
            <Card
              subtitle="Himanshu Pariyar's"
              course="Surmount Your Soft Skills"
              content="Certified Trainer | 6+ years of Experience"
              imgsrc="4.png"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
