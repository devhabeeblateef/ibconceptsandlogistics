import React from 'react'

function Nav() {
  return (
    <div className='auto'>
      <ul className='flex justify-between '>
        <li className=''>LOGO</li>
        <span className='space-x-16 hidden md:flex'>
        <li>Home</li>
        <li>Our Work</li>
        <li>About</li>
        <li>Contact Us</li>
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
