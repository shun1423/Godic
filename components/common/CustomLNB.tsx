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
  ListItemButtonProps,
  Typography,
} from "@mui/material";
import ConstantsContext from "context/constantsContext";
import NameLogo from "./NameLogo";

// 기존 240 유지 (필요하면 조정)
const drawerWidth = 240;

// ListItem 확장: hover/selected 시 스타일을 커스텀하기 위해
interface StyledListItemButtonProps extends ListItemButtonProps {
  selected?: boolean;
}

const StyledListItemButton = styled(ListItemButton, {
  shouldForwardProp: (prop) => prop !== "selected",
})<StyledListItemButtonProps>(({ theme, selected }) => ({
  position: "relative",
  overflow: "hidden",
  borderRadius: 6,
  margin: "6px 8px", // 좌우 여백, 위아래 간격
  paddingLeft: theme.spacing(2),
  paddingRight: theme.spacing(2),
  transition: "background-color 0.3s ease",

  // 원래 LNB가 text.primary, transparent 배경을 쓰고 있으므로 그대로 둠
  color: theme.palette.text.primary,
  backgroundColor: "transparent",

  // hover 시 효과
  "&:hover": {
    backgroundColor: theme.palette.action.hover,
  },
  // hover 시 왼쪽 파랑 바(Slider) 부드럽게 등장
  "&:hover::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    width: "4px",
    height: "100%",
    backgroundColor: theme.palette.primary.main,
    transform: "translateX(-100%)",
    animation: "slideIn 0.3s forwards", // keyframes 아래 정의
  },

  // 선택된 상태 강조
  ...(selected && {
    backgroundColor: theme.palette.action.selected,
    fontWeight: 700,
    "&::before": {
      content: '""',
      position: "absolute",
      top: 0,
      left: 0,
      width: "4px",
      height: "100%",
      backgroundColor: theme.palette.primary.main,
    },
  }),

  // slideIn 애니메이션
  "@keyframes slideIn": {
    to: {
      transform: "translateX(0)",
    },
  },
}));

// 로고 영역
const LogoContainer = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  padding: "16px 12px", // 패딩 조정
  width: drawerWidth,
  height: "90px", // 높이 증가
}));

// 로고 이미지 컨테이너
const CompanyLogoWrapper = styled(Box)(() => ({
  position: "relative",
  width: "50px", // 크기 증가
  height: "50px", // 크기 증가
  marginRight: "10px", // 간격 조정
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "8px", // 살짝 둥근 모서리
  overflow: "hidden", // 모서리 밖으로 이미지가 나가지 않도록 함
  boxShadow: "0 1px 4px rgba(0,0,0,0.05)", // 아주 미묘한 그림자
}));

// Drawer 스타일 (원래 그대로)
const CustomDrawer = styled(Drawer)(({ theme }) => ({
  width: drawerWidth,
  flexShrink: 0,
  "& .MuiDrawer-paper": {
    width: drawerWidth,
    boxSizing: "border-box",
    border: "0px",
    backgroundColor: "transparent", // 원래 색상 유지
  },
}));

const CustomLNB: React.FC = () => {
  const { navLinks } = React.useContext(ConstantsContext);
  const router = useRouter();
  // 정렬
  const sortedNavLinks = React.useMemo(
    () => navLinks?.sort((a, b) => a.order - b.order) || [],
    [navLinks]
  );

  // 현재 라우트와 비교해 selected 여부 판단
  const isSelected = (href: string) => router.pathname === href;

  const handleNavClick = (href: string) => {
    router.push(href);
  };

  return (
    <CustomDrawer variant="permanent" anchor="left">
      <LogoContainer>
        <CompanyLogoWrapper>
          <Image
            src="/회사로고.jpeg"
            alt="Company Logo"
            width={50}
            height={50}
            style={{
              objectFit: "cover",
            }}
          />
        </CompanyLogoWrapper>
        <NameLogo name="GothiC" onClick={() => router.push("/")} />
      </LogoContainer>

      <List sx={{ mt: 1 }}>
        {sortedNavLinks.map((navLink, index) => (
          <StyledListItemButton
            key={navLink.label + index}
            onClick={() => handleNavClick(navLink.href)}
            selected={isSelected(navLink.href)}
          >
            <ListItemText
              sx={{ marginLeft: "8px" }}
              primary={navLink.label}
              primaryTypographyProps={{
                fontSize: "1.25rem", // 20px
                fontWeight: isSelected(navLink.href) ? 700 : 500,
              }}
            />
          </StyledListItemButton>
        ))}
      </List>
    </CustomDrawer>
  );
};

export default CustomLNB;
