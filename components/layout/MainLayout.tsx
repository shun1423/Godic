import * as React from "react";
import { Box, Button, useMediaQuery, useTheme } from "@mui/material";
import { useRouter } from "next/router";
import CustomAppBar from "components/common/CustomAppBar";
import Footer from "components/section/Footer";
import CustomLNB from "components/common/CustomLNB";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Page } from "constants/pages";

interface MainLayoutProps {
  pageData?: Page;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const router = useRouter();
  const theme = useTheme();

  // md 이하를 "모바일"로 간주
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  // 3단 레이아웃 폭 (데스크톱)
  const sideWidth = "20%";
  const contentWidth = "60%";

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        minHeight: "100vh",
      }}
    >
      {/* 모바일일 때만 AppBar 보이기 */}
      {isMobile && <CustomAppBar />}

      {/* 오른쪽 고정 버튼들 (모바일/데스크톱 공통) */}
      <Box
        sx={{
          position: "fixed",
          // 데스크톱: top: 46, right: 70
          // 모바일: bottom: 24, right: 16 (예시)
          top: isMobile ? "auto" : 46,
          bottom: isMobile ? 44 : "auto",
          right: isMobile ? 16 : 70,
          display: "flex",
          flexDirection: "column",
          gap: 1.5,
          zIndex: 1000,
        }}
      >
        <Button
          variant="contained"
          color="primary"
          onClick={() => router.push("/hire-me")}
          sx={{
            borderRadius: "12px",
            padding: "8px 16px",
            fontWeight: "bold",
            minWidth: "120px",
          }}
        >
          상담하기
        </Button>

        <Button
          variant="outlined"
          color="primary"
          startIcon={<InstagramIcon />}
          onClick={() => window.open("https://www.instagram.com", "_blank")}
          sx={{
            borderRadius: "12px",
            padding: "8px 16px",
            fontWeight: "bold",
            minWidth: "120px",
          }}
        >
          포트폴리오
        </Button>
      </Box>

      {/* 메인 컨텐츠 영역 */}
      <Box
        sx={{
          display: "flex",
          flex: 1,
          justifyContent: "center",
          width: "100%",
        }}
      >
        {/* 데스크톱에서만 LNB 노출 */}
        {!isMobile && (
          <Box
            sx={{
              width: sideWidth,
              display: "block",
            }}
          >
            <CustomLNB />
          </Box>
        )}

        {/* 가운데 컨텐츠 */}
        <Box
          sx={{
            width: isMobile ? "100%" : contentWidth,
            padding: { xs: 2, md: 3 },
            backgroundColor: "#fff",
            borderRadius: 1,
            boxShadow: 1,
          }}
        >
          {children}
        </Box>

        {/* 오른쪽 여백 (데스크톱만) */}
        {!isMobile && (
          <Box
            sx={{
              width: sideWidth,
              display: "block",
            }}
          />
        )}
      </Box>

      {/* 하단 Footer */}
      <Footer />
    </Box>
  );
};

export default MainLayout;
