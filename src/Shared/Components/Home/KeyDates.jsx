// import React from 'react'

// function KeyDates({ Dates, Title }) {
//     return (
//         <>
//             <section className='md:p-4 p-3 bg-[#1B1F3B] flex gap-4 items-center rounded-xl'>
//                 <div className='p-2 rounded-xl bg-white w-fit whitespace-nowrap'>
//                     {Dates}
//                 </div>
//                 <div className='text-white md:text-base text-sm'>
//                     {Title}
//                 </div>
//             </section>
//         </>
//     )
// }

// export default KeyDates

import React from 'react';

function KeyDates({ Dates, Title }) {
    return (
        <>
            <section className='grid grid-cols-5 items-center'>
                {/* <div className={` bg-[#033D2D] col-span-4  text-white rounded-xl p-10  ${index % 2 === 0 ? 'order-2 md:order-1' : 'order-2 md:order-2'}`}> */}
                    <div className="flex items-center gap-5 z-10   h-full ">
                        <div className="md:text-base text-sm font-medium flex flex-col gap-5">
                            {Title}
                        </div>
                    </div>
                {/* </div> */}
                <div className='bg-[#4AF8BA] py-5 col-span-1 h-fit rounded-tr-3xl rounded-br-3xl '>
                            <p className="">{Dates}</p>
                </div>
            </section>
        </>
    );
}

export default KeyDates;

