import React from 'react'
import Link from 'next/link'
function Footer() {
  return (
    <div>
       <div>
        <footer className="bg-black h-full text-gray-200 py-6 space-y-6">
        <div className="container mx-auto text-center  space-y-6">
            <div className='text-center'>
            {/* <Image src="/logo.png" width={200} height={200} /> */}
            IBConcepts
                </div>
          <div className="mt-4 flex justify-around">
            <Link href="/" className="text-xs hover:text-gray-300 mx-3">
              Home
            </Link>
            <Link href="/why" className="text-xs  hover:text-gray-300 mx-3">
              Why Us?
            </Link>
            <Link href="/contactus" className=" text-xs hover:text-gray-300 mx-3">
              Contact Us
            </Link>
          </div>

          <div className="mt-4 flex justify-around">
            <Link href="https://instagram.com/ibconcept.ng" className="text-xs hover:text-gray-300 mx-3">
              Instagram
            </Link>
            <Link href="/about" className="text-xs  hover:text-gray-300 mx-3">
              About Us
            </Link>
            <Link href="https://medium.com/@ibconceptsandlogistics/ibconcepts-69adfb7ec008" className=" text-xs hover:text-gray-300 mx-3">
              Publications
            </Link>
          </div>

          <div className="mt-4 flex justify-around text-left">
            <Link href="/" className="text-xs hover:text-gray-300 mx-3">
              Facebook
            </Link>
            <Link href="https://wa.link/c19n84" className="text-xs hover:text-gray-300 mx-3">
              Chat with Us
            </Link>
            <Link href="/productgallery" className=" text-xs hover:text-gray-300 mx-3">
              Our Services
            </Link>
          </div>
        </div>

        <p className="text-xs text-gray-700 text-center mt-4">
            &copy; 2010 IBConcepts. All rights reserved.
          </p>

          <p className="text-xs text-gray-700 text-center mt-2 ">
            ibconceptsandlogistics@yahoo.com
        </p>
      </footer>
        </div>
    </div>
  )
}

export default Footer
 