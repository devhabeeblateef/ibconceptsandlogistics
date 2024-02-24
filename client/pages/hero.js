import React from 'react'
import Nav from './UI/Nav'
import Image from 'next/image'
import Link from 'next/link'


function Hero() {
  return (
    <div className=''>
    <div className='snap-x snap-mandatory bg-bgimage text-[#fffff0] w-screen h-screen bg-cover bg-center bg-no-repeat'>
    <div className='px-6  text-[#fffff0]'>
        
        <p className='text-4xl font-semibold auto pt-32 lg:text-6xl'>Lighting the
         <span className='text-yellow-400'> future</span> with
        <span className='text-yellow-400'> power</span> and precision</p>
        
        <p className='text-xs pt-4 leading-6'>
        IBConcepts illuminates the future with cutting-edge precision and power, 
        setting new standards in electrical engineering. Our commitment to innovation and
         sustainability ensures that each project transforms possibilities into reality.
        </p>

        <Link href="/contactus">
        <button className='bg-[#003399] p-2 m-6 ml-0'>Contact Us</button>
        </Link>

        <Link href="/productgallery">
        <button className='border border-white p-2'>View Projects</button>
        </Link>
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
