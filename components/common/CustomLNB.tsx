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
  padding: "16px 0",
  width: "240px",
  height: "80px",
});

const ImageWrapper = styled(Box)({
  paddingLeft: "16px",
  width: "80px", // 120px에서 80px로 축소
  height: "100%",
  display: "flex",
  alignItems: "center",
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
