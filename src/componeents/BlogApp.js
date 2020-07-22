import React, { useEffect } from "react";
import tw from "twin.macro";
const Hero = tw.div`absolute top-0 w-full h-full bg-center bg-cover`;
const Overlay = tw.span`w-full h-full absolute opacity-50 bg-black`;
const Svg = tw.svg`absolute bottom-0 overflow-hidden`;
const Polygon = tw.polygon`text-gray-900 fill-current`;
const TitleHeader = tw.h2` text-center text-yellow-700 text-3xl lg:text-5xl font-black font-sans leading-tight my-4`;

function BlogApp() {
  useEffect(() => {
    console.log(true);
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
            <div className="relative flex flex-col min-w-0 break-words bg-black w-full mb-6 shadow-xl text-white  rounded-lg -mt-64">
              <div className="px-4 md:px-16">
                <TitleHeader>Application Softwares</TitleHeader>
                <p
                  style={{
                    marginTop: "0in",
                    marginRight: "0in",
                    marginBottom: "8.0pt",
                    marginLeft: "0in",
                    lineHeight: "107%",
                    fontSize: "15px",
                    fontFamily: '"Calibri",sans-serif',
                    textAlign: "center",
                  }}
                >
                  <span style={{ fontSize: "16px", lineHeight: "107%" }}>
                    &nbsp;
                  </span>
                </p>
                <p
                  style={{
                    marginTop: "0in",
                    marginRight: "0in",
                    marginBottom: "8.0pt",
                    marginLeft: "0in",
                    lineHeight: "107%",
                    fontSize: "15px",
                    fontFamily: '"Calibri",sans-serif',
                  }}
                >
                  <span style={{ fontSize: "16px" }}>
                    <span style={{ lineHeight: "107%" }}>
                      Every user who is digitally active (and using computers,
                      smartphones or any other digital assets) makes use of
                      software daily. Computer systems are divided into 2 major
                      components: the hardware and the software. This article
                      will make you understand about the software and
                      specifically the application software.
                      <br />
                      &nbsp;
                    </span>
                  </span>
                </p>
                <p
                  style={{
                    marginTop: "0in",
                    marginRight: "0in",
                    marginBottom: "8.0pt",
                    marginLeft: "0in",
                    lineHeight: "107%",
                    fontSize: "15px",
                    fontFamily: '"Calibri",sans-serif',
                  }}
                >
                  <span style={{ fontSize: "16px" }}>
                    <span style={{ lineHeight: "107%" }}>
                      So, the software can be defined as a kind of program that
                      allows a user to achieve a certain task or simply used for
                      operating a computer. Software is also responsible for
                      directing all the peripheral devices on a system. Hence,
                      it becomes impossible to operate hardware or perform any
                      calculation without the software. The software can further
                      be categorized into 2 major types:
                    </span>
                  </span>
                </p>
                <ul style={{ listStyleType: "disc", marginLeft: "0.5in" }}>
                  <li>
                    <span style={{ fontSize: "16px" }}>
                      <span
                        style={{ lineHeight: "107%", fontFamily: "Calibri" }}
                      >
                        System Software
                      </span>
                    </span>
                  </li>
                  <li>
                    <span style={{ fontSize: "16px" }}>
                      <span
                        style={{ lineHeight: "107%", fontFamily: "Calibri" }}
                      >
                        Application Software
                      </span>
                    </span>
                  </li>
                </ul>
                <p
                  style={{
                    margin: "0in 0in 8pt",
                    lineHeight: "107%",
                    fontSize: "15px",
                    fontFamily: "Calibri, sans-serif",
                    textAlign: "left",
                  }}
                >
                  <br />
                  <span style={{ fontSize: "16px" }}>
                    <span style={{ lineHeight: "107%" }}>
                      To interact with the hardware or perform any particular
                      task, the users need to have an intermediary system that
                      will help connect the hardware for human interaction. This
                      is where the role of software pops in.&nbsp;
                    </span>
                  </span>
                </p>
                <p
                  style={{
                    marginTop: "0in",
                    marginRight: "0in",
                    marginBottom: "8.0pt",
                    marginLeft: "0in",
                    lineHeight: "107%",
                    fontSize: "15px",
                    fontFamily: '"Calibri",sans-serif',
                  }}
                >
                  <span style={{ fontSize: "16px" }}>
                    <span style={{ lineHeight: "107%" }}>
                      Application software is usually end-user programs which
                      are meant to serve the specific purpose of the users and
                      help complete their tasks. These tasks comprise creation
                      &amp; alteration of images, documents, databases,
                      spreadsheets, along with performing online research,
                      surfing the World Wide Web, sending emails, designing
                      graphics &amp; animations, or running businesses, and even
                      playing games. The application software is programmed like
                      a digital tool that is run above the operating system. So,
                      it can be said that application software is
                      activity-dependent and is designed for any particular use.
                      The common use of application software is when we
                      manipulate text, graphics within a document, add and edit
                      the numbers, perform calculations, perform audio and video
                      creation and editing, graphics designing or use a more
                      complex application which is a combination of these
                      elements such as MS Word, or Adobe Photoshop.
                    </span>
                  </span>
                </p>
                <p
                  style={{
                    marginTop: "0in",
                    marginRight: "0in",
                    marginBottom: "8.0pt",
                    marginLeft: "0in",
                    lineHeight: "107%",
                    fontSize: "15px",
                    fontFamily: '"Calibri",sans-serif',
                    textIndent: ".5in",
                  }}
                >
                  <span style={{ fontSize: "16px" }}>
                    <span style={{ lineHeight: "107%" }}>&nbsp;</span>
                  </span>
                </p>
                <p
                  style={{
                    marginTop: "0in",
                    marginRight: "0in",
                    marginBottom: "8.0pt",
                    marginLeft: "0in",
                    lineHeight: "107%",
                    fontSize: "15px",
                    fontFamily: '"Calibri",sans-serif',
                  }}
                >
                  <span style={{ fontSize: "16px" }}>
                    <span style={{ lineHeight: "107%" }}>
                      Application software has some interesting features. It
                      will always reside above the system software. So, it can
                      be said that the user has to deal with the system software
                      (usually the Operating System) after that he or she deals
                      with any application software. The end-user makes use of
                      different applications software for any explicit purpose.
                      These types of software are programmed for simple as well
                      as complex tasks and can either be installed on a system
                      or can be accessed online for use. It can be a small
                      single program intended for one specific task or a
                      collection of small programs under one package which we
                      commonly termed as an application suite. Some widespread
                      examples of Application Software are Word processing
                      software (such as MS Word, Open Office, etc.),
                      Spreadsheets Software (such as MS Excel, Google Sheet,
                      Lotus 1-2-3, VisiCalc, etc.) Presentation applications
                      (such as Google Slide, Open Office Impress, iWork Keynote,
                      etc.), Graphics tools (such as CorelDRAW, GIMP, Adobe
                      Photoshop, Picasa, Microsoft Publisher, Pizap, etc.),
                      CAD/CAM, Sending email (such as MS. Outlook, Gmail, Yahoo
                      Mail, etc.).
                    </span>
                  </span>
                </p>
                <p
                  style={{
                    marginTop: "0in",
                    marginRight: "0in",
                    marginBottom: "8.0pt",
                    marginLeft: "0in",
                    lineHeight: "107%",
                    fontSize: "15px",
                    fontFamily: '"Calibri",sans-serif',
                  }}
                >
                  <span style={{ fontSize: "16px" }}>
                    <span style={{ lineHeight: "107%" }}>&nbsp;</span>
                  </span>
                </p>
                <p
                  style={{
                    marginTop: "0in",
                    marginRight: "0in",
                    marginBottom: "8.0pt",
                    marginLeft: "0in",
                    lineHeight: "107%",
                    fontSize: "15px",
                    fontFamily: '"Calibri",sans-serif',
                  }}
                >
                  <span style={{ fontSize: "16px" }}>
                    <span style={{ lineHeight: "107%" }}>
                      Various Categories of Application Software –
                    </span>
                  </span>
                </p>
                <p
                  style={{
                    marginTop: "0in",
                    marginRight: "0in",
                    marginBottom: "8.0pt",
                    marginLeft: "0in",
                    lineHeight: "107%",
                    fontSize: "15px",
                    fontFamily: '"Calibri",sans-serif',
                  }}
                >
                  <span style={{ fontSize: "16px" }}>
                    <span style={{ lineHeight: "107%" }}>
                      As per the need of the users, application software is
                      designed which landed application software to a broad
                      range of sub-categories –
                    </span>
                  </span>
                </p>
                <p
                  style={{
                    marginTop: "0in",
                    marginRight: "0in",
                    marginBottom: "8.0pt",
                    marginLeft: "0in",
                    lineHeight: "107%",
                    fontSize: "15px",
                    fontFamily: '"Calibri",sans-serif',
                  }}
                >
                  <span style={{ fontSize: "16px" }}>
                    <span style={{ lineHeight: "107%" }}>&nbsp;</span>
                  </span>
                </p>
                <p
                  style={{
                    marginTop: "0in",
                    marginRight: "0in",
                    marginBottom: "8.0pt",
                    marginLeft: "0in",
                    lineHeight: "107%",
                    fontSize: "15px",
                    fontFamily: '"Calibri",sans-serif',
                  }}
                >
                  <span style={{ fontSize: "16px" }}>
                    <span style={{ lineHeight: "107%" }}>
                      1) Presentation Software: Presentation software is one of
                      the most popular application programs used for showing the
                      information in the form of slides. In that application,
                      users can add text, edit existing texts, add graphics such
                      as video &amp; images to slides making the slide more
                      appealing and easier to understand.
                    </span>
                  </span>
                </p>
                <p
                  style={{
                    marginTop: "0in",
                    marginRight: "0in",
                    marginBottom: "8.0pt",
                    marginLeft: "0in",
                    lineHeight: "107%",
                    fontSize: "15px",
                    fontFamily: '"Calibri",sans-serif',
                  }}
                >
                  <span style={{ fontSize: "16px" }}>
                    <span style={{ lineHeight: "107%" }}>&nbsp;</span>
                  </span>
                </p>
                <p
                  style={{
                    marginTop: "0in",
                    marginRight: "0in",
                    marginBottom: "8.0pt",
                    marginLeft: "0in",
                    lineHeight: "107%",
                    fontSize: "15px",
                    fontFamily: '"Calibri",sans-serif',
                  }}
                >
                  <span style={{ fontSize: "16px" }}>
                    <span style={{ lineHeight: "107%" }}>
                      The presentation software has 3 distinct components:
                    </span>
                  </span>
                </p>
                <ul style={{ listStyleType: "disc", marginLeft: "0.5in" }}>
                  <li>
                    <span style={{ fontSize: "16px" }}>
                      <span
                        style={{ lineHeight: "107%", fontFamily: "Calibri" }}
                      >
                        Text editor which is used to input as well as format the
                        text.
                      </span>
                    </span>
                  </li>
                  <li>
                    <span style={{ fontSize: "16px" }}>
                      <span
                        style={{ lineHeight: "107%", fontFamily: "Calibri" }}
                      >
                        Graphics editor used to add and edit the text of the
                        graphics, video &amp; other multimedia components.
                      </span>
                    </span>
                  </li>
                  <li>
                    <span style={{ fontSize: "16px" }}>
                      <span
                        style={{ lineHeight: "107%", fontFamily: "Calibri" }}
                      >
                        Slideshow, which is used for displaying the information
                        with a specific animation or style.
                      </span>
                    </span>
                  </li>
                </ul>
                <p
                  style={{
                    marginTop: "0in",
                    marginRight: "0in",
                    marginBottom: "8.0pt",
                    marginLeft: "0in",
                    lineHeight: "107%",
                    fontSize: "15px",
                    fontFamily: '"Calibri",sans-serif',
                  }}
                >
                  <span style={{ fontSize: "16px" }}>
                    <span style={{ lineHeight: "107%" }}>
                      Presentation software helps in presenting the ideas with
                      ease and amplifies the understanding through visual
                      information and infographics. Common examples of
                      presentation software are Microsoft's PowerPoint &amp;
                      Apple's Keynote.
                    </span>
                  </span>
                </p>
                <p
                  style={{
                    marginTop: "0in",
                    marginRight: "0in",
                    marginBottom: "8.0pt",
                    marginLeft: "0in",
                    lineHeight: "107%",
                    fontSize: "15px",
                    fontFamily: '"Calibri",sans-serif',
                  }}
                >
                  <span style={{ fontSize: "16px" }}>
                    <span style={{ lineHeight: "107%" }}>&nbsp;</span>
                  </span>
                </p>
                <p
                  style={{
                    marginTop: "0in",
                    marginRight: "0in",
                    marginBottom: "8.0pt",
                    marginLeft: "0in",
                    lineHeight: "107%",
                    fontSize: "15px",
                    fontFamily: '"Calibri",sans-serif',
                  }}
                >
                  <span style={{ fontSize: "16px" }}>
                    <span style={{ lineHeight: "107%" }}>
                      2) Word Processing Software: are the most commonly known
                      application software used to format &amp; manipulate the
                      texts, or to create drafts, letters, memos, faxes &amp;
                      various other documents. They also support formatting
                      which beautifies the text. A complete set of features are
                      provided such as the thesaurus, synonyms, antonyms and
                      color editing in images, find and replace, or scan &amp;
                      replace any particular words or phrases, run-time grammars
                      and spelling check and many more. Some common examples
                      are: Microsoft Word, Open Office, Leap Office, Word pad,
                      Adobe FrameMaker and Corel WordPerfect.
                    </span>
                  </span>
                </p>
                <p
                  style={{
                    marginTop: "0in",
                    marginRight: "0in",
                    marginBottom: "8.0pt",
                    marginLeft: "0in",
                    lineHeight: "107%",
                    fontSize: "15px",
                    fontFamily: '"Calibri",sans-serif',
                  }}
                >
                  <span style={{ fontSize: "16px" }}>
                    <span style={{ lineHeight: "107%" }}>&nbsp;</span>
                  </span>
                </p>
                <p
                  style={{
                    marginTop: "0in",
                    marginRight: "0in",
                    marginBottom: "8.0pt",
                    marginLeft: "0in",
                    lineHeight: "107%",
                    fontSize: "15px",
                    fontFamily: '"Calibri",sans-serif',
                  }}
                >
                  <span style={{ fontSize: "16px" }}>
                    <span style={{ lineHeight: "107%" }}>
                      3) Database Software: Database software is specifically
                      meant to serve data handling operations. In today’s world,
                      almost every application has a database where data are
                      stored in an organized fashion. Properly organizing the
                      data so that it can be retrieved whenever required is the
                      primary goal of this category of application
                      software.&nbsp;
                    </span>
                  </span>
                </p>
                <p
                  style={{
                    marginTop: "0in",
                    marginRight: "0in",
                    marginBottom: "8.0pt",
                    marginLeft: "0in",
                    lineHeight: "107%",
                    fontSize: "15px",
                    fontFamily: '"Calibri",sans-serif',
                  }}
                >
                  <span style={{ fontSize: "16px" }}>
                    <span style={{ lineHeight: "107%" }}>
                      Database Management System (DBMS) is application software
                      used to store, modify, extract as well as search for
                      information from within a database. Common examples are:
                      MS Access, Microsoft SQL Server, MySQL, and Oracle.
                    </span>
                  </span>
                </p>
                <p
                  style={{
                    marginTop: "0in",
                    marginRight: "0in",
                    marginBottom: "8.0pt",
                    marginLeft: "0in",
                    lineHeight: "107%",
                    fontSize: "15px",
                    fontFamily: '"Calibri",sans-serif',
                  }}
                >
                  <span style={{ fontSize: "16px" }}>
                    <span style={{ lineHeight: "107%" }}>&nbsp;</span>
                  </span>
                </p>
                <p
                  style={{
                    marginTop: "0in",
                    marginRight: "0in",
                    marginBottom: "8.0pt",
                    marginLeft: "0in",
                    lineHeight: "107%",
                    fontSize: "15px",
                    fontFamily: '"Calibri",sans-serif',
                  }}
                >
                  <span style={{ fontSize: "16px" }}>
                    <span style={{ lineHeight: "107%" }}>
                      4) Multimedia Software: are a special type of application
                      software that deals specifically with graphics,
                      style-texts, audio-visual components and comprises other
                      entities of multimedia such as morphing, cropping,
                      animating, etc. Multimedia software is useful in film
                      industries, banner and flex designing, and helps in the
                      growth of the business, information, educations, as well
                      as entertainment.
                    </span>
                  </span>
                </p>
                <p
                  style={{
                    marginTop: "0in",
                    marginRight: "0in",
                    marginBottom: "8.0pt",
                    marginLeft: "0in",
                    lineHeight: "107%",
                    fontSize: "15px",
                    fontFamily: '"Calibri",sans-serif',
                  }}
                >
                  <span style={{ fontSize: "16px" }}>
                    <span style={{ lineHeight: "107%" }}>&nbsp;</span>
                  </span>
                </p>
                <p
                  style={{
                    marginTop: "0in",
                    marginRight: "0in",
                    marginBottom: "8.0pt",
                    marginLeft: "0in",
                    lineHeight: "107%",
                    fontSize: "15px",
                    fontFamily: '"Calibri",sans-serif',
                  }}
                >
                  <span style={{ fontSize: "16px" }}>
                    <span style={{ lineHeight: "107%" }}>
                      5) Simulation Software: Simulation can be defined as an
                      imitation of the real world and its associated
                      environment. The simulation helps in creating a physical
                      environment mimicking the real world keeping a similar
                      behavior, functionality and key nature but virtually on a
                      digital platform. Simulation tools and programs come under
                      a sub-category of application software. Simulation tools
                      and technologies are used in education, testing,
                      engineering, training, game development and for scientific
                      modeling of different systems to gain real-time
                      experience. Modern technologies such as Virtual Reality,
                      Augmented Reality and Mixed reality make use of such
                      software to imitate the real world or to blend the real
                      world with virtual objects.
                    </span>
                  </span>
                </p>
                <p
                  style={{
                    marginTop: "0in",
                    marginRight: "0in",
                    marginBottom: "8.0pt",
                    marginLeft: "0in",
                    lineHeight: "107%",
                    fontSize: "15px",
                    fontFamily: '"Calibri",sans-serif',
                  }}
                >
                  <span style={{ fontSize: "16px" }}>
                    <span style={{ lineHeight: "107%" }}>&nbsp;</span>
                  </span>
                </p>
                <p
                  style={{
                    marginTop: "0in",
                    marginRight: "0in",
                    marginBottom: "8.0pt",
                    marginLeft: "0in",
                    lineHeight: "107%",
                    fontSize: "15px",
                    fontFamily: '"Calibri",sans-serif',
                  }}
                >
                  <span style={{ fontSize: "16px" }}>
                    <span style={{ lineHeight: "107%" }}>
                      6) Spreadsheet Software: is used for performing manipulate
                      tasks on data and calculations with numbers with more pace
                      and accuracy. In these types of applications, data are
                      stored in intersecting rows &amp; columns. Each
                      intersecting block is termed as a cell. Each cell is
                      labeled with a specific identifying number: row and column
                      labels like A1, G2, etc. There is also an option to
                      specify the data value and type like text, date, time,
                      number. Other than all these, these spreadsheet
                      applications are pre-loaded with formula and function that
                      makes the calculations like arithmetic operations, text
                      operation, logical operations, etc. easier. These
                      applications also have the ability to generate graphical
                      data representation methods (graphs and charts)
                      automatically from the data given to it. Some common
                      examples are: Microsoft Excel, lotus 1-2-3, etc.
                    </span>
                  </span>
                </p>
                <p
                  style={{
                    marginTop: "0in",
                    marginRight: "0in",
                    marginBottom: "8.0pt",
                    marginLeft: "0in",
                    lineHeight: "107%",
                    fontSize: "15px",
                    fontFamily: '"Calibri",sans-serif',
                  }}
                >
                  <span style={{ fontSize: "16px" }}>
                    <span style={{ lineHeight: "107%" }}>&nbsp;</span>
                  </span>
                </p>
                <p
                  style={{
                    marginTop: "0in",
                    marginRight: "0in",
                    marginBottom: "8.0pt",
                    marginLeft: "0in",
                    lineHeight: "107%",
                    fontSize: "15px",
                    fontFamily: '"Calibri",sans-serif',
                  }}
                >
                  <span style={{ fontSize: "16px" }}>
                    <span style={{ lineHeight: "107%" }}>&nbsp;</span>
                  </span>
                </p>
                <p
                  style={{
                    marginTop: "0in",
                    marginRight: "0in",
                    marginBottom: "8.0pt",
                    marginLeft: "0in",
                    lineHeight: "107%",
                    fontSize: "15px",
                    fontFamily: '"Calibri",sans-serif',
                  }}
                >
                  <span style={{ fontSize: "16px" }}>
                    <span style={{ lineHeight: "107%" }}>
                      Characteristics of applications software –
                    </span>
                  </span>
                </p>
                <p
                  style={{
                    marginTop: "0in",
                    marginRight: "0in",
                    marginBottom: "8.0pt",
                    marginLeft: "0in",
                    lineHeight: "107%",
                    fontSize: "15px",
                    fontFamily: '"Calibri",sans-serif',
                  }}
                >
                  <span style={{ fontSize: "16px" }}>
                    <span style={{ lineHeight: "107%" }}>
                      Application software has some common characteristics
                      across all its sub-types. Developers or programmers take
                      time to understand the usage of the application software
                      &amp; then create it. All the application software is
                      intended to satisfy a certain level of problem-solving.
                      Here are certain key characteristics of application
                      software –&nbsp;
                    </span>
                  </span>
                </p>
                <ul style={{ listStyleType: "disc", marginLeft: "0.5in" }}>
                  <li>
                    <span style={{ fontSize: "16px" }}>
                      <span
                        style={{ lineHeight: "107%", fontFamily: "Calibri" }}
                      >
                        The programming language used for writing such software
                        is usually a is high-level language such as Java, C++,
                        C#, ASP.NET, PHP, Python, etc.
                        <br /> <br />
                        &nbsp;
                      </span>
                    </span>
                  </li>
                  <li>
                    <span style={{ fontSize: "16px" }}>
                      <span
                        style={{ lineHeight: "107%", fontFamily: "Calibri" }}
                      >
                        Since, application software is end-user specific, so,
                        while designing them, it is kept in mind that these
                        applications stay close to the user (user’s
                        understanding) and easy to use.
                        <br /> <br />
                        &nbsp;
                      </span>
                    </span>
                  </li>
                  <li>
                    <span style={{ fontSize: "16px" }}>
                      <span
                        style={{ lineHeight: "107%", fontFamily: "Calibri" }}
                      >
                        Application software is designed so that they become
                        more interactive. This means, the applications are
                        self-explainable in terms of look and UI. There will be
                        buttons, menus, text boxes, radio buttons, checkboxes,
                        drop-down lists and other such components.
                      </span>
                    </span>
                  </li>
                </ul>
                <p
                  style={{
                    marginTop: "0in",
                    marginRight: "0in",
                    marginBottom: "8.0pt",
                    marginLeft: "0in",
                    lineHeight: "107%",
                    fontSize: "15px",
                    fontFamily: '"Calibri",sans-serif',
                  }}
                >
                  <span style={{ fontSize: "16px" }}>
                    <span style={{ lineHeight: "107%" }}>&nbsp;</span>
                  </span>
                </p>
                <p
                  style={{
                    marginTop: "0in",
                    marginRight: "0in",
                    marginBottom: "8.0pt",
                    marginLeft: "0in",
                    lineHeight: "107%",
                    fontSize: "15px",
                    fontFamily: '"Calibri",sans-serif',
                  }}
                >
                  <span style={{ fontSize: "16px" }}>
                    <br />
                  </span>
                </p>
                <p>
                  <br />
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
