import React, { useEffect, useState } from 'react';
import Aboutus from './Aboutus';
import Features from './Features';
import Gallery from './Gallery';
import TestimonialsCarousel from './TestimonialsCarousel';
import ContactSection from './ContactSection';
import Footer from './Footer';
import schoolimg from '../images/school.jpeg'


export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(!isVisible);
    }, 300); 

    return () => clearTimeout(timer);
  }, []);

  return (
   
    <>
    {/* hero section */}
    <section
    className="relative bg-[url('/src/images/school.jpeg')] bg-cover bg-center h-screen" id='home' 
  >
   
    {/* Overlay for background image */}
    <div className="absolute inset-0 bg-black opacity-50"></div>

    {/* Hero Content */}
    <div className="relative z-10 text-center text-white px-4 py-48 sm:px-6 md:px-12 lg:px-16 xl:px-32">
      {/* Title */}
      <p  className={`${
          isVisible ? 'opacity-100' : 'opacity-0'
        } transform transition-opacity duration-1000 delay-50 ease-in-out text-xs md:text-base lg:text-base font-semibold tracking-wider leading-0  font-Enriqueta capitalize text-gray-100 mt-3`}>welcome to NS smart school</p>
      <h1
        className={`${
          isVisible ? 'opacity-100' : 'opacity-0'
        } transform transition-opacity duration-1000 delay-50 ease-in-out text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-wide leading-tight mt-3 font-Lora italic capitalize text-gray-100`}
      >
        {/* Welcome to N S SMART SCHOOL */}       
        An investment in knowledge <br/> Pays
         the best interest
       
      </h1>

      {/* Subtitle */}
      <p
        className={`${
          isVisible ? 'opacity-100' : 'opacity-0'
        }  text-xs md:text-base lg:text-base transition-opacity duration-1000 ease-in-out font-Enriqueta italic`}
      >
        Where Learning Comes to Life – A place to grow, discover, and thrive.
      </p>

      <div className="mt-6 flex justify-center items-center space-x-4">
        {/* Primary CTA */}
        <a
          href="#about"
          className="transform transition duration-300 ease-in-out hover:scale-105 bg-[#000000] border-2 border-gray-400 hover:bg-[#000000] text-white px-5 py-2 rounded-full text-lg  font-Roboto shadow-lg hover:shadow-xl"
        >
          Learn More
        </a>

        {/* Secondary CTA */}
        {/* <a
          href="#admissions"
          className="transform transition duration-300 ease-in-out hover:scale-105 bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-3 rounded-full text-xl font-semibold shadow-lg hover:shadow-xl"
        >
          Enroll Now
        </a> */}

      </div>
    </div>
    
    {/* Parallax Effect */}
    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
    </section>

    {/* about section */}
     <Aboutus/>

      {/* hero section */}
      <Features/>

       {/* gallery section */}
       <Gallery/>

        {/* testimonial section */}
        <TestimonialsCarousel/>

         {/* contactus section */}
         <ContactSection/>

          {/* footer section */}
            <Footer/>

    </>
  );
}

