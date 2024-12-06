"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import size from '@/public/size.png'
import { X } from 'lucide-react'
function Size() {
    const [show, setShow] = useState<boolean>(false)
    
    return (
        <div className=''>
            <div className='flex gap-8'>
                <h1>Select your Size</h1>
                <h1 className='text-red-500 cursor-pointer' onClick={() => { setShow(true) }}>size guide?</h1>

            </div>
            {show && (
                <div className='fixed z-50 w-full h-screen top-0 left-0 bg-black bg-opacity-75 backdrop-blur-sm'>
                    <div className='absolute  -translate-y-1/2 left-1/2 -translate-x-1/2 top-1/2 bg-white shadow-2xl rounded-md p-4'>
                        <div className='flex justify-between'>
                            <h1 className='font-semibold text-2xl tracking-wide'>Size Guide</h1>
                            <h1 className='cursor-pointer' onClick={() => { setShow(false) }}><X /></h1>
                        </div>

                        <div>
                            <Image src={size} alt='' width={1000} height={1000} />
                        </div>
                    </div>
                </div>

            )}
        </div>
    )
}

export default Size