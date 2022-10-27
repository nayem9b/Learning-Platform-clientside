import React from "react";

const Cta = () => {
  return (
    <div>
      <section class='overflow-hidden bg-gray-50 sm:grid sm:grid-cols-2'>
        <div class='p-8 md:p-12 lg:px-16 lg:py-24'>
          <div class='mx-auto max-w-xl text-center sm:text-left'>
            <h2 class='text-2xl font-bold text-gray-900 md:text-3xl'>
              Make Your Next Career Move!
            </h2>

            <p class='hidden text-gray-500 md:mt-4 md:block'>
              Web Smasher is an online learning and teaching marketplace with
              over 204 courses and 5 thousand students. Learn programming,
              marketing, data science and more. Choose from 204,000 online video
              courses with new additions published every month
            </p>

            <div class='mt-4 md:mt-8'>
              <a
                href='#'
                class='inline-block rounded bg-black px-12 py-3 text-sm font-medium text-white transition hover:bg-emerald-700 focus:outline-none focus:ring focus:ring-yellow-400'>
                Get Started Today
              </a>
            </div>
          </div>
        </div>

        <img
          alt='Student'
          src='https://images.unsplash.com/photo-1464582883107-8adf2dca8a9f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
          class='h-56 w-full object-cover sm:h-full'
        />
      </section>
    </div>
  );
};

export default Cta;
