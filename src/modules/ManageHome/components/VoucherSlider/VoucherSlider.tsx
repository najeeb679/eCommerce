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
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: (dots) => (
      <Box position={"absolute"} bottom={40}>
        <ul className={`${classes.dot} slick-dots`}>{dots}</ul>
      </Box>
    ),
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
          appendDots: (dots) => (
            <Box
              position={"absolute"}
              display={{ md: "flex", sm: "flex", xs: "none" }}
              bottom={40}
            >
              <ul className={`${classes.dot} slick-dots`}>{dots}</ul>
            </Box>
          ),
        },
      },
    ],
  };

  return (
    <Box
      className="slider-container"
      sx={{
        position: "relative",
        width: { md: "80%", sm: "100%", xs: "100%" },
      }}
    >
      <Slider {...settings}>
        {OFFER_VOUCHER.map((item) => (
          <Box key={item.id}>
            <Box
              display={"flex"}
              bgcolor={COLORS.dark.main}
              height={{ md: "380px" }}
              color={COLORS.white.main}
            >
              <Box p={{ md: 8, sm: 5, xs: 2 }} width={"33%"}>
                <Box
                  sx={{
                    display: { md: "flex", sm: "flex", xs: "none" },
                    alignItems: "center",
                    gap: "20px",
                  }}
                >
                  <Box
                    component={"img"}
                    src={item.icons}
                    sx={{ width: "50px", height: "50px" }}
                  />
                  <Typography variant="h6">
                    {item.categoryDescription}
                  </Typography>
                </Box>
                <Typography
                  variant="h1"
                  fontSize={{ md: "55px", sm: "40px", xs: "20px" }}
                  pt={3}
                  lineHeight={{ md: "60px" }}
                  width={{ md: "500px", sm: "350px", xs: "200px" }}
                  mb={2}
                >
                  {item.title}
                </Typography>

                <CustomBtn
                  variant="outlined"
                  title="Shop Now"
                  icon={<ArrowForward />}
                  width="113px"
                  height="45px"
                  color={`${COLORS.white.main}`}
                />
              </Box>
              <Box
                component={"img"}
                src={item?.poster}
                sx={{
                  width: { md: "100%", sm: "100%", xs: "100%" },
                  height: { md: "100%", sm: "350px", xs: "100%" },
                }}
              />
            </Box>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default VoucherSlider;
