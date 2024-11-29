"use client"
import Image from 'next/image'
import React, { useState } from 'react'

function ThumbNailCarousal(props: { imgList: string[] }) {
    const [active, setActive] = useState<number>(0)
    const [activeImage, setActiveImage]=useState<string>()
    return (
        props?.imgList?.length > 0 && (
            <div className='flex flex-col-reverse lg:flex-row gap-3'>
                {/* image option picker */}
                <div className='flex lg:flex-col gap-3 mx-4 lg:mx-0 overflow-scroll lg:h-max'>
                    {props?.imgList?.map((res, index)=>{
                        return <div className={`${active===index?'border-2 border-black ':''}w-max h-max`} key={index}
                            onClick={()=>{
                                setActive(index)
                                setActiveImage(res)
                            }}
                        >
                            <Image src={res} alt='' width={500} height={500} className='w-16'/>
                        </div>
                    })}
                </div>

                {/* selected image  */}
                <div className=''>
                    <Image src={!activeImage?.length? props?.imgList?.[0]:activeImage} alt='' width={15000} height={15000} className='w-full h-[63vh] lg:h-[80vh]' />
                </div>
            </div>
        )
    )
}

export default ThumbNailCarousal