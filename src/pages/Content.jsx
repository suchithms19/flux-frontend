import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../componenets/Header';
import Hero from '../componenets/Hero';
import FeatureSection from '../componenets/FeatureSection';
import CallToAction from '../componenets/CallToAction';
import FounderSection from '../componenets/FounderSection';
import image1 from '/src/assets/image1.jpg';
import image2 from "/src/assets/image2.jpg";

const Content = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 100);
  }, []);

  const handleJoin = () => {
    navigate('/customerform');
  };

  return (
    <div className='bg-white text-black'>
      <Header isVisible={isVisible} />
      <Hero isVisible={isVisible} handleJoin={handleJoin} />
      <section className='mt-16 space-y-16 md:space-y-32 lg:space-y-64 px-4 md:px-6'>
        <FeatureSection
          imageSrc={image1}
          title="Stop endless search: Get answers from experts"
          description={
            <>
              No fuzz, no buzz.<br/><br/> 
              Why waste time scrolling through endless search results? Flux connects you with industry experts who will answer your queries faster than you can say 'Google it!'<br/><br/>
              With pros in every field—coding, freelancing, design—you name it, Flux has got the expert on speed dial.<br/><br/>
              So, Not sure what to learn after mastering Javascript? Or feeling lost on how to dive into freelancing?
              Don't fret! Just Flux it and get ready to level up in no time!
            </>
          }
        />
        <FeatureSection
          imageSrc={image2}
          title="Affordable and Answers Personalized to You!"
          description={
            <>
              Why settle for generic solutions when you can get tailored guidance from the pros?
              At Flux, our experts provide personalized answers that cater to your unique needs- all at an affordable cost.<br/><br/>
              Instead of sifting through vague information online, connect with seasoned professionals who understand your situation and can offer specific advice.
            </>
          }
          imageRight
        />
      </section>
      <CallToAction handleJoin={handleJoin} />
      <FounderSection />
      <div className='text-center py-4 mt-10'>© 2024 Flux Technologies, Inc.</div>
    </div>
  );
};

export default Content;