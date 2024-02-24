import React from 'react'
import Image from 'next/image'
function About() {
  return (
    <div className='p-8 h-screen w-screen text-[#0C0C0C]'>
    <div className='flex'> 
    <span className='h-[4px] mt-[10px] mr-4 rounded-lg w-12 bg-[#003399]'></span> 
    <p className=' font-light '>About Us</p>
    </div>

    <h1 className='text-3xl font-bold mt-4'>Making your <span className='text-[#003399]'> vision </span>
    come true at the basic.</h1>
    <p className='mt-2 text-sm'>
    IBConcepts illuminates the future with cutting-edge precision and power, setting new standards in electrical engineering. Our commitment to innovation and sustainability ensures that each project transforms possibilities into reality.
     </p>

     <p className='font-semibold mt-6'>We are the best <span className='text-[#003399]'> constructions </span>&
     <span className='text-[#003399]'> building </span> company projects including</p>

     <div className='flex space-x-6'>
     <ul className='mt-6 space-y-6 list-disc ml-4'>
        <li>HV and LV networks</li>
        <li>Fire Detection System</li>
        <li>Burglar and Intruder Alarm System</li>
        <li>Water Treatment Plant</li>
     </ul>

     <ul className='mt-6 space-y-6 list-disc ml-4'>
     <li>Surveillance and Access Control</li>
     <li>Full Lighnining</li>
     <li>Design and Build Contracts</li>
     <li>Maintenance</li>
     <li>Cold and Hot Water Services</li>
  </ul>

  </div>

    <div className='flex space-x-4 p-8  pt-16 '>
    <Image src="/img1.png" className='w-32 h-32' alt="Electrical Work One" width="150" height="150"/>
    <div className='space-y-2'>
    <Image src="/img2.png" className='w-32 h-32' alt="Electrical Work One" width="150" height="150"/>
    </div>
    </div>

    </div>
  )
}

export default About
