
import Slider3D from '../Carousal/slider3D';
import Section, { TYPE } from '../Section/section';


interface ProductBannerProps {
    tile: string;
    description: string;
    actionLable: string;
    products: any[];
    actionLink:string
}

function ProductBanner(props: ProductBannerProps) {
    return (
        <Section type={TYPE.FULL} sectionStyle={'!py-2 bg-amber-800 bg-opacity-70 lg:px-4'}>
            <Section type={TYPE.CONTAIN} sectionStyle={undefined}>
                <div className='flex justify-between items-center text-white'>
                    <div className=''>
                        <h1 className='font-serif text-5xl leading-relaxed'>Best Designs By <br/>LASHA</h1>
                        <h1 className='my-12 max-w-96 text-sm'>{props?.description}</h1>
                        <a href={props?.actionLink} className='mt-5 border text-lg px-4 py-2 border-white hover:bg-black hover:border-black'>{props?.actionLable}</a>
                    </div>
                    <div className=' max-w-[55rem]'>
                        <Slider3D list={props?.products}/>
                    </div>
                </div>
            </Section>

        </Section >
    )
}

export default ProductBanner