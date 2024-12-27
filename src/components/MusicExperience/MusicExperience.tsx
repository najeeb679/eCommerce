import { COLORS } from "@muc/constants";
import { advertisementTimeStyle, musicAdvertisemnt } from "@muc/utils";
import { Box, Button, Grid, Typography } from "@mui/material";

const MusicExperience = () => {
  return (
    <Grid container sx={musicAdvertisemnt}>
      <Grid
        item
        md={6}
        sm={6}
        xs={12}
        sx={{ placeContent: "center", placeItems: "left" }}
        display={"flex"}
        gap={"30px"}
        flexDirection={"column"}
        pl={{ md: "56px", sm: "30px", xs: 0 }}
      >
        <Typography variant="body2" color="#00FF66" fontWeight={600} p={{md:0,sm:0,xs:2}}>
          Categories
        </Typography>
        <Typography
          variant="h1"
          color={COLORS.white.main}
          fontSize={{ md: "48px", sm: "30px", xs: "25px" }}
          lineHeight={{ md: "60px", sm: "50px", xs: "30px" }}
          width={{ md: "473px", xs: "auto" }}
        >
          Enhance Your Music Experience
        </Typography>
        <Box display={"flex"} gap={"24px"}>
          {timeData.map((item) => (
            <Box sx={advertisementTimeStyle}>
              <Typography variant="h6" fontWeight={600}>
                {item.time}
              </Typography>
              <Typography variant="h6" fontSize="12px">
                {item.title}
              </Typography>
            </Box>
          ))}
        </Box>
        <Button
          variant="contained"
          sx={{
            bgcolor: "#00FF66",
            borderRadius: "4px",
            width: 171,
            height: "45px",
          }}
        >
          Buy Now
        </Button>
      </Grid>

      <Grid item md={6} sm={6} xs={12} height={"100%"} pl={"20px"}>
        <Box
          sx={{
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            bgcolor: "transparent",
            position: "relative",
            bottom: 0,
          }}
        >
          <Box
            sx={{
              width: "500px",
              height: "500px",
              borderRadius: "50%",
              position: "absolute",
              filter: "blur(200px)",
              bgcolor: COLORS.white.main,
              left: "50%",
              opacity: 0.3,
              transform: "translateX(-50%)",
            }}
          />
          <Box
            component={"img"}
            src="assets/images/music-experince.svg"
            width={{ md: "100%", sm: "70%", xs: "50%" }}
            height={"auto"}
            sx={{
              filter: "blur(200)",
              position: "absolute",
              zIndex: 99,
              top: "50%",
              left: "50%",
              transform: {
                md: "translate(-50%, -50%)",
                sm: "translate(-80%, -50%)",
                xs: "translate(-100%, -150%)",
              },
            }}
            alt="music"
          />
        </Box>
      </Grid>
    </Grid>
  );
};

export default MusicExperience;

const timeData = [
  {
    time: "23",
    title: "Hours",
  },
  {
    time: "05",
    title: "Days",
  },
  {
    time: "59",
    title: "Minutes",
  },
  {
    time: "35",
    title: "Seconds",
  },
];
