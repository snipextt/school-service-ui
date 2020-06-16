import React, { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
const isEmpty = (string) => (string.value.trim() === "" ? true : false);
const isEmail = (email) =>
  email.value.match(
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  )
    ? true
    : false;

export default function Contact() {
  const [isSending, setIsSending] = useState(false);
  const [isSucess, setIsSucess] = useState(null);
  const handleClick = (e) => {
    let inputs = document.querySelectorAll("input");
    let textarea = document.querySelector("textarea");
    if (
      isEmpty(inputs[0]) ||
      isEmpty(inputs[1]) ||
      isEmpty(textarea) ||
      !isEmail(inputs[1])
    ) {
      alert("Invalid fields");
    } else {
      console.log(e.target);
      setIsSending(true);
      setIsSucess(null);
      axios
        .post("/api", {
          email: inputs[1].value,
          content: textarea.value,
        })
        .then(function (response) {
          console.log(response);
          setIsSending(false);
          setIsSucess(true);
        })
        .catch((err) => {
          console.error(err);
          setIsSending(false);
          setIsSucess(false);
        });
    }
  };
  return (
    <div>
      <section className="text-gray-700 body-font relative">
        <div className="container px-5 py-24 mx-auto flex sm:flex-no-wrap flex-wrap">
          <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
            <iframe
              className="absolute inset-0"
              style={{ filter: "grayscale(1) contrast(1.2) opacity(0.4)" }}
              title="map"
              marginHeight={0}
              marginWidth={0}
              scrolling="no"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54533.20197792522!2d75.53839987112384!3d31.322392997383595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a5a5747a9eb91%3A0xc74b34c05aa5b4b8!2sJalandhar%2C%20Punjab!5e0!3m2!1sen!2sin!4v1591778161802!5m2!1sen!2sin"
              width="100%"
              height="100%"
              frameBorder={0}
            />
            <div className="bg-white relative flex flex-wrap py-6">
              <div className="lg:w-full px-6 mt-4 lg:mt-0">
                <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm">
                  EMAIL
                </h2>
                <a href="/about" className="text-teal-500 leading-relaxed">
                  info.ithubgroup@gmail.com
                </a>
                <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mt-4">
                  PHONE
                </h2>
                <p className="leading-relaxed">123-456-7890</p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
            <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
              Contact Us
            </h2>
            <p className="leading-relaxed mb-5 text-gray-600">
              We generally reply in 2 working days!
            </p>
            <input
              className="bg-white rounded border border-gray-400 focus:outline-none focus:border-teal-500 text-base px-4 py-2 mb-4"
              placeholder="Name"
              type="text"
              disabled={isSending}
            />
            <input
              className="bg-white rounded border border-gray-400 focus:outline-none focus:border-teal-500 text-base px-4 py-2 mb-4"
              placeholder="Email"
              type="email"
              disabled={isSending}
            />
            <textarea
              className="bg-white rounded border border-gray-400 focus:outline-none h-32 focus:border-teal-500 text-base px-4 py-2 mb-4 resize-none"
              placeholder="Message"
              defaultValue={""}
              disabled={isSending}
            />
            {isSucess != null ? (
              isSucess ? (
                <motion.p
                  animate={{ opacity: 1 }}
                  initial={{ opacity: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-teal-400 mb-4"
                >
                  Recieved. Hope to hear from us soon!
                </motion.p>
              ) : (
                <motion.p
                  animate={{ opacity: 1 }}
                  initial={{ opacity: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-red-400 mb-4"
                >
                  Something went wrong, please try again! again!
                </motion.p>
              )
            ) : (
              ""
            )}
            <button
              className="text-white bg-teal-500 border-0 py-2 px-6 focus:outline-none hover:bg-teal-600 rounded text-lg"
              onClick={handleClick}
              disabled={isSending}
            >
              {isSending ? (
                <i className="fas fa-circle-notch fa-spin fa-2x"></i>
              ) : (
                "Send it in!"
              )}
            </button>
            <p className="text-xs text-gray-500 mt-3">We don't spam</p>
          </div>
        </div>
      </section>
    </div>
  );
}
