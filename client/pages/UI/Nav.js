import { motion } from 'framer-motion'
import Image from 'next/image'
function Nav() {
  return (
    <div className='auto'>
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
      
        <li className='md:hidden'>
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
</svg>
        </li>
        </ul>
    </div>
  )
}

export default Nav
