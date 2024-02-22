import React from 'react'
import Image from 'next/image'
function About() {
  return (
    <div className='p-8 h-screen w-screen text-[#0C0C0C]'>
    <div className='flex'> 
    <span className='h-[4px] mt-[10px] mr-4 rounded-lg w-12 bg-blue-700'></span> 
    <p className=' font-light '>About Us</p>
    </div>

    <h1 className='text-3xl font-bold mt-4'>Making your <span className='text-blue-700'> vision </span>
    come true at the basic.</h1>
    <p className='mt-2 text-sm'>
    IBConcepts illuminates the future with cutting-edge precision and power, setting new standards in electrical engineering. Our commitment to innovation and sustainability ensures that each project transforms possibilities into reality.
     </p>

     <p className='font-semibold mt-6'>We are the best <span className='text-blue-700'> constructions </span>&
     <span className='text-blue-700'> building </span> company projects including</p>

     <div className='flex space-x-6'>
     <ul className='mt-6 space-y-2 list-disc ml-4'>
        <li>Full Lighning</li>
        <li>Half Lighning</li>
        <li>Wiring</li>
     </ul>

     <ul className='mt-6 space-y-2 list-disc ml-4'>
     <li>Ring Lighning</li>
     <li>Hole Lighning</li>
     <li>Fast Wiring</li>
  </ul>

  </div>

    <div className='flex space-x-4 p-8  mt-4 '>
    <Image src="/img1.png" className='w-32 h-32' alt="Electrical Work One" width="150" height="150"/>
    <div className='space-y-2'>
    <Image src="/img2.png" className='w-32 h-32' alt="Electrical Work One" width="150" height="150"/>
    </div>
    </div>

    </div>
  )
}

export default About
