import React from "react";
import { Link } from "react-router-dom";
import TeamMemberCard from "./TeamMemberCard";
import KeyDates from "./KeyDates";
import LastSection from "../Last/LastSection";
import Invitees from "./Invitees";
import Technical from "./Technical";
import Marquee from "react-fast-marquee";


export const Home = () => {
  const team = [
    {
      image: '/assets/Images/members.jpg',
      name: 'Name',
      position: 'Position',
    },
    {
      image: '/assets/Images/members.jpg',
      name: 'Jane Smith',
      position: 'Coordinator',
    },
    {
      image: '/assets/Images/members.jpg',
      name: 'Alex Johnson',
      position: 'Technical Head',
    },
    {
      image: '/assets/Images/members.jpg',
      name: 'Alex',
      position: 'Technical Head',
    },
  ];

  const invitees = [
    {
      location: 'location',
      Name: 'Name',
      Position: 'Position',
    },
    {
      location: 'location',
      Name: 'Name',
      Position: 'Position',
    },
    {
      location: 'location',
      Name: 'Name',
      Position: 'Position',
    },
    {
      location: 'location',
      Name: 'Name',
      Position: 'Position',
    },
  ];

  const technical = [
    {
      location: 'location',
      Name: 'Name',
      Position: 'Position',
    },
    {
      location: 'location',
      Name: 'Name',
      Position: 'Position',
    },
    {
      location: 'location',
      Name: 'Name',
      Position: 'Position',
    },
    {
      location: 'location',
      Name: 'Name',
      Position: 'Position',
    },
  ];

  const date = [
    { Dates: '22-07-2025', Title: 'Full Paper Submission Deadline' },
    { Dates: '29-07-2025', Title: 'Notification of Decision' },
    { Dates: '05-08-2025', Title: 'Deadline for Submitting Revised Full Paper' },
    { Dates: '12-08-2025', Title: 'Notification of Acceptance' },
    { Dates: '19-08-2025', Title: 'Camera-Ready Paper Submission' },
    { Dates: '26-08-2025', Title: 'Last Date for Registration / Payment' },
  ];

  return (
    <>
      <section className="relative lg:h-[calc(100dvh-30px)] w-full overflow-hidden bg-gradient-to-r from-[#0D6743] to-[#033D2D]  " >
        <img className="absolute -top-20 -left-20 2xl:block hidden" src="public/assets/Images/point.png" alt="" />
        <div className="absolute top-0 left-0 h-full w-full z-0 bg-[url('/assets/Images/Herosec.png')] opacity-20" ></div>
        <div className="py-20 flex  flex-col justify-center   2xl:gap-20 xl:gap-10 gap-5 h-full">
          <div className="relative md:py-5 py-3 bg-[#4AF8BA] 2xl:w-1/2 w-3/4 rounded-tr-full rounded-br-full">
            <Marquee pauseOnHover>
              <p className=" text-black overflow-hidden  font-bold md:text-xl uppercase"> International Conference on Smart Computational Methods and Emerging Applications <span className="animate-spin inline-block text-[#033D2D]"> ✦ </span>  Intelligent Systems <span className="animate-spin inline-block text-[#033D2D]"> ✦ </span>  Advanced Algorithms <span className="animate-spin inline-block text-[#033D2D]"> ✦ </span> AI & Emerging Tech <span className="animate-spin inline-block text-[#033D2D]"> ✦ </span>  Global Innovations  <span className="animate-spin inline-block text-[#033D2D]"> ✦ </span>  </p>
            </Marquee>
          </div>
          <div className="relative z-10 grid grid-cols-1 2xl:grid-cols-2 max-w-[90rem] gap-10 lg:py-0 py-10 mx-auto items-center px-4">
            <div className=" lg:ml-auto mx-auto flex flex-col gap-6 ">
              <h1 className="text-2xl xl:text-5xl lg:text-3xl font-bold leading-snug text-left  text-white">
                International Conference on Smart Computational Methods and Emerging Applications   </h1>
              <div className=" ">
                <Link to="/paper-submission">
                  <button className=" border border-[#4AF8BA] px-6 py-3 rounded-full  text-white cursor-pointer">
                    Register Now
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className=" bg-white/96">
        <section className="max-w-[90rem] relative  mx-auto md:px-5 px-3">
          <div className="md:p-40 p-20 bg-[#4AF8BA] w-fit rounded-b-full absolute -top-5 rounded-tr-4xl">
            <div className="p-2.5 rounded-t-full bg-[#02c07d] top-0 absolute z-20 -left-5">
            </div>
            <div className="p-2.5  z-10 rounded-tl-xl bg-[#4AF8BA] top-0 absolute -left-4.5">
            </div>
          </div>
          <section className="grid md:grid-cols-2 grid-cols-1 md:gap-5 gap-3  ">
            <div className="z-10">
              <img src="/assets/Images/aboutsection.png" className="md:w-[500px] w-[200px] md:mx-0 mx-auto " alt="" />
            </div>
            <div className='flex flex-col md:gap-4 gap-2  '>
              <div className="flex gap-3 justify-center items-center">
                <div className="bg-[#4AF8BA] p-3 rounded-full w-fit  ">
                </div>
                <h1 className="text-center w-fit   rounded-full   font-semibold lg:text-3xl text-lg">
                  About
                </h1>
              </div>
              <div className="text-justify md:text-lg text-sm leading-7 flex flex-col gap-4">
                <p className="">
                  The International Conference on Smart Computational Methods and Emerging Applications (ICSCMEA) serves as a premier interdisciplinary platform for scholars, researchers, practitioners, and educators to present and discuss the latest innovations, trends, and challenges in the field of intelligent computational systems and their transformative applications.
                </p>
                <p className=""> ICSCMEA 2025 aims to bring together leading minds from academia, industry, and government to exchange knowledge on the advancement of computational intelligence, data-driven methodologies, and next-generation technologies. The conference fosters collaboration across disciplines including Artificial Intelligence, Machine Learning, Data Science, Cyber-Physical Systems, Internet of Things (IoT), Quantum Computing, Robotics, Cloud and Edge Computing, and many more.
                </p>
              </div>
              <div className="md:mx-0 mx-auto">
                <Link to="/about">
                  <button className="md:text-base text-sm relative bg-transparent border border-[#4AF8BA] rounded-full  cursor-pointer  px-6 py-2 md:py-3 " >
                    Read More
                  </button>
                </Link>
              </div>
            </div>
          </section>
        </section>
      </section>
      <section className=" flex flex-col md:gap-10  gap-10 bg-white/96">
        <section className="  max-w-[90rem]   mx-auto md:px-5 px-3  flex flex-col md:gap-5 gap-3">
          <div className="flex gap-3 justify-center items-center">
            <div className="bg-[#4AF8BA] p-3 rounded-full w-fit  ">
            </div>
            <h1 className="text-center w-fit rounded-full font-semibold lg:text-3xl text-lg">
              Key Invitees
            </h1>
          </div>
          <div className="grid md:grid-cols-4   grid-cols-2 md:gap-10 gap-5">
            {invitees.map((member, index) => (
              <Invitees key={index} Name={member.Name} Position={member.Position} location={member.location} dataAos="flip-left" />
            ))}
          </div>
        </section>
        {/* <section className="  max-w-[100rem]  mx-auto md:px-5 px-3  flex flex-col md:gap-5  gap-3">
          <h1 className=" text-center font-semibold lg:text-2xl text-lg">
            Technical Program Committee
          </h1>
          <div className="grid 2xl:grid-cols-4 lg:grid-cols-2 md:grid-cols-2 grid-cols-1 md:gap-10 gap-5">
            {technical.map((member, index) => (
              <Technical key={index} Name={member.Name} Position={member.Position} location={member.location} dataAos="flip-left" />
            ))}
          </div>
        </section> */}
        <section className="  max-w-[90rem]  mx-auto md:px-5 px-3 ">
          <div className=" flex flex-col md:gap-5 gap-3">
            <div className="flex gap-3 justify-center items-center">
              <div className="bg-[#4AF8BA] p-3 rounded-full w-fit  ">
              </div>
              <h1 className="text-center w-fit  rounded-full   font-semibold lg:text-3xl text-lg">
                Key Dates
              </h1>
            </div>
            <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 md:gap-10 gap-5">
              {date.map((item, index) => (
                <section key={index} className='grid grid-cols-1 md:grid-cols-5 items-center  '>
                  <div className={`bg-[#033D2D] col-span-1 md:col-span-4 text-white rounded-xl p-10 ${index % 2 === 0 ? 'order-2 md:order-1' : 'order-2 md:order-2'}`}>
                    <div className="flex items-center gap-5 h-full justify-center">
                      <div className="md:text-base text-sm font-medium flex flex-col text-center gap-5">
                        {item.Title}
                      </div>
                    </div>
                  </div>
                  <div className={`bg-[#4AF8BA] p-4   col-span-1 font-semibold ${index % 2 === 0 ? 'order-1 md:order-2  rounded-tr-3xl rounded-br-3xl' : 'order-1 md:order-1  rounded-tl-3xl rounded-bl-3xl text-right'}`}>
                    <p className="text-base">{item.Dates}</p>
                  </div>
                </section>
              ))}
            </div>
          </div>
        </section>
        <LastSection />
      </section>

    </>
  );
};
