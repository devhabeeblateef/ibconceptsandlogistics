import React from 'react'
import Nav from './UI/Nav'
import Image from 'next/image'

function Productgallery() {
  return (
    <div className='bg-gray-100 h-screen'>
    <div className='p-8 bg-white'>
      <Nav/>
    </div>
   
    <div role='product image' className='p-8'>
    <img src="/product3.jpg" width={20} height={20} className="rounded-md" alt="Full Condit Wiring" />
    <div className='flex space-x-2 slider justify-center pt-8'>
      <span className=''></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
    </div>

    <div className='px-8'>
    <p className='text-left font-semibold text-3xl'>Check 29'</p>
    <p className='text-sm'>
    Lorem ipsum dolor sit amet consectetur. 
    Aliquam est lectus duis arcu scelerisque habitant. 
    </p>

    <button className='my-6 bg-blue-500 p-2 text-white px-6'>Contact Us</button>
    </div>
    </div>
  )
}

export default Productgallery
