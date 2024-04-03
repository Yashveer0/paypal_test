import React from 'react'
import page5_img from '../assets/page5_img.jpg'
import { FaLongArrowAltRight } from "react-icons/fa";
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";


export function Page5(props) {
    

    return (
        <>
             <section className='bg-gray-100 text-wrap md:mt-8'>
                <div className='flex items-center justify-evenly w-[100%] p-[1rem] md:p-[4rem]'>
                    <div className='w-[50%]'>
                        <img src={page5_img} alt="" />
                    </div>

                    <div className='w-[50%] p-2 md:p-8'>
                        <h1 className='md:text-3xl text-[.6rem] font-bold md:mb-4'>Manage risk and compliance</h1>
                        <p className='text-[.5rem] md:text-[1rem] text-wrap'>
                            We can help you identify and manage potential security, fraud, and compliance rise - so you can focus on what matters most: growing your business.
                        </p>
                        <h1 className='text-[.5rem] md:text-xl mt-1 md:mt-2 text-[#3C89BE] inline-flex items-center'>Learn more about managing risk  &nbsp; < FaLongArrowAltRight /></h1>
                    </div>
                </div>





                <div className=' flex items-center justify-between md:p-8 p-1 w-[100%] text-wrap md:mt-4 mt-1'>
            <div className='w-[25%] p-1 md:p-2'>
                <h1 className='text-[.6rem] md:text-xl font-bold md:mb-2 mb-1 '>Right size your <br /> fraud solution</h1>
                <p className='text-[0.5rem] md:text-[1rem]'>
                    Choose the level of fraud protection you need - from our built-in fraud chechs to advanced tools.
                </p>
                <h1 className='text-[.5rem] md:text-xl mt-1 md:mt-2 text-[#3C89BE] inline-flex items-center'>About Fraud <br /> Protection  &nbsp; < FaLongArrowAltRight /></h1>
            </div>
            <div className='w-[25%] p-1 md:p-2 '>
                <h1 className='text-[.6rem] md:text-xl font-bold md:mb-2 mb-1'>
                   Arm yourself <br /> against chargebacks
                </h1>
                <p className='text-[0.5rem] md:text-[1rem]' >
                   We can handle fraud analysis, plus cover any eligible chargeback losses and dispute fees.
                </p>
            </div>
            <div className='w-[25%] p-1 md:p-2'>
                <h1 className='text-[.6rem] md:text-xl font-bold md:mb-2 mb-1'>Keep up with <br /> compliance </h1>
                <p className='text-[0.5rem] md:text-[1rem]' >Work with one of the most connected fintect providers to help respond to changing risk and compliance guidance.</p>
            </div>

            <div className='w-[25%] p-1 md:p-2'>
                <h1 className='text-[.6rem] md:text-xl font-bold md:mb-2 mb-1'>Let us manage <br /> disputes </h1>
                <p className='text-[0.5rem] md:text-[1rem]' >Our dispute automation splution pills data from your payment records and submits responses to issue in real time.</p>
            </div>
        </div>
            </section>

            <article className='bg-[#191d58] w-[100%] flex items-center justify-center text-wrap md:p-8 p-2
             md:max-h-[35rem] max-h-[18rem]' >
            <div className='w-[50%] p-1 md:p-2 text-white'>
                <h1 className='text-[.8rem] md:text-xl font-bold md:mb-2 mb-1 '>Our modular solution can grow with you</h1>
                <p className='text-[0.5rem] md:text-[1rem]'>
                    Turn on the features you want, connect with the partners in your payments ecosystem, and keep the rest in your back pocket for whatever comes next.
                </p>
                <h1 className='text-[.5rem] md:text-xl mt-1 md:mt-2 text-[#3C89BE] inline-flex items-center'>Connect with a payments expert  &nbsp; < FaLongArrowAltRight /></h1>
            </div>

            <div className='md:w-[50%]   bg-white text-black md:mt-[20rem] mt-[12rem]  shadow-md shadow-black'>
                <div className=''>

                    <div className=' inline-flex justify-between p-1 md:p-2 text-[.5rem] md:text-[1rem] gap-[.5rem] md:gap-[10rem] items-end' >
                    <p className='md:w-[25rem] w-[12rem]'>Accept payment in 200 markets and 130 currencies</p>
                     <span className='text-green-600'><IoCheckmarkDoneCircleOutline /></span> 
                    </div>

                    <hr />
                    <div className=' inline-flex justify-between p-1 md:p-2 text-[.5rem] md:text-[1rem] gap-[.5rem] md:gap-[10rem] items-end' >
                    <p className='md:w-[25rem]  w-[12rem]'>Make payouts in 200</p>
                     <span className='text-green-600'><IoCheckmarkDoneCircleOutline /></span> 
                    </div>

                    <hr />
                    <div className=' inline-flex justify-between p-1 md:p-2 text-[.5rem] md:text-[1rem] gap-[.5rem] md:gap-[10rem] items-end' >
                    <p className='md:w-[25rem]  w-[12rem]'>Acquirimg in 47 markets</p>
                     <span className='text-green-600'><IoCheckmarkDoneCircleOutline /></span> 
                    </div>

                    <hr />
                    <div className=' inline-flex justify-between p-1 md:p-2 text-[.5rem] md:text-[1rem] gap-[.5rem] md:gap-[10rem] items-end' >
                    <p className='md:w-[25rem]  w-[12rem]'>Wide range of payment methods</p>
                     <span className='text-green-600'><IoCheckmarkDoneCircleOutline /></span> 
                    </div>

                    <hr />
                    <div className=' inline-flex justify-between p-1 md:p-2 text-[.5rem] md:text-[1rem] gap-[.5rem] md:gap-[10rem] items-end' >
                    <p className='md:w-[25rem]  w-[12rem]'>Recurring billing capabilities</p>
                     <span className='text-green-600'><IoCheckmarkDoneCircleOutline /></span> 
                    </div>

                    <hr />
                    <div className=' inline-flex justify-between p-1 md:p-2 text-[.5rem] md:text-[1rem] gap-[.5rem] md:gap-[10rem] items-end' >
                    <p className='md:w-[25rem]  w-[12rem]'>Network tokenization</p>
                     <span className='text-green-600'><IoCheckmarkDoneCircleOutline /></span> 
                    </div>

                    <hr />
                    <div className=' inline-flex justify-between p-1 md:p-2 text-[.5rem] md:text-[1rem] gap-[.5rem] md:gap-[10rem] items-end' >
                    <p className='md:w-[25rem]  w-[12rem]'>Batch and real-time account updater</p>
                     <span className='text-green-600'><IoCheckmarkDoneCircleOutline /></span> 
                    </div>

                    <hr />
                    <div className=' inline-flex justify-between p-1 md:p-2 text-[.5rem] md:text-[1rem] gap-[.5rem] md:gap-[10rem] items-end' >
                    <p className='md:w-[25rem]  w-[12rem]'>Advanced predicitive risk solutions</p>
                     <span className='text-green-600'><IoCheckmarkDoneCircleOutline /></span> 
                    </div>

                    <hr />
                    <div className=' inline-flex justify-between p-1 md:p-2 text-[.5rem] md:text-[1rem] gap-[.5rem] md:gap-[10rem] items-end' >
                    <p className='md:w-[25rem]  w-[12rem]'>PCI-compliant vault</p>
                     <span className='text-green-600'><IoCheckmarkDoneCircleOutline /></span> 
                    </div>

                    <hr />
                    <div className=' inline-flex justify-between p-1 md:p-2 text-[.5rem] md:text-[1rem] gap-[.5rem] md:gap-[10rem] items-end' >
                    <p className='md:w-[25rem]  w-[12rem]'>Chargeback Protection</p>
                     <span className='text-green-600'><IoCheckmarkDoneCircleOutline /></span> 
                    </div>

                    <hr />
                    <div className=' inline-flex justify-between p-1 md:p-2 text-[.5rem] md:text-[1rem] gap-[.5rem] md:gap-[10rem] items-end' >
                    <p className='md:w-[25rem]  w-[12rem]'>Dispute automation</p>
                     <span className='text-green-600'><IoCheckmarkDoneCircleOutline /></span> 
                    </div>

                    <hr />
                    <div className=' inline-flex justify-between p-1 md:p-2 text-[.5rem] md:text-[1rem] gap-[.5rem] md:gap-[10rem] items-end' >
                    <p className='md:w-[25rem]  w-[12rem]'>IC++ pricing available</p>
                     <span className='text-green-600'><IoCheckmarkDoneCircleOutline /></span> 
                    </div>

                    <hr />
                    <div className=' inline-flex justify-between p-1 md:p-2 text-[.5rem] md:text-[1rem] gap-[.5rem] md:gap-[10rem] items-end' >
                    <p className='md:w-[25rem]  w-[12rem]'>White glove onboarding & support</p>
                     <span className='text-green-600'><IoCheckmarkDoneCircleOutline /></span> 
                    </div>

                    <hr />
                    <div className=' inline-flex justify-between p-1 md:p-2 text-[.5rem] md:text-[1rem] gap-[.5rem] md:gap-[10rem] items-end' >
                    <p className='md:w-[25rem]  w-[12rem]'>24/7 monitoring & optimization</p>
                     <span className='text-green-600'><IoCheckmarkDoneCircleOutline /></span> 
                    </div>

                    <hr />
                    <div className=' inline-flex justify-between p-1 md:p-2 text-[.5rem] md:text-[1rem] gap-[.5rem] md:gap-[10rem] items-end' >
                    <p className='md:w-[25rem]  w-[12rem]'>Global support center</p>
                     <span className='text-green-600'><IoCheckmarkDoneCircleOutline /></span> 
                    </div>

                    
                </div>
            </div>
            </article>
        </>
    )
}
