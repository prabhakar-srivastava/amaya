"use client"
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css/effect-coverflow'
import { EffectCoverflow, Pagination, Navigation, Autoplay } from 'swiper/modules'
import Image from 'next/image'
import { img3 } from '@/utils/assets/imgLink'

function Slider3D() {
    return (
        <div>Slider<br />
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                loop={true}
                slidesPerView={5}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 100,
                    modifier: 2.5,
                }}
                pagination={{ clickable: true }}
                navigation={true}
                modules={[EffectCoverflow, Pagination, Navigation]}
            >
                <SwiperSlide className='bg-red-300 w-[200px]'>
                    <Image src={img3} alt='' width={200} height={700}/>
                </SwiperSlide>
                <SwiperSlide className='bg-red-300 w-[200px]'>
                    <Image src={img3} alt='' width={200} height={700}/>
                </SwiperSlide>
                <SwiperSlide className='bg-red-300 w-[200px]'>
                    <Image src={img3} alt='' width={200} height={700}/>
                </SwiperSlide>
                <SwiperSlide className='bg-red-300 w-[200px]'>
                    <Image src={img3} alt='' width={200} height={700}/>
                </SwiperSlide>
                <SwiperSlide className='bg-red-300 w-[200px]'>
                    <Image src={img3} alt='' width={200} height={700}/>
                </SwiperSlide>

            </Swiper>
        </div>
    )
}

export default Slider3D