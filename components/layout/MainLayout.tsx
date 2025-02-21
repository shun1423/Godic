import * as React from "react";
import Head from "next/head";
import { Box, Button } from "@mui/material";
import { useRouter } from "next/router";
import CustomAppBar from "components/common/CustomAppBar";
import Footer from "components/section/Footer";
import CustomLNB from "components/common/CustomLNB";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Page } from "constants/pages";

interface MainLayoutProps {
  pageData?: Page;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children, pageData }) => {
  const router = useRouter();

  // Calculate the ratios for the layout
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
      {/* AppBar */}
      <CustomAppBar />

      {/* 오른쪽 상단 고정 버튼 */}
      <Box
        sx={{
          position: "fixed",
          top: 16,
          right: 70,
          display: "flex",
          flexDirection: "column",
          gap: 1.5,
          zIndex: 1000,
        }}
      >
        {/* 상담하기 버튼 */}
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

        {/* 포트폴리오 버튼 */}
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

      {/* Main Content Container */}
      <Box
        sx={{
          display: "flex",
          flex: 1,
          justifyContent: "center",
          width: "100%",
        }}
      >
        {/* Left Side Space */}
        <Box
          sx={{
            width: { xs: "0%", md: sideWidth },
            display: { xs: "none", md: "block" },
          }}
        >
          <CustomLNB />
        </Box>

        {/* Center Content */}
        <Box
          sx={{
            width: { xs: "100%", md: contentWidth },
            padding: { xs: "16px", md: "24px" },
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#fff",
            borderRadius: 1,
            boxShadow: 1,
          }}
        >
          {children}
        </Box>

        {/* Right Side Space */}
        <Box
          sx={{
            width: { xs: "0%", md: sideWidth },
            display: { xs: "none", md: "block" },
          }}
        />
      </Box>

      {/* Footer */}
      <Footer />
    </Box>
  );
};

export default MainLayout;
