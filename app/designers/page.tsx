import { Promobanner } from '@/components/Banners/banner'
import Section, { TYPE } from '@/components/Section/section'
import React from 'react'

function page() {
  return (
    <div>
      <Section type={TYPE.CONTAIN} sectionStyle={'!py-0'}>
        <Promobanner />
        <h1 className='font-serif text-4xl '>Designer Collections</h1>
        <div className='h-0.5 my-4 bg-gray-300 w-full' />
        <div className='mt-8 flex gap-24'>
          <div className=''>
            {['all','woman','man','kids'].map((res,index)=>{
              return <div key={index} className={`text-2xl tracking-wide ${res==='all'?'':'text-gray-500'} font-serif mb-4`}>
                {res.toUpperCase()}
              </div>
            })}
          </div>
          <div className=''>
            {/* alhpabed wise */}
            <h1 className='font-serif text-3xl mb-4'>L</h1>
            {['Lasha'].map((res,index)=>{
              return <a href={`/designers/${res}`} key={index} className='font-sans tracking-wider text-xl hover:underline underline-offset-2 cursor-pointer'>
                {res}
              </a>
            })}
          </div>
        </div>

      </Section>
    </div>
  )
}

export default page