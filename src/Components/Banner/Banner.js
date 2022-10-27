import React from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div>
      <section class='bg-gray-50'>
        <div class='mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center'>
          <div class='mx-auto max-w-xl text-center'>
            <h1 class='text-3xl font-extrabold sm:text-5xl'>
              Understand Web Technologies
            </h1>
            <h1 class='font-extrabold text-5xl text-red-700 sm:block mt-20'>
              Redefine your imagination
            </h1>

            <p class='mt-4 sm:text-xl sm:leading-relaxed'>
              Want to know more about our platform?
            </p>

            <div class='mt-8 flex flex-wrap justify-center gap-4'>
              <Link
                class='block w-full rounded bg-black px-12 py-3 text-sm font-medium text-white shadow hover:bg-red-700 focus:outline-none focus:ring active:bg-red-500 sm:w-auto'
                to='/courses'>
                Get Started
              </Link>

              <Link
                class='block w-full rounded px-12 py-3 text-sm font-medium  shadow hover:text-red-700 focus:outline-none focus:ring active:text-red-500 sm:w-auto'
                to='/about'>
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
