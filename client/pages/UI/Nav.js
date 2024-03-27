import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
function Nav() {
  const [ isExpanded, setIsExpanded] = useState(false)

  const navHandler = () => {
    setIsExpanded(!isExpanded);
  }

  

  return (
    <div

    className={ isExpanded ? 'fixed w-screen auto p-6 active' : 'fixed w-screen auto navColor p-6'}>
      <ul className='flex justify-between '>
        <Link href="/">
        <li className=''>
        <Image src="/logo.png" alt="IB Concepts Logo" width={50} height={50} />
        </li>
        </Link>
        <span className='space-x-16 hidden md:flex'>
        <motion.li 
        initial={{x: 200}} 
        animate={{x: 0}} 
        transition={{duration: 1}}
        className='cursor-pointer font-bold'>Home</motion.li>
        <motion.li initial={{x: 200}} animate={{x: 0}} transition={{duration: 2}} className='cursor-pointer'>Our Work</motion.li>
        <motion.li initial={{x: 200}} animate={{x: 0}} transition={{duration: 3}} className='cursor-pointer'>About</motion.li>
        <motion.li initial={{x: 200}} animate={{x: 0}} transition={{duration: 3}} className='cursor-pointer'>Contact Us</motion.li>
        </span>
      
        <li onClick={navHandler} className='md:hidden'>
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill={ isExpanded ? "black" : "#003399" } class="bi bi-list" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
</svg>
        </li>
        </ul>

        <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ x: -100, opacity: 1 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -100, opacity: 1 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
            className='w-screen'
          >
            <ul className='mt-6  text-[#393535] text-sm font-bold'>
              <Link href="/"><li className='mb-4'>Home</li></Link>
              <Link href="/productgallery"><li className='mb-4'>Our Services</li></Link>
              <Link href="/contactus"><li className='mb-4'>Contact Us</li></Link>
              <Link href="/about"><li className='mb-4'>About Us</li></Link>
              <Link href="/why"><li className='mb-4'>Why Us</li></Link>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>  
  )
}

export default Nav
