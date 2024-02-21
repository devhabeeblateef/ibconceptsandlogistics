import React from 'react'
import Nav from './UI/Nav'
import Image from 'next/image'


function Hero() {
  return (
    <div className=''>
    <div className='bg-bgimage text-[#fffff0] w-screen h-screen bg-cover bg-center bg-no-repeat'>
        
    
    <div className='p-6 text-[#fffff0]'>
        <Nav/>
        <p className='text-4xl font-semibold auto mt-24 lg:text-6xl'>Lighting the <span className='text-yellow-400'>future</span> with
        <span className='text-yellow-400'> power</span> and precision</p>

        <p className='text-sm pt-4'>
        IBConcepts illuminates the future with cutting-edge precision and power, setting new standards in electrical engineering. Our commitment to innovation and sustainability ensures that each project transforms possibilities into reality.
        </p>

        <button className='bg-[#0094FF] p-2 m-6 ml-0'>Contact Us</button>
        <button className='border border-white p-2'>View Projects</button>
        
        <Image
        src='/cac.png'
        width={500}
        height={500}
        className='w-32 absolute right-0 bottom-0 p-4' // Adjusted styling for positioning
        alt='CAC Registration Badge'
      />
      
    </div>
    </div>
    </div>
  )
}

export default Hero
