import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import Section, { TYPE } from '../Section/section'
import { img1 } from '@/utils/assets/imgLink'

const categoryData = [
    {
        imgage: "https://res.cloudinary.com/deaahfa0r/image/upload/v1724394492/zeera-flavour_nny5yq.png",
        name: "new",
        link: "/"
    },
    {
        imgage: "https://res.cloudinary.com/deaahfa0r/image/upload/v1724394492/zeera-flavour_nny5yq.png",
        name: "new",
        link: "/"
    },
    {
        imgage: "https://res.cloudinary.com/deaahfa0r/image/upload/v1724394492/zeera-flavour_nny5yq.png",
        name: "new",
        link: "/"
    },
    {
        imgage: "https://res.cloudinary.com/deaahfa0r/image/upload/v1724394492/zeera-flavour_nny5yq.png",
        name: "new",
        link: "/"
    },
    {
        imgage: "https://res.cloudinary.com/deaahfa0r/image/upload/v1724394492/zeera-flavour_nny5yq.png",
        name: "new",
        link: "/"
    },
    {
        imgage: "https://res.cloudinary.com/deaahfa0r/image/upload/v1724394492/zeera-flavour_nny5yq.png",
        name: "new",
        link: "/"
    },
    {
        imgage: "https://res.cloudinary.com/deaahfa0r/image/upload/v1724394492/zeera-flavour_nny5yq.png",
        name: "new",
        link: "/"
    },
    {
        imgage: "https://res.cloudinary.com/deaahfa0r/image/upload/v1724394492/zeera-flavour_nny5yq.png",
        name: "new",
        link: "/"
    },
    {
        imgage: "https://res.cloudinary.com/deaahfa0r/image/upload/v1724394492/zeera-flavour_nny5yq.png",
        name: "new",
        link: "/"
    },
    {
        imgage: "https://res.cloudinary.com/deaahfa0r/image/upload/v1724394492/zeera-flavour_nny5yq.png",
        name: "new",
        link: "/"
    },
    {
        imgage: "https://res.cloudinary.com/deaahfa0r/image/upload/v1724394492/zeera-flavour_nny5yq.png",
        name: "new",
        link: "/"
    },
    {
        imgage: "https://res.cloudinary.com/deaahfa0r/image/upload/v1724394492/zeera-flavour_nny5yq.png",
        name: "new",
        link: "/"
    },
    {
        imgage: "https://res.cloudinary.com/deaahfa0r/image/upload/v1724394492/zeera-flavour_nny5yq.png",
        name: "new",
        link: "/"
    },
    {
        imgage: "https://res.cloudinary.com/deaahfa0r/image/upload/v1724394492/zeera-flavour_nny5yq.png",
        name: "new",
        link: "/"
    },
    {
        imgage: "https://res.cloudinary.com/deaahfa0r/image/upload/v1724394492/zeera-flavour_nny5yq.png",
        name: "new",
        link: "/"
    },
    {
        imgage: "https://res.cloudinary.com/deaahfa0r/image/upload/v1724394492/zeera-flavour_nny5yq.png",
        name: "new",
        link: "/"
    },
    {
        imgage: "https://res.cloudinary.com/deaahfa0r/image/upload/v1724394492/zeera-flavour_nny5yq.png",
        name: "new",
        link: "/"
    },
    {
        imgage: "https://res.cloudinary.com/deaahfa0r/image/upload/v1724394492/zeera-flavour_nny5yq.png",
        name: "new",
        link: "/"
    },
    {
        imgage: "https://res.cloudinary.com/deaahfa0r/image/upload/v1724394492/zeera-flavour_nny5yq.png",
        name: "new",
        link: "/"
    },
    {
        imgage: "https://res.cloudinary.com/deaahfa0r/image/upload/v1724394492/zeera-flavour_nny5yq.png",
        name: "new",
        link: "/"
    },
    {
        imgage: "https://res.cloudinary.com/deaahfa0r/image/upload/v1724394492/zeera-flavour_nny5yq.png",
        name: "new",
        link: "/"
    },
    {
        imgage: "https://res.cloudinary.com/deaahfa0r/image/upload/v1724394492/zeera-flavour_nny5yq.png",
        name: "new",
        link: "/"
    },
    {
        imgage: "https://res.cloudinary.com/deaahfa0r/image/upload/v1724394492/zeera-flavour_nny5yq.png",
        name: "new",
        link: "/"
    },
    {
        imgage: "https://res.cloudinary.com/deaahfa0r/image/upload/v1724394492/zeera-flavour_nny5yq.png",
        name: "new",
        link: "/"
    },
    {
        imgage: "https://res.cloudinary.com/deaahfa0r/image/upload/v1724394492/zeera-flavour_nny5yq.png",
        name: "new",
        link: "/"
    },
]
interface CategoryProps{
    raduis:boolean
    padding:boolean
}

function Category(props:CategoryProps) {
    return (
        <Section sectionStyle={`${props?.padding ? '!py-0':''}`} type={TYPE.CONTAIN}>
             <div className='flex gap-6 lg:gap-8 overflow-scroll my-6 '>
            {categoryData.map((res, index) => {
                return <div key={index} className=''>
                    <Link href={res.link}>
                        <div className='w-[6rem] lg:w-[10rem]'>
                            <Image
                                src={img1}
                                alt="product"
                                width={1000}
                                height={1000}
                                className= {`h-[6rem] w-[6rem] lg:w-[10rem]  ${props?.raduis ? 'rounded-full lg:h-[10rem]':'lg:h-[15rem]'}  object-fill`}
                            />
                        </div>

                        <h1 className='text-center text-xs lg:text-sm'>{res.name}</h1>
                    </Link>
                </div>
            })}
        </div>
        </Section>
       
    )
}

export default Category