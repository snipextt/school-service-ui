import React from "react";

export default function Hero() {
  return (
    <div>
      <div
        className="relative pt-16 pb-32 flex content-center items-center justify-center"
        style={{
          minHeight: "75vh",
        }}
      >
        <video autoPlay loop id="myVideo">
          <source src={require("../Static/cd.mp4")} type="video/mp4" />
        </video>
        <div className="absolute top-0 w-full h-full bg-center bg-cover">
          <span
            id="blackOverlay"
            className="w-full h-full absolute opacity-75 bg-black "
          ></span>
        </div>

        <div className="container relative mx-auto">
          <div className="items-center flex flex-wrap">
            <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
              <div className="pr-12">
                <h1 className="text-white font-semibold pl-8 lg: pl-0 text-4xl">
                  Build your Ideas..
                </h1>
                <p className="mt-4 text-lg text-gray-300 pl-8 lg:pl-0">
                  With the best experts from all over the industry and
                  professional trainers, pleacement Gurukul is capable of
                  dilevering the best of services and education. Start your
                  journey with us today. time!
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
          style={{ height: "70px", transform: "translateZ(0)" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className={`text-black fill-current`}
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
      </div>
      <section className={`pb-20 bg-black -mt-24`}>
        <div className="w-full md:w-full lg:w-11/12 xl:w-9/12 mx-auto px-2 m:px-8 ">
          <div className="flex flex-wrap">
            <div className="lg:pt-12 pt-6 w-full xl:w-2/6  md:w-4/12 px-4 text-center">
              <div
                className={`relative flex flex-col min-w-0 break-words bg-yellow-600 w-full mb-8 shadow-lg rounded-lg`}
              >
                <div className="px-4 py-5 flex-auto">
                  <div
                    className={`text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-2 md:mb-4 shadow-lg rounded-full bg-black`}
                  >
                    <i className="fas fa-users"></i>
                  </div>
                  <h6 className={`text-xl text-black font-semibold`}>
                    Happy Customer
                  </h6>
                  <p className={`mt-2 mb-4 text-black`}>
                    Join our family of happy customers. At Placement Gurukul, we
                    strongly believe in quality and therefore provide the best
                    of services at an affordable price.
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full md:w-4/12 xl:w-2/6 px-4 text-center">
              <div
                className={`relative flex flex-col min-w-0 break-words bg-yellow-600 w-full mb-8 shadow-lg rounded-lg`}
              >
                <div className="px-4 py-5 flex-auto">
                  <div
                    className={`text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-2 md:mb-4 shadow-lg rounded-full bg-black`}
                  >
                    <i className="fas fa-heart"></i>
                  </div>
                  <h6 className={`text-xl text-black font-semibold`}>
                    Excellent Service
                  </h6>
                  <p className={`mt-2 mb-4 text-black`}>
                    Looking for a website for your company, or a professional
                    content for your company? Our team has you covered. Let's
                    work on your next project together.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-6 w-full md:w-4/12 xl:w-2/6 px-4 text-center lg:mt-2">
              <div
                className={`relative flex flex-col min-w-0 break-words bg-yellow-600 w-full mb-8 shadow-lg rounded-lg`}
              >
                <div className="px-4 py-5 flex-auto">
                  <div
                    className={`text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-2 md:mb-4 shadow-lg rounded-full bg-black`}
                  >
                    <i className="fas fa-award"></i>
                  </div>
                  <h6 className={`text-xl text-black font-semibold`}>
                    Professional Team
                  </h6>
                  <p className={`mt-2 mb-4 text-black`}>
                    We have an team of very experienced people for all our
                    professional services. Get in touch so we can turn your
                    dream in reality ;)
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center mt-32">
            <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
              <div
                className={`text-black p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white`}
              >
                <i className="fas fa-code text-xl"></i>
              </div>
              <h3 className="text-3xl mb-2 text-white font-semibold leading-normal">
                Build Your Ideas
              </h3>
              <p className="text-lg font-light leading-relaxed mt-4 mb-0 text-white">
                Get your technical projects built by our professional team.
                Placement Gurukul is a one stop solution when it comes to
                professional technical projects, services, and advice. Contact
                us today with your ideas to get started.
              </p>
              <button className="inline-flex rounded-lg my-4 duration-700 text-white bg-yellow-700 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-900 rounded text-lg shadow-xl">
                Our Services!
              </button>
            </div>

            <div className="w-full mt-4 md:mt-0 md:w-4/12 px-4 mr-auto ml-auto">
              <div
                className={`relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-yellow-700`}
              >
                <img
                  alt="..."
                  src={require("../Static/laptop.jpg")}
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
                  <h4 className={`text-l font-bold text-white`}>
                    How We Build Your Ideas
                  </h4>
                  <p className={`text-md font-light mt-2 text-white`}>
                    We are committed to client's first policy. As soon as our
                    clients share their ideas with us, our marketing team starts
                    communicating with them with the best of solutions for their
                    projects. Contact us today and get started yourself.
                  </p>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
