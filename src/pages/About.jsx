import React from'react'
import { Link } from "react-router-dom";
import { arrow } from "../assets/icons";
import { VerticalTimeline,VerticalTimelineElement}from 'react-vertical-timeline-component';
import "react-vertical-timeline-component/style.min.css";
import {skills ,experiences,socialLinks} from "../constants";
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
    <div className='py-16'>
     <h3 className='subhead-text'>Work-Experience</h3>
     <div>
    <p className='mt-5 flex flex-col gap-3 text-slate-500'>
      I have worked with this organization.
    </p>
    </div>
    <div className='mt-12 flex'>
        <VerticalTimeline>
          {experiences.map((experiences)=>(
            <VerticalTimelineElement
            key={experiences.company_name}
            date={experiences.date}
            iconStyle={{ background: experiences.iconBg }}
            icon={
              <div className='flex justify-center items-center w-full h-full'>
                <img
                  src={experiences.icon}
                  alt={experiences.company_name}
                  className='w-[60%] h-[60%] object-contain'
                />
              </div>
            }
            contentStyle={{
              borderBottom: "8px",
              borderStyle: "solid",
              borderBottomColor: experiences.iconBg,
              boxShadow: "none",
            }}
            >
              <div>
                <h3 className='text-black text-x1 font-poppins font-semibold'>
                  {experiences.title}
                </h3>
                <p className='text-black font-medium font-base' style={{margin:0}}>
                  {experiences.company_name}
                </p>
              </div>
              <ul className='my-5 list-disc ml-5 space-y-2'>
                {experiences.points.map((point,index)=>(
                  <li key={`experiences-point-${index}`}className='text-black-500/50 font-normal pl-1 text-sm'>
                    {point}
                  </li>
                ))}
              </ul>
              </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
    </div>
    </div>
    <div className='py-16' >
      <h3 className='subhead-text'>
        Social links
      </h3>
      <div className='flex flex-wrap my-20 gap-16'>
   {socialLinks.map((social) => (
    <div className='lg:w-[400px] w-full' key={social.name}>
      <div className='block-container w-12 h-12'>
        <div className='btn-back rounded-xl' />
        <div className='btn-front rounded-xl flex justify-center items-center'>
          <img
            src={social.iconUrl}
            alt={social.name}
            className='w-1/2 h-1/2 object-contain'
          />
        </div>
      </div>
      <div className='mt-5 flex flex-col'>
        <h4 className='text-2xl font-poppins font-semibold'>
          {social.name}
        </h4>
        <div className='mt-5 flex items-center gap-2 font-poppins'>
          <a
            href={social.link}
            target='_blank'
            rel='noopener noreferrer'
            className='font-semibold text-blue-600'
          >
            Live Link
          </a>
          <img
            src={arrow}
            alt='arrow'
            className='w-4 h-4 object-contain'
          />
        </div>
      </div>
    </div>
   ))}
</div>
    </div>
    <hr className='border-slate-200' />
   </section>
  )
}

export default About