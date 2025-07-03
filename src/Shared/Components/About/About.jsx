import React from 'react'
import { Link } from 'react-router-dom'
import LastSection from '../Last/LastSection'
import Marquee from 'react-fast-marquee'

function About() {
  return (
    <>
      <section className='bg-white/96'>
        <section className="relative  h-[calc(100dvh-800px)] w-full overflow-hidden bg-gradient-to-r from-[#0D6743] to-[#033D2D]  " >
          <img className="absolute -top-20 -left-20 2xl:block hidden" src="public/assets/Images/point.png" alt="" />
          <div className="absolute top-0 left-0 h-full w-full z-0 bg-[url('/assets/Images/Herosec.png')] opacity-20" ></div>
        </section>
        <section className=" ">
          <section className="max-w-[90rem] relative  mx-auto md:px-5 px-3">
            <div className="p-20 bg-[#4AF8BA] w-fit rounded-b-full absolute -top-5 rounded-tr-4xl">
              <p className="text-center w-fit   rounded-full   font-semibold lg:text-3xl text-lg">About </p>
              <div className="p-2.5 rounded-t-full bg-[#02c07d] top-0 absolute z-20 -left-5">
              </div>
              <div className="p-2.5  z-10 rounded-tl-xl bg-[#4AF8BA] top-0 absolute -left-4.5">
              </div>
            </div>
            <section className="grid xl:grid-cols-5 grid-cols-1 md:gap-5 gap-3 items-center ">
              <div className='col-span-1'>
              </div>
              <div className='flex flex-col md:gap-4 gap-2 col-span-4 my-10  '>
                <div className="text-justify md:text-lg text-sm leading-7 flex flex-col gap-4">
                  <p className="">
                    The International Conference on Smart Computational Methods and Emerging Applications (ICSCMEA 2025) is a prestigious global forum designed to advance the frontiers of intelligent computational technologies and their real-world implementations. Set against the backdrop of rapid technological evolution, this conference offers a vital platform for scholars, engineers, scientists, technocrats, and industry professionals to share their pioneering ideas, research outcomes, and experiences.                  </p>
                </div>
              </div>
            </section>
          </section>
        </section>
        <LastSection />
      </section>

    </>
  )
}

export default About
