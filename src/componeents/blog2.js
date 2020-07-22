import React, { useEffect } from "react";
import tw from "twin.macro";
const Hero = tw.div`absolute top-0 w-full h-full bg-center bg-cover`;
const Overlay = tw.span`w-full h-full absolute opacity-50 bg-black`;
const Svg = tw.svg`absolute bottom-0 overflow-hidden`;
const Polygon = tw.polygon`text-gray-900 fill-current`;
const TitleHeader = tw.h2` text-center text-yellow-700 text-3xl lg:text-5xl font-black font-sans leading-tight my-4`;

function BlogApp() {
  useEffect(() => {
    if (true) document.querySelector("#loader").classList.add("hidden-loader");
  }, []);
  return (
    <div>
      <main className="profile-page">
        <section className="relative block" style={{ height: "450px" }}>
          <Hero
            style={{
              backgroundImage: `url(${require("../Static/board.jpg")})`,
            }}
          >
            <Overlay id="blackOverlay"></Overlay>
          </Hero>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
            style={{ height: "70px", transform: "translateZ(0)" }}
          >
            <Svg
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <Polygon points="2560 0 2560 100 0 100"></Polygon>
            </Svg>
          </div>
        </section>
        <section className="relative py-16 bg-gray-900">
          <div className="w-full mx-auto px-4">
            <div className="relative flex flex-col min-w-0 break-words bg-black w-full mb-6 shadow-xl text-white rounded-lg -mt-64">
              <div className="px-6 md:px-24">
                <TitleHeader>Cybersecurity And Web</TitleHeader>
                <p
                  style={{
                    margin: "0in",
                    marginBottom: ".0001pt",
                    fontSize: "15px",
                    fontFamily: '"Times New Roman",serif',
                    marginTop: "26.6pt",
                    marginRight: "42.4pt",
                    marginLeft: "7.0pt",
                    lineHeight: "107%",
                  }}
                >
                  <span style={{}}>
                    We live in an Era where technology is advancing at an
                    unprecedented rate with that the rate of cyberthreats is
                    also increasing rapidly.
                  </span>
                </p>
                <p
                  style={{
                    margin: "0in",
                    marginBottom: ".0001pt",
                    fontSize: "15px",
                    fontFamily: '"Times New Roman",serif',
                    marginTop: "7.95pt",
                    marginRight: "13.0pt",
                    marginLeft: "7.0pt",
                    lineHeight: "107%",
                  }}
                >
                  <span style={{}}>
                    This year has been very tough on IT industry. With many more
                    people working on online platforms due to the pandemic
                    covid-19, when the whole world has become fully dependent on
                    technology, the risk of being scammed by the thieves
                    targeting the weaknesses in the online system has been
                    increased.
                  </span>
                </p>
                <p
                  style={{
                    margin: "0in",
                    marginBottom: ".0001pt",
                    fontSize: "15px",
                    fontFamily: '"Times New Roman",serif',
                    marginTop: "8.0pt",
                    marginRight: "0in",
                    marginLeft: "7.0pt",
                  }}
                >
                  <span style={{}}>
                    cyber criminals are finding it as a golden opportunity to
                    earn their&nbsp;profit.
                  </span>
                </p>
                <p
                  style={{
                    margin: "0in",
                    marginBottom: ".0001pt",
                    fontSize: "15px",
                    fontFamily: '"Times New Roman",serif',
                    marginTop: "8.95pt",
                    marginRight: "11.45pt",
                    marginLeft: "7.0pt",
                    lineHeight: "107%",
                  }}
                >
                  <span style={{}}>
                    Recently 400 Cybercrime has been registered during this
                    lockdown only in Mumbai. And if we make an estimation the
                    number reaches to lakhs worldwide. In year 2019, 4.1 billion
                    records were hacked which lead to a loss of total 8 billion
                    dollars for the IT sector&nbsp;companies.
                  </span>
                </p>
                <p
                  style={{
                    margin: "0in",
                    marginBottom: ".0001pt",
                    fontSize: "13px",
                    fontFamily: '"Times New Roman",serif',
                  }}
                >
                  <span style={{ fontSize: "16px" }}>&nbsp;</span>
                </p>
                <p
                  style={{
                    margin: "0in",
                    marginBottom: ".0001pt",
                    fontSize: "13px",
                    fontFamily: '"Times New Roman",serif',
                    marginTop: ".25pt",
                  }}
                >
                  <span style={{ fontSize: "18px" }}>&nbsp;</span>
                </p>
                <p
                  style={{
                    margin: "0in",
                    marginBottom: ".0001pt",
                    fontSize: "15px",
                    fontFamily: '"Times New Roman",serif',
                    marginLeft: "7.0pt",
                  }}
                >
                  <span style={{}}>But what is a cyber threat?</span>
                </p>
                <p
                  style={{
                    margin: "0in",
                    marginBottom: ".0001pt",
                    fontSize: "15px",
                    fontFamily: '"Times New Roman",serif',
                    marginTop: "9.1pt",
                    marginRight: "11.2pt",
                    marginLeft: "7.0pt",
                    textAlign: "justify",
                    lineHeight: "107%",
                  }}
                >
                  <span style={{}}>
                    A cyberthreat is a malevolent act that seeks to damage data,
                    steal data, or disrupt online database of a company. Cyber
                    threats includes different type of computer viruses,&nbsp;
                  </span>
                  <a href="https://www.upguard.com/blog/data-breach">
                    <span style={{ textDecoration: "none" }}>
                      data breaches,&nbsp;
                    </span>
                  </a>
                  Denial of Service (DoS) attacks and other{" "}
                  <a href="https://www.upguard.com/blog/attack-vector">
                    <span style={{ textDecoration: "none" }}>
                      attack vectors.
                    </span>
                  </a>
                </p>
                <p
                  style={{
                    margin: "0in",
                    marginBottom: ".0001pt",
                    fontSize: "15px",
                    fontFamily: '"Times New Roman",serif',
                    marginTop: "8.0pt",
                    marginRight: "0in",
                    marginLeft: "9.75pt",
                  }}
                >
                  <span style={{}}>
                    What are the cyberthreats for business?
                  </span>
                </p>
                <p
                  style={{
                    margin: "0in",
                    marginBottom: ".0001pt",
                    fontSize: "15px",
                    fontFamily: '"Times New Roman",serif',
                    marginTop: "8.95pt",
                    marginRight: "0in",
                    marginLeft: "7.0pt",
                  }}
                >
                  <span style={{}}>
                    There are total 6 main types of cyberthreats that business
                    faces. They are as follows:
                  </span>
                </p>
                <p
                  style={{
                    margin: "0in",
                    marginBottom: ".0001pt",
                    fontSize: "13px",
                    fontFamily: '"Times New Roman",serif',
                    marginTop: ".05pt",
                  }}
                >
                  <span style={{ fontSize: "17px" }}>&nbsp;</span>
                </p>
                <div
                  style={{
                    margin: "0in",
                    marginBottom: ".0001pt",
                    fontSize: "15px",
                    fontFamily: '"Times New Roman",serif',
                  }}
                >
                  <ul style={{ marginBottom: "0in", listStyleType: "disc" }}>
                    <li
                      style={{
                        margin: "0in",
                        marginBottom: ".0001pt",
                        fontSize: "15px",
                        fontFamily: '"Times New Roman",serif',
                      }}
                    >
                      <h1
                        style={{
                          marginTop: "0in",
                          marginRight: "0in",
                          marginBottom: ".0001pt",
                          marginLeft: "22.0pt",
                          textIndent: "-18.05pt",
                          fontSize: "19px",
                          fontFamily: '"Times New Roman",serif',
                          textDecoration: "underline",
                        }}
                      >
                        <u>
                          <span style={{ fontFamily: '"Arial",sans-serif' }}>
                            Phishing
                          </span>
                        </u>
                      </h1>
                    </li>
                  </ul>
                </div>
                <p
                  style={{
                    margin: "0in",
                    marginBottom: ".0001pt",
                    fontSize: "13px",
                    fontFamily: '"Times New Roman",serif',
                    marginTop: ".2pt",
                  }}
                >
                  <strong>
                    <span style={{ fontSize: "11px" }}>&nbsp;</span>
                  </strong>
                </p>
                <p
                  style={{
                    margin: "0in",
                    marginBottom: ".0001pt",
                    fontSize: "13px",
                    fontFamily: '"Times New Roman",serif',
                    marginTop: "4.55pt",
                    marginRight: "9.9pt",
                    marginLeft: "22.0pt",
                  }}
                >
                  This is a common type of cyber threat which a business has
                  faced once in its lifetime. In this threat cybercriminals will
                  try to gain access to your secured network through different
                  means, the most common of which is through phishing. They will
                  use different social sites or email, they will try to convince
                  users to click on misleading links that will provide them an
                  access to sensitive information or company data, and can even
                  let them download content to their computer or server.
                </p>
                <p
                  style={{
                    margin: "0in",
                    marginBottom: ".0001pt",
                    fontSize: "13px",
                    fontFamily: '"Times New Roman",serif',
                    marginTop: ".15pt",
                  }}
                >
                  <span style={{ fontSize: "16px" }}>&nbsp;</span>
                </p>
                <div
                  style={{
                    margin: "0in",
                    marginBottom: ".0001pt",
                    fontSize: "15px",
                    fontFamily: '"Times New Roman",serif',
                  }}
                >
                  <ul style={{ marginBottom: "0in", listStyleType: "disc" }}>
                    <li
                      style={{
                        margin: "0in",
                        marginBottom: ".0001pt",
                        fontSize: "15px",
                        fontFamily: '"Times New Roman",serif',
                      }}
                    >
                      <h1
                        style={{
                          marginTop: "0in",
                          marginRight: "0in",
                          marginBottom: ".0001pt",
                          marginLeft: "22.0pt",
                          textIndent: "-18.05pt",
                          fontSize: "19px",
                          fontFamily: '"Times New Roman",serif',
                          textDecoration: "underline",
                        }}
                      >
                        <u>
                          <span style={{ fontFamily: '"Arial",sans-serif' }}>
                            Malware
                          </span>
                        </u>
                      </h1>
                    </li>
                  </ul>
                </div>
                <p
                  style={{
                    margin: "0in",
                    marginBottom: ".0001pt",
                    fontSize: "13px",
                    fontFamily: '"Times New Roman",serif',
                    marginTop: ".25pt",
                  }}
                >
                  <strong>
                    <span
                      style={{
                        fontSize: "11px",
                        fontFamily: '"Arial",sans-serif',
                      }}
                    >
                      &nbsp;
                    </span>
                  </strong>
                </p>
                <p
                  style={{
                    margin: "0in",
                    marginBottom: ".0001pt",
                    fontSize: "15px",
                    fontFamily: '"Times New Roman",serif',
                    marginTop: "4.6pt",
                    marginRight: "9.9pt",
                    marginLeft: "22.0pt",
                  }}
                >
                  Malicious Softwares are the unwanted software that is
                  installed in our system without our consent. The software can
                  attach itself to legitimate code and propagate through it.{" "}
                  <span style={{ fontSize: "13px" }}>
                    For example, a Trojan virus, is a form of malware brought
                    onto the network disguised as legitimate software, often
                    carrying out its true purpose without the user knowing.
                    Malware comes in various forms,&nbsp;
                  </span>
                  the most common types of malware are<strong>:&nbsp;</strong>
                  Macro viruses, File infectors, System or boot- record
                  infectors, Polymorphic viruses, Stealth viruses, Trojans,
                  Logic bombs and Worms Droppers <strong>etc.</strong>
                </p>
                <p>
                  <span
                    style={{
                      fontSize: "15px",
                      fontFamily: '"Times New Roman",serif',
                    }}
                  >
                    <br />
                    &nbsp;
                  </span>
                </p>
                <div
                  style={{
                    margin: "0in",
                    marginBottom: ".0001pt",
                    fontSize: "15px",
                    fontFamily: '"Times New Roman",serif',
                  }}
                >
                  <ul style={{ marginBottom: "0in", listStyleType: "disc" }}>
                    <li
                      style={{
                        margin: "0in",
                        marginBottom: ".0001pt",
                        fontSize: "15px",
                        fontFamily: '"Times New Roman",serif',
                      }}
                    >
                      <h1
                        style={{
                          marginTop: "0in",
                          marginRight: "0in",
                          marginBottom: ".0001pt",
                          marginLeft: "22.0pt",
                          textIndent: "-18.05pt",
                          fontSize: "19px",
                          fontFamily: '"Times New Roman",serif',
                          textDecoration: "underline",
                        }}
                      >
                        <u>Distributed Denial of Service&nbsp;(DDoS)</u>
                      </h1>
                    </li>
                  </ul>
                </div>
                <p
                  style={{
                    margin: "0in",
                    marginBottom: ".0001pt",
                    fontSize: "13px",
                    fontFamily: '"Times New Roman",serif',
                    marginTop: ".3pt",
                  }}
                >
                  <strong>
                    <span style={{ fontSize: "11px" }}>&nbsp;</span>
                  </strong>
                </p>
                <p
                  style={{
                    margin: "0in",
                    marginBottom: ".0001pt",
                    fontSize: "13px",
                    fontFamily: '"Times New Roman",serif',
                    marginTop: "4.55pt",
                    marginRight: "10.2pt",
                    marginLeft: "22.0pt",
                  }}
                >
                  In this type of attack the server is flooded with requests
                  from multiple sources, leading it to become overwhelmed to the
                  point of slowing down substantially or even crashing. Once
                  ifif your pc is affected by this threat, the system becomes
                  impossible to use effectively unless and until these numerous
                  interactions are cancelled and blocked.
                </p>
                <p
                  style={{
                    margin: "0in",
                    marginBottom: ".0001pt",
                    fontSize: "13px",
                    fontFamily: '"Times New Roman",serif',
                    marginTop: ".15pt",
                  }}
                >
                  <span style={{ fontSize: "16px" }}>&nbsp;</span>
                </p>
                <div
                  style={{
                    margin: "0in",
                    marginBottom: ".0001pt",
                    fontSize: "15px",
                    fontFamily: '"Times New Roman",serif',
                  }}
                >
                  <ul style={{ marginBottom: "0in", listStyleType: "disc" }}>
                    <li
                      style={{
                        margin: "0in",
                        marginBottom: ".0001pt",
                        fontSize: "15px",
                        fontFamily: '"Times New Roman",serif',
                      }}
                    >
                      <h1
                        style={{
                          marginTop: "0in",
                          marginRight: "0in",
                          marginBottom: ".0001pt",
                          marginLeft: "22.0pt",
                          textIndent: "-18.05pt",
                          fontSize: "19px",
                          fontFamily: '"Times New Roman",serif',
                          textDecoration: "underline",
                        }}
                      >
                        <u>Brute Force or Password&nbsp;Attacks</u>
                      </h1>
                    </li>
                  </ul>
                </div>
                <p
                  style={{
                    margin: "0in",
                    marginBottom: ".0001pt",
                    fontSize: "13px",
                    fontFamily: '"Times New Roman",serif',
                    marginTop: ".2pt",
                  }}
                >
                  <strong>
                    <span style={{ fontSize: "11px" }}>&nbsp;</span>
                  </strong>
                </p>
                <p
                  style={{
                    margin: "0in",
                    marginBottom: ".0001pt",
                    fontSize: "13px",
                    fontFamily: '"Times New Roman",serif',
                    marginTop: "4.55pt",
                    marginRight: "6.85pt",
                    marginLeft: "22.0pt",
                  }}
                >
                  This type of threats involves an attacker attempting to gain
                  access to a network by using a program to crack a working
                  password. They’re the primary reason why it’s important not to
                  use the same password across the board and why these login
                  details need to be changed regularly.
                </p>
                <p
                  style={{
                    margin: "0in",
                    marginBottom: ".0001pt",
                    fontSize: "13px",
                    fontFamily: '"Times New Roman",serif',
                    marginTop: ".3pt",
                  }}
                >
                  <span style={{ fontSize: "16px" }}>&nbsp;</span>
                </p>
                <div
                  style={{
                    margin: "0in",
                    marginBottom: ".0001pt",
                    fontSize: "15px",
                    fontFamily: '"Times New Roman",serif',
                  }}
                >
                  <ul style={{ marginBottom: "0in", listStyleType: "disc" }}>
                    <li
                      style={{
                        margin: "0in",
                        marginBottom: ".0001pt",
                        fontSize: "15px",
                        fontFamily: '"Times New Roman",serif',
                      }}
                    >
                      <h1
                        style={{
                          marginTop: "0in",
                          marginRight: "0in",
                          marginBottom: ".0001pt",
                          marginLeft: "22.0pt",
                          textIndent: "-18.05pt",
                          fontSize: "19px",
                          fontFamily: '"Times New Roman",serif',
                          textDecoration: "underline",
                        }}
                      >
                        <u>
                          Internet of Things (IoT) or
                          Algorithm&nbsp;Manipulation
                        </u>
                      </h1>
                    </li>
                  </ul>
                </div>
                <p
                  style={{
                    margin: "0in",
                    marginBottom: ".0001pt",
                    fontSize: "13px",
                    fontFamily: '"Times New Roman",serif',
                    marginTop: ".2pt",
                  }}
                >
                  <strong>
                    <span style={{ fontSize: "11px" }}>&nbsp;</span>
                  </strong>
                </p>
                <p
                  style={{
                    margin: "0in",
                    marginBottom: ".0001pt",
                    fontSize: "13px",
                    fontFamily: '"Times New Roman",serif',
                    marginTop: "4.5pt",
                    marginRight: "27.4pt",
                    marginLeft: "22.0pt",
                  }}
                >
                  Nowadays organizations are relying more and more on wearable
                  tech, cloud-computing industrial devices and other IoT
                  applications, that makes their data more vulnerable. As
                  automation has led companies to trust new types of algorithms
                  to interpret and apply their data, these methods may be
                  susceptible to threats and codes can get compromised without
                  frequent monitoring and occasional human interaction.
                </p>
                <p
                  style={{
                    margin: "0in",
                    marginBottom: ".0001pt",
                    fontSize: "13px",
                    fontFamily: '"Times New Roman",serif',
                    marginTop: ".25pt",
                  }}
                >
                  <span style={{ fontSize: "16px" }}>&nbsp;</span>
                </p>
                <div
                  style={{
                    margin: "0in",
                    marginBottom: ".0001pt",
                    fontSize: "15px",
                    fontFamily: '"Times New Roman",serif',
                  }}
                >
                  <ul style={{ marginBottom: "0in", listStyleType: "disc" }}>
                    <li
                      style={{
                        margin: "0in",
                        marginBottom: ".0001pt",
                        fontSize: "15px",
                        fontFamily: '"Times New Roman",serif',
                      }}
                    >
                      <h1
                        style={{
                          marginTop: "0in",
                          marginRight: "0in",
                          marginBottom: ".0001pt",
                          marginLeft: "22.0pt",
                          textIndent: "-18.05pt",
                          fontSize: "19px",
                          fontFamily: '"Times New Roman",serif',
                          textDecoration: "underline",
                        }}
                      >
                        <u>Ransomware</u>
                      </h1>
                    </li>
                  </ul>
                </div>
                <p
                  style={{
                    margin: "0in",
                    marginBottom: ".0001pt",
                    fontSize: "13px",
                    fontFamily: '"Times New Roman",serif',
                    marginTop: ".25pt",
                  }}
                >
                  <strong>
                    <span style={{ fontSize: "11px" }}>&nbsp;</span>
                  </strong>
                </p>
                <p
                  style={{
                    margin: "0in",
                    marginBottom: ".0001pt",
                    fontSize: "13px",
                    fontFamily: '"Times New Roman",serif',
                    marginTop: "4.55pt",
                    marginRight: "7.45pt",
                    marginLeft: "22.0pt",
                  }}
                >
                  This type of malware if opened in a system leads to complete
                  system lockdown and encrypts the device so that no one can use
                  it anymore. Ransomware is one of the most sophisticated and
                  damaging threats among all cyber threats. The computer or
                  server affected will remain locked until a heavy ransom is
                  paid on its behalf, although some hackers are prone to not
                  following through on the unlocking that they promise, causing
                  the business to suffer more loss.
                </p>
                <p
                  style={{
                    margin: "0in",
                    marginBottom: ".0001pt",
                    fontSize: "13px",
                    fontFamily: '"Times New Roman",serif',
                  }}
                >
                  <span style={{ fontSize: "15px" }}>&nbsp;</span>
                </p>
                <p
                  style={{
                    margin: "0in",
                    marginBottom: ".0001pt",
                    fontSize: "13px",
                    fontFamily: '"Times New Roman",serif',
                  }}
                >
                  <span style={{ fontSize: "15px" }}>&nbsp;</span>
                </p>
                <p
                  style={{
                    margin: "0in",
                    marginBottom: ".0001pt",
                    fontSize: "13px",
                    fontFamily: '"Times New Roman",serif',
                    marginTop: ".4pt",
                  }}
                >
                  <span style={{ fontSize: "16px" }}>&nbsp;</span>
                </p>
                <p
                  style={{
                    margin: "0in",
                    marginBottom: ".0001pt",
                    fontSize: "13px",
                    fontFamily: '"Times New Roman",serif',
                    marginTop: "0in",
                    marginRight: "18.15pt",
                    marginLeft: "7.0pt",
                    lineHeight: "107%",
                  }}
                >
                  <span style={{}}>
                    As the old IT world is diminishing, new cyber threats are
                    emerging in a rapid rate. Cyber security specialists now has
                    to find ways to deal with the threats from the cloud,
                    mobile/wireless, and wearable technology. Data that was once
                    stored in systems are now being transmitted through a
                    variety of data centers, routers, and hosts that has lead to
                    data vulnerability.
                  </span>
                </p>
                <p
                  style={{
                    margin: "0in",
                    marginBottom: ".0001pt",
                    fontSize: "13px",
                    fontFamily: '"Times New Roman",serif',
                    marginTop: "8.05pt",
                    marginRight: "0in",
                    marginLeft: "7.0pt",
                  }}
                >
                  Here are some top advanced cyber security technologies that
                  cyber security experts are using:
                </p>
                <p
                  style={{
                    margin: "0in",
                    marginBottom: ".0001pt",
                    fontSize: "13px",
                    fontFamily: '"Times New Roman",serif',
                  }}
                >
                  <span style={{ fontSize: "15px" }}>&nbsp;</span>
                </p>
                <div
                  style={{
                    margin: "0in",
                    marginBottom: ".0001pt",
                    fontSize: "15px",
                    fontFamily: '"Times New Roman",serif',
                  }}
                >
                  <ul style={{ marginBottom: "0in", listStyleType: "disc" }}>
                    <li
                      style={{
                        margin: "0in",
                        marginBottom: ".0001pt",
                        fontSize: "15px",
                        fontFamily: '"Times New Roman",serif',
                      }}
                    >
                      <h1
                        style={{
                          marginTop: "0in",
                          marginRight: "0in",
                          marginBottom: ".0001pt",
                          marginLeft: "22.0pt",
                          textIndent: "-18.05pt",
                          fontSize: "19px",
                          fontFamily: '"Times New Roman",serif',
                          textDecoration: "underline",
                        }}
                      >
                        <u>Artificial Intelligence &amp; Deep&nbsp;Learning</u>
                      </h1>
                    </li>
                  </ul>
                </div>
                <p
                  style={{
                    margin: "0in",
                    marginBottom: ".0001pt",
                    fontSize: "13px",
                    fontFamily: '"Times New Roman",serif',
                    marginTop: ".3pt",
                  }}
                >
                  <strong>
                    <span style={{ fontSize: "12px" }}>&nbsp;</span>
                  </strong>
                </p>
                <p
                  style={{
                    margin: "0in",
                    marginBottom: ".0001pt",
                    fontSize: "13px",
                    fontFamily: '"Times New Roman",serif',
                    marginTop: "4.55pt",
                    marginRight: "6.5pt",
                    marginLeft: "7.0pt",
                    lineHeight: "100%",
                  }}
                >
                  Artificial Intelligence is quite popular these days. And when
                  applied to cybersecurity, it results in the application which
                  is a way similar to the working of two-factor authentication.
                </p>
                <p
                  style={{
                    margin: "0in",
                    marginBottom: ".0001pt",
                    fontSize: "13px",
                    fontFamily: '"Times New Roman",serif',
                    marginTop: ".05pt",
                  }}
                >
                  <span style={{ fontSize: "16px" }}>&nbsp;</span>
                </p>
                <p
                  style={{
                    margin: "0in",
                    marginBottom: ".0001pt",
                    fontSize: "13px",
                    fontFamily: '"Times New Roman",serif',
                    marginTop: "0in",
                    marginRight: "29.25pt",
                    marginLeft: "7.0pt",
                    textIndent: "2.5pt",
                  }}
                >
                  Deep learning is also being used to analyse data such as logs,
                  transaction and real-time communications to detect threats or
                  unwarranted activities which can be hazardous for our system.
                </p>
                <p
                  style={{
                    margin: "0in",
                    marginBottom: ".0001pt",
                    fontSize: "13px",
                    fontFamily: '"Times New Roman",serif',
                  }}
                >
                  <span style={{ fontSize: "15px" }}>&nbsp;</span>
                </p>
                <div
                  style={{
                    margin: "0in",
                    marginBottom: ".0001pt",
                    fontSize: "15px",
                    fontFamily: '"Times New Roman",serif',
                  }}
                >
                  <ul style={{ marginBottom: "0in", listStyleType: "disc" }}>
                    <li
                      style={{
                        margin: "0in",
                        marginBottom: ".0001pt",
                        fontSize: "15px",
                        fontFamily: '"Times New Roman",serif',
                      }}
                    >
                      <h1
                        style={{
                          marginTop: "0in",
                          marginRight: "0in",
                          marginBottom: ".0001pt",
                          marginLeft: "22.0pt",
                          textIndent: "-18.05pt",
                          fontSize: "19px",
                          fontFamily: '"Times New Roman",serif',
                          textDecoration: "underline",
                        }}
                      >
                        <u>Behavioural Analytics</u>
                      </h1>
                    </li>
                  </ul>
                </div>
                <p
                  style={{
                    margin: "0in",
                    marginBottom: ".0001pt",
                    fontSize: "13px",
                    fontFamily: '"Times New Roman",serif',
                    marginTop: ".3pt",
                  }}
                >
                  <strong>
                    <span style={{ fontSize: "12px" }}>&nbsp;</span>
                  </strong>
                </p>
                <p
                  style={{
                    margin: "0in",
                    marginBottom: ".0001pt",
                    fontSize: "13px",
                    fontFamily: '"Times New Roman",serif',
                    marginTop: "4.55pt",
                    marginRight: "13.0pt",
                    marginLeft: "7.0pt",
                  }}
                >
                  Nowadays everyone is well aware of the use of data mining for
                  behavioural analysis. This technique is widely used to target
                  social media and online advertisements to the right set of
                  audience. Interestingly, behavioural analytics is being
                  increasingly explored to develop advanced cybersecurity
                  technologies.
                </p>
                <p>
                  <span
                    style={{
                      fontSize: "15px",
                      fontFamily: '"Times New Roman",serif',
                    }}
                  >
                    <br />
                    &nbsp;
                  </span>
                </p>
                <p
                  style={{
                    margin: "0in",
                    marginBottom: ".0001pt",
                    fontSize: "13px",
                    fontFamily: '"Times New Roman",serif',
                    marginTop: "3.1pt",
                    marginRight: "13.0pt",
                    marginLeft: "7.0pt",
                  }}
                >
                  Behavioural analytics helps cybersecurity experts to determine
                  patterns on a system and network activities to detect
                  potential and real-time cyber threats.
                </p>
                <p
                  style={{
                    margin: "0in",
                    marginBottom: ".0001pt",
                    fontSize: "13px",
                    fontFamily: '"Times New Roman",serif',
                  }}
                >
                  <span style={{ fontSize: "15px" }}>&nbsp;</span>
                </p>
                <div
                  style={{
                    margin: "0in",
                    marginBottom: ".0001pt",
                    fontSize: "15px",
                    fontFamily: '"Times New Roman",serif',
                  }}
                >
                  <ul style={{ marginBottom: "0in", listStyleType: "disc" }}>
                    <li
                      style={{
                        margin: "0in",
                        marginBottom: ".0001pt",
                        fontSize: "15px",
                        fontFamily: '"Times New Roman",serif',
                      }}
                    >
                      <h1
                        style={{
                          marginTop: "0in",
                          marginRight: "0in",
                          marginBottom: ".0001pt",
                          marginLeft: "22.0pt",
                          textIndent: "-18.05pt",
                          fontSize: "19px",
                          fontFamily: '"Times New Roman",serif',
                          textDecoration: "underline",
                        }}
                      >
                        <u>&nbsp;Embedded Hardware Authentication</u>
                      </h1>
                    </li>
                  </ul>
                </div>
                <p
                  style={{
                    margin: "0in",
                    marginBottom: ".0001pt",
                    fontSize: "13px",
                    fontFamily: '"Times New Roman",serif',
                    marginTop: ".4pt",
                  }}
                >
                  <strong>
                    <span style={{ fontSize: "11px" }}>&nbsp;</span>
                  </strong>
                </p>
                <p
                  style={{
                    margin: "0in",
                    marginBottom: ".0001pt",
                    fontSize: "13px",
                    fontFamily: '"Times New Roman",serif',
                    marginTop: "4.55pt",
                    marginRight: "39.0pt",
                    marginLeft: "7.0pt",
                  }}
                >
                  A PIN and password are no longer provide sufficient or full
                  proof protection to the hardware. Embedded authenticators are
                  emerging technologies to verify a user’s identity.
                </p>
                <p
                  style={{
                    margin: "0in",
                    marginBottom: ".0001pt",
                    fontSize: "13px",
                    fontFamily: '"Times New Roman",serif',
                  }}
                >
                  <span style={{ fontSize: "15px" }}>&nbsp;</span>
                </p>
                <div
                  style={{
                    margin: "0in",
                    marginBottom: ".0001pt",
                    fontSize: "15px",
                    fontFamily: '"Times New Roman",serif',
                  }}
                >
                  <ul style={{ marginBottom: "0in", listStyleType: "disc" }}>
                    <li
                      style={{
                        margin: "0in",
                        marginBottom: ".0001pt",
                        fontSize: "15px",
                        fontFamily: '"Times New Roman",serif',
                      }}
                    >
                      <h1
                        style={{
                          marginTop: "0in",
                          marginRight: "0in",
                          marginBottom: ".0001pt",
                          marginLeft: "22.0pt",
                          textIndent: "-18.05pt",
                          fontSize: "19px",
                          fontFamily: '"Times New Roman",serif',
                          textDecoration: "underline",
                        }}
                      >
                        <u>Blockchain&nbsp;Cybersecurity</u>
                      </h1>
                    </li>
                  </ul>
                </div>
                <p
                  style={{
                    margin: "0in",
                    marginBottom: ".0001pt",
                    fontSize: "13px",
                    fontFamily: '"Times New Roman",serif',
                    marginTop: ".4pt",
                  }}
                >
                  <strong>
                    <span style={{ fontSize: "11px" }}>&nbsp;</span>
                  </strong>
                </p>
                <p
                  style={{
                    margin: "0in",
                    marginBottom: ".0001pt",
                    fontSize: "13px",
                    fontFamily: '"Times New Roman",serif',
                    marginTop: "4.55pt",
                    marginRight: "13.0pt",
                    marginLeft: "7.0pt",
                  }}
                >
                  Blockchain cybersecurity is one of the latest cybersecurity
                  technologies that’s gaining momentum and recognition in the IT
                  field. As the blockchain technology is based on identification
                  between the two different transaction parties. Similarly,
                  blockchain cybersecurity works on peer-to-peer network
                  fundamentals.
                </p>
                <p
                  style={{
                    margin: "0in",
                    marginBottom: ".0001pt",
                    fontSize: "13px",
                    fontFamily: '"Times New Roman",serif',
                  }}
                >
                  <span style={{ fontSize: "15px" }}>&nbsp;</span>
                </p>
                <div
                  style={{
                    margin: "0in",
                    marginBottom: ".0001pt",
                    fontSize: "15px",
                    fontFamily: '"Times New Roman",serif',
                  }}
                >
                  <ul style={{ marginBottom: "0in", listStyleType: "disc" }}>
                    <li
                      style={{
                        margin: "0in",
                        marginBottom: ".0001pt",
                        fontSize: "15px",
                        fontFamily: '"Times New Roman",serif',
                      }}
                    >
                      <h1
                        style={{
                          marginTop: "0in",
                          marginRight: "0in",
                          marginBottom: ".0001pt",
                          marginLeft: "22.0pt",
                          textIndent: "-18.05pt",
                          fontSize: "19px",
                          fontFamily: '"Times New Roman",serif',
                          textDecoration: "underline",
                        }}
                      >
                        <u>Zero-Trust&nbsp;Model</u>
                      </h1>
                    </li>
                  </ul>
                </div>
                <p
                  style={{
                    margin: "0in",
                    marginBottom: ".0001pt",
                    fontSize: "13px",
                    fontFamily: '"Times New Roman",serif',
                  }}
                >
                  <strong>&nbsp;</strong>
                </p>
                <p
                  style={{
                    margin: "0in",
                    marginBottom: ".0001pt",
                    fontSize: "13px",
                    fontFamily: '"Times New Roman",serif',
                    marginTop: ".1pt",
                  }}
                >
                  <strong>
                    <span style={{ fontSize: "13px" }}>&nbsp;</span>
                  </strong>
                </p>
                <p
                  style={{
                    margin: "0in",
                    marginBottom: ".0001pt",
                    fontSize: "13px",
                    fontFamily: '"Times New Roman",serif',
                    marginTop: "4.55pt",
                    marginRight: "0in",
                    marginLeft: "7.0pt",
                  }}
                >
                  This type of cybersecurity model is based on a consideration
                  that a network is already compromised. By
                </p>
                <p
                  style={{
                    margin: "0in",
                    marginBottom: ".0001pt",
                    fontSize: "13px",
                    fontFamily: '"Times New Roman",serif',
                    marginTop: ".05pt",
                    marginRight: "13.0pt",
                    marginLeft: "7.0pt",
                  }}
                >
                  believing that one cannot trust the network, one needs to
                  enhance both ‘internal’ and ‘external’ securities of a system.
                </p>
                <p
                  style={{
                    margin: "0in",
                    marginBottom: ".0001pt",
                    fontSize: "13px",
                    fontFamily: '"Times New Roman",serif',
                  }}
                >
                  <span style={{ fontSize: "15px" }}>&nbsp;</span>
                </p>
                <p
                  style={{
                    margin: "0in",
                    marginBottom: ".0001pt",
                    fontSize: "13px",
                    fontFamily: '"Times New Roman",serif',
                    marginTop: ".25pt",
                  }}
                >
                  <span style={{ fontSize: "14px" }}>&nbsp;</span>
                </p>
                <p
                  style={{
                    margin: "0in",
                    marginBottom: ".0001pt",
                    fontSize: "13px",
                    fontFamily: '"Times New Roman",serif',
                    marginTop: "0in",
                    marginRight: "9.2pt",
                    marginLeft: "7.0pt",
                  }}
                >
                  <span style={{}}>
                    Our future is going to be all-digital, from buying groceries
                    to booking tickets, everything is going to be digitally
                    dependent. But&nbsp;
                  </span>
                  simply focusing on the possible benefits and not on the
                  consequences can make us easy prey to cybercriminals. The IT
                  companies must realize their responsibility towards consumers
                  and take the
                </p>
                <p
                  style={{
                    margin: "0in",
                    marginBottom: ".0001pt",
                    fontSize: "13px",
                    fontFamily: '"Times New Roman",serif',
                    marginLeft: "7.0pt",
                    lineHeight: "11.45pt",
                  }}
                >
                  necessary{" "}
                  <a href="https://readwrite.com/2020/01/24/cybersecurity-best-practices-7-ways-to-secure-your-data-in-2020/">
                    <span style={{ textDecoration: "none" }}>
                      steps to ensure data protection and other cybersecurity
                      avenues.
                    </span>
                  </a>
                </p>
                <p
                  style={{
                    margin: "0in",
                    marginBottom: ".0001pt",
                    fontSize: "13px",
                    fontFamily: '"Times New Roman",serif',
                    marginTop: ".05pt",
                    marginRight: "9.9pt",
                    marginLeft: "7.0pt",
                  }}
                >
                  <span style={{}}>
                    It is also vital for them to focus strongly on the security
                    of their platforms, services, and products to ensure that
                    the adoption of modern technology drives positive results
                    and do not lead to any kind of data vulnerability. The
                    technologies we’ve discussed above have great potential, but
                    as the cybercriminals are also adopting different
                    technologies, the journey of cybersecurity methods into the
                    world of technology requires avid preparation to ensure
                    security and safety.
                  </span>
                </p>
                <p
                  style={{
                    margin: "0in",
                    marginBottom: ".0001pt",
                    fontSize: "13px",
                    fontFamily: '"Times New Roman",serif',
                  }}
                >
                  <span style={{ fontSize: "15px" }}>&nbsp;</span>
                </p>
                <p
                  style={{
                    margin: "0in",
                    marginBottom: ".0001pt",
                    fontSize: "13px",
                    fontFamily: '"Times New Roman",serif',
                  }}
                >
                  <span style={{ fontSize: "15px" }}>&nbsp;</span>
                </p>

                <p
                  style={{
                    margin: "0in",
                    marginBottom: ".0001pt",
                    fontSize: "15px",
                    fontFamily: '"Times New Roman",serif',
                    marginTop: "6.35pt",
                    marginRight: "0in",
                    marginLeft: "7.0pt",
                  }}
                >
                  <strong>
                    <span style={{ fontSize: "13px" }}>
                      At the end of the day, the goal of every IT Company is to
                      be safe and secure.
                    </span>
                  </strong>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default BlogApp;
