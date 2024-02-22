import Link from 'next/link'
import React from 'react'

function Why() {
  return (
    <div className='text-[#FFFFF0] h-screen bg-whyimage mt-32 p-8 w-screen bg-left bg-cover'>
    <p className='mt-10 font-thin text-sm text-[#0194FF]'>IBCONCEPTS</p>
      <h1 className=' font-semibold text-5xl mt-0'>Why Us?</h1>
      <p className='mt-2 text-md'>With <strong className='text-[#0194FF]'>25</strong>  Years of  Experience 
      we are ready to help you</p>

      <ul className='mt-6 list-decimal space-y-6 ml-4'>
        <li>
        <label className='text-xl'>Outstanding Services</label>
        <section className='text-xs'>Lorem ipsum dolor sit amet consectetur. 
        Aliquam est lectus duis arcu scelerisque habitant. 
        </section>
        </li>

        <li>
        <label className='text-xl'>24/7 Hours Support</label>
        <section className='text-xs'>Lorem ipsum dolor sit amet consectetur. 
        Aliquam est lectus duis arcu scelerisque habitant. </section>
        </li>

        <li>
        <label className='text-xl'>Amazing Quality</label>
        <section className='text-xs'>
        Lorem ipsum dolor sit amet consectetur. 
        Aliquam est lectus duis arcu scelerisque habitant. 
        </section>
        </li>
      </ul>

      <Link href="/contactus" >
        <button className='p-2 bg-[#0194FF] mt-6'>Get a Quote</button>
      </Link>
    </div>
  )
}

export default Why
