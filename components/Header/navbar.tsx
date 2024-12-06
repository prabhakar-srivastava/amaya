import { Heart, Search, ShoppingCart, User } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import Section, { TYPE } from '../Section/section'
import Hamburger from './hamburger'

export  const nav = [
  {
    name: 'New',
    link: '/new'
  },
  {
    name: 'Amaya Exclusive',
    link: '/amaya-exclusives'
  },
  {
    name: 'Shop',
    link: '/shop'
  },
  {
    name: 'Woman',
    link: '/collections/woman'
  },
  {
    name: 'Man',
    link: '/collections/man'
  },
  // {
  //   name: 'Kids',
  //   link: '/kids'
  // },
  {
    name: 'Sale',
    link: '/sale'
  },
  {
    name: 'Ready to Ship',
    link: '/ready-to-ship'
  },
  {
    name: 'Designers',
    link: '/designers'
  },
  {
    name: 'Accessories',
    link: '/'
  },
  {
    name: 'Weddings',
    link: '/'
  },
  {
    name: 'Sarees',
    link: '/shop?category=sarees'
  },
  {
    name: 'Exclusive',
    link: '/shop?sort=latest'
  },
  {
    name: 'Popular',
    link: '/shop?sort=popular'
  },
]

function Navbar() {
  return (
    <div className='py-2 px-4 lg:px-0 bg-white sticky top-0 z-10  shadow-lg shadow-black-400/20 shadow-b-2 shadow-r-[3px] -shadow-spread-2'>
      <Section sectionStyle={'!py-0'} type={TYPE.CONTAIN}>
        <div>
          <div className=' flex justify-between items-center'>
            <div className='flex gap-2 items-center'>
              <div className=''>
                
                <Hamburger />
              </div>
              <Link href={'/'} className=''>
                <Image src="/amayalogo.png" alt="logo" width={200} height={150} className='w-36 h-10 lg:w-44 lg:h-10' />
              </Link>
            </div>

            <div className='flex gap-4 lg:gap-6 items-center'>
              {/* search-bar---- */}
              <div className='lg:border lg:p-1 lg:border-[#b8b8b8] rounded-full gap-3 flex justify-between w-max lg:w-96'>
                <input type="text" className="rounded-full hidden lg:block px-4 w-full focus:outline-none" placeholder='search for products,brand and more...' />
                <div className='lg:bg-black cursor-pointer text-black lg:text-white px-2 py-1 rounded-full flex gap-1'><Search /></div>
              </div>
              <div className='cursor-pointer '>
                <Heart fill='white' strokeWidth={2} />
              </div>

              {/* ---cart---- */}
              <div className='cursor-pointer'>
                <ShoppingCart />
              </div>
              <div className='cursor-pointer p-1 hidden lg:block rounded-full bg-foreground'>
                <User />
              </div>
            </div>
          </div>

          <div className='hidden lg:flex justify-between mx-6 mt-3'>
            {nav.map((res, index) => {
              return <Link href={res.link} className='cursor-pointer' key={index}>
                <h1 className='text-sm hover:text-red-500'>{res.name}</h1>
              </Link>
            })}
          </div>
        </div>
      </Section>
    </div>
  )
}

export default Navbar