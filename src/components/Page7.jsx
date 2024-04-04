import React from 'react'
import { RiDoubleQuotesL } from "react-icons/ri";
import office_img from '../assets/office_img.jpg'
import { FaLongArrowAltRight } from "react-icons/fa";

export function Page7(props) {
    

    return (
        <>
            <section>

                <div className='w-[100%] flex items-center bg-[#191D58] md:mt-[12rem] mt-[4rem] justify-between'>
                <div className=' w-[50%] text-wrap text-white  md:p-[5rem] p-[.8rem] text-[0.5rem] md:text-[1rem]'>
                    <h1 className='md:text-4xl text-xl mb-1'><RiDoubleQuotesL /></h1>
                    <p className='text-[0.5rem] md:text-[1rem]'>The user experience in terms of usability, trust, and flwxibility is everything, especially for the digitally native consumer. The experience PayPal helps us provide is beating all consumer expectatins.</p>

                    <p className='md:mt-6 mt-1 text-[0.5rem] md:text-[1rem]'>David Oksman</p>
                    <p className='text-[0.5rem] md:text-[1rem]'>Chief Marketing Officer</p>

                    <p className='md:mt-6 mt-1 font-bold text-[0.7rem] md:text-[1rem]'>Samsonite</p>
                </div>

                <div className='w-[50%] md:p-8 p-1 md:mr-[4rem] mr-[0.5rem]'>
                    <img className='  relative md:top-[-6rem] top-[-3rem]' src={office_img} alt="" />
                </div>
                </div>


                <div className='flex items-center justify-between mt-[1rem] md:mt-[3rem]'>
                    <div className=' md:p-[4rem] p-[1rem] md:border-r-2 border-r '>
                        <h1 className=' md:text-xl text-[0.7rem]  font-bold mb-1 md:mb-4 '> &nbsp; <br />Executive Guide: PayPal enterprise integration</h1>
                        <p className='md:text-[1rem] text-[.5rem]'>Whether you're making a switch or upgrading your tools, <br /> learn how we make the integration process as flexible and seamless as possible.</p>
                        <h1 className='text-[.5rem] md:text-xl mt-1 md:mt-2 text-[#3C89BE] inline-flex items-center'>Get the guide  &nbsp; < FaLongArrowAltRight /></h1>
                    </div>
                    <div className=' p-[1rem] md:p-[4rem]'>
                        <h1 className=' md:text-xl text-[0.7rem]  font-bold mb-1 md:mb-4 '>eBook: Signs you've outgrown your payment processor</h1>
                        <p className='md:text-[1rem] text-[.5rem]' >Payments processer stuning your growth? It might be time to look for a new one.</p>
                        <h1 className='text-[.5rem] md:text-xl mt-1 md:mt-2 text-[#3C89BE] inline-flex items-center'>Read the ebook  &nbsp; < FaLongArrowAltRight /></h1>
                    </div>
                </div>

            </section>
        </>
    )
}
