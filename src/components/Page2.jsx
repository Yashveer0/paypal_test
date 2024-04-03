import React from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";
import payment_img from '../assets/payment.jpg'

export function Page2(props) {
    

    return (
        <>  
        <div className='flex items-center px-[.6rem] md:px-[6rem] text-wrap '>
         <div className='px-[0.5rem] md:px-[2rem]'>
          <h1 className='text-[1.5rem] md:text-[7rem] text-[#002E87] font-bold '>401%</h1>
          <h2 className='w-[70%] text-[.8rem] md:text-2xl'>ROI for the composite merchant<sup>1</sup>estimated by Forrester with PayPal enterprise payment solutions<sup>2</sup></h2>
          </div>
            
          <div className='  border-l-[1px] border-gray-300 px-[1rem] md:px-[6rem]'>
            <div className='mb-2 md:mb-6'>
            <h1 className=' twxt-[0.8] md:text-[2rem] text-[#002E87] font-bold'>86%</h1>
            <p className='text-[.6rem] md:text-[1rem]' >of our enterprise users indicate that we had a positive impact on authorization rates since adoption<sup>3</sup></p>
            
            </div>
            <hr />
            <div className='mt-2 md:mt-6'>
            <h1 className='text-[.8rem] md:text-[2rem] text-[#002E87] font-bold'>4 bps</h1>
            <p className='text-[.6rem] md:text-[1rem]' >In the US, Braintree help reduce chargeback rate by 4 bps<sup>4</sup></p>
            
            </div>
          </div>
            
        </div>

        <div className='flex items-center px-[2rem] md:px-[6rem] mt-[2rem] md:mt-[6rem] w-[100%] md:p-4 '>
        <div className='w-[50%]'>
            <h1 className='text-[.8rem] md:text-3xl mb-2 md:mb-4 '>Offer a range of payment methods worldwide</h1>
            <p className='text-[.6rem] md:text-[1rem]'>Reach new customers and give them  payment options they prefer so you dont'miss a sale.</p>
            <p className='text-[.6rem] md:text-[1rem]'>
                Accept credit and debit cards, digital wallets, PayPal, and 20+ local payment methods. All in a single integration.
            </p>

            <h1 className='text-[.5rem] md:text-xl mt-1 md:mt-2 text-[#3C89BE] inline-flex items-center'>More about payment methods  &nbsp; < FaLongArrowAltRight /></h1>
        </div>

        <div className='w-[50%] bg-gray-100 p-2 md:p-8'>
            <div>
                <img src={payment_img} alt="" />
            </div>
        </div>
        </div>



        <div className=' flex items-center justify-between md:p-8 p-1 w-[100%] text-wrap md:mt-4 mt-1'>
            <div className='w-[25%] p-1 md:p-2'>
                <h1 className='text-[.6rem] md:text-xl font-bold md:mb-2 mb-1 '>Enable multiple commerce  scenarios</h1>
                <p className='text-[0.5rem] md:text-[1rem]'>Web, Mobile, App, In store. <br />
                Get Paid in the channels where you <br /> sell today and tomorrow.</p>
            </div>
            <div className='w-[25%] p-1 md:p-2 '>
                <h1 className='text-[.6rem] md:text-xl font-bold md:mb-2 mb-1'>
                    Reach millions of consumers
                </h1>
                <p className='text-[0.5rem] md:text-[1rem]' >
                    Connect with our expansive network of shoppers around the world who love to use PayPal, Venmo, and pay Later.
                </p>
            </div>
            <div className='w-[25%] p-1 md:p-2'>
                <h1 className='text-[.6rem] md:text-xl font-bold md:mb-2 mb-1'>Vault customer payment info</h1>
                <p className='text-[0.5rem] md:text-[1rem]' >Help drive conversion and make repeat purchases simple for your customers with secure data storage.</p>
            </div>

            <div className='w-[25%] p-1 md:p-2'>
                <h1 className='text-[.6rem] md:text-xl font-bold md:mb-2 mb-1'>Optimize checkout experience</h1>
                <p className='text-[0.5rem] md:text-[1rem]' >Control the look and feel of your chckout page with deop-in UI, hosted fields,and customizable smart payment buttons.</p>
            </div>
        </div>
        </>
    )
}
