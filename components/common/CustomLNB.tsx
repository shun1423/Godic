import * as React from "react";
import { useRouter } from "next/router";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  styled,
} from "@mui/material";
import ConstantsContext from "context/constantsContext";
import NameLogo from "./NameLogo";

const StyledListItem = styled(ListItem)(({ theme }) => ({
  "&:hover": {
    backgroundColor: theme.palette.action.hover,
    color: theme.palette.primary.main,
  },
  color: theme.palette.text.primary,
  backgroundColor: "transparent",
}));

const CustomDrawer = styled(Drawer)(({ theme }) => ({
  width: 240,
  flexShrink: 0,
  "& .MuiDrawer-paper": {
    width: 240,
    boxSizing: "border-box",
    border: "0px",
    backgroundColor: "transparent",
    position: "fixed", // 화면에 고정
    top: 0,
    left: 0,
    height: "100vh", // 화면 전체 높이를 차지하도록 설정
    zIndex: 100, // 충분히 높은 z-index 설정
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
      <NameLogo
        bgColor="white"
        color="#383838"
        name="GothiC"
        onClick={() => router.push("/")}
      />
      <List>
        {sortedNavLinks?.map((navLink, index) => (
          <StyledListItem
            key={navLink.label + index}
            onClick={() => handleNavClick(navLink.href)}
            button
          >
            <ListItemIcon>{navLink.Icon}</ListItemIcon>
            <ListItemText primary={navLink.label} />
          </StyledListItem>
        ))}
      </List>
    </CustomDrawer>
  );
};

export default CustomLNB;
