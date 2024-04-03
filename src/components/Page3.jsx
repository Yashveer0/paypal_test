import React from 'react'
import card_payment from '../assets/card_payment.jpg'

export function Page3(props) {
    

    return (
        <>
            <section className='bg-gray-100 text-wrap '>
                <div className='flex items-center justify-evenly w-[100%] p-[1rem] md:p-[4rem]'>
                    <div className='w-[50%]'>
                        <img src={card_payment} alt="" />
                    </div>

                    <div className='w-[50%] p-2 md:p-8'>
                        <h1 className='md:text-4xl text-[.7rem] font-bold md:mb-4'>Boost approval rates</h1>
                        <p className='text-[.5rem] md:text-[1rem] text-wrap'>
                            Optimize your backend setup with granular, clean messaging and the right payment rails, so you can help boost approval chances and capture more of your hard-earned revenue.
                        </p>
                    </div>
                </div>





                <div className=' flex items-center justify-between md:p-8 p-1 w-[100%] text-wrap md:mt-4 mt-1'>
            <div className='w-[25%] p-1 md:p-2'>
                <h1 className='text-[.6rem] md:text-xl font-bold md:mb-2 mb-1 '>Keep data fresh</h1>
                <p className='text-[0.5rem] md:text-[1rem]'>Use Account Updater to securely make batch and real-time updates for Visa,
                Mastercard, amd Discover.</p>
            </div>
            <div className='w-[25%] p-1 md:p-2 '>
                <h1 className='text-[.6rem] md:text-xl font-bold md:mb-2 mb-1'>
                    Adopt network <br /> tokenization
                </h1>
                <p className='text-[0.5rem] md:text-[1rem]' >
                    Boost security and approvals with a partner who has already tokenized hundreds of millions of credit cards.
                </p>
            </div>
            <div className='w-[25%] p-1 md:p-2'>
                <h1 className='text-[.6rem] md:text-xl font-bold md:mb-2 mb-1'>Retry failed <br /> transctions</h1>
                <p className='text-[0.5rem] md:text-[1rem]' >We strive to optimize approvals right from the start. But if they fail, we can retry the transaction on alternative acquiring networks.</p>
            </div>

            <div className='w-[25%] p-1 md:p-2'>
                <h1 className='text-[.6rem] md:text-xl font-bold md:mb-2 mb-1'>Optimize routing </h1>
                <p className='text-[0.5rem] md:text-[1rem]' >Route transactions to global acquirers and networks that will yield the fastest, most reliable, and least expensive transaction.</p>
            </div>
        </div>
            </section>
        </>
    )
}
