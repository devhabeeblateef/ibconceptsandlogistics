import React from 'react'
import Nav from './UI/Nav'
import Image from 'next/image'
function Hero() {
  return (
    <div className=''>
    <div className='bg-bgimage text-white w-screen h-screen bg-cover bg-center bg-no-repeat'>
        
    
    <div className='p-6 text-white'>
        <Nav/>
        <p className='text-4xl font-semibold auto mt-24 lg:text-6xl'>Lighting the <span className='text-yellow-400'>future</span> with
        <span className='text-yellow-400'> power</span> and precision</p>

        <p className='text-sm pt-2'>Lorem ipsum dolor sit amet consectetur. 
        Congue ut eget aenean vitae. 
        Elementum arcu pellentesque aliquet purus ullamcorper libero. Aliquam est lectus.</p>

        <button className='bg-[#0094FF] p-2 m-6 ml-0'>Contact Us</button>
        <button className='border border-white p-2'>View Projects</button>
        
        <Image
        src='/cac.png'
        width={100}
        height={100}
        className='absolute right-0 bottom-0 p-4' // Adjusted styling for positioning
        alt='CAC Registration Badge'
      />
      
    </div>
    </div>
    </div>
  )
}

export default Hero
