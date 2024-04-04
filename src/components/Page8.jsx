import React from 'react'
import { IoIosContacts } from "react-icons/io";
import { GoArrowSwitch } from "react-icons/go";

export function Page8(props) {
    

    return (
        <>
            <section className='w-[100%] bg-gray-100 flex md:gap-[4rem] gap-[1rem] items-center justify-center 
            md:p-[4rem] p-[1rem]'>
                <div className='w-[40%] md:p-[3rem] p-[1rem] bg-white'>
                    <div className='bg-[#191D58] flex items-center justify-center md:py-[3rem] py-[1] 
                    md:p-[2rem] p-[1rem]' >
                      <h1 className='md:text-[10rem] text-[4rem] text-white text-center'>< IoIosContacts /></h1>

                    </div>
                    <h1 className='text-[.8rem] md:text-[2rem] font-bold mb-1 md:mb-3 md:mt-4  '>Contact our sales <br />team</h1>
                    <p className='text-[.5rem] md:text-[1rem]'>Learn how payment can be leveraged as a catalyst for growth.</p>

                    <button className='md:py-2 py-0 px-2 md:px-6 md:mt-6 md:m-2  text-[.57rem] md:text-[1rem] bg-[#3C89BE] rounded-full text-white'>Contact Sales</button>
                </div>



                <div className='w-[40%] md:p-[3rem] p-[1rem] bg-white'>
                    <div className='bg-[#191D58] flex items-center justify-center md:py-[3rem] py-1 md:p-[2rem] 
                    p-[1rem]' >
                      <h1 className='md:text-[10rem] text-[4rem] text-white text-center'>< GoArrowSwitch /></h1>

                    </div>
                    <h1 className='text-[.8rem] md:text-[2rem] font-bold mb-1 md:mb-3 md:mt-4  '>Ecplore developer <br />documentation</h1>
                    <p className='text-[.5rem] md:text-[1rem]'>See how our flexible and interoperable techology helps to simplify intergration.</p>

                    <button 
                    className='md:py-2 py-0 px-2 md:px-6 md:mt-6 md:m-2  text-[.57rem] md:text-[1rem] bg-[#3C89BE] rounded-full text-white'>
                        Visit Developer Docs</button>
                </div>

                
                
            </section>
            <article>

            </article>
        </>
    )
}
