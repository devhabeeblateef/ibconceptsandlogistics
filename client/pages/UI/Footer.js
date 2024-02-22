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
            <Link href="/joincommunity" className="text-xs hover:text-gray-300 mx-3">
              Home
            </Link>
            <Link href="/homepage/#FAQ" className="text-xs  hover:text-gray-300 mx-3">
              FAQs
            </Link>
            <Link href="/courses" className=" text-xs hover:text-gray-300 mx-3">
              Contact Us
            </Link>
          </div>

          <div className="mt-4 flex justify-around">
            <Link href="/frontendpage" className="text-xs hover:text-gray-300 mx-3">
              Social Media
            </Link>
            <Link href="/scrumpage" className="text-xs  hover:text-gray-300 mx-3">
              Home
            </Link>
            <Link href="/scrumpage" className=" text-xs hover:text-gray-300 mx-3">
              Home
            </Link>
          </div>

          <div className="mt-4 flex justify-around text-left">
            <Link href="/joincommunity" className="text-xs hover:text-gray-300 mx-3">
              Home
            </Link>
            <Link href="/homepage/#FAQ" className="text-xs hover:text-gray-300 mx-3">
              Home
            </Link>
            <Link href="/coursesforyou" className=" text-xs hover:text-gray-300 mx-3">
              Careers
            </Link>
          </div>
        </div>

        <p className="text-xs text-gray-700 text-center mt-4">
            &copy; 2010 IBConcepts. All rights reserved.
          </p>
      </footer>
        </div>
    </div>
  )
}

export default Footer
 