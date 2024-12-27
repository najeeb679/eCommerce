import { COLORS, PRODUCT_CATEGORIES } from "@muc/constants";
import { arrowBtn, categoryStyle } from "@muc/utils";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import { useState } from "react";

const BrowseByCategory = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleState = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className="slider-container">
      <Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h1"
            sx={{fontSize:{md:'30px',sm:'auto',xs:'25px'}}}
          >
            Browse By Category
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <Typography sx={arrowBtn}>
              <ArrowBack fontSize="small" />
            </Typography>
            <Typography sx={arrowBtn}>
              <ArrowForward fontSize="small" />
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{ display: { md: "flex", sm: "flex", xs: "block" }, gap: "30px" }}
          my={2}
        >
          {PRODUCT_CATEGORIES.map((item, i) => (
            <Box
              key={i}
              onClick={() => handleState(i)}
              bgcolor={activeIndex === i ? COLORS.primary.main : "transparent"}
              border={
                activeIndex === i
                  ? "none"
                  : `1px solid ${COLORS.dark.lightDark}`
              }
              sx={categoryStyle}
            >
              <Box
                component={"img"}
                src={item.img}
                height={"50px"}
                width={"50px"}
                style={{
                  filter: activeIndex === i ? "invert(1)" : "none",
                }}
                alt={item.img}
              />
              <Typography
                variant="body1"
                color={activeIndex === i ? "white" : "black"}
              >
                {item.title}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </div>
  );
};

export default BrowseByCategory;
