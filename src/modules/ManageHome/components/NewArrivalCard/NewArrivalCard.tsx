import { CustomBtn } from "@muc/components";
import { COLORS } from "@muc/constants";
import { Box, Grid, Typography } from "@mui/material";

type CardContentProps = {
  imgSrc: string;
  title: string;
  description: string;
};
const CardContent = ({ imgSrc, title, description }: CardContentProps) => (
  <>
    <Box
      component="img"
      src={imgSrc}
      alt="img"
      sx={{
        width: { md: "90%", sm: "100%", xs: "100%" },
        height: "100%",
        opacity: 0.5,
      }}
    />
    <Box
      sx={{
        position: "absolute",
        bottom: 0,
        left: 0,
        color: COLORS.white.main,
        zIndex: 999,
        p: 3,
        width: "250px",
        flexWrap: "wrap",
      }}
    >
      <Typography variant="h4" pb={1}>
        {title}
      </Typography>
      <Typography variant="body1" pb={1} fontSize="12px">
        {description}
      </Typography>
      <Box display={{ md: "flex", sm: "flex", xs: "none" }}>
        <CustomBtn
          title="Shop Now"
          variant="outlined"
          color={COLORS.white.main}
          height="40px"
        />
      </Box>
    </Box>
  </>
);

const NewArrivalCard = () => (
  <Box maxHeight={{ md: 600, sm: "auto", xs: "auto" }} mb={10} width={'100%'}>
    <Typography variant="h1" my={3} mb={6}>
      New Arrival
    </Typography>
    <Grid container spacing="24px">
      <Grid
        item
        md={6}
        sm={12}
        xs={12}
        sx={{
          bgcolor: COLORS.dark.main,
          borderRadius: "5px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
          mb: { md: 0, sm: 4, xs: 3 },
        }}
      >
        <CardContent
          imgSrc="/assets/images/arrivalimg1.svg"
          title="Play Station 5"
          description="Black and White version of the PS5 coming out on sale."
        />
      </Grid>
      <Grid
        item
        md={6}
        sm={12}
        xs={12}
        sx={{ display: "flex", flexDirection: "column", gap: "20px" }}
      >
        <Box
          sx={{
            height: "284px",
            bgcolor: COLORS.dark.main,
            borderRadius: "5px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
            mt: -3,
          }}
        >
          <CardContent
            imgSrc="/assets/images/arrivalimg2.svg"
            title="Women’s Collections"
            description="Featured woman collections that give you another vibe."
          />
        </Box>
        <Box
          display="flex"
          gap="20px"
          alignItems="center"
          justifyContent="space-between"
        >
          {[
            {
              imgSrc: "/assets/images/arrivalimg3.svg",
              title: "Speaker",
              description: "Amazon wireless speakers",
            },
            {
              imgSrc: "/assets/images/arrivalimg4.svg",
              title: "Perfume",
              description: "GUCCI INTENSE OUD EDP",
            },
          ].map((item, index) => (
            <Box
              key={index}
              sx={{
                width: { md: "50%", sm: "50%", xs: "100%" },
                height: "284px",
                bgcolor: COLORS.dark.main,
                borderRadius: "5px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                position: "relative",
              }}
            >
              <CardContent {...item} />
            </Box>
          ))}
        </Box>
      </Grid>
    </Grid>
  </Box>
);

export default NewArrivalCard;
