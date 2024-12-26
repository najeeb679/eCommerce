import { COLORS } from "@muc/constants";
import { Box, Typography } from "@mui/material";

type FeatureTitle = {
  title: string;
};
const OurFeature = (prop: FeatureTitle) => {
  const { title } = prop || {};
  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: "20px", mb: 3 }}>
      <Box
        component={"div"}
        sx={{
          width: "20px",
          height: "40px",
          bgcolor: COLORS.primary.main,
          borderRadius: "4px",
        }}
      />
      <Typography
        variant="h5"
        sx={{ fontWeight: 600, color: COLORS.primary.main }}
      >
        {title}
      </Typography>
    </Box>
  );
};

export default OurFeature;
