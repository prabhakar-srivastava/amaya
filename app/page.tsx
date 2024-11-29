import { Accordion } from "@/components/Accordian/accordian";
import { Promobanner } from "@/components/Banners/banner";
import Trustedby from "@/components/Banners/trustedby";
import BrandNews from "@/components/blogs/blog";
import Carousal from "@/components/Carousal/carousal";
import Category from "@/components/Category/category";
import CollectionList, { CARDSTYLE } from "@/components/Collections/collectionList";
import { LABLEPOSITION } from "@/components/Collections/collectionListCardStyle1";
import ProductBanner from "@/components/products/productBanner";
import tag from '@/utils/JSON/collection.json';
import lashaData from '@/utils/JSON/lasha.json'


export default function Home() {
  return (
    <div className="">
      <Carousal />
      <Category raduis={true} padding={true} />
      <Promobanner />
      <CollectionList collections={tag.new} cardStyle={CARDSTYLE.STYLE1} lablePosition={LABLEPOSITION.ABSOLUTE} />
      <CollectionList collections={tag.exclusive} cardStyle={CARDSTYLE.STYLE2} lablePosition={LABLEPOSITION.RELATIVE} />
      <ProductBanner tile={""} description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum is simply dummy text of the printing and typesetting industry"} actionLable={""} products={lashaData?.lasha} />
      <CollectionList collections={tag.Occasion} cardStyle={CARDSTYLE.STYLE4} lablePosition={LABLEPOSITION.ABSOLUTE} />
      <Accordion />
      <CollectionList collections={tag.Occasion} cardStyle={CARDSTYLE.STYLE3} lablePosition={LABLEPOSITION.ABSOLUTE} />
      <Trustedby />
      <BrandNews />
    </div>
  );
}
