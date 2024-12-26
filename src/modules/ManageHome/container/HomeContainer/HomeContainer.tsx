import { AppLayout } from "@muc/layout";
import {
  CardSlider,
  TopSellingProduct,
  VoucherSlider,
} from "../../components/components";
import { BrowseByCategory, MusicExperience, OurFeature } from "@muc/components";
import { EXPLORE_OUR_PRODUCTS, PRODUCT_CARD } from "@muc/constants";

const HomeContainer = () => {
  return (
    <AppLayout>
      <VoucherSlider />
      <br/>
      <br/>
      <br/>
      <br/>
      <OurFeature title="Today's" />
      <CardSlider title="Flash Sales" data={PRODUCT_CARD} />
      <OurFeature title="Categories" />
      <BrowseByCategory />
      <OurFeature title="This Month" />
      <TopSellingProduct />
      <MusicExperience />
      <OurFeature title="Our Products" />
      <CardSlider
        explore={true}
        title={"Explore Our Products"}
        data={EXPLORE_OUR_PRODUCTS}
      />
      <CardSlider explore={true} title={""} data={EXPLORE_OUR_PRODUCTS} />
    </AppLayout>
  );
};

export default HomeContainer;
