import { Promobanner } from '@/components/Banners/banner'
import Filters from '@/components/Filters/filters'
import ProductCardStyle2 from '@/components/products/productCardStyle2'
import Section,{ TYPE } from '@/components/Section/section'
import { getProductList } from '@/lib/actions/firebaseAction'
import lashaData from '@/utils/JSON/lasha.json'
import React from 'react'

async function page() {
  const productList= await getProductList()
  return (
    <div>
       <Section type={TYPE.CONTAIN} sectionStyle={'!py-0'}>
       {/* <span className='font-serif text-3xl tracking-wider text-black'>Grab Amazing Offers&nbsp;</span>- */}
        <h1 className='text-gray-500 text-xl font-sans mb-4'>  Showing {lashaData?.lasha.length} Styles</h1>
        <div className='h-64 overflow-hidden'>
          <Promobanner />
        </div>
        <div className='flex gap-28 '>
          <Filters />
          <div className=''>

            <div className='flex flex-wrap gap-12 my-20 m-auto justify-evenly'>
              {(productList||lashaData?.lasha).map((res:any, index:number) => {
                return <div className='' key={index}>
                  <ProductCardStyle2 productImage={res?.image?.[0]} designer={res?.designer} productName={res?.product_name} mpr={res?.mrp} uid={res?.id} />
                </div>
              })}
            </div>
          </div>
        </div>
      </Section>
    </div>
  )
}

export default page