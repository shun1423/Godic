import * as React from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import {
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  styled,
  Box,
} from "@mui/material";
import ConstantsContext from "context/constantsContext";
import NameLogo from "./NameLogo";

const StyledListItem = styled(ListItemButton)(({ theme }) => ({
  "&:hover": {
    backgroundColor: theme.palette.action.hover,
    color: theme.palette.primary.main,
  },
  color: theme.palette.text.primary,
  backgroundColor: "transparent",
  padding: "10px",
}));

const LogoContainer = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  width: "240px",
});

const ImageWrapper = styled(Box)({
  paddingLeft: "20px",
  width: "120px",
  display: "flex",
  alignItems: "center",
});

const StyledImage = styled(Image)({
  borderRadius: "6px",
});

const CustomDrawer = styled(Drawer)(({ theme }) => ({
  width: 240,
  flexShrink: 0,
  "& .MuiDrawer-paper": {
    width: 240,
    boxSizing: "border-box",
    border: "0px",
    backgroundColor: "transparent",
    position: "fixed",
    top: 0,
    left: 0,
    height: "100vh",
    zIndex: 100,
  },
}));

const CustomLNB: React.FC = () => {
  const { navLinks } = React.useContext(ConstantsContext);
  const router = useRouter();

  const sortedNavLinks = navLinks?.sort((a, b) => a.order - b.order);

  const handleNavClick = (href: string) => {
    router.push(href);
  };

  return (
    <CustomDrawer variant="permanent" anchor="left">
      <LogoContainer>
        <ImageWrapper>
          <Image
            src="/회사로고.jpeg"
            alt="Company Logo"
            width={120}
            height={84}
            style={{
              objectFit: "contain",
            }}
          />
        </ImageWrapper>
        <NameLogo
          bgColor="white"
          color="#383838"
          name="GothiC"
          onClick={() => router.push("/")}
        />
      </LogoContainer>
      <List>
        {sortedNavLinks?.map((navLink, index) => (
          <StyledListItem
            key={navLink.label + index}
            onClick={() => handleNavClick(navLink.href)}
          >
            <ListItemText primary={navLink.label} sx={{ marginLeft: "20px" }} />
          </StyledListItem>
        ))}
      </List>
    </CustomDrawer>
  );
};

export default CustomLNB;
