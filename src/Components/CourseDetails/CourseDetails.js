import React from "react";
import { jsPDF } from "jspdf";
import { Link, useLoaderData } from "react-router-dom";

const CourseDetails = () => {
  const loaderData = useLoaderData();
  const { number, name, logo, time, task, teacher, Extra, videos, price } =
    loaderData;

  const handleDownload = () => {
    const doc = new jsPDF();

    doc.text(
      `Details about ${name} course:
    Course name : ${name}
    Course Instructor : ${teacher}
    Number of Assignments : ${task}
    Duration of the course : ${time} months
    Bonus Videos : ${Extra}
    Price of the course : ${price}
    `,
      10,
      10
    );
    doc.save(`${name}.pdf`);
  };
  return (
    <div>
      <h5 className=' text-center text-3xl font-extrabold leading-none sm:text-4xl'>
        {name}
      </h5>
      <button
        onClick={handleDownload}
        class='inline-block rounded border border-current px-8 py-3 text-sm font-medium text-indigo-600 transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:text-indigo-500'
        href='/download'>
        Download
      </button>
      <div className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
        <div className='flex flex-col max-w-screen-lg overflow-hidden bg-white border rounded shadow-sm lg:flex-row sm:mx-auto'>
          <div className='relative lg:w-1/2'>
            <img
              src={logo}
              alt=''
              className='object-cover w-full lg:absolute h-80 lg:h-full'
            />
            <svg
              className='absolute top-0 right-0 hidden h-full text-white lg:inline-block'
              viewBox='0 0 20 104'
              fill='currentColor'>
              <polygon points='17.3036738 5.68434189e-14 20 5.68434189e-14 20 104 0.824555778 104' />
            </svg>
          </div>
          <div className='flex flex-col justify-center p-8 bg-white lg:p-16 lg:pl-10 lg:w-1/2'>
            <div>
              <p className='inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400'>
                Brand new
              </p>
            </div>
            <h5 className='mb-3 text-3xl font-extrabold leading-none sm:text-4xl'>
              {name}
            </h5>
            <p className=' flex mb-5 text-gray-800 '>
              <span className='font-bold mr-2'>Course Duration:</span>
              <p>{time} months</p>
            </p>
            <p className=' flex mb-5 text-gray-800 '>
              <span className='font-bold mr-2'>Instructor:</span>
              <p>{teacher}</p>
            </p>
            <p className=' flex mb-5 text-gray-800 '>
              <span className='font-bold mr-2'>Videos:</span>
              <p>{videos}</p>
            </p>
            <p className=' flex mb-5 text-gray-800 '>
              <span className='font-bold mr-2'>Bonus Video:</span>
              <p>{Extra}</p>
            </p>
            <p className=' flex mb-5 text-gray-800 '>
              <span className='font-bold mr-2'>Assignments:</span>
              <p>{task}</p>
            </p>
            <p className=' flex mb-5 text-gray-800 '>
              <span className='font-bold mr-2'>$ {price}</span>
            </p>

            <div className='flex items-center'>
              <Link to={`/courses/${number}/checkout/${number}`}>
                <button
                  type='submit'
                  className='inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-black transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none'>
                  Get Premium Access
                  <svg
                    className='inline-block w-3 ml-2'
                    fill='currentColor'
                    viewBox='0 0 12 12'>
                    <path d='M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z' />
                  </svg>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
