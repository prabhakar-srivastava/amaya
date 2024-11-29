import React from 'react'
import Section, { TYPE } from '../Section/section'
import Image from 'next/image'
import { lasha, affroz, gulabo, jatin, isadaa,kiran,astha } from '@/utils/assets/imgLink'

function Trustedby() {
    return (
        <Section type={TYPE.CONTAIN} sectionStyle={'px-4 lg:px-0'}>
            <div className='flex  flex-col justify-center items-center gap-6'>
                <div className=''>
                    <Image src={'/amayalogo.png'} alt='' width={1000} height={1000} className='w-60 h-16' />
                    <h1  className='text-center text-2xl font-serif my-4'>Trusted By</h1>
                </div>
                <div className=' flex flex-wrap  justify-between max-w-[1300px]'>
                    <Image src={lasha} alt='' width={500} height={500}  className='w-24 lg:w-32 h-14 mx-2'/>
                    <Image src={jatin} alt='' width={500} height={500}  className='w-24 lg:w-32 h-14 mx-2'/>
                    <Image src={gulabo} alt='' width={500} height={500} className='w-24 lg:w-32 h-14 mx-2' />
                    <Image src={affroz} alt='' width={500} height={500} className='w-24 lg:w-32 h-14 mx-2' />
                    <Image src={isadaa} alt='' width={500} height={500} className='w-24 lg:w-32 h-14 mx-2' />
                    <Image src={kiran} alt='' width={500} height={500} className='w-24 lg:w-32 h-14 mx-2' />
                    <Image src={astha} alt='' width={500} height={100} className='w-24 lg:w-32 h-14 mx-2' />
                </div>
            </div>
        </Section>
    )
}

export default Trustedby