import React from "react";
import Typewriter from "typewriter-effect";
import Banner from "../Components/Banner/Banner";
import Footer from "../Components/Footer/Footer";

const Home = () => {
  return (
    <div>
      <h1 className=' text-5xl font-bold'>Start to </h1>
      <div className=' text-6xl text-orange-500 font-bold'>
        <Typewriter
          options={{
            strings: ["Learn", "Grow", "Build", "Contribute"],
            autoStart: true,
            loop: true,
          }}
        />
      </div>

      <Banner></Banner>
      <Footer></Footer>
    </div>
  );
};

export default Home;
