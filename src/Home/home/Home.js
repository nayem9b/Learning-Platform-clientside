import React from "react";
import Typewriter from "typewriter-effect";
import Banner from "../../Components/Banner/Banner";
import Footer from "../../Components/Footer/Footer";
import Cta from "../CTA/Cta";
import Lottie from "lottie-react";
import learn from "../../Images/99728-online-learning.json";

const Home = () => {
  return (
    <div className='text-center lg:mt-24 sm:mt-16'>
      <h1 className=' text-6xl font-bold'>Start to </h1>
      <div className=' text-7xl text-orange-500 font-bold'>
        <Typewriter
          options={{
            strings: ["Learn", "Grow", "Build", "Contribute"],
            autoStart: true,
            loop: true,
          }}
        />
      </div>
      <div className=' flex justify-center lg:ml-[400px] lg:mt-[-66px] md:h-[100px] md:w-[100px] lg:h-[800px] sm:h-[100px] sm:w-[300px] lg:w-[800px]'>
        <Lottie animationData={learn} loop={true} />
      </div>
      <h1 className='lg:mt-40 lg:mb-72 text-8xl w-full text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-purple-500 lg:inline'>
        Make the move
      </h1>

      <Banner></Banner>
      <Cta className=''></Cta>

      <Footer></Footer>
    </div>
  );
};

export default Home;
