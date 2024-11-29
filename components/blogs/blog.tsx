import React from 'react'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

const newsData = [
    {
        img: "https://res.cloudinary.com/deaahfa0r/image/upload/v1724394492/zeera-flavour_nny5yq.png",
        title: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        publishDate: "22 august, 2024",
        link: 'https://www.google.com/'
    },
    {
        img: 'https://res.cloudinary.com/deaahfa0r/image/upload/v1724394492/zeera-flavour_nny5yq.png',
        title: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        publishDate: "22 august, 2024",
        link: 'https://www.google.com/'
    },
    {
        img: 'https://res.cloudinary.com/deaahfa0r/image/upload/v1724394492/zeera-flavour_nny5yq.png',
        title: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        publishDate: "22 august, 2024",
        link: 'https://www.google.com/'
    },
    {
        img: 'https://res.cloudinary.com/deaahfa0r/image/upload/v1724394492/zeera-flavour_nny5yq.png',
        title: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        publishDate: "22 august, 2024",
        link: 'https://www.google.com/'
    },
]

function BrandNews() {
    return (
        <div className=' lg:max-w-[1080px] m-auto mb-10 '>
            <h1 className=' text-center text-5xl font-serif leading-none'><br /> Blogs<br /><small className='font-sans text-base font-semibold'>New Designs</small> </h1>
            <div className='lg:flex lg:gap-5 justify-center'>
                <div className=''>
                    <a href={newsData[0].link} target='_blank' className=' justify-between  hover:text-red-500'>
                        <div className=''>
                            <div className=''>
                                <Image
                                    src={newsData[0].img}
                                    alt="product"
                                    width={100}
                                    height={100}
                                    className=" lg:w-full h-80 rounded object-cover"
                                />
                            </div>
                            <div className='flex justify-between mt-2'>
                                <div className='flex flex-col justify-between'>
                                    <div className=''>
                                        <h1 className=''>{newsData[0].title.substring(0, 30)}...</h1>
                                        <h1 className='text-xs'>{newsData[0].description.substring(0, 60)}...</h1>
                                    </div>
                                    <div className='text-sm'>
                                        <h1>{newsData[0].publishDate}</h1>
                                    </div>
                                </div>
                                <div className='flex justify-center items-center'>
                                    <ArrowRight />
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
                <div className='flex flex-col justify-between'>
                    {
                        newsData.map((res, index, arr) => {
                            return index !== 0 && <div key={index}>
                                <a href={res.link} target='_blank' className='p-2 flex gap-3  mb-2 justify-between rounded-sm hover:text-red-500'>
                                    <div className='flex gap-5'>
                                        <div className=''>
                                            <Image
                                                src={res.img}
                                                alt="product"
                                                width={100}
                                                height={70}
                                                className=" lg:w-24 h-full rounded object-cover"
                                            />
                                        </div>
                                        <div className='flex flex-col justify-between'>
                                            <div className=''>
                                                <h1 className=''>{res.title.substring(0, 30)}...</h1>
                                                <h1 className='text-xs'>{res.description.substring(0, 60)}...</h1>
                                            </div>
                                            <div className='text-sm'>
                                                <h1>{res.publishDate}</h1>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='flex justify-center items-center'>
                                        <ArrowRight />
                                    </div>
                                </a>

                            </div>
                        })
                    }
                </div>
            </div>

        </div>
    )
}

export default BrandNews