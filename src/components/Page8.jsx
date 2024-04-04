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

                    <button className='md:py-2 py-0 px-1 md:px-6 md:mt-6 md:m-2  text-[.4rem] md:text-[1rem] bg-[#3C89BE] rounded-full text-white'>Contact Sales</button>
                </div>



                <div className='w-[40%] md:p-[3rem] p-[1rem] bg-white'>
                    <div className='bg-[#191D58] flex items-center justify-center md:py-[3rem] py-1 md:p-[2rem] 
                    p-[1rem]' >
                      <h1 className='md:text-[10rem] text-[4rem] text-white text-center'>< GoArrowSwitch /></h1>

                    </div>
                    <h1 className='text-[.8rem] md:text-[2rem] font-bold mb-1 md:mb-3 md:mt-4  '>Ecplore developer <br />documentation</h1>
                    <p className='text-[.5rem] md:text-[1rem]'>See how our flexible and interoperable techology helps to simplify intergration.</p>

                    <button 
                    className='md:py-2 py-0 px-1 md:px-6 md:mt-6 md:m-2  text-[.4rem] md:text-[1rem] bg-[#3C89BE] rounded-full text-white'>
                        Visit Developer Docs</button>
                </div>

                
                
            </section>



            <article className=' p-[1rem] md:p-[4rem] '>

                <p className='md:text-[.9rem] text-[.5rem] md:mb-4 mb-2'><sup>1</sup>For the purpose of this study, Forrester aggregated data from four enterprise merchants to create a single composite merchant with $500 million in revenue processed yearly. Individual results will vary.</p>
                <p className='md:text-[.9rem] text-[.5rem] md:mb-4 mb-2'><sup>2</sup>Forrester, Commissioned by PayPal, December 2021, Forrester constructed a Total Econimic Impact<sup>TM</sup> framework for those organizations considering an invertment in the PayPal's enterprise payment. powered by Braintree.</p>
                <p className='md:text-[.9rem] text-[.5rem] md:mb-4 mb-2'><sup>3</sup>B2B International, commissioned by PayPal, Nov-Dec 2021, B2B International surveyed amongst 504 mid-market and large enterprises in US, UK, and DE during November/December 2021, LE defined as merchants with annual revenue &#10095;100M; Mid-market defined as merchants with annual revenue between 20M-100M. Base N: Enterprise Brauntree Users = 51.</p>
                <p className='md:text-[.9rem] text-[.5rem]  '><sup>4</sup>Major global payment network and PayPal internal data analysis from transactions over 12-month period from Q4 2020-Q3 2021 in 8 markets (US, UK, DE, AU, FR, IT, ES, CA) across 12 vertical. Does not include transavtions from domestic schema (eg. Cartes Bancaires, EFTPOS).</p>
            </article>
        </>
    )
}
