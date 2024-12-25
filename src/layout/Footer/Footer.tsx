import { COLORS } from "@muc/constants";
import {
  FacebookOutlined,
  Instagram,
  LinkedIn,
  SendOutlined,
  Twitter,
} from "@mui/icons-material";
import { Box, List, ListItem, TextField, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Footer = () => {
  const renderLinks = (title: string, links: string[]) => (
    <Box>
      <Typography variant="h4" sx={styles.textTitle}>
        {title}
      </Typography>
      <List>
        {links.map((link, index) => (
          <ListItem key={index}>
            <Link to={""} style={styles.footerLink}>
              {link}
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ p: 5, bgcolor: COLORS.dark.main, color: COLORS.white.main }}>
      <Box
        sx={{
          display: { md: "flex", sm: "flex", xs: "block" },
          justifyContent: {
            md: "space-around",
            sm: "space-between",
            xs: "auto",
          },
          pb: 3,
        }}
      >
        {/* Subscribe Section */}
        <Box>
          <Typography variant="h4" sx={styles.textTitle}>
            Exclusive
          </Typography>
          <Typography variant="body1" sx={styles.text}>
            Subscribe
          </Typography>
          <Typography variant="body1" sx={styles.text}>
            Get 10% off your first order
          </Typography>
          <Box sx={styles.subscribeBox}>
            <TextField
              size="small"
              placeholder="Enter your Email"
              variant="outlined"
              type="email"
            />
            <Typography sx={styles.sendButton}>
              <SendOutlined sx={{ color: COLORS.white.main }} />
            </Typography>
          </Box>
        </Box>

        <Box>
          <Typography variant="h4" sx={styles.textTitle}>
            Support
          </Typography>
          <Typography variant="body1" sx={styles.text}>
            111 Bijoy Sarani, Dhaka, <br /> DH 1515, Bangladesh.
          </Typography>
          <Typography variant="body1" sx={styles.text}>
            exclusive@gmail.com
          </Typography>
          <Typography variant="body1" sx={styles.text}>
            +88015-88888-9999
          </Typography>
        </Box>

        {renderLinks("Account", [
          "My Account",
          "Login/Register",
          "Cart",
          "Shop",
        ])}
        {renderLinks("Quick Link", [
          "Privacy and Policy",
          "Term of Use",
          "FAQ",
          "Contact",
        ])}

        <Box>
          <Typography variant="h4" sx={styles.textTitle}>
            Download App
          </Typography>
          <Typography variant="body1" sx={styles.text}>
            Save $3 with App New User Only
          </Typography>
          <Box sx={styles.appDownloadBox}>
            <Box component="img" src="/assets/images/QR-code.svg" />
            <Box display="flex" flexDirection="column" gap="5px">
              <Box component="img" src="/assets/images/playstore-Btn.svg" />
              <Box component="img" src="/assets/images/appstore-Btn.svg" />
            </Box>
          </Box>
          <Box sx={styles.socialIcons}>
            <FacebookOutlined />
            <Twitter />
            <Instagram />
            <LinkedIn />
          </Box>
        </Box>
      </Box>
      <Box sx={{ borderTop: `1px solid ${COLORS.gray.main}` }}>
        <Typography
          variant="body1"
          sx={{ color: COLORS.gray.main, pt: 2, textAlign: "center" }}
        >
          All right reserved
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;

const styles = {
  footerLink: {
    textDecoration: "none",
    color: COLORS.white.main,
    fontSize: "16px",
  },
  textTitle: {
    p: 1.5,
  },
  text: {
    pb: 1.5,
    fontSize: "16px",
  },
  subscribeBox: {
    display: "flex",
    mt: 1,
    alignItems: "center",
    border: `1px solid ${COLORS.white.main}`,
    borderRadius: "5px",
    overflow: "hidden",
  },
  sendButton: {
    minWidth: "auto",
    px: 2,
    bgcolor: "transparent",
    borderRadius: "0",
  },
  appDownloadBox: {
    display: "flex",
    gap: "15px",
    alignItems: "center",
    m: "auto",
    justifyContent: "center",
  },
  socialIcons: {
    display: "flex",
    justifyContent: "space-around",
    p: 2,
  },
};
