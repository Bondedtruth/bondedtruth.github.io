import Link from 'next/link';
import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsWhatsapp } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';

const Contact = () => {
  return (
    <div id='contact' className="w-full lg:h-screen">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
        <p className="text-xl tracking-widest uppercase text-[#5651e5] hover:font-bold ease-in-out duration-400">
          Contact
        </p>
        <h2 className="py-4">Get In Touch</h2>
        
        <div className="grid lg:grid-cols-5 gap-8">
          {/* left */}
          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4">
            <div className="lg:p-4 h-full">
              <div>
                <img
                  className="rounded-xl hover:scale-105 ease-in duration-300"
                  src="https://images.unsplash.com/photo-1501250987900-211872d97eaa?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="/"
                />
              </div>
              <div>
                <h2 className="py-2">Bolaji John Onunwa</h2>
                <p>Front-End Developer</p>
                <p className="py-4">
                  I am available for freelance or full-time positions. Contact
                  me and let's talk.
                </p>
              </div>

              <div>
                <p className="uppercase pt-8 pb-4 font-bold">Connect with Me</p>
                <p className=" pt-4 pb-4 font-bold">Phone number: +234 903 312 9000</p>
                <div className="flex items-center justify-between py-4">
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

          {/* right */}
          <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4">
            <div className="p-4">
              <form>
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2 ">Name</label>
                    <input placeholder="Your Name"
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                      type="text"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">Phone Number</label>
                    <input placeholder="Your Phone Number"
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                      type="text"
                    />
                  </div>
                </div>
                <div className='flex flex-col py-2'>
                <label className="uppercase text-sm py-2">Email</label>
                <input placeholder="Your Email"
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                      type="email"
                    />
                </div>
                <div className='flex flex-col py-2'>
                <label className="uppercase text-sm py-2">Subject</label>
                <input
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                      type="text"
                    />
                </div>
                <div className='flex flex-col py-2'>
                <label className="uppercase text-sm py-2">Message</label>
                <textarea placeholder="Your Message..." className='border-2 rounded-lg p-3 border-gray-300' rows='10'></textarea>
                </div>
                <button className='w-full p-4 text-gray-100 mt-4'>Send Message</button>
              </form>
            </div>
          </div>
        </div>
        <div className='flex justify-center py-12'>
            <Link href='/'>
            <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                    <HiOutlineChevronDoubleUp className='text-[#5651e5]' size={30}/>
                </div>
            </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
