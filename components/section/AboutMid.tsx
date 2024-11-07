import * as React from "react";
import Image from "next/image";
import {
  Box,
  Grid,
  Typography,
  Skeleton,
  Collapse,
  useMediaQuery,
  useTheme,
  styled,
  Container,
} from "@mui/material";

interface AboutProps {}

const ImageWrapper = styled(Box)(({ theme }) => ({
  position: "relative",
  width: "100%",
  height: 0,
  paddingTop: "56.25%", // 16:9 비율 유지
  overflow: "hidden",
  borderRadius: "12px",
}));

const CustomContainer = styled(Box)(({ theme }) => ({
  scrollMarginTop: "1rem",
  [theme.breakpoints.up("sm")]: { scrollMarginTop: "2rem" },
  marginBottom: "6rem", // 섹션 간 여백 추가
  paddingTop: theme.spacing(12), // 상단 여백 추가
  [theme.breakpoints.up("md")]: {
    paddingTop: theme.spacing(16), // 중간 화면 이상에서 상단 여백 추가
  },
}));

const AboutMid: React.FunctionComponent<AboutProps> = () => {
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [showMore, setShowMore] = React.useState(false);

  const theme = useTheme();
  const isUpMd = useMediaQuery(theme.breakpoints.up("md"));

  React.useEffect(() => {
    setShowMore(true);
  }, [isUpMd]);

  const renderSection = (
    imgSrc: string,
    content: React.ReactNode,
    reverse: boolean
  ) => (
    <Grid
      container
      spacing={2}
      direction={reverse ? "row-reverse" : "row"}
      sx={{ marginBottom: "8rem", alignItems: "center", padding: "50px" }}
    >
      <Grid item xs={12} md={7}>
        <ImageWrapper>
          <Image
            alt="Office Image"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            src={imgSrc}
            onLoad={() => setIsLoaded(true)}
          />
          {!isLoaded && (
            <Skeleton
              variant="rectangular"
              sx={{ position: "absolute", width: "100%", height: "100%" }}
            />
          )}
        </ImageWrapper>
      </Grid>
      <Grid item xs={12} md={5}>
        <Box
          sx={{
            padding: "2rem",
            textAlign: "initial",
          }}
        >
          <Collapse in={showMore} timeout="auto" unmountOnExit>
            {content}
          </Collapse>
        </Box>
      </Grid>
    </Grid>
  );

  return (
    <Box sx={{ backgroundColor: "#F4F4F4" }}>
      <CustomContainer id="about">
        <Container maxWidth="md">
          <Typography
            component="h1"
            variant="h3"
            fontWeight="600"
            textAlign="center"
            sx={{
              color: "#333",
              letterSpacing: "0.05em",
              textTransform: "uppercase",
              marginBottom: { xs: "1.5rem", md: "2.5rem" },
              fontSize: { xs: "1.8rem", md: "2.5rem" },
            }}
          >
            Office Interior
          </Typography>
        </Container>
        <Container maxWidth="lg">
          <Grid item xs={12} sx={{ paddingBottom: 10 }}>
            <ImageWrapper>
              <Image
                alt="gothic image1"
                layout="fill"
                objectFit="cover"
                objectPosition="center center"
                onLoad={() => setIsLoaded(true)}
                src="/고딕 이미지 1.jpg"
              />
              {!isLoaded && (
                <Skeleton
                  variant="rectangular"
                  sx={{
                    backgroundColor: "currentcolor",
                    height: "100%",
                    position: "absolute",
                    width: "100%",
                  }}
                />
              )}
            </ImageWrapper>
          </Grid>
          <Grid item xs={12} sx={{ padding: { xs: "1.5rem", md: "2rem" } }}>
            <Box>
              <Collapse in={showMore} timeout="auto" unmountOnExit>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: { xs: "column", md: "row" },
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    marginBottom: "2.5rem",
                    gap: { xs: "1.5rem", md: "2rem" },
                  }}
                >
                  <Typography
                    component="h2"
                    variant="h5"
                    fontWeight="500"
                    sx={{
                      width: { xs: "100%", md: "25%" },
                      letterSpacing: "0.03em",
                      color: "#555",
                    }}
                  >
                    다양한 제안
                  </Typography>
                  <Typography
                    fontWeight="bold" // 굵은 텍스트 설정
                    sx={{
                      width: { xs: "100%", md: "70%" },
                      textAlign: "left",
                      lineHeight: 1.8,
                      color: "#666",
                    }}
                  >
                    사무실 공사에 필요한 요소들과 합리적인 레이아웃을 제안해
                    드립니다. 전문가가 아니면 놓칠 수 있는 부분들을 체크해서,
                    추후 문제가 없도록 제안 드립니다. 미니멀 하면서도 세련된
                    디자인으로 제안 드립니다.
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: { xs: "column", md: "row" },
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    gap: { xs: "1.5rem", md: "2rem" },
                  }}
                >
                  <Typography
                    component="h2"
                    variant="h5"
                    fontWeight="500"
                    sx={{
                      width: { xs: "100%", md: "25%" },
                      letterSpacing: "0.03em",
                      color: "#555",
                    }}
                  >
                    가성비
                  </Typography>
                  <Typography
                    fontWeight="bold" // 굵은 텍스트 설정
                    sx={{
                      width: { xs: "100%", md: "70%" },
                      textAlign: "left",
                      lineHeight: 1.8,
                      color: "#666",
                    }}
                  >
                    적은 예산으로도 문제 없습니다. 가성비 좋은 자재들로 제안
                    드립니다. 비용 문제로 인해 전체 공사가 힘드시다면, 부분
                    공사도 충분히 가능합니다.
                  </Typography>
                </Box>
              </Collapse>
            </Box>
          </Grid>
        </Container>
      </CustomContainer>

      {/* 나머지 섹션들 */}
      {renderSection(
        "/Godic7.jpeg",
        <>
          <Typography
            variant="h5"
            fontWeight="bold"
            sx={{
              fontSize: { xs: "1.25rem", md: "1.5rem" },
              marginBottom: "1rem",
            }}
          >
            효율적이고 꼭 필요한 부분만으로 완성합니다
          </Typography>
          <Typography>
            고객의 예산과 필요를 최우선으로 고려하여, 불필요한 공사를 줄이고
            필요한 부분에 집중합니다. 장기적인 유지보수 비용까지 고려한 설계를
            통해, 합리적이면서도 완성도 높은 공간을 제공합니다.
          </Typography>
        </>,
        false
      )}
      {renderSection(
        "/Godic3.jpeg",
        <>
          <Typography
            variant="h5"
            fontWeight="bold"
            sx={{
              fontSize: { xs: "1.25rem", md: "1.5rem" },
              marginBottom: "1rem",
            }}
          >
            모든 공간이 특별한 이유가 있습니다
          </Typography>
          <Typography>
            각 공간의 특성에 맞춰 최적화된 설계를 제안합니다. 업무 효율을 높이고
            사용자의 편의성을 최우선으로 고려하여 완성합니다.
          </Typography>
        </>,
        true
      )}
      {renderSection(
        "/Godic8.jpeg",
        <>
          <Typography
            variant="h5"
            fontWeight="bold"
            sx={{
              fontSize: { xs: "1.25rem", md: "1.5rem" },
              marginBottom: "1rem",
            }}
          >
            현대적이고 미니멀한 디자인
          </Typography>
          <Typography>
            세련된 사무실 디자인으로 이미지를 새롭게 합니다. 최신 트렌드를
            반영하여 유행에 뒤처지지 않는 공간을 만들어 드립니다.
          </Typography>
        </>,
        false
      )}
    </Box>
  );
};

export default AboutMid;
