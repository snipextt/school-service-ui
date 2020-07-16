import React from "react";
import { Link } from "react-router-dom";

const blogArr = [
  {
    title: "Best Tech Company",
    description:
      "We are committed to client's first policy. As soon as our clients share their ideas with us, our marketing team starts communicating with them with the best of solutions for their projects. Contact us today and get started yourself.",
    imgSrc: require("../Static/off.jpg"),
  },
  {
    title: "Best Tech Company",
    description:
      "We are committed to client's first policy. As soon as our clients share their ideas with us, our marketing team starts communicating with them with the best of solutions for their projects. Contact us today and get started yourself.",
    imgSrc: require("../Static/meeting.jpg"),
  },
  {
    title: "Best Tech Company",
    description:
      "We are committed to client's first policy. As soon as our clients share their ideas with us, our marketing team starts communicating with them with the best of solutions for their projects. Contact us today and get started yourself.",
    imgSrc: require("../Static/paper.jpg"),
  },
];

const BlogCard = (props) => (
  <>
    <div className="p-4 md:w-1/3">
      <div
        className={`relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-yellow-700`}
      >
        <img
          alt="..."
          src={props.imgSrc}
          className="w-full align-middle rounded-t-lg"
        />
        <blockquote className="relative p-8 mb-4">
          <svg
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 583 95"
            className="absolute left-0 w-full block"
            style={{
              height: "95px",
              top: "-94px",
            }}
          >
            <polygon
              points="-30,95 583,95 583,65"
              className={`text-yellow-700 fill-current`}
            ></polygon>
          </svg>
          <h4 className={`text-l font-bold text-white`}>{props.title}</h4>
          <p className={`text-md font-light mt-2 text-white`}>
            {props.description}
          </p>
          <div className="flex items-center mt-4 flex-wrap">
            <Link
              to="/blog"
              className="text-white inline-flex items-center md:mb-2 lg:mb-0"
            >
              Learn More
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
        </blockquote>
      </div>
    </div>
  </>
);

function Blog() {
  return (
    <section className="text-gray-700 body-font mt-12">
      <h1 className="sm:text-4xl text-3xl text-center font-bold title-font text-white  lg:mb-0 mb-4">
        From The Blog
      </h1>
      <div className="flex mt-6 justify-center">
        <div className="w-20 h-1 rounded-full animate-hue bg-yellow-500 inline-flex"></div>
      </div>
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          {blogArr.map((card) => (
            <BlogCard key={Math.random() * 10000} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Blog;
