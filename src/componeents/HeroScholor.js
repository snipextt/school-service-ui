import React from "react";

export default function HeroScholor() {
  return (
    <div>
      <section className="text-gray-700 body-font mb-12 lg:px-0 px-8">
        <div className="container mx-auto flex flex-col">
          <div className="lg:w-5/6 mx-auto">
            <div className="flex flex-col sm:flex-row mt-24">
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
                <div className="flex flex-col items-center text-center justify-center hero-scholor">
                  <h2 className="flex flex-row items-center font-medium title-font mt-4 text-gray-900 text-md">
                    Vishwajit Nerkar
                  </h2>

                  <div className="w-12 h-1 bg-pink-500 rounded mt-2 mb-4 hero-scholor" />
                  <p className="text-base text-gray-600">
                    Microsoft STC Trainer
                  </p>
                </div>
              </div>
              <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-300 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left hero-scholor">
                <p className="leading-relaxed text-lg mb-4">
                  We dream of a world where education is available for everyone
                  to afford. Vishwajit Nerkar is providing you Scholorship in
                  which you can enroll for our sessions by paying as low as 10%
                  of the regular fees. Grab this Golden Opportunity and book
                  your seat. The selected Candidates will receive the
                  cofirmation on their registered mail id. <br />
                  <br />
                </p>
                <a href="/" className="text-pink-500 inline-flex items-center">
                  Learn More
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
