import { Promobanner } from '@/components/Banners/banner'
import Carousal from '@/components/Carousal/carousal'
import Category from '@/components/Category/category'
import CollectionList, { CARDSTYLE } from '@/components/Collections/collectionList'
import { LABLEPOSITION } from '@/components/Collections/collectionListCardStyle1'
import React from 'react'
import tag from '@/utils/JSON/collection.json'

function page() {
    return (
        <div>
            <Carousal />
            <Category raduis={false} padding={false} />
            <CollectionList collections={tag.new} cardStyle={CARDSTYLE.STYLE2} lablePosition={LABLEPOSITION.ABSOLUTE} />

            <Promobanner />
        </div>
    )
}

export default page