import * as React from "react";
import { useRouter } from "next/router";
import Image from "next/image";
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
import NameLogo from "components/common/NameLogo";

const CustomAppBarRoot = styled("div")(({ theme }) => ({
  // 필요시 AppBar 스타일을 적용하되,
  // background: "transparent",
  // boxShadow: "none",
}));

const CustomToolbar = styled(Toolbar)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between", // 로고와 메뉴 토글러 사이 공간 확보
  padding: "8px 0", // 상하 패딩 추가
  [theme.breakpoints.down("md")]: {
    padding: "8px 0",
  },
}));

// 로고 컨테이너 스타일
const LogoContainer = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  cursor: "pointer",
}));

// 로고 이미지 컨테이너
const CompanyLogoWrapper = styled(Box)(() => ({
  position: "relative",
  width: "40px", // 모바일에서는 조금 작게
  height: "40px",
  marginRight: "8px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "8px", // 살짝 둥근 모서리
  overflow: "hidden",
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

  const handleLogoClick = () => {
    router.push("/");
  };

  const theme = useTheme<Theme>();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <CustomAppBarRoot ref={appBarRef}>
      <Container
        maxWidth={containerMaxWidth}
        sx={{ padding: "0 16px", margin: 0 }}
      >
        <CustomToolbar>
          {/* 로고 영역 (항상 표시) */}
          <LogoContainer onClick={handleLogoClick}>
            <CompanyLogoWrapper>
              <Image
                src="/회사로고.jpeg"
                alt="Company Logo"
                width={40}
                height={40}
                style={{
                  objectFit: "cover",
                }}
              />
            </CompanyLogoWrapper>
            <NameLogo
              name="GothiC"
              style={{
                height: "50px",
                paddingTop: "3px", // 살짝 아래로 조정
              }}
            />
          </LogoContainer>

          {/* 햄버거 아이콘 (모바일에서만 표시) */}
          <Box>
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
