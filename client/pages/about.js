import React from 'react'
import Image from 'next/image'
function About() {
  return (
    <div className='p-8 h-screen w-screen text-[#0C0C0C]'>
    <div className='flex'> 
    <span className='h-[4px] mt-[10px] mr-4 rounded-lg w-12 bg-blue-700'></span> 
    <p className=' font-light '>About Us</p>
    </div>

    <h1 className='text-3xl font-medium mt-4'>Making your <span className='text-blue-700'> vision </span>
    come true at the basic.</h1>
    <p className='mt-2 text-sm'>
    Lorem ipsum dolor sit amet consectetur. 
    Congue ut eget aenean vitae. 
    Elementum arcu pellentesque aliquet purus ullamcorper libero. 
    Aliquam est lectus duis arcu scelerisque habitant.
     </p>

     <p className='font-semibold mt-6'>We are the best <span className='text-blue-700'> constructions </span>&
     <span className='text-blue-700'> building </span> company projects including</p>

     <div className='flex justify-between'>
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

    <div className='flex space-x-4 p-4 mt-4'>
    <Image src="/img1.png" alt="Electrical Work One" width="300" height="300"/>
    <div className='space-y-12'>
    <Image src="/img2.png" alt="Electrical Work One" width="300" height="300"/>
    <Image src="/img3.png" alt="Electrical Work One" width="300" height="300"/>
    </div>
    </div>

    </div>
  )
}

export default About
