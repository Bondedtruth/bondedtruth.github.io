import Image from 'next/image';
import React from 'react';
import propertyImg from '../public/assets/projects/property.jpg';
import cryptoImg from '../public/assets/projects/crypto.jpg';
import netflixImg from '../public/assets/projects/netflix.jpg';
import twitchImg from '../public/assets/projects/twitch.jpg';
import weatherImg from '../public/assets/projects/weatherImg.jpg';
import dashboardImg from '../public/assets/projects/tremordashboard.jpg';
import ProjectItems from './ProjectItems';
import Link from 'next/link';

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl trackking-widest uppercase text-[#5651e5] hover:font-bold ease-in-out duration-400">
          Projects
        </p>
        <h2 className="py-4">What I have Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {/* property finder project */}
          <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]">
            <Image
              className="rounded-xl group-hover:opacity-10"
              src={propertyImg}
              alt="/"
            />
            <div className="hidden group-hover:block absolute top-[50%] left-[50%]  translate-x-[-50%] translate-y-[-50%]">
              <h3 className="text-2xl text-white tracking-wider text-center">
                Property Finder
              </h3>
              <p className="pb-4 pt-2 text-white text-center">React JS</p>
              <Link href="property">
                <p className="text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">
                  More Info
                </p>
              </Link>
            </div>

            {/* Crypto App project */}
          </div>
          <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]">
            <Image
              className="rounded-xl group-hover:opacity-10"
              src={cryptoImg}
              alt="/"
            />
            <div className="hidden group-hover:block absolute top-[50%] left-[50%]  translate-x-[-50%] translate-y-[-50%]">
              <h3 className="text-2xl text-white tracking-wider text-center">
                Crypto App
              </h3>
              <p className="pb-4 pt-2 text-white text-center">React JS</p>
              <Link href="crypto">
                <p className="text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">
                  More Info
                </p>
              </Link>
            </div>

            {/* Netflix clone project */}
          </div>
          <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]">
            <Image
              className="rounded-xl group-hover:opacity-10"
              src={netflixImg}
              alt="/"
            />
            <div className="hidden group-hover:block absolute top-[50%] left-[50%]  translate-x-[-50%] translate-y-[-50%]">
              <h3 className="text-2xl text-white tracking-wider text-center">
                Netflix Clone App
              </h3>
              <p className="pb-4 pt-2 text-white text-center">React JS</p>
              <Link href="netflix">
                <p className="text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">
                  More Info
                </p>
              </Link>
            </div>

            {/* Twitch project */}
          </div>
          <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]">
            <Image
              className="rounded-xl group-hover:opacity-10"
              src={twitchImg}
              alt="/"
            />
            <div className="hidden group-hover:block absolute top-[50%] left-[50%]  translate-x-[-50%] translate-y-[-50%]">
              <h3 className="text-2xl text-white tracking-wider text-center">
                Twitch App
              </h3>
              <p className="pb-4 pt-2 text-white text-center">React JS</p>
              <Link href="twitch">
                <p className="text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">
                  More Info
                </p>
              </Link>
            </div>

            {/* Weather app */}
          </div>
          <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]">
            <Image
              className="rounded-xl group-hover:opacity-10"
              src={weatherImg}
              alt="/"
            />
            <div className="hidden group-hover:block absolute top-[50%] left-[50%]  translate-x-[-50%] translate-y-[-50%]">
              <h3 className="text-2xl text-white tracking-wider text-center">
                Twitch App
              </h3>
              <p className="pb-4 pt-2 text-white text-center">React JS</p>
              <Link href="weatherapp">
                <p className="text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">
                  More Info
                </p>
              </Link>
            </div>

            {/* tremor dashboard app */}
          </div>
          <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]">
            <Image
              className="rounded-xl group-hover:opacity-10"
              src={dashboardImg}
              alt="/"
            />
            <div className="hidden group-hover:block absolute top-[50%] left-[50%]  translate-x-[-50%] translate-y-[-50%]">
              <h3 className="text-2xl text-white tracking-wider text-center">
                Tremor Dashboard  
              </h3>
              <p className="pb-4 pt-2 text-white text-center">React JS</p>
              <Link href="tremordashboard">
                <p className="text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">
                  More Info
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
