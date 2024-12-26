import { useState, useEffect } from "react";
import { COLORS, ROUTES } from "@muc/constants";
import {
  FavoriteBorder,
  Menu,
  PersonOutlineOutlined,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import {
  AppBar,
  Box,
  Drawer,
  IconButton,
  Link,
  List,
  ListItem,
  TextField,
  Toolbar,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { navLink, searchBar } from "@muc/utils";

const Navbar = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [activeLink, setActiveLink] = useState(window.location.pathname); // Initialize with current pathname
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  // Update active link based on the current pathname
  useEffect(() => {
    const handleLocationChange = () => {
      setActiveLink(window.location.pathname);
    };

    // Listen for location changes
    window.addEventListener("popstate", handleLocationChange);

    // Clean up listener on component unmount
    return () => {
      window.removeEventListener("popstate", handleLocationChange);
    };
  }, []);

  const handleLinkClick = (route: string) => {
    setActiveLink(route); // Update active link when clicked
  };

  const getLinkStyles = (route: string) => ({
    ...navLink,
    fontWeight: activeLink === route ? "bold" : "normal", // Apply bold font weight for active link
  });

  return (
    <AppBar variant="elevation" position="static" elevation={0}>
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: isMobile ? "space-between" : "space-around",
          bgcolor: COLORS.white.main,
          alignItems: "center",
          borderBottom: `0.2px solid ${COLORS.gray.main}`,
        }}
      >
        {/* Logo Section */}
        <Box component={"a"} href={ROUTES.HOME_PAGE} sx={navLink}>
          <Typography variant="h2">Exclusive</Typography>
        </Box>

        {isMobile ? (
          // Mobile View: Hamburger Menu
          <>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={() => setDrawerOpen(true)}
            >
              <Menu sx={{ color: COLORS.dark.main }} />
            </IconButton>
            <Drawer
              anchor="top"
              open={isDrawerOpen}
              onClose={() => setDrawerOpen(false)}
            >
              <Box
                sx={{
                  padding: 2,
                  bgcolor: COLORS.white.main,
                }}
              >
                <List>
                  <ListItem>
                    <Link
                      href={ROUTES.HOME_PAGE}
                      onClick={() => handleLinkClick(ROUTES.HOME_PAGE)}
                      sx={getLinkStyles(ROUTES.HOME_PAGE)}
                    >
                      Home
                    </Link>
                  </ListItem>
                  <ListItem>
                    <Link
                      href={ROUTES.ABOUT_PAGE}
                      onClick={() => handleLinkClick(ROUTES.ABOUT_PAGE)}
                      sx={getLinkStyles(ROUTES.ABOUT_PAGE)}
                    >
                      About
                    </Link>
                  </ListItem>
                  <ListItem>
                    <Link
                      href={ROUTES.CONTACT_PAGE}
                      onClick={() => handleLinkClick(ROUTES.CONTACT_PAGE)}
                      sx={getLinkStyles(ROUTES.CONTACT_PAGE)}
                    >
                      Contact
                    </Link>
                  </ListItem>
                  <ListItem>
                    <Link
                      href={ROUTES.CONTACT_PAGE}
                      onClick={() => handleLinkClick(ROUTES.CONTACT_PAGE)}
                      sx={getLinkStyles(ROUTES.AUTHENTICATION.SIGNUP_FORM)}
                    >
                      Sign Up
                    </Link>
                  </ListItem>
                </List>
              </Box>
            </Drawer>
          </>
        ) : (
          // Desktop View: Full Navigation Menu
          <>
            <List sx={{ display: "flex", width: "25%" }}>
              <ListItem>
                <Link
                  href={ROUTES.HOME_PAGE}
                  onClick={() => handleLinkClick(ROUTES.HOME_PAGE)}
                  sx={getLinkStyles(ROUTES.HOME_PAGE)}
                >
                  Home
                </Link>
              </ListItem>
              <ListItem>
                <Link
                  href={ROUTES.CONTACT_PAGE}
                  onClick={() => handleLinkClick(ROUTES.CONTACT_PAGE)}
                  sx={getLinkStyles(ROUTES.CONTACT_PAGE)}
                >
                  Contact
                </Link>
              </ListItem>
              <ListItem>
                <Link
                  href={ROUTES.ABOUT_PAGE}
                  onClick={() => handleLinkClick(ROUTES.ABOUT_PAGE)}
                  sx={getLinkStyles(ROUTES.ABOUT_PAGE)}
                >
                  About
                </Link>
              </ListItem>
              <ListItem>
                <Link
                  href={ROUTES.CONTACT_PAGE}
                  onClick={() => handleLinkClick(ROUTES.CONTACT_PAGE)}
                  sx={getLinkStyles(ROUTES.AUTHENTICATION.SIGNUP_FORM)}
                >
                  Sign Up
                </Link>
              </ListItem>
            </List>
            <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <TextField
                placeholder="What are you looking for?"
                size="small"
                sx={searchBar}
                InputProps={{
                  endAdornment: (
                    <Box
                      component={"img"}
                      src="/assets/icons/Search-icon.svg"
                    />
                  ),
                }}
              />
              <FavoriteBorder sx={{ color: COLORS.dark.main, ml: 3 }} />
              <ShoppingCartOutlined sx={{ color: COLORS.dark.main }} />
              <PersonOutlineOutlined sx={{ color: COLORS.dark.main }} />
            </Box>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
