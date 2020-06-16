import React from "react";

export default function HeroScholor() {
  return (
    <div className="container mx-auto px-2 ">
      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
        <div className="px-6">
          <div className="flex flex-wrap flex-col justify-center">
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-2 mt-4 lg:mb-4 text-center">
              Apply for a Scholorship
            </h1>
            <div className="flex lg:flex-row flex-col-reverse mb-16">
              <div>
                <div className="flex relative pb-20 sm:items-center md:w-2/3 mx-auto lg:mt-24">
                  <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                    <div className="h-full w-1 bg-gray-200 pointer-events-none" />
                  </div>
                  <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-blue-500 text-white relative z-10 title-font font-medium text-sm">
                    2
                  </div>
                  <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                    <div className="flex-shrink-0 w-24 h-24 bg-blue-100 text-blue-500 rounded-full inline-flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 319806 333374"
                        shape-rendering="geometricPrecision"
                        text-rendering="geometricPrecision"
                        image-rendering="optimizeQuality"
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        className="w-12 h-12"
                        fill="#667eea"
                      >
                        <path d="M249821 296430l-9049-1619-4482 8038c-3267 4048-5320-2602-6244-4915l-8731-16479c2023-694 4452-2718 6938-4973 4973 116 9627-752 13039-5117l10061 19428 867 1850c694 2429 318 4019-2371 3787h-29zM77332 269752c14836-19487 27702-10495 45659 2056 407 284 801 560 2783 1936 6061 4207 12423-1414 18490-6774 2686-2373 5326-4706 8109-6479l4215 6615c-2248 1432-4665 3569-7124 5741-8323 7353-17051 15063-28151 7358l-2815-1967c-14355-10033-24640-17221-34921-3717l-6245-4769zM245798 8578c-4020 4483-6280 9007-7160 13612-975 5100-295 10450 1533 16064l1820 5590H48622v255556h-17c7 9317 1975 16118 6076 20181 3986 3950 10354 5518 19293 4515l467-33h195372V34944l17-183c493-11105-1996-17627-6449-21270-4181-3421-10362-4662-17584-4911zM40078 43844H-1l166-4422c338-8987 2138-17039 6081-23719C10294 8843 16502 3534 25554 268L26989 1h227137l-696 712c5925 887 11160 2735 15358 6169 6482 5303 10151 13984 9560 28061h9v253880h30318c3303 0 561 17 1557 11 4451-24 6450-35 8300 2364 1426 1848 1343 3492 1193 6477-48 969-110 2185-110 4063 0 15028-5184 23602-13934 28052-7723 3928-18005 4222-29779 2816H74598c-11503 1232-20073-1186-25926-6985-5790-5738-8570-14562-8579-26221h-16V43844zm190182-23256c786-4108 2359-8120 4864-12044H27708c-6615 2541-11160 6483-14119 11497-2541 4304-3980 9465-4599 15259h221568c-1040-4981-1222-9875-297-14712zm48098 276779v26945c9587 1039 17746 771 23452-2131 5816-2958 9262-9166 9262-20443 0-1621 79-3203 143-4464 49-978 1077-220 577-869-715-927 20 932-1527 940-1957 11 575 22-1590 22h-30318zM80455 86627c-2359 0-4272-1912-4272-4272 0-2359 1913-4272 4272-4272h123343c2359 0 4272 1912 4272 4272 0 2359-1913 4272-4272 4272H80455zm0 43729c-2373 0-4297-1905-4297-4254 0-2350 1924-4254 4297-4254h151291c2373 0 4297 1905 4297 4254s-1924 4254-4297 4254H80455zm0 43765c-2359 0-4272-1912-4272-4272 0-2359 1913-4272 4272-4272h120911c2359 0 4272 1913 4272 4272s-1913 4272-4272 4272H80455zm0 43769c-2348 0-4251-1923-4251-4294 0-2372 1903-4294 4251-4294h62582c2348 0 4251 1923 4251 4294 0 2372-1903 4294-4251 4294H80455zm135800-10128c1706-87 3036 520 4395 1388 1705 1099 3643 3238 6042 4597 3354 1908 9598-723 12779 4018 1850 2776 1937 4915 2082 7054 145 2312 549 4423 2920 7546 3903 5175 4712 8615 2718 12200-1388 2457-4279 3816-4944 5349-1416 3296 145 5782-1792 9627-1359 2659-3441 4423-6216 5320-2342 752-4712-347-6591 462-3296 1388-5725 4597-8355 5436-1012 318-2024 462-3036 462s-2024-145-3036-462c-2631-810-5059-4048-8355-5436-1879-780-4221 289-6591-462-2776-896-4886-2660-6216-5320-1937-3845-376-6331-1792-9627-665-1561-3556-2920-4944-5349-2024-3585-1214-7025 2718-12200 2370-3122 2775-5262 2920-7546 145-2140 231-4308 2082-7054 3180-4741 9424-2081 12778-4018 2400-1359 4337-3528 6042-4597 1358-867 2689-1445 4394-1388zm0 12721c10495 0 18994 8499 18994 18994s-8500 18994-18994 18994c-10495 0-18994-8499-18994-18994s8500-18994 18994-18994zm-33565 75948l9049-1619 4481 8038c3267 4048 5320-2602 6244-4915l8731-16479c-2024-694-4453-2718-6939-4973-4973 116-9627-752-13039-5117l-10061 19428-867 1851c-694 2429-318 4019 2371 3787h29z" />
                      </svg>
                    </div>
                    <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                      <h2 className="font-medium title-font text-gray-900 mb-1 text-xl">
                        Fill the Scholorship Form!
                      </h2>
                      <p className="leading-relaxed">
                        Tell us why you need this Scolorship! Share your Goals
                        that Inspire you.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
                  <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                    <div className="h-full w-1 bg-gray-200 pointer-events-none" />
                  </div>
                  <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-blue-500 text-white relative z-10 title-font font-medium text-sm">
                    2
                  </div>
                  <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                    <div className="flex-shrink-0 w-24 h-24 bg-blue-100 text-blue-500 rounded-full inline-flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 319806 333374"
                        shape-rendering="geometricPrecision"
                        text-rendering="geometricPrecision"
                        image-rendering="optimizeQuality"
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        className="w-12 h-12"
                        fill="#667eea"
                      >
                        <path d="M249821 296430l-9049-1619-4482 8038c-3267 4048-5320-2602-6244-4915l-8731-16479c2023-694 4452-2718 6938-4973 4973 116 9627-752 13039-5117l10061 19428 867 1850c694 2429 318 4019-2371 3787h-29zM77332 269752c14836-19487 27702-10495 45659 2056 407 284 801 560 2783 1936 6061 4207 12423-1414 18490-6774 2686-2373 5326-4706 8109-6479l4215 6615c-2248 1432-4665 3569-7124 5741-8323 7353-17051 15063-28151 7358l-2815-1967c-14355-10033-24640-17221-34921-3717l-6245-4769zM245798 8578c-4020 4483-6280 9007-7160 13612-975 5100-295 10450 1533 16064l1820 5590H48622v255556h-17c7 9317 1975 16118 6076 20181 3986 3950 10354 5518 19293 4515l467-33h195372V34944l17-183c493-11105-1996-17627-6449-21270-4181-3421-10362-4662-17584-4911zM40078 43844H-1l166-4422c338-8987 2138-17039 6081-23719C10294 8843 16502 3534 25554 268L26989 1h227137l-696 712c5925 887 11160 2735 15358 6169 6482 5303 10151 13984 9560 28061h9v253880h30318c3303 0 561 17 1557 11 4451-24 6450-35 8300 2364 1426 1848 1343 3492 1193 6477-48 969-110 2185-110 4063 0 15028-5184 23602-13934 28052-7723 3928-18005 4222-29779 2816H74598c-11503 1232-20073-1186-25926-6985-5790-5738-8570-14562-8579-26221h-16V43844zm190182-23256c786-4108 2359-8120 4864-12044H27708c-6615 2541-11160 6483-14119 11497-2541 4304-3980 9465-4599 15259h221568c-1040-4981-1222-9875-297-14712zm48098 276779v26945c9587 1039 17746 771 23452-2131 5816-2958 9262-9166 9262-20443 0-1621 79-3203 143-4464 49-978 1077-220 577-869-715-927 20 932-1527 940-1957 11 575 22-1590 22h-30318zM80455 86627c-2359 0-4272-1912-4272-4272 0-2359 1913-4272 4272-4272h123343c2359 0 4272 1912 4272 4272 0 2359-1913 4272-4272 4272H80455zm0 43729c-2373 0-4297-1905-4297-4254 0-2350 1924-4254 4297-4254h151291c2373 0 4297 1905 4297 4254s-1924 4254-4297 4254H80455zm0 43765c-2359 0-4272-1912-4272-4272 0-2359 1913-4272 4272-4272h120911c2359 0 4272 1913 4272 4272s-1913 4272-4272 4272H80455zm0 43769c-2348 0-4251-1923-4251-4294 0-2372 1903-4294 4251-4294h62582c2348 0 4251 1923 4251 4294 0 2372-1903 4294-4251 4294H80455zm135800-10128c1706-87 3036 520 4395 1388 1705 1099 3643 3238 6042 4597 3354 1908 9598-723 12779 4018 1850 2776 1937 4915 2082 7054 145 2312 549 4423 2920 7546 3903 5175 4712 8615 2718 12200-1388 2457-4279 3816-4944 5349-1416 3296 145 5782-1792 9627-1359 2659-3441 4423-6216 5320-2342 752-4712-347-6591 462-3296 1388-5725 4597-8355 5436-1012 318-2024 462-3036 462s-2024-145-3036-462c-2631-810-5059-4048-8355-5436-1879-780-4221 289-6591-462-2776-896-4886-2660-6216-5320-1937-3845-376-6331-1792-9627-665-1561-3556-2920-4944-5349-2024-3585-1214-7025 2718-12200 2370-3122 2775-5262 2920-7546 145-2140 231-4308 2082-7054 3180-4741 9424-2081 12778-4018 2400-1359 4337-3528 6042-4597 1358-867 2689-1445 4394-1388zm0 12721c10495 0 18994 8499 18994 18994s-8500 18994-18994 18994c-10495 0-18994-8499-18994-18994s8500-18994 18994-18994zm-33565 75948l9049-1619 4481 8038c3267 4048 5320-2602 6244-4915l8731-16479c-2024-694-4453-2718-6939-4973-4973 116-9627-752-13039-5117l-10061 19428-867 1851c-694 2429-318 4019 2371 3787h29z" />
                      </svg>
                    </div>
                    <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                      <h2 className="font-medium title-font text-gray-900 mb-1 text-xl">
                        Approval
                      </h2>
                      <p className="leading-relaxed">
                        Wait for our Team to Revert! Till then keep learning.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
                  <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                    <div className="h-full w-1 bg-gray-200 pointer-events-none" />
                  </div>
                  <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-blue-500 text-white relative z-10 title-font font-medium text-sm">
                    3
                  </div>
                  <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                    <div className="flex-shrink-0 w-24 h-24 bg-blue-100 text-blue-500 rounded-full inline-flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 333332 295878"
                        shape-rendering="geometricPrecision"
                        text-rendering="geometricPrecision"
                        image-rendering="optimizeQuality"
                        className="w-12 h-12"
                        fill="#667eea"
                      >
                        <path d="M0 151344h67358v119844H0V151344zM226883 44058c3730-8450 7867-16434 12821-23194 10023-13753 34499-30303 49475-14278 13404 14336 2040 30012-13928 37471h36131c2797 0 5420 1165 7226 3030 1865 1865 3030 4429 3030 7226v19464c0 2797-1166 5420-3030 7226-1690 1690-3905 2797-6410 2972v91662c18978 1715 29233 23311 13216 39127-37699 27429-76367 50000-115907 68231-28722 17470-57443 16877-86165 0l-42426-21869V160965h45051c3685 661 7370 1581 11056 2720V84032c-2564-175-4895-1282-6644-2972-1865-1865-3030-4429-3030-7226V54370c0-2797 1166-5420 3030-7226 1865-1865 4429-3031 7226-3031h36772c-15909-7459-27273-23135-13928-37471 14977-16084 39452 524 49476 14278 4953 6818 9091 14802 12820 23193h4021l117-58zm47170 145980h-45525c8241 5426 9985 16398-1525 24290-12275 8996-28460 8487-45051 6998-11442-563-11943 14819 0 14870 4141 321 8653-650 12588-654 20711-20 37770-3980 48209-20340l5248-12246 26055-12918zm-128522-23347c9701 3832 19403 8989 29104 14781h36689v-37471h-65793v22690zm145799 14781l8715-4321c1253-413 2489-741 3703-992v-32158h-64919v37471h52501zM259576 44059c36538-16201 24417-43474 1282-30303-5420 3089-9965 8858-14044 14627-3846 5420-7284 11131-9848 15676h22611zm-69464 0c-36539-16201-24417-43474-1282-30303 5420 3089 9965 8858 14044 14627 3846 5420 7285 11131 9848 15676h-22611zm-44581 77157h65793V79957h-65793v41259zm93240 0h64861V79957h-64861v41259z" />
                      </svg>
                    </div>
                    <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                      <h2 className="font-medium title-font text-gray-900 mb-1 text-xl">
                        Tag us and share happiness!
                      </h2>
                      <p className="leading-relaxed">
                        We believe in sharing happiness. If you are selected
                        that means you are a Gem !
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:w-7/12">
                <section className="text-gray-700 body-font mb-12 lg:px-0 px-8">
                  <div className="container mx-auto flex flex-col">
                    <div className="lg:w-full">
                      <div className="flex flex-col sm:flex-row lg:mt-24 ">
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
                            We dream of a world where education is available for
                            everyone to afford. Vishwajit Nerkar is providing
                            you Scholorship in which you can enroll for our
                            sessions by paying as low as 10% of the regular
                            fees. Grab this Golden Opportunity and book your
                            seat. The selected Candidates will receive the
                            cofirmation on their registered mail id. <br />
                            <br />
                          </p>
                          <a
                            href="/"
                            className="text-pink-500 inline-flex items-center"
                          >
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
