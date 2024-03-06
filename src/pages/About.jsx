import React from'react'
import "react-vertical-timeline-component/style.min.css";
import {skills } from "../constants";
import CTA from '../components/CTA';
const About = () => {
  return (
   <section className='max-container'>
  <h1 className="head-text">
    Hello,I am<span className='blue-gradient_text font-semibold drop-shadow'>  Anshika Singhal </span>
    </h1>
  <div>
    <p className='mt-5 flex flex-col gap-3 text-slate-500'>
      Software Engineer done B.tech with specialization in Machine Learing and Artifical Intelligence , 
      through hands on learning and building applications.
    </p>
    </div>
    <div className='py-10 flex flex-col'>
      <h3 className='subhead-text'> My Skills</h3>
      <div className='mt-16 flex flex-wrap gap-12'>
        {skills.map((skills) => (
         <div className='block-container w-20 h-20'>
          <div className='btn-back rounded-xl' />
          <div className='btn-front rounded-xl flex justify-center items-center'>
            <img
            src={skills.imageUrl}
            alt={skills.name}
            className='w-1/2 h-1/2 object-contain'
            />
          </div>
         </div>
        ))}
      </div>
    </div>
    <CTA />
   </section>
  )
}

export default About