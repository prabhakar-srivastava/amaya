import { Accordion } from '@/components/Accordian/accordian'
import Trustedby from '@/components/Banners/trustedby'
import ThumbNailCarousal from '@/components/Carousal/thumbNailCarousal'
import ProductCardStyle2 from '@/components/products/productCardStyle2'
import Section, { TYPE } from '@/components/Section/section'
import SizePicker from '@/components/SizePicker/sizePicker'
import lashaData from '@/utils/JSON/lasha.json'
import { Mail, Phone } from 'lucide-react'
import Image from 'next/image'



async function page({ params }: any) {

    // console.log(useID(params?.productID))
    // const id = await params?.productID
    // const data1 = lashaData?.lasha.filter((res) => res?.uid===id)
    // console.log(id, data1, "lasha");

    const data = lashaData?.lasha?.[7]
    const size = lashaData?.lasha?.[7]?.size


    return (
        <div className=''>
            <Section type={TYPE.CONTAIN} sectionStyle={'!py-0  lg:!px-20'}>
                <div className='lg:grid grid-cols-2'>
                    <div className=''>
                        <ThumbNailCarousal imgList={data?.image} />
                    </div>
                    <div className='px-4 mt-6 lg:mt-0'>
                        <div className='flex gap-2'>
                            {
                                data?.tags?.length > 0 && data?.tags.map((res, index) => {
                                    return <div className='bg-gray-100 px-2 py-1 text-xs w-max' key={index}>
                                        #{res}
                                    </div>
                                })
                            }
                        </div>
                        <div className='text-4xl mt-6 font-serif hover:underline underline-offset-2 cursor-pointer'>
                            <h1>{data?.designer?.toUpperCase()}</h1>
                        </div>
                        <div className=' font-serif tracking-wider text-gray-600 text-lg mt-2'>
                            <h1>{data?.product_name}</h1>
                        </div>
                        <div className='bg-gray-100 px-2 py-1 text-xs w-max mt-2 font-semibold'>
                            <h1>contains : {data?.components} &#9432;</h1>
                        </div>
                        <div className='mt-4'>
                            <h1 className='text-2xl font-semibold'>₹ {data?.mrp} <span className='px-1.5 bottom-1 relative text-sm font-serif border border-black rounded-full'>!</span></h1>
                            <h1 className='text-xs px-0.5 text-gray-600'>(inclusive of all taxes)</h1>
                        </div>
                        <div className='py-4 border-t-2 border-b-2 mt-6'>
                            <h1 className='text-xs font-semibold tracking-wider'>PRICE MATCH PROMISE</h1>
                            <div className='text-xs text-gray-500 flex justify-between mt-1'>
                                <h1 className=''>If you find the product for less we'll match it! <span className='cursor-pointer text-red-500'>(Terms & Condition Applied)</span></h1>
                                <a href='/price-match-promise' className='cursor-pointer text-red-500'>KNOW MORE</a>
                            </div>
                        </div>
                        <div className='mt-4'>
                            <div className='flex gap-8'>
                                <h1>Select your size</h1>
                                <h1 className='text-red-500 cursor-pointer'>size guide?</h1>
                            </div>
                            <div>
                                <SizePicker sizes={size} />
                            </div>
                        </div>
                        <div className='mt-8 flex gap-2 lg:gap-4 justify-between'>
                            <div className='bg-black text-center text-white cursor-pointer py-2 text-xl w-full'>BUY NOW</div>
                            <div className='w-full border border-gray-400 cursor-pointer text-center py-2'>ADD TO CART</div>
                        </div>
                        <div className='py-4 border-t-2 border-b-2 mt-6'>
                            <h1 className='text-xs font-semibold tracking-wider'>PRODUCT DESCRIPTION</h1>
                            <div className='text-xs text-gray-500 flex justify-between mt-1'>
                                <h1 className='leading-relaxed'>{data?.description} </h1>
                                {/* <h1 className='cursor-pointer text-red-500'>KNOW MORE</h1> */}
                            </div>
                            <div className='text-xs mt-4'>
                                <h1 className='text-xs font-semibold tracking-wider leading-loose'>Contains : <span className='text-gray-500 font-normal'>{data?.components}</span></h1>
                                <h1 className='text-xs font-semibold tracking-wider leading-loose'>Fit : <span className='text-gray-500 font-normal'>{data?.fit}</span></h1>
                                <h1 className='text-xs font-semibold tracking-wider leading-loose'>Composition : <span className='text-gray-500 font-normal'>{data?.composition}</span></h1>
                                <h1 className='text-xs font-semibold tracking-wider leading-loose'>Care : <span className='text-gray-500 font-normal'>{data?.care}</span></h1>
                            </div>
                        </div>
                        <div className='py-4'>
                            <h1 className='text-xs font-semibold tracking-wider'>SHIPPING INFORMATION</h1>
                            <div className='text-xs text-gray-500 flex justify-between mt-1'>
                                <h1 className=''>{data?.delivery_time} All custom made orders are not returnable.</h1>
                            </div>

                        </div>
                        <div className='py-4 border-t-2 border-b-2'>
                            <h1 className='text-xs font-semibold tracking-wider'>DISCLAIMER</h1>
                            <div className='text-xs text-gray-500 flex justify-between mt-1'>
                                <h1 className=''>This product will be exclusively handcrafted for you, making the colour/texture/pattern slightly vary from the image shown, due to multiple artisan-led techniques and processes involved.</h1>
                            </div>
                        </div>
                        <div className='py-4 border-b-2'>
                            <h1 className='text-xs font-semibold tracking-wider'>CUSTOMER SUPPORT</h1>
                            <div className='text-xs text-gray-500 flex justify-between mt-1'>
                                <h1 className=''>Need help with orders?</h1>

                            </div>
                            <div className=' flex flex-col lg:flex-row gap-4 lg:gap-6 mt-4'>
                                <div className='flex items-center justify-center gap-2 border hover:bg-black hover:text-white cursor-pointer border-black rounded px-2 py-1 text-sm'>
                                    <Image src="/whatsapp.png" alt="logo" width={100} height={100} className='w-4 h-4' />
                                    <h1 className=''>chat with us</h1>
                                </div>
                                <div className='flex items-center justify-center gap-2 border hover:bg-black hover:text-white cursor-pointer border-black rounded px-2 py-1 text-sm'>
                                    <Phone className='w-3' />
                                    <h1 className=''>+91 | 7766800886</h1>
                                </div>
                                <div className='flex items-center justify-center gap-2 border hover:bg-black hover:text-white cursor-pointer border-black rounded px-2 py-1 text-sm'>
                                    <Mail className='w-3' />
                                    <h1 className=''>Mail us</h1>
                                </div>
                            </div>
                        </div>
                        <div className='py-4'>
                            <h1 className='text-xs font-semibold tracking-wider'>SHARE</h1>
                            <div className='flex gap-4 mt-4'>
                                <a href={''} target='_blank' className='hover:scale-110 transition-all bg-black rounded duration-500 '>
                                    <Image src="/fb.png" alt="logo" width={35} height={35} />
                                </a>
                                <a href={''} target='_blank' className='hover:scale-110 transition-all bg-black rounded duration-500 '>
                                    <Image src="/insta.png" alt="logo" width={35} height={35} />
                                </a>
                                <a href={''} target='_blank' className='hover:scale-110 transition-all bg-black rounded duration-500 '>
                                    <Image src="/yt.png" alt="logo" width={35} height={35} />
                                </a>
                                <a href={''} target='_blank' className='hover:scale-110 transition-all bg-black rounded duration-500 '>
                                    <Image src="/twitter.png" alt="logo" width={35} height={35} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Similar products  */}
                <div className='mt-10 px-4 lg:px-0'>
                    <div className='flex justify-between items-end'>
                        <h1 className=' text-xl lg:text-3xl font-serif'>Similar Products</h1>
                        <a href='' className='hover:underline text-sm lg:text-base underline-offset-2 text-gray-500'>VIEW ALL</a>
                    </div>
                    <div className='mt-6 flex overflow-scroll gap-4'>
                        {lashaData?.lasha?.map((res, index) => {
                            return <div className='' key={index}>
                                <ProductCardStyle2 productImage={res?.image?.[0]} designer={res?.designer} productName={res?.product_name} mpr={res?.mrp} uid={res?.uid} />
                            </div>
                        })}

                    </div>
                </div>
                <div className='my-6'>
                <Trustedby/>
                </div>
                {/* more from designer_name */}
                <div className='mt-10 px-4 lg:px-0'>
                    <div className='flex justify-between items-end'>
                        <h1 className=' text-xl lg:text-3xl font-serif'>More from {data?.designer?.toUpperCase()}</h1>
                        <a href='' className='hover:underline text-sm lg:text-base underline-offset-2 text-gray-500'>VIEW ALL</a>
                    </div>
                    <div className='mt-6 flex overflow-scroll gap-4'>
                        {lashaData?.lasha?.map((res, index) => {
                            return <div className='' key={index}>
                                <ProductCardStyle2 productImage={res?.image?.[0]} designer={res?.designer} productName={res?.product_name} mpr={res?.mrp} uid={res?.uid} />
                            </div>
                        })}

                    </div>
                </div>
            </Section>
            <div className='mt-8'>
                <Accordion />
            </div>
        </div>
    )
}

export default page