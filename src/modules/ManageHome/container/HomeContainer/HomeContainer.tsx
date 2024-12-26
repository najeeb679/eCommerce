import { AppLayout } from "@muc/layout";
import { CardSlider, TopSellingProduct, VoucherSlider } from "../../components/components";
import { BrowseByCategory, MusicExperience, OurFeature } from "@muc/components";

const HomeContainer = () => {
  return (
    <AppLayout>
      <VoucherSlider />
      <OurFeature title="Today's" />
      <CardSlider />
      <br />
      <br />
      <br />
      <OurFeature title="Categories" />
      <BrowseByCategory />
      <OurFeature title="This Month" />
      <TopSellingProduct />
      <br />
      <MusicExperience />
      {/* <OurFeature title="Our Product" /> */}
      {/* <ProductCard /> */}
    </AppLayout>
  );
};

export default HomeContainer;
