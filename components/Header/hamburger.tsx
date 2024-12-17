"use client"
import { LucideArrowUpRightFromSquare, Menu, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { nav } from './navbar'

function Hamburger() {
 const [showMenu, setShowMenu]=useState<boolean>(false)

  return (

    <div className='block lg:hidden'>
      <div onClick={()=>setShowMenu(true)}><Menu /></div>
      
      {showMenu&&  <div className=' absolute top-0 left-0 bg-white z-40 w-screen lg: max-w-[500px] h-screen'>
        <div className='flex justify-between items-center px-4 py-2'>
          <Link href={'/'} className=''>
            <Image src="/amayalogo.png" alt="logo" width={200} height={150} className='w-36 h-10 ' />
          </Link>
          <div className='' onClick={()=>setShowMenu(false)}>
            <X />
          </div>
        </div>
        <div className=' mx-6 mt-3 flex flex-col overflow-y-scroll mb-6'>
          {nav.map((res, index, arr) => {
            return <Link  href={res.link} className={`cursor-pointer flex justify-between items-center w-full border-gray-10 ${index === 0 ? '' : 'border-t-2'} py-3 `} key={index}>
              <h1 className='  font-serif font-light hover:text-red-500 w-full '>{res.name}</h1>
              <div className='font-thin'><LucideArrowUpRightFromSquare /></div>
            </Link>
          })}
        </div>
        
      </div>}
    </div>

  )
}

export default Hamburger