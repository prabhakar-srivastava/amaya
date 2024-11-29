import { Mail, MessageSquareMore, Phone, Shield, Shirt } from 'lucide-react'
import React from 'react'
import Image from 'next/image'
import footerData from '@/utils/JSON/footer.json'
import GetCouponCode from './getCouponCode'

function Footer() {
    return (
        <div className='font-sans'>
            
            <div className='lg:max-w-[1280px] m-auto px-6 flex justify-evenly gap-6 lg:gap-0 items-center '>

                <div className='flex gap-2 lg:gap-7 items-center text-xs lg:text-base'>
                    <MessageSquareMore className='h-28 w-7' />
                    <h1>24X7<br />CUSTOMER SUPPORT</h1>
                </div>
                <div className='flex gap-2 lg:gap-7 items-center text-xs lg:text-base'>
                    <Shirt className='h-28 w-7' />
                    <h1>500+<br />DESIGNS</h1>
                </div>
                <div className='flex gap-2 lg:gap-7 items-center text-xs lg:text-base'>
                    <Shield className='h-28 w-7' />
                    <h1>SECURE<br />PAYMENTS</h1>
                </div>
            </div>
            <div className=' text-white'>
                <div className='bg-black '>
                    <div className=' lg:max-w-[1280px] m-auto px-6 flex flex-col lg:flex-row justify-evenly items-center'>
                        <div className='py-8'>
                            <h1 className='text-sm'>COMPLETELY SAFE AND SECURE PAYMENT METHOD</h1>
                            <h1 className='text-gray-400 text-xs mt-2'>We accept Netbanking, all major credit cards. We also accept orders with cash payment</h1>
                            <div className=' flex gap-4 mt-8'>
                                <div className='lg:w-24 lg:h-10 flex items-center justify-center bg-gray-800 px-2 py-1 rounded-md'>
                                    <Image src="/visa.png" alt="logo" width={130} height={100} />
                                </div>
                                <div className='lg:w-24 lg:h-10 flex items-center justify-center bg-gray-800 px-2 py-1 rounded-md'>
                                    <Image src="/master.png" alt="logo" width={130} height={10} />

                                </div>
                                <div className='lg:w-24 lg:h-10 flex items-center justify-center bg-gray-800 px-2 py-1 rounded-md'>

                                    <Image src="/paytm.png" alt="logo" width={130} height={100} />
                                </div>
                                <div className='lg:w-24 lg:h-10 flex items-center justify-center bg-gray-800 px-2 py-1 rounded-md'>
                                    <Image src="/gpay.png" alt="logo" width={130} height={100} />

                                </div>
                            </div>
                        </div>
                        
                        <div className='mb-6 lg:mb-0'>
                            <h1 className='mb-4 text-gray-400 text-xs mt-1'>Sign up to get exclusive style tips, new arrival updates and a special discount code.</h1>
                            <div className=''>
                                <GetCouponCode />
                            </div>

                        </div>
                    </div>
                    <div className='bg-gray-950 py-5'>
                        <div className='lg:max-w-[1280px] m-auto px-6 py-4 flex flex-col lg:flex-row justify-around'>
                            <div className=' grid grid-cols-2 lg:grid-cols-3 gap-6'>
                                <div className=''>
                                    <h1 className='underline underline-offset-2  text-sm font-serif'>{footerData.links.title.toUpperCase()}</h1>
                                    <div className='mt-6'>
                                        {footerData.links.list.map((res: { links: string | undefined; name: string }, index: React.Key | null | undefined) => {
                                            return <div key={index}>
                                                <a href={res.links}>
                                                    <h1 className=' mb-5  hover:underline underline-offset-2 transition-all duration-300 text-xs '>{res.name.toUpperCase()}</h1>
                                                </a>
                                            </div>
                                        })}
                                    </div>
                                </div>
                                <div className=''>
                                    <h1 className='underline underline-offset-2 text-sm font-serif'>{footerData.searches.title.toUpperCase()}</h1>
                                    <div className='mt-6'>
                                        {footerData.searches.list.map((res: { link: string | undefined; name: string }, index: React.Key | null | undefined) => {
                                            return <div key={index}>
                                                <a href={res.link}>
                                                    <h1 className=' mb-5  hover:underline underline-offset-2 transition-all duration-300 text-xs '>{res.name.toUpperCase()}</h1>
                                                </a>
                                            </div>
                                        })}
                                    </div>
                                </div>
                                <div className=''>
                                    <h1 className='underline underline-offset-2 text-sm font-serif'>{footerData.help.title.toUpperCase()}</h1>
                                    <div className='mt-6'>
                                        {footerData.help.list.map((res: { link: string | undefined; name: string }, index: React.Key | null | undefined) => {
                                            return <div key={index}>
                                                <a href={res.link}>
                                                    <h1 className=' mb-5  hover:underline underline-offset-2 transition-all duration-300 text-xs '>{res.name.toUpperCase()}</h1>
                                                </a>
                                            </div>
                                        })}
                                    </div>
                                </div>
                            </div>
                            <div className='h-[1px] bg-gray-600 my-2 block lg:hidden' />
                            <div className='flex justify-center items-baseline gap-6 lg:block lg:items-start'>
                                <div className=''>
                                    <h2 className='underline underline-offset-2 text-sm font-serif'>SOCIAL MEDIA</h2>
                                    <div className='flex gap-3 mt-4'>
                                        <a href={footerData.socials.facebook} className='hover:scale-110 transition-all duration-500 '>
                                            <Image src="/fb.png" alt="logo" width={30} height={30} />

                                        </a>
                                        <a href={footerData.socials.instagram} className='hover:scale-110 transition-all duration-500 '>
                                            <Image src="/insta.png" alt="logo" width={30} height={30} />

                                        </a>
                                        <a href={footerData.socials.youtube} className='hover:scale-110 transition-all duration-500 '>
                                            <Image src="/yt.png" alt="logo" width={30} height={30} />

                                        </a>
                                        <a href={footerData.socials.twitter} className='hover:scale-110 transition-all duration-500 '>
                                            <Image src="/twitter.png" alt="logo" width={30} height={30} />

                                        </a>
                                    </div>

                                </div>
                                <div className='mt-8'>
                                    <h1 className='underline underline-offset-2 text-sm font-serif'>CONTACT US</h1>
                                    <div className='text-xs mt-6'>
                                        <div className='flex justify-start items-center gap-2 mb-4'>
                                            <Phone className='w-3' />
                                            <a href="">+91 {footerData.contacts.call}</a>
                                        </div>
                                        <div className='flex justify-start items-center gap-2 mb-4'>
                                            <Image src="/whatsapp.png" alt="logo" width={15} height={15} />
                                            <a href="">whatsapp us on +91 {footerData.contacts.whatsapp}</a>
                                        </div>
                                        <div className='flex justify-start items-center gap-2'>
                                            <Mail className='w-3' />
                                            <a href="">{footerData.contacts.mail}</a>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className='bg-gray-950 '>
                <div className='lg:max-w-[1280px] m-auto px-6 text-center w-full'>
                    <div className='h-[1px] bg-gray-600 ' />
                    <div className=' text-gray-400 py-8 text-sm'>
                        Copyright © 2024 Amayamoda <br/>
                        All Right are reserved
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Footer