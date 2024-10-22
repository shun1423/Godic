import * as React from "react";
// @mui
import { Box, Container, Typography, styled } from "@mui/material";
// custom component
import FacebookIconLink from "components/common/FacebookIconLink";
import InstagramIconLink from "components/common/InstagramIconLink";
import TwitterIconLink from "components/common/TwitterIconLink";

const FooterContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  backgroundColor: theme.palette.grey[900],
  color: theme.palette.common.white,
  padding: "2rem 0",
  zIndex: 1, // z-index를 1로 설정하여 LNB보다 뒤로 배치
  position: "relative", // z-index가 적용되도록
}));

const FooterContent = styled(Container)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  flexDirection: "column",
  [theme.breakpoints.up("sm")]: {
    flexDirection: "row",
  },
}));

const Footer: React.FunctionComponent = () => {
  return (
    <FooterContainer>
      <FooterContent maxWidth="lg">
        {/* 회사 정보 */}
        <Box textAlign={{ xs: "center", sm: "left" }} mb={{ xs: 1, sm: 0 }}>
          <Typography variant="body2">고딕이엔씨 주식회사</Typography>
          <Typography variant="body2">
            대표이사: 최연선 | 사업자번호: 382-81-02781
          </Typography>
          <Typography variant="body2">
            주소: 경기도 성남시 중원구 양헌로 411 시티오피스타워 909호 | 번호:
            031-758-1333
          </Typography>
        </Box>

        {/* SNS 링크 */}
        <Box display="flex" gap={2}>
          <FacebookIconLink />
          <InstagramIconLink />
          <TwitterIconLink />
        </Box>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
