import React from "react";

export default function Hero() {
  return (
    <div>
      <section class="text-gray-700 body-font">
        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              class="object-cover object-center rounded"
              alt="hero"
              src="https://source.unsplash.com/720x600/?programming,hacking"
            />
          </div>
          <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Learn with Us
              <br />
              Joining Our Webinars
            </h1>
            <p class="mb-8 leading-relaxed">
              Bored by staring at the screen and listening to recorded lectures
              ? Join IT HUB School, this is your one stop solution when it comes
              to Live Training. we deliver the best & professional learning
              modules that are job-oriented and practical in nature.
              <br />
            </p>
            <div class="flex justify-center">
              <button class="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">
                Peek at Upcoming Events?
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
