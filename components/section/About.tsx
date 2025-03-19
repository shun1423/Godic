import * as React from "react";
import Image from "next/image";
import {
  Box,
  Card,
  CardContent,
  Grid,
  Skeleton,
  Typography,
  styled,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import ContainerGrid from "components/common/ContainerGrid";

interface AboutProps {}

const ImageWrapper = styled(Box)(() => ({
  position: "relative",
  width: "100%",
  height: "auto",
  overflow: "hidden",
  borderRadius: "8px",
}));

const CustomContainer = styled(Box)(({ theme }) => ({
  scrollMarginTop: "1rem",
  marginBottom: "8rem",
  [theme.breakpoints.up("sm")]: {
    scrollMarginTop: "2rem",
  },
}));

const About: React.FC<AboutProps> = () => {
  const [isLoaded, setIsLoaded] = React.useState(false);
  const theme = useTheme();
  const isUpMd = useMediaQuery(theme.breakpoints.up("md"));

  // 텍스트 애니메이션을 위한 상태
  const [inView, setInView] = React.useState(false);
  const containerRef = React.useRef<HTMLDivElement | null>(null);

  // Intersection Observer를 사용하여 컴포넌트가 화면에 보이는지 감지
  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // 컴포넌트가 화면에 50% 이상 보이면 애니메이션 활성화
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <CustomContainer id="about" ref={containerRef}>
      <Card sx={{ boxShadow: "none", border: "none" }}>
        <ContainerGrid
          sx={{
            marginTop: 0,
            height: "100%",
            maxWidth: { xs: "100%", md: "1200px" },
            mx: "auto",
            px: { xs: 2, md: 0 },
          }}
        >
          <Box>
            <ImageWrapper
              sx={{
                // 미묘한 호버 효과
                "&:hover img": {
                  transform: "scale(1.03)",
                },
                // 이미지 로드 시 페이드인 효과
                opacity: isLoaded ? 1 : 0,
                transition: "opacity 0.6s ease",
              }}
            >
              <Image
                src="/gothic.png"
                alt="gothic image1"
                width={1600}
                height={900}
                style={{
                  width: "100%",
                  height: "auto",
                  objectFit: "cover",
                  transition: "transform 0.6s ease",
                }}
                onLoadingComplete={() => setIsLoaded(true)}
              />
              {!isLoaded && (
                <Skeleton
                  variant="rectangular"
                  sx={{
                    backgroundColor: "currentcolor",
                    height: "100%",
                    position: "absolute",
                    width: "100%",
                    top: 0,
                    left: 0,
                  }}
                />
              )}
            </ImageWrapper>
          </Box>

          <Grid item xs={12} sx={{ padding: "2rem" }}>
            <Card
              sx={{
                boxShadow: "none",
                border: "none",
                height: "100%",
                position: "relative",
              }}
            >
              <CardContent>
                <Box
                  sx={{
                    width: "100%",
                    textAlign: "center",
                  }}
                >
                  <Typography
                    component="h1"
                    variant="h3"
                    sx={{
                      fontWeight: 800,
                      marginBottom: "0.5rem",
                      [theme.breakpoints.down("sm")]: {
                        fontSize: "2rem",
                      },
                      // 컨테이너가 보이면 애니메이션 실행
                      opacity: inView ? 1 : 0,
                      transform: inView ? "translateY(0)" : "translateY(20px)",
                      transition: "opacity 0.5s ease, transform 0.5s ease",
                    }}
                  >
                    사무실 관리 담당자 분들의
                  </Typography>
                  <Typography
                    component="h1"
                    variant="h3"
                    sx={{
                      fontWeight: 800,
                      marginBottom: "2rem",
                      [theme.breakpoints.down("sm")]: {
                        fontSize: "2rem",
                      },
                      // 컨테이너가 보이면 애니메이션 실행 (약간의 지연)
                      opacity: inView ? 1 : 0,
                      transform: inView ? "translateY(0)" : "translateY(20px)",
                      transition:
                        "opacity 0.5s ease 0.1s, transform 0.5s ease 0.1s",
                      // 배경 하이라이트 효과
                      "& span": {
                        position: "relative",
                        zIndex: 1,
                        "&::after": {
                          content: '""',
                          position: "absolute",
                          bottom: "5px",
                          left: 0,
                          height: "12px",
                          backgroundColor: theme.palette.primary.main + "30",
                          zIndex: -1,
                          borderRadius: "3px",
                          // 애니메이션 효과
                          transition: inView ? "width 0.8s ease 0.3s" : "",
                          width: inView ? "100%" : "0%",
                        },
                      },
                    }}
                  >
                    <span>부담을 덜어줄 솔루션!</span>
                  </Typography>

                  <Typography
                    component="h2"
                    variant="h5"
                    fontWeight="bold"
                    sx={{
                      // 컨테이너가 보이면 애니메이션 실행 (더 긴 지연)
                      opacity: inView ? 1 : 0,
                      transform: inView ? "translateY(0)" : "translateY(20px)",
                      transition:
                        "opacity 0.5s ease 0.2s, transform 0.5s ease 0.2s",
                    }}
                  >
                    복잡하고 피곤한 인테리어 쉽게 풀어드립니다
                  </Typography>

                  {/* 구분선을 제거하고 단순 공간만 유지 */}
                  <Box sx={{ height: "1rem" }} />

                  <Typography
                    component="h2"
                    variant="h5"
                    fontWeight="bold"
                    sx={{
                      // 컨테이너가 보이면 애니메이션 실행 (가장 긴 지연)
                      opacity: inView ? 1 : 0,
                      transform: inView ? "translateY(0)" : "translateY(20px)",
                      transition:
                        "opacity 0.5s ease 0.3s, transform 0.5s ease 0.3s",
                    }}
                  >
                    귀찮고 난감한 사무실 관리 해결해 드립니다
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </ContainerGrid>
      </Card>
    </CustomContainer>
  );
};

export default About;
