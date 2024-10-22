// react
import * as React from "react";
// next
import Image from "next/image";
// @mui
import {
  Box,
  BoxProps,
  Card,
  CardActions,
  CardActionsProps,
  CardProps,
  Grid,
  Skeleton,
  Typography,
  styled,
  CardContent,
  Collapse,
  useMediaQuery,
  useTheme,
} from "@mui/material";
// custom component
import FacebookIconLink from "components/common/FacebookIconLink";
import InstagramIconLink from "components/common/InstagramIconLink";
import TwitterIconLink from "components/common/TwitterIconLink";
import ContainerGrid from "components/common/ContainerGrid";
import ExpandMoreIconButton from "components/common/ExpandMoreIconButton";
// type
interface AboutProps {}

const ImageWrapper = styled(Box)<BoxProps>(({ theme }) => ({
  position: "relative",
  width: "100%",
  height: "auto",
  aspectRatio: "16/9",
}));

const CustomContainer = styled(Box)<BoxProps>(({ theme }) => ({
  scrollMarginTop: "1rem",
  [theme.breakpoints.up("sm")]: {
    scrollMarginTop: "2rem",
  },
}));

const CustomCard = styled(Card)<CardProps>(({ theme }) => ({
  margin: "1rem",
  overflow: "hidden",
  [theme.breakpoints.up("sm")]: {
    margin: "2rem",
  },
  [theme.breakpoints.up("md")]: {
    height: "fit-content",
  },
  [theme.breakpoints.up("lg")]: {
    height: "70vh",
  },
}));

const CustomCardActions = styled(CardActions)<CardActionsProps>(
  ({ theme }) => ({
    justifyContent: { xs: "center", md: "space-between" },
    width: "100%,",
    [theme.breakpoints.up("md")]: {
      justifyContent: "flex-end",
    },
    [theme.breakpoints.up("lg")]: {
      position: "absolute",
      bottom: 0,
    },
  })
);

const AboutMid: React.FunctionComponent<AboutProps> = (props) => {
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [showMore, setShowMore] = React.useState(false);

  const theme = useTheme();
  const isUpMd = useMediaQuery(theme.breakpoints.up("md"));

  React.useEffect(() => {
    setShowMore(true);
  }, [isUpMd]);

  return (
    <CustomContainer id="about">
      <Typography
        component="h1"
        variant="h4"
        fontWeight="bold"
        textAlign="center"
        sx={{
          marginBottom: { xs: "1rem", md: "2rem" },
          fontSize: { xs: "1.5rem", md: "2rem" },
        }}
      >
        Office Interior
      </Typography>
      <CustomCard>
        <ContainerGrid
          sx={{
            marginTop: 0,
            height: "100%",
            width: { xs: "100%", md: "800px", lg: "1000px" },
          }}
        >
          <Grid item xs={12}>
            <ImageWrapper sx={{ marginBottom: "1rem" }}>
              <Image
                alt="gothic image1"
                layout="responsive"
                width={16}
                height={9}
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
            <Card
              sx={{ boxShadow: "none", height: "100%", position: "relative" }}
            >
              <CardContent>
                <Collapse
                  in={showMore}
                  sx={{
                    width: "100%",
                    textAlign: "center",
                  }}
                  timeout="auto"
                  unmountOnExit
                  keepMounted
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginBottom: "2rem",
                      gap: { xs: "0.5rem", md: "1rem" },
                    }}
                  >
                    <Typography
                      component="h2"
                      variant="h6"
                      fontWeight="bold"
                      sx={{ width: { xs: "30%", md: "20%" } }}
                    >
                      다양한 제안
                    </Typography>
                    <Typography
                      sx={{
                        width: { xs: "65%", md: "75%" },
                        textAlign: "left",
                      }}
                    >
                      사무실 공사에 필요한 요소들과 합리적인 레이아웃을 제안 해
                      드립니다. 전문가가 아니면 놓칠 수 있는 부분들을 체크해서,
                      추후 문제가 없도록 제안 드립니다. 미니멀 하면서도 세련된
                      디자인으로 제안 드립니다.
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      gap: { xs: "0.5rem", md: "1rem" },
                    }}
                  >
                    <Typography
                      component="h2"
                      variant="h6"
                      fontWeight="bold"
                      sx={{ width: { xs: "30%", md: "20%" } }}
                    >
                      가성비
                    </Typography>
                    <Typography
                      sx={{
                        width: { xs: "65%", md: "75%" },
                        textAlign: "left",
                      }}
                    >
                      적은 예산으로도 문제 없습니다. 가성비 좋은 자제들로 제안
                      드립니다. 비용문제로 인해 전체 공사가 힘드시다면,
                      부분공사도 충분히 가능합니다.
                    </Typography>
                  </Box>
                </Collapse>
              </CardContent>
              <CustomCardActions disableSpacing>
                {!isUpMd && (
                  <ExpandMoreIconButton
                    open={showMore}
                    onClick={() => setShowMore(!showMore)}
                    sx={{
                      justifySelf: "flex-start",
                    }}
                  />
                )}
              </CustomCardActions>
            </Card>
          </Grid>
        </ContainerGrid>
      </CustomCard>
    </CustomContainer>
  );
};

export default AboutMid;
