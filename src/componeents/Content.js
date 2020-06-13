import React from "react";

export default function Content() {
  return (
    <div id="webinar">
      <section className="text-gray-700 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap w-full mb-20">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
                Upcoming Webinars
              </h1>
              <div className="h-1 w-20 bg-teal-500 rounded" />
            </div>
            <p className="lg:w-1/2 w-full leading-relaxed text-base">
              Learn from the leading trainers in the industry and build on your
              skills. Kick start your carrear as a software engineer in no time.
              We also offer financial help for people who wants to learn with
              us. To know more
            </p>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-100 p-6 rounded-lg">
                <img
                  className="h-40 rounded w-full object-cover object-center mb-6"
                  src="https://dummyimage.com/720x400"
                  alt="content"
                />
                <h3 className="tracking-widest text-teal-500 text-xs font-medium title-font">
                  SUBTITLE
                </h3>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                  Cyber Security
                </h2>
                <p className="leading-relaxed text-base">
                  Fingerstache flexitarian street art 8-bit waistcoat.
                  Distillery
                </p>
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-100 p-6 rounded-lg">
                <img
                  className="h-40 rounded w-full object-cover object-center mb-6"
                  src="https://dummyimage.com/721x401"
                  alt="content"
                />
                <h3 className="tracking-widest text-teal-500 text-xs font-medium title-font">
                  Vishwajit Nerkar's
                </h3>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                  Front End Master
                </h2>
                <p className="leading-relaxed text-base">
                  Microsoft STC Trainer | Josh Talks Speaker | Technical
                  Recruiter
                </p>
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-100 p-6 rounded-lg">
                <img
                  className="h-40 rounded w-full object-cover object-center mb-6"
                  src="https://dummyimage.com/722x402"
                  alt="content"
                />
                <h3 className="tracking-widest text-teal-500 text-xs font-medium title-font">
                  Abhishek Maurya's
                </h3>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                  AWS Cloud Computing
                </h2>
                <p className="leading-relaxed text-base">
                  <br />
                  Cloud Developer @<a href="https://www.tcs.com/">TCS</a>
                </p>
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-100 p-6 rounded-lg">
                <img
                  className="h-40 rounded w-full object-cover object-center mb-6"
                  src="https://dummyimage.com/723x403"
                  alt="content"
                />
                <h3 className="tracking-widest text-teal-500 text-xs font-medium title-font">
                  SUBTITLE
                </h3>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                  San Francisco
                </h2>
                <p className="leading-relaxed text-base">
                  Fingerstache flexitarian street art 8-bit waistcoat.
                  Distillery
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
