import Section, { TYPE } from '@/components/Section/section'
import { ArrowBigDown, CircleCheckBigIcon } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

function page() {
  return (
    <div>
        <Section type={TYPE.CONTAIN} sectionStyle={'mt-8 px-4'}>
            <div className='relative bg-black text-white flex justify-center items-center flex-col px-12 lg:px-28 py-8 gap-6 border-[1rem] border-yellow-600'>
                <Image src={'/gold.png'} alt='' width={100} height={100} className='absolute -top-16' />
                <h1 className=' text-xl lg:text-4xl font-serif mt-14'>100% GUARANTEE</h1>
                <h1 className=' text-2xl lg:text-3xl font-sans tracking-widest text-center'>The Price Match Promise</h1>
                <h1 className='lg:px-32 text-center text-sm text-slate-300 tracking-wider'>We are committed to offering you the best possible product, quality & price!
                Our price-match promise is simple: If you find what you’re looking for on any other online platform for less, we’ll match it</h1>
                <div className='font-serif text-xs'>
                    <h1 className='flex items-center gap-1 mb-0.5'><Image src={'/whatsapp.png'} alt='' width={15} height={15} />Whatsapp us Now</h1>
                    <a href='' className='text-center ml-3 underline underline-offset-1'>+91|7766800886</a>
                </div>

            </div>
            <div className='flex gap-6 items-center my-4 border-2 mt-24 border-gray-300 px-12 py-8'>
                <Image src={'/step-1.svg'} alt='' width={100} height={100}/>
                <div className=''>
                    <h1 className='font-semibold text-2xl mb-2'>STEP 1</h1>
                    <h1 className=''>Find your favourite products on Amayamoda Shop.</h1>
                </div>
            </div>
            <div className='flex items-center w-full justify-center'>
                <ArrowBigDown size={50} strokeWidth={0} fill=' #ca8a04'/>
            </div>
            <div className='flex gap-6 items-center my-4 border-2 border-gray-300 px-12 py-8'>
                <Image src={'/step-2.png'} alt='' width={100} height={100} />
                <div className=''>
                    <h1 className='font-semibold text-2xl mb-2'>STEP 2</h1>
                    <h1 className=''>If you've seen the same product at a better price on any other online platform, take a screenshot. The product should be identical to ours in brand, colour and size.</h1>
                </div>
            </div>
            <div className='flex items-center w-full justify-center'>
                <ArrowBigDown size={50} strokeWidth={0} fill=' #ca8a04'/>
            </div>
            <div className='flex gap-6 items-center mt-4 border-2 border-gray-300 px-12 py-8'>
                <Image src={'/step-3.png'} alt='' width={70} height={50} />
                <div className=''>
                    <h1 className='font-semibold text-2xl mb-2'>STEP 3</h1>
                    <h1 className=''>Send us the screenshot on <u><a href="">WhatsApp (+91|77668 00886)</a></u> and we promise we'll match the price!</h1>
                </div>
            </div>
            <div className='flex items-center w-full justify-center'>
                <ArrowBigDown size={50} strokeWidth={0} fill=' #ca8a04'/>
            </div>
            <div  className='flex items-center w-full justify-center  text-green-500'>
                <CircleCheckBigIcon  size={70} className=''/>
            </div>
        </Section>
    </div>
  )
}

export default page