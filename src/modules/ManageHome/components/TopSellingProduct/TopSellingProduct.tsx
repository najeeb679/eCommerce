import { CustomBtn, ProductCard } from "@muc/components";
import { PRODUCT_CARD } from "@muc/constants";
import { Box, Typography } from "@mui/material";

const TopSellingProduct = () => {
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb:4,
        }}
      >
        <Typography variant="h1">Best Selling Products</Typography>
        <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <CustomBtn title="view all" variant="contained" height="40px" />
        </Box>
      </Box>
      <Box sx={{ display: "flex", gap: "30px"}}>
        {PRODUCT_CARD.slice(0, 4).map((data) => (
          <ProductCard data={data} topProduct={true}/>
        ))}
      </Box>
    </div>
  );
};

export default TopSellingProduct;
