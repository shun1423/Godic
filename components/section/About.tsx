import * as React from "react";
import Image from "next/image";
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
  useMediaQuery,
  useTheme,
} from "@mui/material";
import FacebookIconLink from "components/common/FacebookIconLink";
import InstagramIconLink from "components/common/InstagramIconLink";
import TwitterIconLink from "components/common/TwitterIconLink";
import ContainerGrid from "components/common/ContainerGrid";

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
  boxShadow: "none", // 그림자 제거
  border: "none", // 테두리 제거
  [theme.breakpoints.up("sm")]: {
    margin: "2rem",
  },
  [theme.breakpoints.up("md")]: {
    height: "fit-content",
  },
  [theme.breakpoints.up("lg")]: {
    height: "100%",
  },
}));

const CustomCardActions = styled(CardActions)<CardActionsProps>(
  ({ theme }) => ({
    justifyContent: "space-between",
    width: "100%",
    [theme.breakpoints.up("md")]: {
      justifyContent: "flex-end",
    },
    [theme.breakpoints.up("lg")]: {
      position: "absolute",
      bottom: 0,
    },
  })
);

const About: React.FunctionComponent<AboutProps> = (props) => {
  const [isLoaded, setIsLoaded] = React.useState(false);

  const theme = useTheme();
  const isUpMd = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <CustomContainer id="about">
      <CustomCard sx={{ boxShadow: "none", border: "none" }}>
        {" "}
        {/* sx 속성 추가 */}
        <ContainerGrid sx={{ marginTop: 0, height: "100%", width: "1000px" }}>
          <Grid item xs={12}>
            <ImageWrapper>
              <Image
                alt="gothic image1"
                layout="responsive"
                width={16}
                height={9}
                objectFit="cover"
                objectPosition="center center"
                onLoad={() => setIsLoaded(true)}
                src="/gothic.png"
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
          <Grid item xs={12} sx={{ padding: "2rem" }}>
            <Card
              sx={{
                boxShadow: "none",
                border: "none",
                height: "100%",
                position: "relative",
              }} // 내부 카드에도 적용
            >
              <CardContent>
                <Box
                  sx={{
                    width: "100%",
                    textAlign: "center",
                  }}
                >
                  <Typography component="h2" variant="h5" fontWeight="bold">
                    사무실 관리 담당자 분들의
                  </Typography>

                  <Typography component="h2" variant="h5" fontWeight="bold">
                    부담을 덜어줄 솔루션!
                  </Typography>
                  <Box sx={{ height: "1rem" }} />

                  <Typography component="h2" variant="h5" fontWeight="bold">
                    복잡하고 피곤한 인테리어 쉽게 풀어드립니다
                  </Typography>

                  <Box sx={{ height: "1rem" }} />

                  <Typography component="h2" variant="h5" fontWeight="bold">
                    귀찮고 난감한 사무실 관리 해결해 드립니다
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </ContainerGrid>
      </CustomCard>
    </CustomContainer>
  );
};

export default About;
