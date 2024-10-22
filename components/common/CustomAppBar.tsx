// react
import * as React from "react";
// next
import { useRouter } from "next/router";
// @mui
import {
  AppBar,
  AppBarProps,
  Box,
  BoxProps,
  Container,
  Grow,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  ToolbarProps,
  styled,
  useMediaQuery,
  useTheme,
} from "@mui/material";
// custom component
import NameLogo from "components/common/NameLogo";
import ButtonLink from "components/common/ButtonLink";
import MenuToggler from "components/common/MenuToggler";
import ConstantsContext from "context/constantsContext";
import useOnClickOutside from "hooks/useOnClickOutside";
import ComponentsContext from "context/componentsContext";
// type
interface CustomAppBarProps {}

const CustomAppBarRoot = styled(AppBar)<AppBarProps>(({ theme }) => ({
  backgroundColor: "transparent",
  boxShadow: "none",
}));

const LinkContainer = styled(Box)<BoxProps>(({ theme }) => ({
  marginLeft: theme.direction === "ltr" ? "auto" : "none",
  marginRight: theme.direction === "rtl" ? "auto" : "none",
}));

const LinksBox = styled(Box)<BoxProps>(({ theme }) => ({
  "& > :not(a:first-of-type)": {
    marginLeft: "0.5rem",
  },
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
}));

const CustomToolbar = styled(Toolbar)<ToolbarProps>(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    padding: 0,
  },
}));
const CustomAppBar: React.FunctionComponent<CustomAppBarProps> = (props) => {
  const [dropdownState, setDropdownState] = React.useState(false);
  const { containerMaxWidth = "lg" } = React.useContext(ComponentsContext);
  const { navLinks } = React.useContext(ConstantsContext);
  navLinks?.sort((a, b) => (a.order > b.order ? 1 : -1));

  const appBarRef = React.useRef(null);
  const handleClickOutside = () => {
    if (dropdownState) setDropdownState(false);
  };

  useOnClickOutside(appBarRef, handleClickOutside);

  const router = useRouter();
  const handleDropdownItemClick = (href: string) => {
    setDropdownState(false);
    router.push(href);
  };

  const {
    palette: { background },
  } = useTheme();

  const isLargeScreen = useMediaQuery((theme) => theme.breakpoints.up("sm"));

  return (
    <>
      <Container
        maxWidth={containerMaxWidth}
        sx={{ height: "0px", padding: "0px", margin: "0px" }}
      >
        <CustomToolbar>
          <LinkContainer sx={{ marginLeft: "auto" }}>
            {isLargeScreen ? null : (
              <LinksBox>
                {navLinks
                  ?.filter((navLink) => {
                    // 큰 화면에서는 표시하지 않도록 필터링
                    return !isLargeScreen;
                  })
                  .map((navLink, index) => (
                    <ButtonLink
                      key={navLink.label + index + navLink.href}
                      href={navLink.href}
                      {...navLink.buttonProps}
                    >
                      {navLink.label}
                    </ButtonLink>
                  ))}
              </LinksBox>
            )}
            <MenuToggler
              color="info"
              onClick={() => setDropdownState(!dropdownState)}
              open={dropdownState}
              sx={{ display: { sm: "none" } }}
            />
          </LinkContainer>
        </CustomToolbar>
      </Container>
      <Box
        sx={{
          backgroundColor: background.default,
          margin: 0,
          transition: "box-shadow 0.3s ease-in-out",
          boxShadow: dropdownState ? "0px 6px 4px 0px rgba(0,0,0,0.12)" : "",
          WebkitBoxShadow: dropdownState
            ? "0px 6px 4px 0px rgba(0,0,0,0.12)"
            : "",
        }}
      >
        <Container maxWidth={containerMaxWidth}>
          <List component="div">
            {navLinks?.map((navLink, index) => (
              <Grow
                in={dropdownState}
                key={navLink.label + index}
                style={{ transformOrigin: "center left" }}
                {...(dropdownState ? { timeout: index * 300 } : {})}
                unmountOnExit
              >
                <ListItemButton
                  onClick={() => handleDropdownItemClick(navLink.href)}
                  sx={{
                    borderRadius: "4px",
                    "&:hover": {
                      backgroundColor: "rgba(255, 255, 255, 0.2)",
                    },
                  }}
                >
                  <ListItemIcon
                    sx={{
                      color: "inherit",
                      fontSize: "large",
                      minWidth: "2rem",
                    }}
                  >
                    {navLink.Icon}
                  </ListItemIcon>
                  <ListItemText primary={navLink.label} />
                </ListItemButton>
              </Grow>
            ))}
          </List>
        </Container>
      </Box>
    </>
  );
};

export default CustomAppBar;
