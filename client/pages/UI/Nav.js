import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
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
        <li className=''>
        <Image src="/logo.png" alt="IB Concepts Logo" width={50} height={50} />
        </li>
        <span className='space-x-16 hidden md:flex'>
        <motion.li initial={{x: 200}} animate={{x: 0}} transition={{duration: 1}} className='cursor-pointer'>Home</motion.li>
        <motion.li initial={{x: 200}} animate={{x: 0}} transition={{duration: 2}} className='cursor-pointer'>Our Work</motion.li>
        <motion.li initial={{x: 200}} animate={{x: 0}} transition={{duration: 3}} className='cursor-pointer'>About</motion.li>
        <motion.li initial={{x: 200}} animate={{x: 0}} transition={{duration: 3}} className='cursor-pointer'>Contact Us</motion.li>
        </span>
      
        <li onClick={navHandler} className='md:hidden'>
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill={ isExpanded ? "black" : "white" } class="bi bi-list" viewBox="0 0 16 16">
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
            <ul className='space-y-2 mt-6 text-[#393535] text-sm font-bold'>
              <li>Home</li>
              <li>Our Work</li>
              <li>About</li>
              <li>Contact Us</li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Nav
