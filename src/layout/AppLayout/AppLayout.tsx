import { Box, Container } from "@mui/material";
import { Footer, Navbar } from "@muc/layout";
import { ReactNode } from "react";

interface AppLayoutProps {
  children: ReactNode;
}

const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  return (
    <Box>
      <Navbar />
      <Container maxWidth='lg'>

      {children}
      </Container>
      <Footer />
    </Box>
  );
};

export default AppLayout;
