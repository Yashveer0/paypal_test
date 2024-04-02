import React from 'react'
import img1 from '../assets/code1.jpg'
import img2 from '../assets/code.jpg'
import img3 from '../assets/ofc3.jpg'


export function Page1(props) {


    return (
        <>
            <section className='flex items-center justify-center flex-col text-[.6rem] md:text-[1rem] '>
                <button className='md:p-3 p-2 md:px-6 px-4 bg-[#002E87] text-[#fff]  rounded-full mt-[1.8rem] md:mt-[3rem] '>
                    Connect with a Payments Expert
                </button>
                <div className='  md:w-[100%] min-w-[100%] md:p-[6rem] p-[2rem] md:mt-[2rem] mt-[1rem]'>
                    <img className='md:w-[500px] w-[100px]  drop-shadow-lg md:min-h-[470px] min-h-[160px] ' src={img3} alt="" />


                    <img className=' md:w-[500px] w-[100px] md:min-h-[500px] min-h-[180px] drop-shadow-lg relative md:bottom-[31.15rem] bottom-[11.15rem] md:left-[20rem] left-[5rem] md:rounded-[1rem] rounded-[.6rem]' src={img2} alt="" />

                    <img className=' md:w-[500px] w-[100px]  md:min-h-[500px] min-h-[180px] drop-shadow-lg  relative md:bottom-[62.35rem] bottom-[22.30rem] md:left-[40rem] left-[10rem] rounded-[1rem]' src={img1} alt="" />

                    <div className=' md:p-2 p-1 md:w-[10rem] w-[6rem] drop-shadow-lg z-20 bg-white relative md:bottom-[88.35rem] bottom-[30.35rem] md:left-[65rem] text-[0.6rem] md:text-[1rem] left-[13rem] rounded-t-md '> <span>PayPal Assistant ^ </span></div>
                </div>

                
            </section>
        </>
    )
}
