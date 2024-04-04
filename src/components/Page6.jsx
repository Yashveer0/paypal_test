import React from 'react';
import { FaLongArrowAltRight } from "react-icons/fa";

export function Page6(props) {
    

    return (
        <>
            <div className='flex items-center justify-between w-[100%] md:mt-[20rem] mt-[13rem] p-[.2rem] md:p-[2rem]'>
                <div className=' w-[60%]'>
            <iframe  className=' w-[100%] h-[100%] md:w-[78%] md:h-[21rem] rounded-lg md:rounded-xl ml-[.4rem] md:ml-[9rem]' width="560" height="315" src="https://www.youtube.com/embed/hWVJucr3Il8?si=OXyHiCvV4-Y0keVw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
                <div className='w-[40%] text-wrap ml-[.9rem] md:p-4'>
                    <h1 className='md:text-4xl text-[1rem] font-bold md:mb-[2rem] mb-[.3rem] '>Your Partner for <br /> innovation</h1>
                    <p className='md:text-xl text-[.5rem] '>See how Presed partnered with PayPal to help their devlopment team build innovative solutions with limited resouecs - all powered by Braintree technology.</p>
                    <h1 className='text-[.5rem] md:text-xl mt-1 md:mt-2 text-[#3C89BE] inline-flex items-center'>Play the video  &nbsp; < FaLongArrowAltRight /></h1>

                </div>
            </div>
        </>
    ) 
}
