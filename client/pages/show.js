import React from 'react'
import Image from 'next/image'

function Show() {
  return (
    <div className='h-full text-[#FFFFF0] w-screen bg-[#0C0C0C]'>
      <p className='text-4xl text-center m-auto pt-16'>IB Concepts</p>
      <p className='text-center pt-2 text-md'>Creativity at its peak.</p>
      <p className='text-blue-500 m-auto mt-2 text-center'>Learn more &gt; </p>

      <div>
        <Image src="/building.png" width={300} height={300} className='w-96 pt-12 p-0 m-auto' alt="IB Concepts" />
      </div>
    </div>
  )
}

export default Show
