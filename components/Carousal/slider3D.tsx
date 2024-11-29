"use client"
import React from 'react'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { EffectCoverflow, Navigation, Pagination, Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import ProductCardStyle1 from '../products/productCardStyle1'
import ProductCardStyle2 from '../products/productCardStyle2'

function Slider3D(props: any) {
    return (
        <div>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                loop={true}
                slidesPerView={3}
                autoplay={true}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 200,
                    modifier: 2,
                }}
               
                modules={[EffectCoverflow, Autoplay]}
            >
                {
                    props?.list.map((res:any, index: React.Key | null | undefined) => {
                        return (
                            <SwiperSlide key={index} className=''>
                                <ProductCardStyle2 productImage={res?.image?.[0]} designer={res?.designer} productName={res?.product_name} mpr={res?.mrp} uid={res?.uid} />
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </div>
    )
}

export default Slider3D