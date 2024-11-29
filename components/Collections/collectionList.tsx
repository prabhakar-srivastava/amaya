import Section, { TYPE } from '../Section/section'
import CollectionListCardStyle1, { LABLEPOSITION } from './collectionListCardStyle1'
import CollectionListCardStyle2 from './collectionListCardStyle2';

export enum CARDSTYLE {
    STYLE1,
    STYLE2,
    STYLE3,
    STYLE4
}

interface CollectionListProp {
    collections: {
        title: string;
        items: {
            image: string;
            title: string;
            subTile: string;
        }[];
    }
    cardStyle: CARDSTYLE
    lablePosition: LABLEPOSITION
}

function CollectionList(props: CollectionListProp) {

    return (
        <div>
            <Section type={TYPE.CONTAIN} sectionStyle={undefined}>
                <div className='flex justify-between items-end'>
                    <h1 className='text-3xl font-serif'>{props?.collections.title}</h1>
                    <a href='' className='hover:underline underline-offset-2 text-gray-500'>VIEW ALL</a>
                </div>
                <div className={`mt-6 ${(CARDSTYLE.STYLE3 === props?.cardStyle || CARDSTYLE.STYLE4 === props?.cardStyle) ? CARDSTYLE.STYLE3 != props?.cardStyle ? 'grid grid-cols-4 gap-4' : ' grid grid-cols-3 gap-4' : 'flex gap-4 overflow-scroll'} `}>
                    {props?.collections?.items.length > 0 && props?.collections?.items.map((res, index, arr) => {
                        return <div key={index} className={`${((CARDSTYLE.STYLE3 === props?.cardStyle && index === 0) || (CARDSTYLE.STYLE4 === props?.cardStyle && index === 6)) ? 'w-full col-span-2' : (CARDSTYLE.STYLE1 === props?.cardStyle || CARDSTYLE.STYLE2 === props?.cardStyle) ? 'w-80' : 'w-full'}`}>
                            {(CARDSTYLE.STYLE1 === props?.cardStyle || CARDSTYLE.STYLE2 === props?.cardStyle) && <CollectionListCardStyle1 list={res} lablePosition={props?.lablePosition} />}
                            {(CARDSTYLE.STYLE3 === props?.cardStyle || CARDSTYLE.STYLE4 === props?.cardStyle) &&
                                <CollectionListCardStyle2 list={res} index={index} gridItemNumber={CARDSTYLE.STYLE3 !== props?.cardStyle ? 7 : 5} lablePosition={props?.lablePosition} />
                            }

                        </div>
                    })}
                </div>
            </Section>
        </div>
    )
}

export default CollectionList