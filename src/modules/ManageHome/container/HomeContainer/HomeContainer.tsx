import { AppLayout } from "@muc/layout";
import {
  CardSlider,
  NewArrivalCard,
  TopSellingProduct,
  VoucherSlider,
} from "../../components/components";
import {
  AsideLinkMenu,
  BrowseByCategory,
  MusicExperience,
  OurFeature,
} from "@muc/components";
import { EXPLORE_OUR_PRODUCTS, PRODUCT_CARD } from "@muc/constants";
import { Box } from "@mui/material";

const HomeContainer = () => {
  return (
    <AppLayout>
      <Box
        sx={{
          display: { md: "flex", sm: "block", xs: "block" },
          gap: { md: "20px", sm: "10px", xs: 0 },
          width: "100%",
          my: { md: 6, sm: 4, xs: 0 },
        }}
      >
        <AsideLinkMenu />
        <VoucherSlider />
      </Box>
      <br />
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
      <OurFeature title="Featured" />
      <NewArrivalCard />
      <br />
    </AppLayout>
  );
};

export default HomeContainer;
