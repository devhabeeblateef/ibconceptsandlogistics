import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaInstagram, FaWhatsapp } from 'react-icons/fa'
function Show() {
  return (
    <div className='h-full text-[#FFFFF0] w-screen bg-[#0C0C0C]'>
      <p className='text-4xl text-center m-auto pt-16'>IB Concepts</p>
      <p className='text-center pt-2 text-md'>Creativity at its peak.</p>
      <Link href="https://medium.com/@ibconceptsandlogistics/ibconcepts-69adfb7ec008"> 
      <p className='text-blue-500 m-auto mt-2 text-center'>Learn more &gt; </p>
      </Link>
      <p className='text-center text-xs pt-4'>Connect with us on social media</p>
      <div className='flex justify-center pt-4 space-x-6'>
      <Link href="https://www.instagram.com/ibconcept.ng"><FaInstagram/></Link>
      <Link href="https://wa.link/c19n84"><FaWhatsapp/></Link>
      </div>

      <div>
        <Image src="/building.png" width={300} height={300} className='w-96 pt-12 p-0 m-auto' alt="IB Concepts" />
      </div>


      

    </div>
  )
}

export default Show
