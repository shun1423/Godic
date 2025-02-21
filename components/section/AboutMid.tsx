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
  paddingTop: "56.25%",
  overflow: "hidden",
  borderRadius: "12px",
}));

const CustomContainer = styled(Box)(({ theme }) => ({
  scrollMarginTop: "1rem",
  [theme.breakpoints.up("sm")]: { scrollMarginTop: "1.5rem" },
  marginBottom: "4rem",
  paddingTop: theme.spacing(8),
  [theme.breakpoints.up("md")]: {
    paddingTop: theme.spacing(10),
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
      sx={{
        marginBottom: "5rem",
        alignItems: "center",
        padding: { xs: "30px", md: "40px" },
      }}
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
            padding: { xs: "1.5rem", md: "2rem" },
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
          <Box sx={{ textAlign: "center", mb: { xs: 4, md: 6 } }}>
            <Typography
              component="span"
              sx={{
                color: "primary.main",
                fontSize: "1.1rem",
                fontWeight: 600,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                display: "block",
                marginBottom: 1.5,
              }}
            >
              Our Expertise
            </Typography>
            <Typography
              component="h1"
              variant="h2"
              fontWeight="800"
              sx={{
                color: "#1a1a1a",
                letterSpacing: "0.02em",
                marginBottom: { xs: 2, md: 3 },
                fontSize: { xs: "2.5rem", md: "3.5rem" },
              }}
            >
              Office Interior
            </Typography>
            <Typography
              variant="h6"
              color="text.secondary"
              sx={{
                maxWidth: "600px",
                margin: "0 auto",
                lineHeight: 1.8,
              }}
            >
              혁신적인 디자인과 실용성의 완벽한 조화를 통해 최적의 업무 환경을
              제공합니다
            </Typography>
          </Box>
        </Container>
        <Container maxWidth="lg">
          <Grid item xs={12} sx={{ paddingBottom: 6 }}>
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
          <Grid item xs={12} sx={{ padding: { xs: "1rem", md: "1.5rem" } }}>
            <Box>
              <Collapse in={showMore} timeout="auto" unmountOnExit>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: { xs: "column", md: "row" },
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    marginBottom: "2rem",
                    gap: { xs: "1rem", md: "1.5rem" },
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
                    fontWeight="bold"
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
                    gap: { xs: "1rem", md: "1.5rem" },
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
                    fontWeight="bold"
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
            전 지역 어디든 공사 가능합니다
          </Typography>
          <Typography>
            지사 또는 전국에 사무실을 갖고 있어 관리하기 어려우셨다면, 저희가
            한번에 해결 해드리겠습니다. 전국 어디든 시공 가능하며, 통일성 있고
            합리적인 가격의 공사를 제공합니다.
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
            특수한 공간의 공사도 잘합니다
          </Typography>
          <Typography>
            상황실, 물류센터, 숙직실, 임원실 등과 같은 특수한 성격을 지닌 공간도
            가능합니다. 수년간의 경험으로, 다양한 공간의 특성에 맞춰 최적화된
            설계를 제안합니다.
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
            세련되고 미니멀한 디자인
          </Typography>
          <Typography>
            불필요하고 거추장스러운 디자인 없이 효율적이고 세련된 디자인을 추구
            합니다. 미니멀 하고 트렌드에 뒤처지지 않는 공간을 만들어 드립니다.
          </Typography>
        </>,
        false
      )}
    </Box>
  );
};

export default AboutMid;
