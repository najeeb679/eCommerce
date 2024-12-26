import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { PRODUCT_CARD } from "@muc/constants";
import { CustomBtn, ProductCard } from "@muc/components";
import { Box, Typography } from "@mui/material";
import { arrowBtn, settings } from "@muc/utils";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import { productCardType } from "@muc/types";

const CardSlider: React.FC = () => {
  const sliderRef = useRef<Slider | null>(null);

  const handlePrev = () => {
    sliderRef.current?.slickPrev();
  };

  const handleNext = () => {
    sliderRef.current?.slickNext();
  };

  return (
    <div className="slider-container">
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb:3
        }}
      >
        <Typography variant="h1">Flash Sales</Typography>
        <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <Typography sx={arrowBtn} onClick={handlePrev}>
            <ArrowBack fontSize="small" />
          </Typography>
          <Typography sx={arrowBtn} onClick={handleNext}>
            <ArrowForward fontSize="small" />
          </Typography>
        </Box>
      </Box>
      <Slider {...settings} ref={sliderRef}>
        {PRODUCT_CARD.map((data: productCardType) => (
          <Box key={data.id}>
            <ProductCard data={data} />
          </Box>
        ))}
      </Slider>
      <Box sx={{ display: "flex", justifyContent: "center", my: 5 }}>
        <CustomBtn
          title="View All Products"
          variant="contained"
          width="234px"
        />
      </Box>
    </div>
  );
};

export default CardSlider;
