import * as React from "react";
import { useRouter } from "next/router";
import {
  Box,
  Container,
  Grow,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  styled,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Theme } from "@mui/material/styles";
import ButtonLink from "components/common/ButtonLink";
import MenuToggler from "components/common/MenuToggler";
import ConstantsContext from "context/constantsContext";
import useOnClickOutside from "hooks/useOnClickOutside";
import ComponentsContext from "context/componentsContext";

const CustomAppBarRoot = styled("div")(({ theme }) => ({
  // 필요시 AppBar 스타일을 적용하되,
  // background: "transparent",
  // boxShadow: "none",
}));

const CustomToolbar = styled(Toolbar)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    padding: 0,
  },
}));

const CustomAppBar: React.FC = () => {
  const [dropdownState, setDropdownState] = React.useState(false);
  const { containerMaxWidth = "lg" } = React.useContext(ComponentsContext);
  const { navLinks } = React.useContext(ConstantsContext);
  const router = useRouter();
  navLinks?.sort((a, b) => (a.order > b.order ? 1 : -1));

  // 바깥 클릭 시 dropdown 닫기
  const appBarRef = React.useRef(null);
  const handleClickOutside = () => {
    if (dropdownState) setDropdownState(false);
  };
  useOnClickOutside(appBarRef, handleClickOutside);

  const handleDropdownItemClick = (href: string) => {
    setDropdownState(false);
    router.push(href);
  };

  const theme = useTheme<Theme>();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <CustomAppBarRoot ref={appBarRef}>
      {/* 불필요한 height: 0 제거 */}
      <Container maxWidth={containerMaxWidth} sx={{ padding: 0, margin: 0 }}>
        <CustomToolbar>
          <Box sx={{ marginLeft: "auto" }}>
            {/* 모바일에서만 메뉴 목록 */}

            {/* 햄버거 아이콘 */}
            <MenuToggler
              color="info"
              onClick={() => setDropdownState(!dropdownState)}
              open={dropdownState}
              sx={{ display: { sm: "none" } }}
            />
          </Box>
        </CustomToolbar>
      </Container>

      <Box
        sx={{
          backgroundColor: theme.palette.background.default,
          margin: 0,
          transition: "box-shadow 0.3s ease-in-out",
          boxShadow: dropdownState ? "0px 6px 4px 0px rgba(0,0,0,0.12)" : "",
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
    </CustomAppBarRoot>
  );
};

export default CustomAppBar;
