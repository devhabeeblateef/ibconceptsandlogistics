import React from 'react'
import Nav from './UI/Nav'
import Image from 'next/image'
import Footer from './UI/Footer'
import Link from 'next/link'
function Productgallery() {
  return (
    <div>
    <div className='pb-24'>
      <Nav/>
    </div>

      <div className='text-white text-2xl pt-16 text-center bg-whyimage w-96 h-48 bg-center bg-cover'>
        <p>OUR SERVICES</p>
        <Link href='/contactus'>
          <button className='bg-[#003399] p-2 mt-6  text-sm ml-0'>Contact Us</button>
        </Link>
      </div>

      <div className='space-y-6'>
      <div role='Card' className='p-8'>
        <p className='text-2xl'>Title</p>
        <p>Nostrud ipsum exercitation laborum sunt duis consequat ex. Exercitation 
        labore nulla ut pariatur ut sit officia ex sint culpa. Et veniam culpa quis magna commodo. 
        Tempor cillum labore in voluptate eiusmod. Laborum duis elit aliqua tempor deserunt id fugiat.</p>
        <Image src='/product1.jpg' className='mt-6' width={60} height={60}/>
      </div>

      <div role='Card' className='p-8'>
        <p className='text-2xl'>Title</p>
        <p>Nostrud ipsum exercitation laborum sunt duis consequat ex. Exercitation 
        labore nulla ut pariatur ut sit officia ex sint culpa. Et veniam culpa quis magna commodo. 
        Tempor cillum labore in voluptate eiusmod. Laborum duis elit aliqua tempor deserunt id fugiat.</p>
        <Image src='/product1.jpg'    className='mt-6' width={60} height={60}/>
      </div>


      <div role='Card' className='p-8'>
        <p className='text-2xl'>Title</p>
        <p>Nostrud ipsum exercitation laborum sunt duis consequat ex. Exercitation 
        labore nulla ut pariatur ut sit officia ex sint culpa. Et veniam culpa quis magna commodo. 
        Tempor cillum labore in voluptate eiusmod. Laborum duis elit aliqua tempor deserunt id fugiat.</p>
        <Image src='/product1.jpg'   className='mt-6' width={60} height={60}/>
      </div>

      <div role='Card' className='p-8'>
        <p className='text-2xl'>Title</p>
        <p>Nostrud ipsum exercitation laborum sunt duis consequat ex. Exercitation 
        labore nulla ut pariatur ut sit officia ex sint culpa. Et veniam culpa quis magna commodo. 
        Tempor cillum labore in voluptate eiusmod. Laborum duis elit aliqua tempor deserunt id fugiat.</p>
        <Image src='/product1.jpg'  className='mt-6' width={60} height={60}/>
      </div>


      <div role='Card' className='p-8'>
        <p className='text-2xl'>Title</p>
        <p>Nostrud ipsum exercitation laborum sunt duis consequat ex. Exercitation 
        labore nulla ut pariatur ut sit officia ex sint culpa. Et veniam culpa quis magna commodo. 
        Tempor cillum labore in voluptate eiusmod. Laborum duis elit aliqua tempor deserunt id fugiat.</p>
        <Image src='/product1.jpg' className='mt-6' width={60} height={60}/>
      </div>

      
      </div>


      <p></p>

      <div className='pt-8'>
      <Footer/>
      </div>
    </div>
  )
}

export default Productgallery
