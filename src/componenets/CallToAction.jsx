import React from 'react';

const CallToAction = ({ handleJoin }) => {
  return (
    <div className='flex justify-center items-center my-16 md:my-40 px-4'>
      <div className="bg-white shadow-2xl rounded-lg text-black p-6 sm:p-8 border border-customGrey inline-block">
        <h2 className="text-lg mb-5 text-center">Get early access to Flux 🔥</h2>
        <button onClick={handleJoin} className="bg-customYellow text-black py-3 px-6 sm:py-4 sm:px-28 rounded-lg font-semibold shadow-md hover:scale-105 transition-transform duration-300">
          Join the Waitlist
        </button>
      </div>
    </div>
  );
};

export default CallToAction;