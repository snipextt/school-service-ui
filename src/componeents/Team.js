import React from "react";
import { motion } from "framer-motion";
const MemberCard = ({ imgSrc, name, designation }) => {
  console.log(`${imgSrc}`);
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="p-2 lg:w-1/3 md:w-1/2 w-full"
    >
      <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
        <img
          alt="team"
          className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
          src={require(`../Static/images/${imgSrc}`)}
        />
        <div className="flex-grow">
          <h2 className="text-gray-900 title-font font-medium">{name}</h2>
          <p className="text-gray-500">
            {designation}{" "}
            <a
              href="https://www.linkedin.com/company/it-hub-school/"
              className=" text-gray-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                fill="currentColor"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={0}
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="none"
                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                />
                <circle cx={4} cy={4} r={2} stroke="none" />
              </svg>
            </a>
          </p>
        </div>
      </div>
    </motion.div>
  );
};

const members = [
  {
    name: "Gaurav Roy",
    imgSrc: "gaurav.jpg",
    designation: "CEO and Founder",
  },
  {
    name: "Tushar Verma",
    imgSrc: "himanshu.jpg",
    designation: "Co-founder",
  },
  {
    name: "Viswajit Nerker",
    imgSrc: "himanshu.jpg",
    designation: "COO",
  },
  {
    name: "Manish Kumar",
    imgSrc: "himanshu.jpg",
    designation: "CTO",
  },

  {
    name: "Himanshu Parihar",
    imgSrc: "himanshu.jpg",
    designation: "Product and Growth Analyst",
  },
  {
    name: "Abhishek Maurya",
    imgSrc: "Abhishek.jpg",
    designation: "Marketing Head",
  },
  {
    name: "Devanshi Pathak",
    imgSrc: "Devanshi.jpg",
    designation: "Technical Head",
  },
  {
    name: "Venkatesh L Sharma",
    imgSrc: "Venkatesh.jpg",
    designation: "Cybersecurity Advisor",
  },
  {
    name: "Sahaj Oberoi",
    imgSrc: "Sahaj.jpg",
    designation: "Python Trainer",
  },
  {
    name: "Pratyaksh Singh",
    imgSrc: "Pratyaksh.jpg",
    designation: "Linux Trainer",
  },
  {
    name: "Vaishali Bhardwag",
    imgSrc: "himanshu.jpg",
    designation: "Soft skills trainer",
  },
  {
    name: "Aditya Kumar",
    imgSrc: "Aditya.jpg",
    designation: "Data Auditor",
  },
];

export default function Team() {
  return (
    <div>
      <section className="text-gray-700 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              Our Team
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Meet the best of the industry experts and trainers, all in one
              place at IT Hub School!
            </p>
          </div>
          <div className="flex flex-wrap -m-2">
            {members.map((elem) => (
              <MemberCard {...elem} key={Math.ceil(Math.random() * 100)} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
