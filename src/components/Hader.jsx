import React from 'react'
import logo from '../assets/paypal_logo.png'
export function Hader(props) {
    

    return (
        <>
            <nav className='  flex items-center justify-between w-[100%] md:w-[100%] text-[.6rem] md:text-[1rem] p-2 md:p-4'>
                <div className='w-[70%] md:w-[40%]'>
                    <ul className='flex items-center justify-evenly font-bold'>
                    <li className=' w-[.7rem] md:w-[1.5rem]'>
                    <img src={logo} alt='paypal_logo' />
                    </li>
                    <li>Personal</li>
                    <li>Business</li>
                    <li>Developer</li>
                    <li>Help</li>
                    </ul>
                </div>

                <div className='w-[40%] md:w-[20%] flex items-center justify-around'>
                    <button className='border-[1px]  md:border-[2px] border-[#002E87] md:p-2 p-1  md:px-6 px-3 rounded-full md:font-bold text-[#002E87] text-center' >Log in</button>
                    <button
                    className='border-[1px]  md:border-[2px] border-[#002E87] bg-[#002E87] md:p-2 p-1  md:px-6 px-3 rounded-full md:font-bold text-[#fff] text-center'
                    >Sign Up</button>
                </div>
                
            </nav>
            <hr  />
            
        </>
    )
}
