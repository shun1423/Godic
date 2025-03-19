import * as React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import {
  Construction,
  DesignServices,
  TableRestaurant,
  Chair,
  NetworkCheck,
  CleaningServices,
  LocalShipping,
  Handyman,
} from "@mui/icons-material";

const Skills: React.FC = () => {
  const theme = useTheme();
  // md 이하를 모바일로 간주
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  // 시공 단계
  const services = [
    {
      phase: "STEP 1",
      title: "공간 설계",
      icon: <DesignServices sx={{ fontSize: 40 }} />,
      color: "#2196f3",
      description: "효율적인 업무 동선과 공간 활용을 고려한 맞춤형 설계",
    },
    {
      phase: "STEP 2",
      title: "인테리어",
      icon: <Construction sx={{ fontSize: 40 }} />,
      color: "#ff9800",
      description: "기업의 아이덴티티를 반영한 감각적인 인테리어 시공",
    },
    {
      phase: "STEP 3",
      title: "사무용 가구",
      icon: <Chair sx={{ fontSize: 40 }} />,
      color: "#4caf50",
      description: "품질과 디자인을 고려한 최적의 사무용 가구 선정 및 납품",
    },
    {
      phase: "STEP 4",
      title: "통합 관리",
      icon: <Handyman sx={{ fontSize: 40 }} />,
      color: "#9c27b0",
      description: "안정적인 업무 환경을 위한 지속적인 유지 관리 서비스",
    },
  ];

  // 사무실 통합 관리 서비스
  const managementServices = [
    {
      icon: <CleaningServices sx={{ fontSize: 32, color: "#9c27b0" }} />,
      title: "전문 청소",
      description: "정기적인 전문 청소로 쾌적한 환경 유지",
      color: "#9c27b0",
    },
    {
      icon: <LocalShipping sx={{ fontSize: 32, color: "#9c27b0" }} />,
      title: "기업 이사",
      description: "체계적인 이사 프로세스로 빠르고 안전하게",
      color: "#9c27b0",
    },
    {
      icon: <Handyman sx={{ fontSize: 32, color: "#9c27b0" }} />,
      title: "유지 보수",
      description: "신속한 시설 관리 서비스로 문제 해결",
      color: "#9c27b0",
    },
    {
      icon: <NetworkCheck sx={{ fontSize: 32, color: "#9c27b0" }} />,
      title: "네트워크",
      description: "안정적인 네트워크 환경 구축 및 관리",
      color: "#9c27b0",
    },
  ];

  // 파트너 로고들
  const companyLogos = [
    "함께한기업1.png",
    "함께한기업2.png",
    "함께한기업3.png",
    "함께한기업4.png",
    "함께한기업5.png",
    "함께한기업6.png",
    "함께한기업7.png",
  ];

  // 마케트 효과를 위해 로고 목록을 2배로 (무한 롤링)
  const duplicatedLogos = [...companyLogos, ...companyLogos];

  return (
    <Box sx={{ py: { xs: 6, md: 12 }, bgcolor: "#ffffff" }}>
      <Container maxWidth="lg">
        {/* 메인 타이틀 섹션 */}
        <Box sx={{ textAlign: "center", mb: { xs: 8, md: 12 } }}>
          <Typography
            variant="h3"
            gutterBottom
            sx={{
              fontWeight: 800,
              fontSize: { xs: "2rem", md: "2.5rem" },
              mb: 3,
            }}
          >
            오피스 종합 솔루션
          </Typography>
          <Typography
            variant="h6"
            sx={{
              maxWidth: 800,
              mx: "auto",
              color: "text.secondary",
              fontSize: { xs: "1rem", md: "1.125rem" },
              lineHeight: 1.6,
            }}
          >
            스마트하고 효율적인 업무 환경을 위한 맞춤형 솔루션
          </Typography>
        </Box>

        {/* 시공 프로세스 (타임라인 제거) */}
        <Box sx={{ position: "relative", mb: { xs: 10, md: 15 } }}>
          {/* 타임라인 가로선 제거 */}

          <Grid container spacing={4}>
            {services.map((service, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Box
                  sx={{
                    position: "relative",
                    textAlign: "center",
                    "& .MuiSvgIcon-root": {
                      color: "white",
                    },
                  }}
                >
                  <Box
                    sx={{
                      width: 80,
                      height: 80,
                      borderRadius: "50%",
                      bgcolor: service.color,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      mx: "auto",
                      mb: 3,
                      position: "relative",
                      zIndex: 1,
                    }}
                  >
                    {service.icon}
                  </Box>
                  <Typography
                    sx={{
                      color: service.color,
                      fontWeight: "bold",
                      mb: 2,
                      fontSize: "1rem",
                    }}
                  >
                    {service.phase}
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: "bold",
                      mb: 2,
                      fontSize: { xs: "1.25rem", md: "1.5rem" },
                    }}
                  >
                    {service.title}
                  </Typography>
                  <Typography
                    sx={{
                      color: "text.secondary",
                      fontSize: "1rem",
                      lineHeight: 1.6,
                    }}
                  >
                    {service.description}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* 통합 관리 서비스 - 글자 크기 축소 및 디자인 통일 */}
        <Box sx={{ mb: { xs: 10, md: 15 }, textAlign: "center" }}>
          <Typography
            variant="h4" // h3에서 h4로 크기 축소
            sx={{
              fontWeight: 800,
              fontSize: { xs: "1.75rem", md: "2.25rem" }, // 크기 축소
              mb: 3,
              color: "#9c27b0", // 통합 관리 테마 컬러와 통일
            }}
          >
            통합 관리 서비스
          </Typography>
          <Typography
            sx={{
              maxWidth: 800,
              mx: "auto",
              mb: 6, // 간격 축소
              color: "text.secondary",
              fontSize: { xs: "0.9rem", md: "1rem" }, // 크기 축소
              lineHeight: 1.6,
            }}
          >
            개별 맞춤형 관리로 완벽한 업무 환경을 유지해드립니다
          </Typography>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                sm: "1fr 1fr",
                md: "1fr 1fr 1fr 1fr",
              },
              gap: 3, // 간격 축소
            }}
          >
            {managementServices.map((service, index) => (
              <Box
                key={index}
                sx={{
                  p: 3,
                  borderRadius: 2,
                  bgcolor: `${service.color}05`, // 매우 연한 테마 컬러 배경
                  border: `1px solid ${service.color}20`, // 테마 컬러 테두리
                  transition: "transform 0.2s, box-shadow 0.2s",
                  "&:hover": {
                    transform: "translateY(-8px)",
                    boxShadow: `0 5px 15px ${service.color}30`,
                  },
                }}
              >
                <Box sx={{ mb: 2 }}>{service.icon}</Box>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: "bold",
                    mb: 1.5,
                    fontSize: { xs: "1.1rem", md: "1.25rem" }, // 크기 축소
                  }}
                >
                  {service.title}
                </Typography>
                <Typography
                  sx={{
                    color: "text.secondary",
                    fontSize: { xs: "0.9rem", md: "0.95rem" }, // 크기 축소
                    lineHeight: 1.6,
                  }}
                >
                  {service.description}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>

        {/* 파트너 섹션 */}
        <Box sx={{ textAlign: "center", mb: { xs: 8, md: 10 } }}>
          <Typography
            variant="h3"
            sx={{
              fontWeight: 800,
              fontSize: { xs: "2rem", md: "2.5rem" },
              mb: 3,
            }}
          >
            신뢰할 수 있는 파트너
          </Typography>
          <Typography
            sx={{
              maxWidth: 800,
              mx: "auto",
              mb: 8,
              color: "text.secondary",
              fontSize: { xs: "1rem", md: "1.125rem" },
              lineHeight: 1.6,
            }}
          >
            국내 유수 기업들과 함께 성장하고 있습니다
          </Typography>

          {/* 
            모바일에서는 정적으로 나열,
            데스크톱에서는 마케트(무한 롤링) 
          */}
          {isMobile ? (
            // ------------------
            // 1) 모바일: 정적 리스트
            // ------------------
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: 4,
                py: 4,
              }}
            >
              {companyLogos.map((logo, index) => (
                <Box
                  key={index}
                  sx={{
                    width: { xs: "120px", sm: "150px" },
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <img
                    src={`/${logo}`}
                    alt={`Partner company logo ${index + 1}`}
                    style={{
                      width: "100%",
                      height: "auto",
                      objectFit: "contain",
                      opacity: 0.7,
                      transition: "all 0.3s ease",
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.opacity = "1";
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.opacity = "0.7";
                    }}
                  />
                </Box>
              ))}
            </Box>
          ) : (
            // ------------------
            // 2) 데스크톱: 무한 롤링(마케트)
            // ------------------
            <Box
              sx={{
                overflow: "hidden",
                position: "relative",
                bgcolor: "#ffffff",
                py: 4,
                "&::before, &::after": {
                  content: '""',
                  position: "absolute",
                  top: 0,
                  width: "100px",
                  height: "100%",
                  zIndex: 1,
                },
                "&::before": {
                  left: 0,
                  background:
                    "linear-gradient(to right, #ffffff 0%, transparent 100%)",
                },
                "&::after": {
                  right: 0,
                  background:
                    "linear-gradient(to left, #ffffff 0%, transparent 100%)",
                },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  animation: "marquee 40s linear infinite",
                  "@keyframes marquee": {
                    "0%": { transform: "translateX(0)" },
                    "100%": { transform: "translateX(-50%)" },
                  },
                  "&:hover": {
                    animationPlayState: "paused",
                  },
                }}
              >
                {duplicatedLogos.map((logo, index) => (
                  <Box
                    key={index}
                    sx={{
                      minWidth: "180px",
                      px: 3,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <img
                      src={`/${logo}`}
                      alt={`Partner company logo ${index + 1}`}
                      style={{
                        maxWidth: "100%",
                        height: "40px",
                        objectFit: "contain",
                        opacity: 0.7,
                        transition: "all 0.3s ease",
                      }}
                      onMouseOver={(e) => {
                        e.currentTarget.style.opacity = "1";
                      }}
                      onMouseOut={(e) => {
                        e.currentTarget.style.opacity = "0.7";
                      }}
                    />
                  </Box>
                ))}
              </Box>
            </Box>
          )}
        </Box>
      </Container>
    </Box>
  );
};

export default Skills;
