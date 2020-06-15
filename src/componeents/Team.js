import React from "react";
const MemberCard = ({ imgSrc, name, designation }) => {
  return (
    <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
      <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
        <img
          alt="team"
          className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
          src={imgSrc}
        />
        <div className="flex-grow">
          <h2 className="text-gray-900 title-font font-medium">{name}</h2>
          <p className="text-gray-500">{designation}</p>
        </div>
      </div>
    </div>
  );
};

const members = [
  {
    name: "Gaurav Roy",
    imgSrc: "https://dummyimage.com/84x84",
    designation: "CEO and Founder",
  },
  {
    name: "Manish Kumar",
    imgSrc: "https://dummyimage.com/84x84",
    designation: "CTO",
  },
  {
    name: "Viswajit Nerker",
    imgSrc: "https://dummyimage.com/84x84",
    designation: "COO",
  },
  {
    name: "Himanshu Parihar",
    imgSrc: "https://dummyimage.com/84x84",
    designation: "Product and Growth Analyst",
  },
  {
    name: "Tushar Verma",
    imgSrc: "https://dummyimage.com/84x84",
    designation: "Co-founder",
  },
  {
    name: "Abhishek Maurya",
    imgSrc: "https://dummyimage.com/84x84",
    designation: "Marketing Head",
  },
  {
    name: "Venkatesh L Sharma",
    imgSrc: "https://dummyimage.com/84x84",
    designation: "Cybersecurity Advisor",
  },
  {
    name: "Sahaj Oberoi",
    imgSrc: "https://dummyimage.com/84x84",
    designation: "Python Trainer",
  },
  {
    name: "Pratyaksh Singh",
    imgSrc: "https://dummyimage.com/84x84",
    designation: "Linux Trainer",
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
