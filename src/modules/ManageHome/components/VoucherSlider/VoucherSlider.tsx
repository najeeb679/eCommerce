import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { COLORS, OFFER_VOUCHER } from "@muc/constants";
import { Box, Typography } from "@mui/material";
import { CustomBtn } from "@muc/components";
import { ArrowForward } from "@mui/icons-material";
import { useStyles } from "@muc/utils";

const VoucherSlider = () => {
  const classes = useStyles();

  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: (dots) => (
      <Box position={"absolute"} bottom={40}>
        <ul className={`${classes.dot} slick-dots`}>{dots}</ul>
      </Box>
    ),
  };

  return (
    <div className="slider-container" style={{ position: "relative" }}>
      <Slider {...settings}>
        {OFFER_VOUCHER.map((item) => (
          <Box key={item.id}>
            <Box
              display={"flex"}
              justifyContent={"space-between"}
              bgcolor={COLORS.dark.main}
              height={{ md: "344px" }}
              color={COLORS.white.main}
            >
              <Box p={8}>
                <Box
                  sx={{ display: "flex", alignItems: "center", gap: "20px" }}
                >
                  <Box component={"img"} src={item.icons} />
                  <Typography variant="h6">{item.title}</Typography>
                </Box>
                <Typography
                  variant="h1"
                  fontSize={"55px"}
                  pt={3}
                  lineHeight={"60px"}
                  width={"500px"}
                  mb={2}
                >
                  {item.title}
                </Typography>

                <CustomBtn
                  variant="outlined"
                  title="Shop Now"
                  icon={<ArrowForward />}
                  width="113px"
                  color={`${COLORS.white.main}`}
                />
              </Box>
              <Box component={"img"} src={item?.poster} />
            </Box>
          </Box>
        ))}
      </Slider>
    </div>
  );
};

export default VoucherSlider;
