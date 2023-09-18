import Image from "next/image";
import React, { useState, useEffect } from "react";
import Typewriter from "typewriter-effect";

const Home = () => {
  return (
    <>
      <div className="flex justify-around items-center">
        <div className="w-2/5">
          <h2>Hi, I am Ali Awj</h2>
          <div className="flex">
          <pre className="font-sans">
            I am a </pre>
            <p>
              <Typewriter
                options={{
                  strings: ["Front End Developer", "React JS Developer", "Next JS Developer"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </p>
                    </div>
        </div>
        <div className="w-2/5"><Image src="/assets/images/avatar.png" width={150} height={350} alt="Ali's Pic"/></div>
      </div>
    </>
  );
};

export default Home;
