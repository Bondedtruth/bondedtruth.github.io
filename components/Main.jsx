'use client';
import { AiOutlineMail } from 'react-icons/ai';
import { BsWhatsapp } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import Typewriter from 'typewriter-effect';
// import React, { useState, useEffect } from 'react';
// import Typed from 'react-typed';

const Main = () => {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <h2 className="flex justify-center items-center uppercase text-sm tracking-widest text-gray-600">
            LET'S <span className="p-2 font-bold text-gray-800">
            <Typewriter 
              options={{
                strings: [
                  'BUILD A UNIQUE SOLUTION TOGETHER...',
                  'REBUILD YOUR WEBSITE WITH A BETTER UI/UX...',
                  'BUILD A WEB APP THAT MEETS YOUR NEED...',
                  'TAKE CHARGE OF YOUR ONLINE PRESENCE...',
                ],
                autoStart: true,
                loop: true,
              }}
            />
            </span> 
          </h2>
          <h1 className="py-4 text-gray-700">
            Hi, I am <span className="text-[#5651e5]">Bolaji John</span>
          </h1>
          <h1 className="py-4 text-gray-700">A Front-End Web Developer</h1>
          <p className="py-4 text-gray-600 max-w-[75%] m-auto">
            I am a front-end web developer specializing in building (and
            occasionaly designing) exceptional digital experiences. Currently, I
            am focused on building responsive front-end web applications while
            learning back-end technologies
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <a href="https://www.linkedin.com/in/john-onunwa-1b7b04242/" rel='noopener' target='_blank'><FaLinkedinIn /></a>
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
            <a href="https://github.com/Bondedtruth" rel='noopener' target='_blank'><FaGithub /></a>
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
            <a href="mailto:bondedtruth@gmail.com"><AiOutlineMail /></a>
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
            <a href="https://wa.link/xie1d3" rel='noopener' target='_blank'><BsWhatsapp /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
