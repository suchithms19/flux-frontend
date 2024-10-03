import React from 'react';

const FeatureSection = ({ imageSrc, title, description, imageRight = false }) => {
  return (
    <div className="max-w-4xl mx-auto text-center">
      <div className={`flex flex-col ${imageRight ? 'md:flex-row-reverse' : 'md:flex-row'} justify-between items-center space-y-5 md:space-y-0 md:space-x-8`}>
        <div className="w-full md:w-1/3">
          <img className='w-full max-w-xs mx-auto' src={imageSrc} alt="" />
        </div>
        <div className='w-full md:w-2/3 text-start'>
          <div className='text-3xl md:text-4xl font-bold mb-4 md:mb-8 text-black'>{title}</div>
          <div className='text-lg md:text-xl text-gray-600'>{description}</div>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;