/* eslint-disable no-restricted-globals */
import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div class="sticky top-0 bg-white shadow-lg z-50">
      <header class="text-gray-700 body-font">
        <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link
            to="/"
            class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
          >
            <img
              src={require("./ITHUB.png")}
              class="h-10 w-10md:h-24md:w-24rounded-fullmx-automd:mx-0md:mr-6"
              alt="Hello"
            />
            <span class=" text-xl">IT Hub</span>
          </Link>
          <nav class="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
            <Link to="/" class="mr-6 hover:text-blue-400">
              Home
            </Link>
            <Link to="/scholorship" class="mr-6 hover:text-blue-400">
              Scholorships
            </Link>
            <Link to="/about" class="hover:text-blue-400">
              About Us
            </Link>
          </nav>
          <button
            class={
              screen.width > 768
                ? "inline-flex items-center bg-gray-200 border-0 py-1 px-3 focus:outline-none hover:bg-gray-300 rounded text-base mt-4 md:mt-0"
                : "hidden"
            }
          >
            Join Our Webinars
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </header>
    </div>
  );
}
