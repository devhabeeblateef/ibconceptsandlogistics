import React, { useState } from 'react';
import Nav from './UI/Nav';
import Image from 'next/image';
import { FaLessThan, FaGreaterThan } from 'react-icons/fa'
import Link from 'next/link';
import productsData from './api/PRODUCTS.JSON';

function Productgallery() {
  const [currentProductIndex, setCurrentProductIndex] = useState(0);

  const handleNextProduct = () => {
    setCurrentProductIndex((prevIndex) => (prevIndex + 1) % productsData.length);
  };

  const handlePrevProduct = () => {
    setCurrentProductIndex((prevIndex) => (prevIndex - 1 + productsData.length) % productsData.length);
  };

  const currentProduct = productsData[currentProductIndex];

  return (
    <div className='bg-gray-100 h-screen'>
      <div className='z-20 bg-white'>
        
      </div>

      <div role='product image' className='p-8 border pt-32 relative'>
        {/* Navigation Arrows */}
        <div className='absolute top-1/2 pt-32 left-0 transform -translate-y-1/2 text-white pl-10'>
          <FaLessThan/>
        </div>
        <div className='absolute top-1/2 pt-32 right-0 transform -translate-y-1/2 text-white pr-10'>
          <FaGreaterThan/>
        </div>

        {/* Image */}
        <div className='flex w-screen border'>
        <img
          src='/product3.jpg'
          width={20}
          height={20}
          className='rounded-md md:w-128 md:h-128'
          alt='Full Condit Wiring'
        />
        </div>

        {/* Slider */}
       
      </div>

      <div className='px-8'>
        <p className='text-left font-semibold text-3xl'>Check 28</p>
        <p className='text-sm'>
          Lorem ipsum dolor sit amet consectetur. Aliquam est lectus duis arcu
          scelerisque habitant.
        </p>

       <Link href="/contactus"> 
       <button className='my-6 bg-blue-500 p-2 text-white px-6'>Contact Us</button>
       </Link>
      </div>
    </div>
  );
}

export default Productgallery;
