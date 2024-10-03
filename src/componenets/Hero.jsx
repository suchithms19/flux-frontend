import React from 'react';

const Hero = ({ isVisible, handleJoin }) => {
  return (
    <div className={`flex items-center justify-center min-h-screen pt-20 px-4 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 lg:mb-10 text-custom">
          Your Questions, Answered <span className='text-underline'>Best and Fast</span>
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 font-semibold mb-8">
          Connect with experts who provide instant, affordable guidance in minutes.
        </p>
        <div className="bg-white shadow-2xl rounded-lg text-black p-6 sm:p-8 border border-customGrey inline-block relative">
          <h2 className="text-lg mb-5">Get early access to Flux 🔥</h2>
          <button onClick={handleJoin} className="bg-customYellow text-black py-3 px-6 sm:py-4 sm:px-28 rounded-lg font-semibold shadow-md hover:scale-105 transition-transform duration-300">
            Join the Waitlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;