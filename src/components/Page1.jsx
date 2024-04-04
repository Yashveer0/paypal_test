import React from 'react'
import img1 from '../assets/code1.jpg'
import img2 from '../assets/page2_img.jpg'
import img3 from '../assets/ofc3.jpg'


export function Page1(props) {


    return (
        <>
            <section className='flex items-center    justify-center flex-col  text-[.6rem] md:text-[1rem] '>
                <button className='md:p-3 p-2 md:px-6 px-4 bg-[#002E87] text-[#fff]  rounded-full mt-[1.8rem] md:mt-[3rem] '>
                    Connect with a Payments Expert
                </button>
                <div className='  md:w-[100%] min-w-[100%] md:p-[6rem] p-[2rem] md:mt-[2rem] mt-[1rem]'>
                    <img className='md:w-[500px] w-[100px]  drop-shadow-lg md:min-h-[370px] min-h-[130px] ' src={img3} alt="" />


                    <img className=' md:w-[500px] w-[100px] md:min-h-[400px] min-h-[150px] drop-shadow-lg  absolute md:top-[36rem] top-[20rem] md:left-[25rem] left-[8rem] md:rounded-[1rem] rounded-[.6rem]' src={img2} alt="" />

                     <img className=' md:w-[500px] w-[100px]  md:min-h-[400px] min-h-[150px] drop-shadow-lg   absolute md:top-[36rem] top-[20rem] md:left-[45rem] left-[13rem] rounded-[1rem]' src={img1} alt="" />

                    
                    <div className=' md:p-2 p-1 md:w-[10rem] w-[6rem] drop-shadow-lg z-20 bg-white  text-[0.6rem] md:text-[1rem]  rounded-t-md absolute md:top-[42rem] top-[22rem] md:left-[70rem] left-[14rem] '> <span>PayPal Assistant ^ </span></div> 
                </div>

                
            </section>
        </>
    )
}
