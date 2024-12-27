import { COLORS } from "@muc/constants";
import { navLink } from "@muc/utils";
import {
  Box,
  Collapse,
  IconButton,
  Link,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { ExpandLess, ExpandMore } from "@mui/icons-material";

const AsideLinkMenu = () => {
  const [open, setOpen] = useState<string | null>(null);

  const handleToggle = (menu: string) => {
    setOpen((prev) => (prev === menu ? null : menu));
  };

  const menuItems = [
    {
      title: "Women's Fashion",
      key: "womens",
      subItems: ["Dresses", "Tops"],
    },
    {
      title: "Men's Fashion",
      key: "mens",
      subItems: ["Shirts", "Pants"],
    },
  ];

  const otherLinks = [
    "Electronics",
    "Home & Lifestyle",
    "Medicine",
    "Sports & Outdoor",
    "Groceries & Pets",
    "Health & Beauty",
  ];

  return (
    <Box
      sx={{
        width: "20%",
        borderRight: `1px solid ${COLORS.gray.main}`,
        display: { md: "flex", sm: "none", xs: "none" },
      }}
    >
      <List>
        {menuItems.map(({ title, key, subItems }) => (
          <Box key={key}>
            <ListItem>
              <Link href="#" onClick={() => handleToggle(key)} sx={navLink}>
                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  gap={"40px"}
                >
                  <Typography>{title}</Typography>
                  <IconButton size="small">
                    {open === key ? (
                      <ExpandLess sx={{ color: COLORS.dark.main }} />
                    ) : (
                      <ExpandMore sx={{ color: COLORS.dark.main }} />
                    )}
                  </IconButton>
                </Box>
              </Link>
            </ListItem>
            <Collapse in={open === key} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {subItems.map((item, idx) => (
                  <ListItem key={idx}>
                    <Link href="#" sx={{color:COLORS.secondary.darkGreen,textDecoration:'none',pl:2}}>
                      {item}
                    </Link>
                  </ListItem>
                ))}
              </List>
            </Collapse>
          </Box>
        ))}
        {otherLinks.map((link, index) => (
          <ListItem key={index}>
            <Link href="#" sx={navLink}>
              {link}
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default AsideLinkMenu;
