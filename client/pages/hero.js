import React from 'react'
import Nav from './UI/Nav'

function Hero() {
  return (
    <div className=''>
    <div className='bg-bgimage absolute z-0 text-white w-screen h-screen bg-cover bg-center bg-no-repeat filter brightness-50'>
        
    </div>
    <div className='p-6 text-white relative z-10'>
        <Nav/>
        <p className='text-4xl font-semibold auto mt-24 lg:text-6xl'>Lighting the <span className='text-yellow-400'>future</span> with
        <span className='text-yellow-400'> power</span> and precision</p>

        <p className='text-sm pt-2'>Lorem ipsum dolor sit amet consectetur. 
        Congue ut eget aenean vitae. 
        Elementum arcu pellentesque aliquet purus ullamcorper libero. Aliquam est lectus.</p>

        <button className='bg-[#0094FF] p-2 m-6 ml-0'>Contact Us</button>
        <button className='border border-white p-2'>View Projects</button>


        <img src='./cac.png' width={80} height={80} className='absolute  right-0 mt-32 p-2' alt='CAC Registration Badge'/>
    </div>
    </div>
  )
}

export default Hero
