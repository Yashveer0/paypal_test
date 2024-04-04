import React from 'react';
import footer_img from '../assets/footer_img.png'
import { LiaFlagUsaSolid } from "react-icons/lia";

export function Footer(props) {
    

    return (
        <>
            <footer className=''>
                <div className=' px-[.7rem] md:px-[4rem]'>
                <img className='md:w-[10rem] w-[5rem] ' src={footer_img} alt="" />
                </div>

                <div className='flex items-center justify-between border-b p-1 md:p-4'>
                    <div>
                        <ul className='flex items-center  gap-[.15rem] md:gap-4 font-bold text-[.4rem] md:text-[1rem] '>
                        <li>Help</li>
                        <li>Contact</li>
                        <li>Fees</li>
                        <li>Security</li>
                        <li>Apps</li>
                        <li>Shop</li>
                        <li>Enterprise</li>
                        <li>Partners</li>
                        <li>Feedback</li>
                        </ul>
                        
                    </div>

                    <div className='text-red-600 text-[.8rem] md:text-[2rem]'>
                    <LiaFlagUsaSolid />
                    </div>
                </div>

                <div className='flex items-center justify-between  p-1 md:p-4'>
                    <div>
                        <ul className='flex items-center  gap-[.15rem] md:gap-4 font-bold text-[.4rem] md:text-[1rem] '>
                        <li>About</li>
                        <li>Newsroom</li>
                        <li>Jobs</li>
                        <li>Investor Relations</li>
                        <li>Values in Action</li>
                        <li>Public Policy</li>
                        <li>Sitemap</li>
                        
                        </ul>
                        
                    </div>

                    <div className=''>
                    <ul className='flex items-center  gap-[.15rem] md:gap-4 font-bold text-[.4rem] md:text-[1rem] '>
                        <li className='text-gray-400'>© 1999-2022</li>
                        <li>Accessiblity</li>
                        <li>Privacy</li>
                        <li>Cookies</li>
                        <li>Legal</li>
                        

                        </ul>
                    </div>
                </div>


            </footer>
        </>
    )
}
