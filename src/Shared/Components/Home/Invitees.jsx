import React from 'react';

function Invitees({ Name, Position, location }) {
    return (
        <section className="   ">
            {/* Corner Cut Shape */}
            <div className='grid grid-cols-1 items-center gap-4 bg-[#033D2D] p-10 relative rounded-xl '>
                <div className="md:p-10 p-4 bg-[#4AF8BA] w-fit rounded-b-full absolute -top-3 left-10   rounded-tr-xl">
                    <div className="p-1.5 rounded-t-full bg-[#02c07d] top-0 absolute z-20 -left-3">
                    </div>
                    <div className="p-1.5  z-10 rounded-tl-xl bg-[#4AF8BA] top-0 absolute -left-3">
                    </div>
                </div>
                <img rel='preload' src="/assets/Images/bgremove.png" className='md:w-full md:h-full w-40 h-28 object-contain mx-auto col-span-1' alt="" />
                <div className="flex flex-col items-center gap-3 z-10 mx-auto  justify-center col-span-1 w-full h-full    ">
                    <div className=" text-white font-semibold  text-sm md:text-base ">
                        {Name}
                    </div>
                    <div className="text-white md:text-lg text-sm font-medium">
                        {Position}
                    </div>
                    {/* <div className="text-white md:text-lg text-sm font-medium">
                        {location}
                    </div> */}
                </div>
            </div>
        </section>
    );
}

export default Invitees;