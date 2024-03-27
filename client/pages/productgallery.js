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

      <div className='text-white text-2xl pt-16 text-center bg-whyimage w-full h-48 bg-center bg-cover'>
        <p>OUR SERVICES</p>
        <Link href='/contactus'>
          <button className='bg-[#003399] p-2 mt-6  text-sm ml-0'>Contact Us</button>
        </Link>
      </div>

      <div className='space-y-6'>
      <div role='Card' className='p-8'>
        <p className='text-2xl  text-yellow-500 font-bold'>HV & LV Networks</p>
        <p>High Voltage networks are crucial components of electricity distribution systems. 
        They are responsible for transmitting electricity over long distances from power plants to substations, 
        where the voltage is then lowered for distribution to homes, businesses, and industries. 
        IBConcepts specializes in designing, constructing, 
        and maintaining HV networks to ensure efficient and reliable electricity transmission.</p>
        <Image src='/pictureOne.jpg' className='md:p-16 mt-6' width={100} height={100}/>
      </div>

      <div role='Card' className='p-8'>
        <p className='text-2xl text-yellow-500 font-bold'>Fire Detection System</p>
        <p>At IBConcepts, we understand the critical importance of early fire detection in 
        safeguarding lives and property. Our comprehensive Fire Detection System services are designed 
        to provide reliable, 
        state-of-the-art solutions tailored to the unique needs of each client.</p>
        <Image src='/pictureSeven.jpg' className='md:p-16 mt-6' width={100} height={100}/>
      </div>


      <div role='Card' className='p-8'>
        <p className='text-2xl text-yellow-500 font-bold'>Surveillance and Access Control Services</p>
        <p>IBConcepts is your trusted partner in enhancing security and 
        protecting your assets with cutting-edge Surveillance and Access Control solutions.
         Our comprehensive services are 
        tailored to meet the unique needs of commercial, industrial, and residential clients. </p>
        <Image src='/pictureFive.jpeg'   className='md:p-16 mt-6' width={200} height={200}/>
      </div>

      <div role='Card' className='p-8'>
        <p className='text-2xl text-yellow-500 font-bold'>Full Wiring</p>
        <p>IBConcepts is your premier provider of comprehensive Full Wiring solutions, catering to the 
        electrical infrastructure needs of commercial, industrial, and residential clients. 
        With our expertise, professionalism, and dedication to quality, we offer 
        a wide range of services designed to ensure safety, reliability, and efficiency in electrical installations.</p>
        <Image src='/pictureThree.jpg'  className='md:p-16 mt-6' width={100} height={100}/>
      </div>


      <div role='Card' className='p-8'>
        <p className='text-2xl text-yellow-500 font-bold'>Design and Build Contracts</p>
        <p>IBConcepts specializes in providing Design and Build Contracts, offering clients a 
        streamlined and efficient approach to electrical infrastructure projects. 
        Our integrated Design and Build services encompass the entire project lifecycle, 
        from initial concept development to final construction and commissioning.</p>
        <Image src='/pictureFour.jpeg' className='md:p-16 mt-6' width={100} height={100}/>
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
