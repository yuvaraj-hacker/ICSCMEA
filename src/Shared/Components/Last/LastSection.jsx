import React from 'react'
import { Link } from 'react-router-dom'

function LastSection() {
    return (
        <>
            <section className="w-full   bg-[url('/assets/Images/footer.jpg')] md:py-20 py-10 bg-cover flex justify-center items-center">
                <div className=" max-w-[90rem]  mx-auto md:px-5 px-3 ">
                    <section className=" flex flex-col gap-10 ">
                        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1    gap-10 items-center text-white '>
                            <div className="bg-[#033D2D] md:p-10 p-5 w-full h-full transform  flex items-center justify-center  rounded-xl relative ">
                                <div className="p-6 bg-[#4AF8BA] w-fit rounded-b-full absolute -top-3 left-10   rounded-tr-xl">
                                    <div className="p-1.5 rounded-t-full bg-[#02c07d] top-0 absolute z-20 -left-3">
                                    </div>
                                    <div className="p-1.5  z-10 rounded-tl-xl bg-[#4AF8BA] top-0 absolute -left-3">
                                    </div>
                                </div>
                                <div className="  flex flex-col gap-5 items-center">
                                    {/* <i className="fi fi-sr-marker items-center xl:text-5xl  md:text-3xl  flex justify-end"></i> */}
                                    <p className="xl:text-2xl text-center">
                                        {/* International Convention Center, */}
                                        Beijing, China</p>
                                </div>
                            </div>
                            <div className="bg-[#033D2D] md:p-10 p-5 w-full h-full transform flex items-center justify-center   rounded-xl">
                                <div className="p-6 bg-[#4AF8BA] w-fit rounded-b-full absolute -top-3 left-10 rounded-tr-xl">
                                    <div className="p-1.5 rounded-t-full bg-[#02c07d] top-0 absolute z-20 -left-3">
                                    </div>
                                    <div className="p-1.5  z-10 rounded-tl-xl bg-[#4AF8BA] top-0 absolute -left-3">
                                    </div>
                                </div>
                                <div className="  flex flex-col gap-5">
                                    {/* <i className="fi fi-rr-calendar items-center xl:text-5xl md:text-3xl flex justify-end"></i> */}
                                    <p className="xl:text-2xl text-center ">September 26-27, 2025 9:00 AM - 6:00 PM</p>
                                </div>
                            </div>
                            <div className="bg-[#033D2D] md:p-10 p-5 w-full h-full transform  flex items-center justify-center   rounded-xl ">
                                <div className="p-6 bg-[#4AF8BA] w-fit rounded-b-full absolute -top-3 left-10   rounded-tr-xl">
                                    <div className="p-1.5 rounded-t-full bg-[#02c07d] top-0 absolute z-20 -left-3">
                                    </div>
                                    <div className="p-1.5  z-10 rounded-tl-xl bg-[#4AF8BA] top-0 absolute -left-3">
                                    </div>
                                </div>
                                <div className="  flex flex-col gap-5">
                                    {/* <i className="fi fi-sr-envelope items-center xl:text-5xl md:text-3xl  flex justify-end"></i> */}
                                    <p className="xl:text-2xl  text-center">info.iciscm@gmail.com
                                        {/* <br/> +91 1234567890 */}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='w-fit mx-auto'>
                            <Link to="/paper-submission">
                                <div className="bg-white p-4 w-fit text-black px-6 rounded-full border-2 border-[#4AF8BA] mx-auto cursor-pointer   md:text-base text-sm">
                                    Register Now
                                </div>
                            </Link>
                        </div>
                    </section>
                </div>
            </section>
        </>
    )
}

export default LastSection
