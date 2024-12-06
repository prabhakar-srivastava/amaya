"use client"
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination,Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'
import Section, { TYPE } from '../Section/section'
import Image from 'next/image'
interface CarousalProps{
    imgList?: string[]; 
    imgHeight?:string
}

function Carousal(props:CarousalProps) {
    const localImg=['/banner1.png','/banner2.png','/banner3.png','/banner2.png']
    // console.log(props?.imgList);
    
    return (
        <Section type={TYPE.CONTAIN} sectionStyle={'!py-0'}>
            <div className='transition-all'>
                <Swiper modules={[ Pagination,Autoplay]} autoplay={true} pagination={{ clickable: true }}
                 >
                    {(props?.imgList||localImg).map((res,index)=>{
                        return <SwiperSlide key={index}><Image src={res} alt={''} width={1000} height={1000}  className={`w-full ${props?.imgHeight || 'h-[30rem]'}`}/></SwiperSlide>

                    })}
                    {/* <SwiperSlide><Image src={'/banner2.png'} alt={''} width={1000} height={1000}  className='w-full h-[30rem]'/></SwiperSlide>
                    <SwiperSlide><Image src={'/banner3.png'} alt={''} width={1000} height={100}  className='w-full h-[30rem]'/></SwiperSlide> */}

                </Swiper>
            </div>
        </Section>

    )
}

export default Carousal