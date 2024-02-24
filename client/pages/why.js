import Link from 'next/link'
import React from 'react'

function Why() {
  return (
    <div className='text-[#FFFFF0] h-screen bg-whyimage mt-32 p-8 w-screen bg-left bg-cover'>
    <p className='mt-10 font-thin text-sm text-yellow-400'>IBCONCEPTS</p>
      <h1 className=' font-semibold text-5xl mt-0'>Why Us?</h1>
      <p className='mt-2 text-md'>With <strong className='text-yellow-400'>25</strong>  Years of  Experience 
      we are ready to help you</p>

      <ul className='mt-6 list-decimal space-y-6 ml-4'>
        <li>
        <label className='text-xl'>Outstanding Services</label>
        <section className='text-xs'>At IBConcepts, we take pride in delivering services that go beyond the ordinary, setting new standards in the field of electrical engineering. Our commitment to excellence is reflected in every facet of our work, 
        ensuring that our clients receive nothing short of outstanding solutions.
        </section>
        </li>

        <li>
        <label className='text-xl'>24/7 Hours Support</label>
        <section className='text-xs'>We understand that the world of electrical engineering operates around
         the clock, and so do we. At IBConcepts, our dedicated support team is available 
         24/7 to address your needs, provide assistance, and ensure seamless project management. 
         Your success is our priority, and our round-the-clock support reflects our commitment to being a 
         reliable partner at every step of your journey.
         </section>
        </li>

        <li>
        <label className='text-xl'>Amazing Quality</label>
        <section className='text-xs'>
        Quality is not just a goal; it's a standard at IBConcepts. 
        We approach every project with an unwavering commitment to
         delivering amazing quality in every aspect of our work. 
        </section>
        </li>
      </ul>

      <Link href="/contactus" >
        <button className='p-2 bg-[#003399] mt-6'>Get a Quote</button>
      </Link>
    </div>
  )
}

export default Why
