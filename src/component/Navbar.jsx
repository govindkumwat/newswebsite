import React from 'react'
import { useDisclosure } from '@mantine/hooks';
import { Drawer, Button } from '@mantine/core';
const Navbar = () => {
    const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
     <Drawer opened={opened} onClose={close} title="Authentication">
        {/* Drawer content */}
      </Drawer>
    <div className='p-2 shadow-sm bg-black text-white justify-between flex items-center pr-6 pl-6'> 
      <div className='font-bold text-xl'>LET'SREAD</div>
      <div>
        <ul className='flex gap-6 font-normal text-12 cursor-pointer'>
          <li>Home</li>
          <li>Join Us</li>
          <li>Customer Care</li>
          <li>Reach Out</li>
          <li>About Us</li>

        </ul>
      </div>
      <div>
        <button className='font-normal text-8 bg-red-800 text-white p-2 rounded'>Subscribe</button>
      </div>
    </div>
    <div className='p-2 pl-6 pr-6 flex justify-between items-center   bg-zinc-100 border-b-2'>
        <div onClick={open} className='p-3 bg-black rounded-md w-fit'> 
        <svg stroke="currentColor" fill="white" stroke-width="0" viewBox="0 0 1024 1024" height="1.2em" width="1.2em" xmlns="http://www.w3.org/2000/svg"><path d="M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z"></path></svg>
        </div>
        <div>
            Sign Up For Our Paris Olymapic Newsletter
        </div>
        <div className='p-3 border-2 rounded-md'>
        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1.2em" width="1.2em" xmlns="http://www.w3.org/2000/svg"><path d="M10,18c1.846,0,3.543-0.635,4.897-1.688l4.396,4.396l1.414-1.414l-4.396-4.396C17.365,13.543,18,11.846,18,10 c0-4.411-3.589-8-8-8s-8,3.589-8,8S5.589,18,10,18z M10,4c3.309,0,6,2.691,6,6s-2.691,6-6,6s-6-2.691-6-6S6.691,4,10,4z"></path></svg>
        </div>
    </div>
    </>
  )
}

export default Navbar
