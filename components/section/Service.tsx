import * as React from "react";
import {
  Box,
  Grid,
  Typography,
  styled,
  Container,
  Paper,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
} from "@mui/material";
import { Check } from "@mui/icons-material";

interface ManagementSectionProps {
  title: string;
  subtitle: string;
  items: { title: string; description: string | string[] }[];
}

const SectionContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(12, 0),
  backgroundColor: "#ffffff",
  position: "relative",
}));

const ServiceCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4, 5),
  height: "100%",
  backgroundColor: "#ffffff",
  borderRadius: theme.spacing(1),
  transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
  "&:hover": {
    transform: "translateY(-8px)",
    boxShadow: "0 10px 40px rgba(0,0,0,0.08)",
  },
}));

const ListItemStyled = styled(ListItem)(({ theme }) => ({
  paddingLeft: 0,
  paddingRight: 0,
  marginBottom: theme.spacing(1),
}));

const ServicesSection: React.FC = () => {
  const serviceItems = [
    {
      title: "사무용 가구",
      description: [
        "가성비 좋은 중소기업 브랜드 제품을 제공하며, 레이아웃에 알맞게 세팅해드립니다.",
        "책상, 의자, 서랍, 파티션, 탕비장, 임원용 가구 등 모든 품목의 가구 주문이 가능",
      ],
    },
    {
      title: "기업이사",
      description: [
        "전문업체와 함께 책임지고 기간 안에 이사 및 건물 내 이동을 돕습니다.",
        "인사 이동으로 인한 레이아웃 변경 시 평면도 제공",
      ],
    },
    {
      title: "시설 유지관리",
      description: [
        "조명, 콘센트, 도어, 가구, 벽면 찍힘 등 신속한 대응",
        "네트워크 공사 및 점검 서비스 제공",
      ],
    },
    {
      title: "전문 청소 서비스",
      description: [
        "년 2회 P타일(데코타일) 기계청소 및 왁스 작업",
        "월 1회 정기적으로 카펫 기계 청소",
        "년 2회 냉난방기 필터 및 내부 청소",
        "년 4회 분기별 대청소(창틀, 유리, 화장실, 공용구역 등)",
      ],
    },
  ];

  return (
    <SectionContainer>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center", mb: 8 }}>
          <Typography
            component="span"
            sx={{
              color: "primary.main",
              fontSize: "1rem",
              fontWeight: 600,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              display: "block",
              marginBottom: 2,
            }}
          >
            Our Services
          </Typography>
          <Typography
            variant="h3"
            component="h2"
            sx={{
              fontWeight: 700,
              marginBottom: 3,
              fontSize: { xs: "2rem", md: "2.5rem" },
              color: "#1a1a1a",
              maxWidth: "800px",
              margin: "0 auto 24px",
            }}
          >
            TOTAL OFFICE MANAGEMENT
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: "#666",
              maxWidth: "600px",
              margin: "0 auto",
              fontSize: { xs: "1rem", md: "1.1rem" },
              lineHeight: 1.8,
            }}
          >
            사무용 가구부터 시설관리까지 원스톱 서비스를 제공합니다
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {serviceItems.map((item, index) => (
            <Grid item xs={12} md={6} key={index}>
              <ServiceCard elevation={0}>
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 700,
                    marginBottom: 3,
                    color: "#1a1a1a",
                    fontSize: { xs: "1.25rem", md: "1.4rem" },
                  }}
                >
                  {item.title}
                </Typography>
                <List disablePadding>
                  {item.description.map((desc, idx) => (
                    <ListItemStyled key={idx}>
                      <ListItemIcon sx={{ minWidth: 36 }}>
                        <Check sx={{ color: "primary.main" }} />
                      </ListItemIcon>
                      <ListItemText
                        primary={desc}
                        primaryTypographyProps={{
                          sx: {
                            fontSize: "1rem",
                            color: "#666",
                            lineHeight: 1.6,
                          },
                        }}
                      />
                    </ListItemStyled>
                  ))}
                </List>
              </ServiceCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </SectionContainer>
  );
};

export default ServicesSection;
