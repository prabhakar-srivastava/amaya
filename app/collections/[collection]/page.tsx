import { Promobanner } from '@/components/Banners/banner'
import Carousal from '@/components/Carousal/carousal'
import CollectionList, { CARDSTYLE } from '@/components/Collections/collectionList'
import { LABLEPOSITION } from '@/components/Collections/collectionListCardStyle1'
import Filters from '@/components/Filters/filters'
import ProductCardStyle2 from '@/components/products/productCardStyle2'
import Section,{ TYPE } from '@/components/Section/section'
import lashaData from '@/utils/JSON/lasha.json'
import tag from '@/utils/JSON/collection.json';
import React from 'react'

function page() {
  return (
    <div>
      <Carousal />

<CollectionList collections={tag.new} cardStyle={CARDSTYLE.STYLE1} lablePosition={LABLEPOSITION.ABSOLUTE} />
<Section type={TYPE.CONTAIN} sectionStyle={'!py-0'}>
    <div className='h-64 overflow-hidden'>
        <Promobanner />
    </div>
    <h1 className='mt-6 text-gray-500 text-xl font-sans '> <span className='font-serif text-3xl tracking-wider text-black'>Best Designs&nbsp;</span>- Showing {lashaData?.lasha.length} Styles</h1>
    <div className='h-0.5 w-56 bg-gray-300 mb-6' />
    <div className='flex gap-28 '>
        <Filters />
        <div className='relative'>
            {/* <div className='flex absolute right-4 top-0 gap-2 border border-gray-300 px-4 py-1 tracking-wide rounded-md w-max'>
                <h1>sort by : </h1>
                <select name="sort" id="sort" className='focus:outline-none'>
                    <option value="volvo">Select</option>
                    <option value="volvo">popular</option>
                    <option value="saab">latest</option>
                    <option value="opel">high to low</option>
                    <option value="audi">low to high</option>
                </select>
            </div> */}


            <div className='flex flex-wrap gap-12 my-20 m-auto justify-evenly'>
                {lashaData?.lasha?.map((res, index) => {
                    return <div className='' key={index}>
                        <ProductCardStyle2 productImage={res?.image?.[0]} designer={res?.designer} productName={res?.product_name} mpr={res?.mrp} uid={res?.uid} />
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