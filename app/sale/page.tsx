import { Promobanner } from '@/components/Banners/banner'
import Filters from '@/components/Filters/filters'
import ProductCardStyle1 from '@/components/products/productCardStyle1'
import Section, { TYPE } from '@/components/Section/section'
import { getProductList } from '@/lib/actions/firebaseAction'
import lashaData from '@/utils/JSON/lasha.json'

async function page() {
    const productList = await getProductList()

    return (
        <div>
            <Section type={TYPE.CONTAIN} sectionStyle={'!py-0'}>
                <h1 className='text-gray-500 text-xl font-sans mb-4'> <span className='font-serif text-3xl tracking-wider text-black'>Grab Amazing Offers&nbsp;</span>- Showing {productList?.length} Styles</h1>
                <div className='h-64 overflow-hidden'>
                    <Promobanner />
                </div>
                <div className=' relative grid grid-cols-6 gap-5 my-14 '>
                    <div className='col-span-1 sticky top-28 h-max '>
                        <Filters />
                    </div>
                    <div className='col-span-5'>
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

                        <div className='grid grid-cols-4 gap-4  m-auto justify-evenly'>
                            {(productList || lashaData?.lasha).map((res: any, index: number) => {
                                return <div className='mb-6 ani' key={index}>
                                    <ProductCardStyle1 productImage={res?.image?.[0]} designer={res?.designer} productName={res?.product_name} mpr={res?.mrp} uid={res?.id} />
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