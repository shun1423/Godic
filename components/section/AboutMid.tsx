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
  BoxProps,
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
  background: "linear-gradient(to bottom, #ffffff, #f8f8f8)",
  [theme.breakpoints.up("md")]: {
    paddingTop: theme.spacing(10),
  },
}));

const BannerWrapper = styled(Box)<BoxProps>(({ theme }) => ({
  textAlign: "center",
  marginBottom: "2rem",
  padding: theme.spacing(6, 2),
  position: "relative",
  "&::after": {
    content: '""',
    position: "absolute",
    bottom: 0,
    left: "50%",
    transform: "translateX(-50%)",
    width: "60px",
    height: "3px",
    backgroundColor: theme.palette.primary.main,
  },
  [theme.breakpoints.up("sm")]: {
    padding: theme.spacing(8, 3),
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
    <CustomContainer id="aboutmid">
      <Container maxWidth="md">
        <BannerWrapper>
          <Typography
            component="span"
            sx={{
              color: "primary.main",
              fontSize: "1.1rem",
              fontWeight: 600,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              display: "block",
              marginBottom: 2,
            }}
          >
            OFFICE INTERIOR
          </Typography>
          <Typography
            variant="h3"
            sx={{
              marginBottom: "1.5rem",
              color: "#1a1a1a",
              fontWeight: 800,
              letterSpacing: "-0.02em",
              fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
            }}
          >
            고민은 덜고, 공간은 채우다.
          </Typography>

          <Typography
            variant="h5"
            sx={{
              marginBottom: "1rem",
              color: "#333",
              fontWeight: 600,
              fontSize: { xs: "1.2rem", sm: "1.5rem" },
            }}
          >
            가격, 실용성, 디자인 모두 만족시켜드립니다.
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "#666",
              maxWidth: "600px",
              margin: "0 auto",
              fontSize: { xs: "1rem", sm: "1.1rem" },
              lineHeight: 1.8,
            }}
          >
            소규모 공사, 가성비 공사, 전국 시공 가능합니다.
          </Typography>
        </BannerWrapper>
      </Container>
      <Container maxWidth="lg">
        {/* 첫 번째 섹션: 다양한 제안 (통합된 섹션) */}
        {renderSection(
          "/고딕 이미지 1.jpg",
          <>
            <Typography
              variant="h5"
              fontWeight="bold"
              sx={{
                fontSize: { xs: "1.25rem", md: "1.5rem" },
                marginBottom: "1rem",
              }}
            >
              다양한 제안
            </Typography>
            <Typography sx={{ marginBottom: "0.75rem" }}>
              사무실 공사에 필요한 요소들과 합리적인 레이아웃을 제안해 드립니다.
              전문가가 아니면 놓칠 수 있는 부분들을 체크해서, 추후 문제가 없도록
              제안 드립니다.
            </Typography>
            <Typography>
              미니멀 하면서도 세련된 디자인으로 제안 드립니다. 적은 예산으로도
              가성비 좋은 자재들을 활용해 최적의 결과물을 제공합니다.
            </Typography>
          </>,
          false
        )}

        {/* 두 번째 섹션: 전 지역 어디든 공사 가능 */}
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
            <Typography sx={{ marginBottom: "0.75rem" }}>
              지사 또는 전국에 사무실을 갖고 있어 관리하기 어려우셨다면, 저희가
              한번에 해결 해드리겠습니다.
            </Typography>
            <Typography>
              전국 어디든 시공 가능하며, 통일성 있고 합리적인 가격의 공사를
              제공합니다.
            </Typography>
          </>,
          true
        )}

        {/* 세 번째 섹션: 특수한 공간의 공사 */}
        {renderSection(
          "/Godic11.jpeg",
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
            <Typography sx={{ marginBottom: "0.75rem" }}>
              상황실, 물류센터, 숙직실, 임원실 등과 같은 특수한 성격을 지닌
              공간도 가능합니다.
            </Typography>
            <Typography>
              수년간의 경험으로, 다양한 공간의 특성에 맞춰 최적화된 설계를
              제안합니다.
            </Typography>
          </>,
          false
        )}

        {/* 네 번째 섹션: 세련되고 미니멀한 디자인 */}
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
            <Typography sx={{ marginBottom: "0.75rem" }}>
              불필요하고 거추장스러운 디자인 없이 효율적이고 세련된 디자인을
              추구 합니다.
            </Typography>
            <Typography>
              미니멀 하고 트렌드에 뒤처지지 않는 공간을 만들어 드립니다.
            </Typography>
          </>,
          true
        )}

        {/* 다섯 번째 섹션: 최적화된 가성비 공사 */}
        {renderSection(
          "/Godic10.png",
          <>
            <Typography
              variant="h5"
              fontWeight="bold"
              sx={{
                fontSize: { xs: "1.25rem", md: "1.5rem" },
                marginBottom: "1rem",
              }}
            >
              최적화된 가성비 공사
            </Typography>
            <Typography sx={{ marginBottom: "0.75rem" }}>
              마감처리가 되어있는 칸막이자제를 이용하여 공사 비용 절감 및 공사
              기간 단축시킵니다.
            </Typography>
            <Typography>
              조립방식으로 근무중인 사무실도 공사가 가능합니다. 방을 만들었을 시
              무선스위치를 이용하여 큰 전기 공사 없이 스위치를 분리해 드립니다.
            </Typography>
          </>,
          false
        )}
      </Container>
    </CustomContainer>
  );
};

export default AboutMid;
