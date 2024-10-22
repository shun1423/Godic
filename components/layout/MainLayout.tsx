import * as React from "react";
// next
import Head from "next/head";
// custom component
import CustomAppBar from "components/common/CustomAppBar";
import Footer from "components/section/Footer";
import CustomLNB from "components/common/CustomLNB";
// MUI
import { Box, Grid } from "@mui/material";
// type
import { Page } from "constants/pages";

interface MainLayoutProps {
  pageData?: Page;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children, pageData }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh", // 화면 전체 높이를 채우도록 설정
      }}
    >
      {/* AppBar */}
      <CustomAppBar />

      {/* Main Content */}
      <Box sx={{ display: "flex", flex: 1 }}>
        {/* Custom LNB */}
        <Box
          sx={{
            width: { xs: "100%", md: "0px" },
            display: { xs: "none", md: "block" },

            zIndex: 30,
            position: "relative", // relative로 레이아웃 정렬 보정
          }}
        >
          <CustomLNB />
        </Box>

        {/* Page Content */}
        <Box
          sx={{
            flexGrow: 1, // 남은 공간을 차지하도록 설정
            maxWidth: "1200px",
            mx: "auto", // 수평 중앙 정렬
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
      </Box>

      {/* Footer */}
      <Footer />
    </Box>
  );
};

export default MainLayout;
