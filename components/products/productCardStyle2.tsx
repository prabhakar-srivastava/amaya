import React from 'react'
import Image from 'next/image';

export interface ProductCardStyleProps{
  productImage:string;
  designer?:string;
  productName?:string;
  mpr?:number
  uid:string;
}

function ProductCardStyle2(props:ProductCardStyleProps) {
  return (
    <a href={`/products/${props?.uid}`}>
      <div className='w-64 cursor-pointer  text-black'>
        <div className=''>
          <Image src={props?.productImage||''} alt='' width={1000} height={1000} className=' w-full h-96' />
        </div>
        <div className='mt-1.5'>
          <h1 className='lg:text-base font-serif leading-none lg:leading-none '>
            {props?.designer?.toUpperCase()}
          </h1>
          <h1 className=' text-xs text-gray-500 tracking-wider '>
            {props?.productName?.length||0 > 35 ? `${props?.productName?.substring(0, 35)}...` : props?.productName}
          </h1>
          <h1 className=' text-sm mt-0.5 '>
           {props?.mpr && <>₹ {props?.mpr}</>}
          </h1>
        </div>
      </div>
    </a>
  )
}

export default ProductCardStyle2