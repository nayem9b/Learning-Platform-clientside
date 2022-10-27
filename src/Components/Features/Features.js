import React from "react";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import feature from "../../Images/102480-mobile-apps-features.json";

const Features = () => {
  return (
    <div>
      <Link to='/' className=''>
        <button
          class='flex items-center w-56 h-400 justify-center rounded-xl border-4 border-black bg-pink-100 px-8 py-4 font-bold shadow-[6px_6px_0_0_#000] transition hover:shadow-none focus:outline-none focus:ring active:bg-pink-50'
          href='/blog'>
          Back to Home?{" "}
          <span aria-hidden='true' class='ml-1.5' role='img'>
            🤔
          </span>
        </button>
      </Link>
      <div className=' flex justify-center lg:ml-[400px] md:ml-[170px] lg:mt-[-66px] md:h-[500px] md:w-[500px] lg:h-[800px] sm:h-[100px] sm:w-[300px] lg:w-[800px]'>
        <Lottie animationData={feature} loop={true} />
      </div>
    </div>
  );
};

export default Features;
