"use client"
import React, { useState } from 'react'


const filter = {
    category: ["Kurta Sets", "Nehru Jacket & Sets", "Shirts", "Kurtas", "Sherwanis", "Footwear", "Accessories"],
    designers: ["lasha", "16Stitches", "3DM LIFESTYLE", "431-88 by Shweta Kapur", "A!A By Abrar Ali", "AAMRA BY LAVANYA", "Aashiana"],
    price: ["5000-10000", "10000-20000", "20000-30000", "30000-40000", "50000-60000", "More than 60000"],
    size: ["xs", "x", "s", "m", "l", "xl", "xxl", "free"],
    color: ["red", "blue", "green", "voilet", "brown", "black", "white", "yellow", "pink", "gray"],
    occasion: ["Sangeet", "Mehendi & Puja", "Party", "Wedding", "Cocktail & Reception", "Destination Wedding", "Groom", "Work"]
}

function Filters() {
    const [category, setCategory] = useState<string>('')
    const [designer, setDesigner] = useState<string>('')
    const [price, setPrice] = useState<string>('')
    const [size, setSize] = useState<number>(0)
    const [color, setColor] = useState<string>('')
    const [occasion, setOccasion] = useState<string>('')


    return (
        <div className='w-[600px]'>
            <div className='mb-6'>
                <h1 className='font-serif  py-2 border-b-2 border-gray-300 mb-4'>Category</h1>
                {filter.category.map((res, index) => {
                    return <div key={index} className='text-sm flex  gap-2 text-gray-700 tracking-wider leading-8'>
                        <input id='filter' type='checkbox' value={res} />
                        <h1>{res}</h1>
                    </div>
                })}
            </div>
            <div className='mb-6'>
                <h1 className='font-serif  py-2 border-b-2 border-gray-300 mb-4'>Designers</h1>
                {filter.designers.map((res, index) => {
                    return <div key={index} className='text-sm flex  gap-2 text-gray-700 tracking-wider leading-8'>
                        <input id='filter' type='checkbox' value={res} />
                        <h1>{res}</h1>
                    </div>
                })}
            </div>
            <div className='mb-6'>
                <h1 className='font-serif  py-2 border-b-2 border-gray-300 mb-4'>Color</h1>
                {filter.color.map((res, index) => {
                    return <div key={index} className='text-sm flex  gap-2 text-gray-700 tracking-wider leading-8'>
                        <input id='filter' type='checkbox' value={res} />
                        <h1>{res}</h1>
                    </div>
                })}
            </div>
            <div className='mb-6'>
                <h1 className='font-serif  py-2 border-b-2 border-gray-300 mb-4'>Occasion</h1>
                {filter.occasion.map((res, index) => {
                    return <div key={index} className='text-sm flex  gap-2 text-gray-700 tracking-wider leading-8'>
                        <input id='filter' type='checkbox' value={res} />
                        <h1>{res}</h1>
                    </div>
                })}
            </div>
            <div className='mb-6'>
                <h1 className='font-serif  py-2 border-b-2 border-gray-300 mb-4'>Price</h1>
                {filter.price.map((res, index) => {
                    return <div key={index} className='text-sm flex  gap-2 text-gray-700 tracking-wider leading-8'>
                        <input id='filter' type='checkbox' value={res} />
                        <h1>{res}</h1>
                    </div>
                })}
            </div>
            <div className='mb-6'>
                <h1 className='font-serif  py-2 border-b-2 border-gray-300 mb-4'>Size</h1>
                <div className='flex gap-2 flex-wrap'>
                    {filter.size.map((res, index) => {
                        return <div key={index} className='px-4 py-2 border-2 border-gray-200 w-max'>
                            {/* <input id='filter' type='checkbox' value={res} /> */}
                            <h1>{res}</h1>
                        </div>
                    })}
                </div>
            </div>

            {/* <div className='flex gap-2'>
                <h1 className=' border-2 border-black py-2 w-full text-center'>Cancel</h1>
                <h1 className=' border-2 border-black text-white bg-black py-2 w-full text-center'>Apply</h1>

            </div> */}

        </div>
    )
}

export default Filters