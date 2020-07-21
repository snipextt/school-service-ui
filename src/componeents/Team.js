import React from "react";
import { motion } from "framer-motion";
const MemberCard = ({ imgSrc, name, designation, linkedin }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="p-2 lg:w-1/3 md:w-1/2 w-full"
    >
      <div className="h-full flex items-center border-white border  p-4 rounded-lg">
        <img
          alt="team"
          className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
          src={require(`../Static/images/${imgSrc}`)}
        />
        <div className="flex-grow">
          <h2 className="text-white title-font font-medium">{name}</h2>
          <p className="text-white">
            {designation}{" "}
            <a
              href={linkedin}
              className=" text-white"
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
    designation: "Founder and Director",
    linkedin: "https://www.linkedin.com/in/gauravroy62/",
  },
  {
    name: "Tushar Verma",
    imgSrc: "tushar.jpg",
    designation: "Chief Executive Officer",
    linkedin: "https://www.linkedin.com/in/tushars25/",
  },
  {
    name: "Viswajit Nerker",
    imgSrc: "vishwa.jpg",
    designation: "Chief Operating Officer",
    linkedin: "https://www.linkedin.com/in/vishwajitnerkar/",
  },
  {
    name: "Manish Kumar",
    imgSrc: "Manish.jpg",
    designation: "Chief Technology Officer",
    linkedin: "https://www.linkedin.com/in/manishkumarofficially",
  },
  {
    name: "Himanshu Parihar",
    imgSrc: "himanshu-min.jpg",
    designation: "Product and Growth Analyst",
    linkedin: "https://www.linkedin.com/in/himanshuwordsmith",
  },
  {
    name: "Manav Pathik",
    imgSrc: "manav.jpg",
    designation: "Marketing Head",
    linkedin: "https://www.linkedin.com/in/manav-pathik-b23b601a6",
  },
  {
    name: "Abhishek Maurya",
    imgSrc: "Abhishek.jpg",
    designation: "DevOps Engineer Expert",
    linkedin: "https://www.linkedin.com/in/abhitnc",
  },
  {
    name: "Sahaj Oberoi",
    imgSrc: "Sahaj.jpg",
    designation: "Python Developer",
    linkedin: "https://www.linkedin.com/in/abhitnc",
  },
  {
    name: "Pratyaksh Singh",
    imgSrc: "Pratyaksh.jpg",
    designation: "Linux Expert",
    linkedin: "https://www.linkedin.com/in/abhitnc",
  },
  {
    name: "Aditya kumar",
    imgSrc: "Abhishek.jpg",
    designation: "Data analyst",
    linkedin: "https://www.linkedin.com/in/abhitnc",
  },

  {
    name: "Aditya Rai",
    imgSrc: "Abhishek.jpg",
    designation: "CTF Expert",
    linkedin: "https://www.linkedin.com/in/abhitnc",
  },
  {
    name: "Deepesh Pandey",
    imgSrc: "Abhishek.jpg",
    designation: "Hackthebox Expert",
    linkedin: "https://www.linkedin.com/in/abhitnc",
  },
  {
    name: "Vishal ajwani",
    imgSrc: "vishal.jpeg",
    designation: "Java Expert",
    linkedin: "https://www.linkedin.com/in/abhitnc",
  },
  {
    name: "Nishant Kumar Kushwaha",
    imgSrc: "Nishant.jpg",
    designation: "Graphic Designer",
    linkedin: "https://www.linkedin.com/in/nishant2107",
  },
  {
    name: "Bimal",
    imgSrc: "Abhishek.jpg",
    designation: "Graphic designer",
    linkedin: "https://www.linkedin.com/in/abhitnc",
  },
];

export default function Team() {
  return (
    <div>
      <section className="text-gray-700 body-font px-4">
        <div className="container md:px-24  pb-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-bold title-font mb-4 text-yellow-700">
              Meet These Amazing Folks
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-white">
              Placement Gurukul is guided by a team of amazing people with a
              vision in mind. At Placement Gurukul, we share a same thought and
              ideologies about our services and education.
            </p>
          </div>
          <div className="flex flex-wrap -m-2">
            {members.map((elem) => (
              <MemberCard {...elem} key={elem.name} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
