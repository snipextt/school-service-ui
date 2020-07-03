import React from "react";

import Seperator from "./Seperator";
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
    <>
      <Seperator />
    </>
  );
}
