import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider, { Settings } from "react-slick";
import { COLORS } from "@muc/constants";
import { Box, Typography } from "@mui/material";
import { useStyles } from "@muc/utils";

const AboutSlider=()=> {
  const classes = useStyles();
   const settings: Settings = {
     dots: true,
     infinite: true,
     speed: 500,
     slidesToShow: 3,
     slidesToScroll: 1,
     appendDots: (dots) => (
       <Box position={"absolute"} bottom={0}>
         <ul className={`${classes.dot} slick-dots`}>{dots}</ul>
       </Box>
     ),
     
   };
  return (
    <Box sx={{mb:'30px' ,}} className="slider-container">
      <Slider {...settings}>

{sliderData.map((item)=>(
  <Box
  sx={{
    display: "flex",
    flexDirection: "column",
   
    height: "564px",
    width: "370px",
    marginX:'30px',
  
    
  }}
>
  <Box
    sx={{
      bgcolor: COLORS.gray.darkGray,
      width: "370px",
      height: "430px",
      display: "flex",
      mb:'15px',
      alignItems: "end",
      justifyContent: "center",
      borderRadius: "4px",
      
     
    }}
  >
    <img
      src={item.img}
      style={{
        width: "326px",
        height: "391px",
        objectFit:'cover',
        objectPosition:'top'
    
      }}
      alt={item.name}
    />
  </Box>
  <Box sx={{ display: "flex", flexDirection: "column", }}>
    <Typography variant="h3" fontSize={'32px'} fontWeight={500} color="initial">
      {item.name}
      <Typography variant="body2" color="initial" mt={"8px"}>
        {" "}
        {item.title}
        <Box sx={{ display: "flex", gap: "16px", mt: "16px" }}>
          <img
            src="assets/icons/Twitter.svg"
            style={{ width: "24px", height: "24px" }}
            alt=""
          />
          <img
            src="assets/icons/Instagram.svg"
            style={{ width: "24px", height: "24px" }}
            alt=""
          />
          <img
            src="assets/icons/Linkedin.svg"
            style={{ width: "24px", height: "24px" }}
            alt=""
          />
        </Box>
      </Typography>
    </Typography>
  </Box>
</Box>
))}

      </Slider>
    </Box>
  );
}

export default AboutSlider;
const sliderData = [
  {
    img: "assets/images/slider1.svg",
    name: "Tom Cruise",
    title: "Founder & Chairman",
  },
  {
    img: "assets/images/slider2.svg",
    name: "Emma Watson",
    title: "Managing Director",
  },
  {
    img: "assets/images/slider3.svg",
    name: "Will Smith",
    title: "Product Designer",
  },
];