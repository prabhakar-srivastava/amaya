"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import Carousal from './carousal'
import ReactImageMagnify from 'react-image-magnify'
// import ReactImageMagnify from 'react-image-magnify';

function ThumbNailCarousal(props: { imgList: string[] }) {
    const [active, setActive] = useState<number>(0)
    const [activeImage, setActiveImage] = useState<string>()
    

    return (
        props?.imgList?.length > 0 && (
            <div className='flex flex-col-reverse lg:flex-row gap-3'>
                {/* image option picker */}
                <div className='hidden transition-all scroll-m-2 lg:flex lg:flex-col gap-3 mx-4 lg:mx-0 overflow-scroll lg:h-[500px]'>
                    {props?.imgList?.map((res, index) => {
                        return <div className={`${active === index ? 'border-2 border-black ' : ''}w-max h-max`} key={index}
                            onClick={() => {
                                setActive(index)
                                setActiveImage(res)
                            }}
                        >
                            <Image src={res} alt='' width={500} height={500} className='w-16' />
                        </div>
                    })}
                </div>

                {/* selected image  */}
                <div className='hidden lg:block'>
                    {/* <Image src={!activeImage?.length ? props?.imgList?.[0] : activeImage} alt='' width={15000} height={15000} className='w-full h-[63vh] lg:h-[80vh]' /> */}
                    <ReactImageMagnify {...{
                        smallImage: {
                            alt: 'Wristwatch by Ted Baker London',
                            isFluidWidth:false,
                            width:425,
                            height:600,
                            src: !activeImage?.length ? props?.imgList?.[0] : activeImage
                        },
                        largeImage: {
                            src: !activeImage?.length ? props?.imgList?.[0] : activeImage,
                            width: 3600,
                            height: 4000,
                            
                        },
                        enlargedImagePosition: 'beside',
                        lensstyle: { backgroundColor: 'rgba(0,0,0,.6)' ,height:'5rem' , width:'5rem' },
                    }} />
                </div>
                {/* mobile view */}
                <div className='block lg:hidden'>
                    <Carousal imgList={props?.imgList} imgHeight='!h-[35rem]' />
                </div>
            </div>
        )
    )
}

export default ThumbNailCarousal