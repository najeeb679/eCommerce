import { COLORS } from "@muc/constants";
import { Box, Grid, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

const OurStory = () => {
  return (
    <>
      <Box sx={{ paddingTop: "80px" }}>
        <Box sx={{ display: "flex", gap: "12px", mb: "60px" }}>
          <NavLink
            to={"/"}
            style={{
              textDecoration: "none",
              color: COLORS.gray.main,
              fontSize: "14px",
            }}
          >
            Home
          </NavLink>
          <Box>/</Box>
          <Typography variant="body1" color="initial">
            About
          </Typography>
        </Box>
        <Grid
          container
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Grid item md={6}>
            <Box
              sx={{
                width: "525px",
                display: "flex",
                flexDirection: "column",
                gap: "40px",
              }}
            >
              <Typography
                variant="h3"
                fontSize={"54px"}
                fontWeight={600}
                letterSpacing={"6%"}
                color="initial"
              >
                Our Story
              </Typography>
              <Box
                sx={{ display: "flex", flexDirection: "column", gap: "24px" }}
              >
                <Typography
                  variant="body1"
                  color="initial"
                  lineHeight={"26px"}
                  fontSize={"16px"}
                  fontWeight={400}
                >
                  Launced in 2015, Exclusive is South Asia’s premier online
                  shopping makterplace with an active presense in Bangladesh.
                  Supported by wide range of tailored marketing, data and
                  service solutions, Exclusive has 10,500 sallers and 300 brands
                  and serves 3 millioons customers across the region.{" "}
                </Typography>
                <Typography
                  variant="body1"
                  color="initial"
                  lineHeight={"26px"}
                  fontSize={"16px"}
                  fontWeight={400}
                >
                  {" "}
                  Exclusive has more than 1 Million products to offer, growing
                  at a very fast. Exclusive offers a diverse assotment in
                  categories ranging from consumer.
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item md={6}>
            <img
              src="assets/images/about.svg"
              width={"100%"}
              height={"100%"}
              alt=""
            />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default OurStory;
