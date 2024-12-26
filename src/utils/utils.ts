import { COLORS } from "@muc/constants";
import { Settings } from "react-slick";

export const searchBar = {
  bgcolor: `${COLORS.gray.darkGray}`,
  borderRadius: "5px",
  Border: "none",
  width: "100%",
  color: COLORS.dark.main,
  "& .MuiOutlinedInput-root": {
    "&:hover .MuiOutlinedInput-notchedOutline": {
      borderColor: "transparent",
    },
    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "transparent",
    },
    "& input::placeholder": {
      color: COLORS.dark.main,
      opacity: 0.4,
      fontSize: "12px",
    },
    "& input": {
      color: COLORS.dark.lightDark,
    },
  },
};

export const navLink = {
  color: `${COLORS.dark.main}`,
  textDecoration: "none",
  pb: 1,
};

export const arrowBtn = {
  bgcolor: COLORS.gray.darkGray,
  p: "5px",
  borderRadius: "50px",
  height: "20px",
  width: "20px",
  textAlign: "center",
  cursor: "pointer",
};

export const productCard = {
  width: "250px",
  borderRadius: "4px",
  height: "350px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
};

export const insideProductCard = {
  bgcolor: COLORS.gray.darkGray,
  display: "flex",
  position: "relative",
  borderRadius: "4px",
  height: "300px",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
};

export const cardIcons = {
  mb: "8px",
  width: "34px",
  height: "34px",
  bgcolor: COLORS.white.main,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "50%",
};

export const categoryStyle = {
  borderRadius: "4px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-evenly",
  flexDirection: "column",
  cursor: "pointer",
  width: "175px",
  height: "145px",
};

export const settings: Settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 4.1,
  slidesToScroll: 2,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

export const musicAdvertisemnt = {
  maxWidth: "100%",
  mx: "auto",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "500px",
  bgcolor: COLORS.dark.main,
  my: 5,
  borderRadius: "6px",
};

export const advertisementTimeStyle = {
  width: "62px",
  height: "62px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  borderRadius: "50%",
  bgcolor: COLORS.white.main,
};
