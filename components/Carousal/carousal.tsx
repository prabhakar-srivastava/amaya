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

function Carousal() {
    return (
        <Section type={TYPE.CONTAIN} sectionStyle={'!py-0'}>
            <div className='transition-all'>
                <Swiper modules={[Navigation, Pagination,Autoplay]} autoplay={true} pagination={{ clickable: true }} navigation={true}
                 >
                    <SwiperSlide><Image src={'/banner1.png'} alt={''} width={1000} height={1000}  className='w-full h-[30rem]'/></SwiperSlide>
                    <SwiperSlide><Image src={'/banner2.png'} alt={''} width={1000} height={1000}  className='w-full h-[30rem]'/></SwiperSlide>
                    <SwiperSlide><Image src={'/banner3.png'} alt={''} width={1000} height={100}  className='w-full h-[30rem]'/></SwiperSlide>

                </Swiper>
            </div>
        </Section>

    )
}

export default Carousal