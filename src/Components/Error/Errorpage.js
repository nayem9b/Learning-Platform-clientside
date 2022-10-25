import React from "react";
import Lottie from "lottie-react";
import error from "../../Images/84918-404-error-doodle-animation.json";
import { Link } from "react-router-dom";
const Errorpage = () => {
  return (
    <div className='grid grid-cols-1'>
      <Link to='/' className=''>
        <a
          class='flex items-center w-56 h-400 justify-center rounded-xl border-4 border-black bg-pink-100 px-8 py-4 font-bold shadow-[6px_6px_0_0_#000] transition hover:shadow-none focus:outline-none focus:ring active:bg-pink-50'
          href='/blog'>
          Back to Safety?{" "}
          <span aria-hidden='true' class='ml-1.5' role='img'>
            🤔
          </span>
        </a>
      </Link>
      <div className=' flex justify-center lg:ml-[400px] lg:mt-[-66px] md:h-[100px] md:w-[100px] lg:h-[800px] sm:h-[100px] sm:w-[300px] lg:w-[800px]'>
        <Lottie animationData={error} loop={true} />
      </div>
    </div>
  );
};

export default Errorpage;
