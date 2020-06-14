import React from "react";

export default function Features() {
  return (
    <div>
      <section className="text-gray-700 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="text-center mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">
              Features
            </h1>
            <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto"></p>
            <div className="flex mt-6 justify-center">
              <div className="w-16 h-1 rounded-full bg-red-600 inline-flex" />
            </div>
          </div>
          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
            <div className="p-4 md:w-1/3 md:mb-0 mb-6 flex flex-col text-center items-center">
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-teal-100 text-teal-500 mb-5 flex-shrink-0">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-10 h-10"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                </svg>
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                  One to One Mentoring
                </h2>
                <p className="leading-relaxed text-base">
                  While everyone is focusing on just completing the course! We
                  focus on mentoring you and make you Job Ready
                </p>
              </div>
            </div>
            <div className="p-4 md:w-1/3 md:mb-0 mb-6 flex flex-col text-center items-center">
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-teal-100 text-teal-500 mb-5 flex-shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-10 h-10"
                  shapeRendering="geometricPrecision"
                  textRendering="geometricPrecision"
                  imageRendering="optimizeQuality"
                  fill="#48bb78"
                  viewBox="0 0 640 640"
                >
                  <path d="M140.647 0h430.86c9.473 0 17.22 7.76 17.22 17.233V498.09c-.755 13.429-18.106 13.736-36.85 12.933H134.305c-25.926 0-47.127 21.213-47.127 47.126 0 25.926 21.213 47.127 47.127 47.127h417.572v-50.138h36.85v63.744c0 11.623-9.495 21.119-21.118 21.119H136.09c-46.655 0-84.828-38.174-84.828-84.828V89.399C51.26 40.23 91.478 0 140.647 0zm16.607 69.78h14.905c7.607 0 13.831 5.032 13.831 11.197v351.418c0 6.166-6.224 11.197-13.83 11.197h-14.906c-7.607 0-13.831-5.031-13.831-11.197V80.977c0-6.165 6.224-11.197 13.83-11.197z" />
                </svg>
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                  Industry Standard Course
                </h2>
                <p className="leading-relaxed text-base">
                  We ensure quality in what we deliver! Content that the Market
                  demands is what we teach you. Learn with us and we make sure
                  you get your first job!
                </p>
              </div>
            </div>
            <div className="p-4 md:w-1/3 md:mb-0 mb-6 flex flex-col text-center items-center">
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-teal-100 text-teal-500 mb-5 flex-shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 205206 333334"
                  shapeRendering="geometricPrecision"
                  textRendering="geometricPrecision"
                  imageRendering="optimizeQuality"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-12 h-12"
                  fill="#48bb78"
                >
                  <path d="M11152 222700h2851c8403-13043 26442-19854 42583-25948 3990-1506 7859-2967 11387-4454 1869-2461 3399-5111 4590-7949 1027-2448 1795-5030 2304-7743-2885-1723-5655-3740-8274-6063-10713-9504-18201-17259-23027-26231-4898-9105-6950-19211-6683-33255l772-32181c7-448 86-876 227-1274l-9469-3268c-1372-30832 15981-49334 37459-58615 7829-3383-5285-20478 12724-14438 24052 8067 77406 18561 90042 33107 10270 11824 10685 18311 10443 33870-79 5059-880 9488-3286 11115-1101 744-2431 1016-3970 841v33791c0 19267-6885 35355-17461 47278-5962 6720-13088 12106-20809 15982 463 2477 1104 4848 1924 7112 957 2643 2163 5155 3613 7536 3105 1383 6160 2636 9227 3893 15070 6176 30398 12459 38337 26895h7400c6134 0 11152 5019 11152 11152v88328c0 6134-5018 11153-11152 11153H11154C5020 333334 2 328315 2 322181v-88328c0-6134 5018-11152 11152-11152zm90433 41619c7387 0 13376 5988 13376 13376 0 7387-5989 13375-13376 13375s-13376-5988-13376-13375c0-7388 5989-13376 13376-13376zm-12596-81789c-2403-633-4769-1426-7083-2386-582 2477-1354 4862-2315 7154-1212 2889-2736 5637-4572 8243 2027 2246 4324 4171 6810 5777 6720 4340 14824 6385 22782 6188 7917-195 15661-2612 21716-7195 2099-1588 3991-3437 5612-5543-1417-2470-2621-5070-3609-7800-756-2090-1383-4252-1878-6485-7752 2770-15588 4150-23280 4037-4811-71-9557-726-14182-1989zm-7878-11231c2500 1316 5062 2395 7674 3244 4893 1531 10000 2270 15149 2270v15c8138 0 16398-1855 24098-5357 7701-3503 14810-8647 20642-15222 9404-10602 15526-24969 15526-42245V87261l11-2c-87-2538-436-4882-1094-6999-632-2036-1545-3844-2783-5391-4665-5826-9100-5767-15410-5749-580 2-1162 4-1941 1-24974-94-41352-903-54622-2697-12249-1656-21859-4134-33046-7643-1047 2350-2286 4644-3720 6876-1828 2847-3950 5563-6372 8141l-744 37377c-240 12654 1538 21628 5790 29532 4322 8037 11303 15226 21359 24146 2655 2355 5494 4345 8470 5985 365 104 706 260 1015 459zm53946-70902c4539 0 8219 3680 8219 8219 0 4540-3680 8220-8219 8220-4540 0-8220-3680-8220-8220 0-4539 3680-8219 8220-8219zm-62005 0c4540 0 8220 3680 8220 8219 0 4540-3680 8220-8220 8220-4539 0-8219-3680-8219-8220 0-4539 3680-8219 8219-8219zm14191 47679c-1759-1143-2259-3497-1117-5256 1143-1760 3497-2260 5256-1117 4336 2819 8493 4340 12449 4393 3830 51 7624-1301 11376-4215 1661-1291 4055-991 5346 670s991 4055-670 5346c-5163 4010-10552 5868-16142 5793-5464-73-10966-2016-16499-5615zm-63555 74624h153896c-7317-9686-19831-14815-32156-19867-2574-1054-5141-2107-7591-3163-2051 2787-4553 5219-7388 7276-6809 4942-15606 7780-24678 8223-9025 441-18382-1494-26372-6093-3981-2291-7617-5231-10697-8851-3005 1216-6181 2415-9436 3644-13033 4920-27399 10344-35577 18830z" />
                </svg>
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                  Live Classes
                </h2>
                <p className="leading-relaxed text-base">
                  Education with Safety! In this pandemic, we ensure to provide
                  you the best education with our Live Classes! Learn from your
                  Home.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
