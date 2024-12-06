import { img3 } from '@/utils/assets/imgLink'
import Image from 'next/image'
import { LABLEPOSITION } from './collectionListCardStyle1'


interface CollectionListCardStyle3Props {
  list: {
    link: string;
    image: string;
    title: string;
    subTile: string;
} | {
    image: string;
    title: string;
    subTile: string;
    link?: undefined;
};
  index: number
  gridItemNumber: number
  lablePosition?:LABLEPOSITION
}

// 5&7 card grid list
function CollectionListCardStyle2(props: CollectionListCardStyle3Props) {

  return (
    <div>
      {props?.index < props?.gridItemNumber && (
        <a href={props?.list?.link} className={``}>
          <div className='relative '>
            <div className='w-full overflow-hidden'>
              <Image src={props?.list?.image || img3} alt='' width={5000} height={5000} className='w-full h-[33rem] lg:hover:scale-110  transition-all duration-500 object-fill cursor-pointer' />
            </div>

            <div className={`${LABLEPOSITION.ABSOLUTE===props?.lablePosition?'absolute bottom-4 left-1/2 -translate-x-1/2 text-white':'text-center mt-4 mx-3'}`} >
              <h1 className='text-xl font-serif leading-none font-extrabold'>{props?.list?.title.toUpperCase()}</h1>
              <h1 className='text-sm font-sans tracking-widest'>{props?.list?.subTile}</h1>
            </div>
          </div>
        </a>
      )}
    </div>
  )
}

export default CollectionListCardStyle2