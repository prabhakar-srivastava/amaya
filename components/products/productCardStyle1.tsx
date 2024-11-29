import { img3 } from '@/utils/assets/imgLink'
import { Star } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import { ProductCardStyleProps } from './productCardStyle2'

function ProductCardStyle1(props:ProductCardStyleProps) {
  // const props = { productName: 'Lime Green Italian Satin Hand Embroidered Cape Set' }
  return (
    <a href={`/products/${props?.uid}`} className='p-2  bg-gray-100 rounded-xl w-72 h-[32rem]'>
      <div className=''>
        <Image src={props?.productImage} alt='' width={1000} height={1000} className=' w-72 h-full rounded-xl' />
      </div>
      <div className='mt-1 text-black'>
        <h1 className='font-serif text-2xl'>{props?.designer?.toUpperCase()}</h1>
        <h1 className='text-sm my-0.5 text-gray-500 '>
          {props?.productName?.length > 35 ? `${props?.productName?.substring(0, 35)}...` : props?.productName}
        </h1>
        <h1 className='mt-1'>₹ {props?.mpr}</h1>
        {/* <Star fill='#FFBF00' strokeWidth={0} /> */}

      </div>
    </a>
  )
}

export default ProductCardStyle1