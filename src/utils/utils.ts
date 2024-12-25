import { COLORS } from "@muc/constants";

export const searchBar = {
  bgcolor: `${COLORS.gray.darkGray}`,
  borderRadius: "5px",
  Border: "none",
  width: "100%",
  "& .MuiOutlinedInput-root": {
    "&:hover .MuiOutlinedInput-notchedOutline": {
      borderColor: "transparent",
    },
    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "transparent",
    },
  },
};

export const navLink = {
  color: `${COLORS.dark.main}`,
  textDecoration: "none",
  pb:1,
};

// here to make the style
