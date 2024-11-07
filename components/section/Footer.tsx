import * as React from "react";
// @mui
import { Box, Container, Typography, styled } from "@mui/material";
// custom component
import FacebookIconLink from "components/common/FacebookIconLink";
import InstagramIconLink from "components/common/InstagramIconLink";
import TwitterIconLink from "components/common/TwitterIconLink";

const FooterContainer = styled(Box)(({ theme }) => ({
  width: "fill",
  backgroundColor: theme.palette.grey[900],
  color: theme.palette.common.white,
  padding: "2rem 0",
  zIndex: 1,
  position: "relative",
}));

const FooterContent = styled(Container)(({ theme }) => ({
  display: "flex",
  width: "fill",
  justifyContent: "space-between",
  alignItems: "center",
  flexDirection: "column",
  gap: "1rem", // 요소 간 간격 추가
  [theme.breakpoints.up("sm")]: {
    flexDirection: "row",
  },
  [theme.breakpoints.down("sm")]: {
    padding: "0 1rem", // 작은 화면에서의 좌우 padding 조정
  },
}));

const CompanyInfo = styled(Box)(({ theme }) => ({
  textAlign: "center",
  marginBottom: "1rem",
  [theme.breakpoints.up("sm")]: {
    textAlign: "left",
    marginBottom: 0,
  },
}));

const SNSLinks = styled(Box)({
  display: "flex",
  gap: "1rem", // SNS 아이콘 간 간격
  flexWrap: "wrap", // 작은 화면에서 아이콘들이 자동으로 줄바꿈 되도록
});

const Footer: React.FunctionComponent = () => {
  return (
    <FooterContainer>
      <FooterContent maxWidth="lg">
        {/* 회사 정보 */}
        <CompanyInfo>
          <Typography variant="body2">고딕이엔씨 주식회사</Typography>
          <Typography variant="body2">
            대표이사: 최연선 | 사업자번호: 382-81-02781
          </Typography>
          <Typography variant="body2">
            주소: 경기도 성남시 중원구 양헌로 411 시티오피스타워 909호 | 번호:
            031-758-1333
          </Typography>
        </CompanyInfo>

        {/* SNS 링크 */}
        <SNSLinks>
          <FacebookIconLink />
          <InstagramIconLink />
          <TwitterIconLink />
        </SNSLinks>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
