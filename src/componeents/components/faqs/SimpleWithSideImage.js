import React, { useState } from "react";
import { motion } from "framer-motion";
import tw from "twin.macro";
import styled, { css } from "styled-components/macro"; //eslint-disable-line
import { Container, ContentWithPaddingXl } from "../misc/Layouts";
import {
  SectionHeading,
  Subheading as SubheadingBase,
} from "../misc/Headings.js";
import { SectionDescription } from "../misc/Typography.js";

const PrimaryBackgroundContainer = tw(Container)`-mx-8 px-8 text-gray-100`;

const HeadingContainer = tw.div``;
const Subheading = tw(SubheadingBase)`text-center text-gray-100 mb-4`;
const Heading = tw(SectionHeading)`text-yellow-600`;
const Description = tw(SectionDescription)`mx-auto text-center text-gray-300`;

const FaqsContainer = tw.div`mt-10 sm:mt-16 w-full flex-1 lg:flex justify-between items-start max-w-screen-lg mx-auto`;
const FaqsColumn = tw.div`w-full lg:max-w-lg lg:mr-12 last:mr-0`;
const Faq = tw.div`select-none cursor-pointer border-b-2 border-yellow-300 hover:border-yellow-500 transition-colors duration-300 py-6`;
const Question = tw.div`flex justify-between items-center`;
const QuestionText = tw.div`text-sm sm:text-lg font-semibold tracking-wide`;
const QuestionToggleIcon = styled(motion.span)`
  ${tw`ml-2 transition duration-300`}
  svg {
    ${tw`w-6 h-6`}
  }
`;
const Answer = tw(motion.div)`hidden text-sm font-normal mt-4 text-gray-300`;

export default ({
  subheading = "",
  heading = "Frequently Asked Questions",
  description = "Got a question or a couple of them? Here are some frequently asked questions from our clients. Write us on our email if you have questions which are not listed here.",
  faqs = [
    {
      question: "What type of services does School provide?",
      answer:
        "Android Application Development, full-stack Web application development, content (technical/non-technical) writing, security, online placement-oriented training, offline on-campus training, corporate training, study material designing and drafting, graphics designing, logo creation, banner designing, counseling, game development, and professional resume making.",
    },
    {
      question: "What is the cost of our services?",
      answer:
        "The cost of the services we provide varies according to some criteria including but not limited to the type of work, amount of work, workload, development methodologies, level of agility, services, and microservices used, number of words (for content), types of systems (for pen-testing and bug hunting).",
    },
    {
      question: "Is our team available on phone calls and emails?",
      answer:
        "Yes, our team is just a phone call away. Also, we assure our clients and students that we respond to the emails within 12 hours of receiving the emails.",
    },
    {
      question: "What is expected from trainers if they want to join us?",
      answer:
        "Course details have to be emailed to the directors or the CEO of School. Other information depends on the situation. We will ask you to provide some other detailed information about the trainer and the course (if & when necessary).",
    },
    {
      question: "Who to contact in case of any urgency or any query?",
      answer:
        "You can raise a query in from our Contact Us page. The top 6 members of the team are listed in the hierarchy, you can also contact them via email or LinkedIn (DM) if urgent.",
    },
    {
      question: "Do we provides integrity at work and words?",
      answer:
        "We here at School are professionals & highly skilled trainers from different verticals. Our main mantra is to work with total integrity, and deliver services on time while delivering the best online lectures to make career goals achievable as well.",
    },
  ],
}) => {
  const faqCol1 = [];
  const faqCol2 = [];
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(null);

  const toggleQuestion = (questionIndex) => {
    if (activeQuestionIndex === questionIndex) setActiveQuestionIndex(null);
    else setActiveQuestionIndex(questionIndex);
  };

  faqs.map((faq, index) => {
    const renderedFaq = (
      <Faq key={index} onClick={() => toggleQuestion(index)}>
        <Question>
          <QuestionText>{faq.question}</QuestionText>
          <QuestionToggleIcon
            variants={{
              collapsed: { rotate: 0 },
              open: { rotate: -180 },
            }}
            initial="collapsed"
            animate={activeQuestionIndex === index ? "open" : "collapsed"}
            transition={{ duration: 0.02, ease: [0.04, 0.62, 0.23, 0.98] }}
          ></QuestionToggleIcon>
        </Question>
        <Answer
          variants={{
            open: {
              opacity: 1,
              height: "auto",
              marginTop: "16px",
              display: "block",
            },
            collapsed: {
              opacity: 0,
              height: 0,
              marginTop: "0px",
              display: "none",
            },
          }}
          initial="collapsed"
          animate={activeQuestionIndex === index ? "open" : "collapsed"}
          transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
        >
          {faq.answer}
        </Answer>
      </Faq>
    );

    if (index % 2 === 0) faqCol1.push(renderedFaq);
    else faqCol2.push(renderedFaq);

    return null;
  });
  return (
    <PrimaryBackgroundContainer>
      <ContentWithPaddingXl>
        <HeadingContainer>
          {subheading && <Subheading>{subheading}</Subheading>}
          <Heading>{heading}</Heading>
          <Description>{description}</Description>
        </HeadingContainer>
        <FaqsContainer className="animate-hue">
          <FaqsColumn>{faqCol1}</FaqsColumn>
          <FaqsColumn>{faqCol2}</FaqsColumn>
        </FaqsContainer>
      </ContentWithPaddingXl>
    </PrimaryBackgroundContainer>
  );
};
