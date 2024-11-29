"use client"
import React from 'react'

function GetCouponCode() {
  return (
    <div className='flex border border-gray-400 rounded-md'>
        <input type="text"placeholder="Here's my email" className='px-4 w-[15rem] lg:w-[20rem] text-black text-small-medium py-1 rounded-s-md' />
        <div className='relative top-2 text-xs w-28 h-full flex justify-center items-center'>
            <h1 className=''>submit</h1>
        </div>
    </div>
  )
}

export default GetCouponCode