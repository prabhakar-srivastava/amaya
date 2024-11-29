import { img3 } from '@/utils/assets/imgLink';
import Image from 'next/image';
import React from 'react'

export enum LABLEPOSITION{
  ABSOLUTE,
  RELATIVE
}

interface CollectionListCardProp {
  list: {
    image: string;
    title: string;
    subTile: string;
  }
  lablePosition:LABLEPOSITION
}

function collectionListCardStyle1(props: CollectionListCardProp) {
  return (
    <div className='relative'>
      <div className='w-80 h-[30rem] overflow-hidden'>
        <Image src={props?.list?.image || img3} alt='' width={1000} height={1000} className='w-80 h-full lg:hover:scale-110  transition-all duration-500 object-fill cursor-pointer' />
      </div>
      <div className={`${LABLEPOSITION.ABSOLUTE===props?.lablePosition?'absolute bottom-4 left-1/2 -translate-x-1/2 text-white':'text-center mt-4 mx-3'}`} >
        <h1 className='text-xl font-serif leading-none font-extrabold'>{props?.list?.title.toUpperCase()}</h1>
        <h1 className='text-sm font-sans tracking-widest'>{props?.list?.subTile}</h1>
      </div>
    </div>
  )
}

export default collectionListCardStyle1