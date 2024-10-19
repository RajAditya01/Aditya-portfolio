import React from "react";
import Lottie from "react-lottie";
import readingBook from "../../../assets/reading-book.json";

const Education = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: readingBook,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="pt-24">
      <div className="mb-12">
        <h1 className="text-4xl font-semibold drop-shadow-md text-center">
          My <span className="text-primary">Qualification</span>
        </h1>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8">
        <div className="mx-auto lg:ml-auto">
          <Lottie
            options={defaultOptions}
            height="70%"
            width="90%"
            className="mx-auto lg:mr-auto"
          />
        </div>
        {/* B-tech in CSE */}
        
        <div className="p-6 w-full bg-[#313131] bg-opacity-90 backdrop-blur-lg rounded-lg shadow-lg inline-block hover:shadow-primary duration-300 cursor-pointer">
          <h2 className="text-2xl font-semibold text-white mb-4">
          Bachelor of Technology in CSE
          </h2>
          <p className="text-gray-300">
            Maharishi Markandeshwar (Deemed to be University)
          </p>
          <p className="text-gray-300">2021 - 2025</p>
          <p className="text-gray-300">CGPA: 9.03/10(Current)</p>
          {/* Add any additional information about your B-Tech here */}
          <div className="mt-4">
            <h3 className="text-xl font-semibold text-white">Core Fundamentals</h3>
            <ul className="list-disc list-inside text-gray-300">
              <li>DBMS</li>
              <li>Software Engineering</li>
              <li>Operating System</li>
              <li>Computer Networks</li>
              <li>Data Structures and Algorithms</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
