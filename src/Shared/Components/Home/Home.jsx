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
        <img className="absolute -top-20 -left-20" src="public/assets/Images/point.png" alt="" />
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
      {/* <section className="bg-[#A6D8A7]">
        <section className="max-w-[90rem] pt-5 md:pt-10 mx-auto md:px-5 px-3">
          <section className="grid md:grid-cols-2 grid-cols-1 md:gap-5 gap-3 items-start">
            <div className='flex flex-col md:gap-4 gap-2'>
              <h1 className="text-center w-fit mx-auto rounded-full   font-semibold lg:text-2xl text-lg">
                About the Conference
              </h1>
              <p className="text-justify md:text-base text-sm leading-7">Step into the future of intelligent technologies at the International Conference on Intelligent Systems and Computational Methods (ICISCM).
                This premier global event unites researchers, academicians, industry experts, and students to explore innovative ideas, emerging trends, and practical applications in intelligent systems and computational techniques. ICISCM serves as a dynamic platform for presenting cutting-edge research, exchanging knowledge, and fostering collaborations that drive advancements in automation, machine learning, optimization, and real-world problem solving through computational intelligence. </p>
            </div>
            <div className=" flex flex-col md:gap-4 gap-2">
              <h1 className="text-center w-fit mx-auto rounded-full   font-semibold lg:text-2xl text-lg">
                Scope of Conference
              </h1>
              <p className="text-justify md:text-base text-sm leading-7">
                Join us at the International Conference on Intelligent Systems and Computational Methods (ICISCM) — a premier forum that brings together a global community of researchers, academicians, industry professionals, and students to delve into the latest developments in intelligent technologies and computational strategies. This event is designed to foster impactful collaborations, encourage innovative thinking, and highlight pioneering research that addresses theoretical foundations and real-world applications across areas such as machine learning, optimization, data analytics, automated decision-making, and complex system modeling.
              </p>
            </div>
          </section>
          <div className="flex justify-center mt-10 ">
            <div className="bg-white w-fit p-10  flex items-center gap-4 rounded-t-xl relative top-2 overflow-hidden">
              <i className="fi fi-ss-earth-americas flex items-center text-3xl text-[#2457c5]"></i>
              <p className="md:text-xl">Location :<br />
                Beijing, China</p>
              <div className="absolute top-0 right-0 w-20 h-20 bg-[#269C52] rounded-bl-full transform translate-x-6 -translate-y-6 -hover:scale-110 transition-transform duration-500"></div>
            </div>
          </div>
        </section>
      </section>
      <section className=" pt-10 md:pt-10 flex flex-col md:gap-10  gap-10">
        <section className="  max-w-[70rem]   mx-auto md:px-5 px-3  flex flex-col md:gap-5 gap-3">
          <h1 className=" text-center font-semibold lg:text-2xl text-lg">
            Key Invitees
          </h1>
          <div className="grid md:grid-cols-2   grid-cols-1 md:gap-10 gap-5">
            {invitees.map((member, index) => (
              <Invitees key={index} Name={member.Name} Position={member.Position} location={member.location} dataAos="flip-left" />
            ))}
          </div>
        </section>
        <section className="  max-w-[100rem]  mx-auto md:px-5 px-3  flex flex-col md:gap-5  gap-3">
          <h1 className=" text-center font-semibold lg:text-2xl text-lg">
            Technical Program Committee
          </h1>
          <div className="grid 2xl:grid-cols-4 lg:grid-cols-2 md:grid-cols-2 grid-cols-1 md:gap-10 gap-5">
            {technical.map((member, index) => (
              <Technical key={index} Name={member.Name} Position={member.Position} location={member.location} dataAos="flip-left" />
            ))}
          </div>
        </section>
        <section className="  max-w-[100rem]  mx-auto md:px-5 px-3 ">
          <div className="  bg-[#A6D8A7] md:p-10 p-5 rounded-3xl shadow-xl  flex flex-col md:gap-5 gap-3">
            <h1 className="text-center mx-auto font-semibold lg:text-2xl text-lg ">
              Key Dates
            </h1>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:gap-10 gap-5">
              {date.map((item, index) => (
                <KeyDates key={index} Dates={item.Dates} Title={item.Title} />
              ))}
            </div>
          </div>
        </section>
        <LastSection />
      </section> */}

    </>
  );
};
