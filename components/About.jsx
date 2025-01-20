import Image from 'next/legacy/image';
import coder from '../public/assets/coder.jpg';
import React from 'react';
import Link from 'next/link';

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5] hover:font-bold ease-in-out duration-400">
            About
          </p>
          <h2 className="py-4">Who I am</h2>
          <p className="py-2 text-gray-600">
            / I am not your normal developer /
          </p>
          <p className="py-2 text-gray-600">
            I have spent the last 7 years in heavy duty logistics management,
            where I was fully responsible for the maintenance and supervision of
            commercial fleet. I have always had a knack for technology and
            working with computers for decades. In 2020, I started working with
            HTML & CSS to make some minor edits on a business website that I was
            operating. What I thought was just a few small edits turned into a
            love for programming.
          </p>
          <p className="py-2 text-gray-600">
            Fascinated with how intricate programming can be I was quickly drawn
            to learn more. I started learning JavaScript, and was even more
            enthused with making websites interactive in a modern way. I then
            started freelancing for e-commerce companies and other types of
            ventures that needed an online presence to interact with prospects.
            I am now spending my time building projects with React JS, Nextjs,
            API, Firebase, and still learning new technologies. My aim is to be
            a full stack developer.
          </p>
          <p className="py-2 text-gray-600 underline cursor-pointer">
            <Link href="/#projects">Check out some of my latest projects</Link>
          </p>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image
            src={coder}
            alt="/"
            width="629"
            height="785"
            className="hover:scale-110 ease-in duration-300"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
