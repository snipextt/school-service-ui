import React from "react";

export default function HeroScholor() {
  return (
    <div>
      <section className="text-gray-700 body-font">
        <div className="container px-5 py-24 mx-auto flex flex-col">
          <div className="lg:w-4/6 mx-auto">
            <div className="rounded-lg h-64 overflow-hidden">
              <img
                alt="content"
                className="object-cover object-center h-full w-full"
                src="https://dummyimage.com/1200x500"
              />
            </div>
            <div className="flex flex-col sm:flex-row mt-10">
              <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-10 h-10"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                    <circle cx={12} cy={7} r={4} />
                  </svg>
                </div>
                <div className="flex flex-col items-center text-center justify-center">
                  <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">
                    Vishwajit Nerkar
                  </h2>
                  <div className="w-12 h-1 bg-pink-500 rounded mt-2 mb-4" />
                  <p className="text-base text-gray-600">
                    Microsoft STC Trainer | HR Associate | Josh Talks Speaker
                  </p>
                </div>
              </div>
              <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-300 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                <p className="leading-relaxed text-lg mb-4">
                 Vishwajit Nerkar is providing you Scholorship in which he will be delivering the course content in just 299/-. The Course costs originally for 3000 INR. Grab this Golden Opportunity and book your seat. The selected Candidates will receive the cofirmation on their registered mail id. <br/><br/>
      
                <i>For Course Content Contact :<br/> Tushar Verma - 7970715070</i>
                </p>
                <a className="text-pink-500 inline-flex items-center">
                  Enroll Now
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
