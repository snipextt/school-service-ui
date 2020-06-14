import React from "react";

export default function Hero() {
  return (
    <div>
      <section className="text-gray-700 body-font">
        <div className="container mx-auto flex px-5 py-12 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="https://source.unsplash.com/500x350/?programming,hacking"
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Learn with Us
              <br />
              Joining Our Webinars
            </h1>
            <p className="mb-8 leading-relaxed">
              Bored by staring at the screen and listening to recorded lectures
              ? Join IT HUB School, this is your one stop solution when it comes
              to Live Training. We deliver the best & professional learning
              modules that are job-oriented and practical in nature.
              <br />
            </p>
            <div className="flex justify-center">
              <button className="inline-flex rounded-lg duration-700 text-white bg-red-400 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg shadow-xl">
                Enroll with us now !
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
