import React from "react";
import Lottie from "lottie-react";
import error from "../../Images/84918-404-error-doodle-animation.json";
const Errorpage = () => {
  return (
    <div>
      <div className=' flex justify-center lg:ml-[400px] lg:mt-[-66px] md:h-[100px] md:w-[100px] lg:h-[800px] sm:h-[100px] sm:w-[300px] lg:w-[800px]'>
        <Lottie animationData={error} loop={true} />
      </div>
    </div>
  );
};

export default Errorpage;
