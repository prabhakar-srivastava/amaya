import Image from 'next/image'
import { ProductCardStyleProps } from './productCardStyle2'
import { ShoppingCart } from 'lucide-react'

function ProductCardStyle1(props: ProductCardStyleProps) {
  // const props = { productName: 'Lime Green Italian Satin Hand Embroidered Cape Set' }
  return (
    <a href={`/products/${props?.uid}`} className=''>
      <div className='bg-white p-2 rounded-xl shadow-black shadow'>
        <div className=''>
          <Image src={props?.productImage} alt='' width={1000} height={1000} className=' w-64 h-96 rounded-xl' />
        </div>
        <div className='mt-1.5'>
          <h1 className='lg:text-base font-serif leading-none lg:leading-none '>
            {props?.designer?.toUpperCase()}
          </h1>
          <h1 className=' text-xs text-gray-500 tracking-wider '>
            {props?.productName?.length || 0 > 35 ? `${props?.productName?.substring(0, 35)}...` : props?.productName}
          </h1>
          <h1 className=' text-sm font-semibold mt-0.5 '>
            {props?.mpr && <>₹ {props?.mpr}</>}
          </h1>
        </div>
        <div className='flex mt-2 justify-between items-center gap-2'>
          <a href="/cart" className='bg-black rounded-md shadow-md w-full text-center text-white font-serif px-4 py-2'>Buy Now</a>
          <a href="/cart" className='bg-gray-100 p-2 rounded-md shadow-md'> <ShoppingCart /></a>
        </div>
      </div>
    </a>
  )
}

export default ProductCardStyle1