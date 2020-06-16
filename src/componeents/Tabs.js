import React from "react";
import Team from "./Team";
import Contact from "./Contact";
import Zoom from "react-reveal/Zoom";
const Tabs = ({ color }) => {
  const [openTab, setOpenTab] = React.useState(1);
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full">
          <ul
            className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
            role="tablist"
          >
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 1
                    ? "text-white bg-" + color + "-600"
                    : "text-" + color + "-600 bg-white")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                Company
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 2
                    ? "text-white bg-" + color + "-600"
                    : "text-" + color + "-600 bg-white")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                Team
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 3
                    ? "text-white bg-" + color + "-600"
                    : "text-" + color + "-600 bg-white")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(3);
                }}
                data-toggle="tab"
                href="#link3"
                role="tablist"
              >
                Contact Us
              </a>
            </li>
          </ul>
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 rounded">
            <div className="px-4 py-5 flex-auto">
              <div className="tab-content tab-space">
                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                  <Zoom>
                    <section className="text-gray-700 body-font">
                      <div className="container mx-auto flex py-24 md:flex-row flex-col items-center">
                        <div className="lg:flex-grow md:w-1/2 lg:pr-20 md:pr-12 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center about-hero ">
                          <h1 className="title-font sm:text-4xl text-3xl font-medium text-gray-900 my-0">
                            IT Hub School
                          </h1>
                          <div className="h-1 w-20 bg-teal-500 rounded mb-4" />
                          <p className="mb-8 leading-relaxed p-6 lg:p-0 text-center">
                            We are an outsourced Project taking and
                            online-training providing company founded by Gaurav
                            Roy. Our company has 2 main motives: On one hand, we
                            deliver the best & professional learning modules
                            that are job-oriented and practical in nature. On
                            the other hand, we take freelance projects and
                            outsourced projects from different companies
                            worldwide, and smartly deliver the project on time
                            with accuracy and efficiency.
                          </p>
                        </div>
                        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 ml-8">
                          <img
                            className="object-cover object-center rounded"
                            alt="hero"
                            src={require("../Static/pm.jpg")}
                          />
                        </div>
                      </div>
                    </section>
                  </Zoom>
                </div>
                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                  <Zoom>
                    <div>
                      <Team />
                    </div>
                  </Zoom>
                </div>
                <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                  <Zoom>
                    <div>
                      <Contact />
                    </div>
                  </Zoom>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default function TabsRender() {
  return (
    <>
      <Tabs color="blue" />;
    </>
  );
}
