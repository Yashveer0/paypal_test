import React from 'react'
import page4_img from '../assets/page4_img.jpg';

export function Page4(props) {
    

    return (
        <>
             <div className='flex items-center px-[2rem] md:px-[6rem] mt-[2rem] md:mt-[6rem] w-[100%] md:p-4 '>
        <div className='w-[50%] p-2 md:p-6'>
            <h1 className='text-[.8rem] md:text-3xl mb-2 md:mb-4 '>Orchestration made simple</h1>
            <p className='text-[.6rem] md:text-[1rem]'>
                Move on from piecemeal management of disparate tools, reporting systems, and processers. Use our flexible tools to manage the entire payment process, help increase resiliency, and reduce operational complexity.
            </p>
            

            
        </div>

        <div className='w-[50%]  '>
            <div>
                <img src={page4_img} alt="" />
            </div>
        </div>
        </div>



        <div className=' flex items-center justify-between md:p-8 p-1 w-[100%] text-wrap md:mt-4 mt-1'>
            <div className='w-[25%] p-1 md:p-2'>
                <h1 className='text-[.6rem] md:text-xl font-bold md:mb-2 mb-1 '>Orchestrate multiple payments partners</h1>
                <p className='text-[0.5rem] md:text-[1rem]'>
                    You always maintain full control of your data and confiigure partner access.
                    </p>
            </div>
            <div className='w-[25%] p-1 md:p-2 '>
                <h1 className='text-[.6rem] md:text-xl font-bold md:mb-2 mb-1'>
                    Easily create secure data connections
                </h1>
                <p className='text-[0.5rem] md:text-[1rem]' >
                    Use just a few snippets of code securely share data with partners you choose.
                </p>
            </div>
            <div className='w-[25%] p-1 md:p-2'>
                <h1 className='text-[.6rem] md:text-xl font-bold md:mb-2 mb-1'>Streamline <br />reconcilition</h1>
                <p className='text-[0.5rem] md:text-[1rem]' >
                    Enable separate accounts to connect and share infornation.
                </p>
            </div>

            <div className='w-[25%] p-1 md:p-2'>
                <h1 className='text-[.6rem] md:text-xl font-bold md:mb-2 mb-1'>
                    Unlock new <br />
                    sales channels
                </h1>
                <p className='text-[0.5rem] md:text-[1rem]' >
                    Connect to commercial partners so you can accept payment on their websites.
                </p>
            </div>
        </div>
        </>
    )
}
