import Carousal from '@/components/Carousal/carousal'
import CollectionList, { CARDSTYLE } from '@/components/Collections/collectionList'
import { LABLEPOSITION } from '@/components/Collections/collectionListCardStyle1'
import React from 'react'
import tag from '@/utils/JSON/collection.json';

function page() {
    return (
        <div>
            <Carousal />

      <CollectionList collections={tag.new} cardStyle={CARDSTYLE.STYLE1} lablePosition={LABLEPOSITION.ABSOLUTE} />


        </div>
    )
}

export default page