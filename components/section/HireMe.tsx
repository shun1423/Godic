// react
import * as React from "react";
// next
import dynamic from "next/dynamic";
const Image = dynamic(() => import("next/image"));
// @mui
import { Grid, GridProps, Skeleton, Typography, styled } from "@mui/material";
import ButtonLink from "components/common/ButtonLink";
// custom component
const CustomButton = dynamic(() => import("components/common/CustomButton"));
const ContainerGrid = dynamic(() => import("components/common/ContainerGrid"));
// type
interface HireMeProps {}

const CustomContainerGrid = styled(ContainerGrid)<GridProps>(({ theme }) => ({
  justifyContent: "center",
  padding: "1rem",
  [theme.breakpoints.up("sm")]: {
    padding: "2rem",
  },
}));

const CustomGridItem = styled(Grid)<GridProps>(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  alignItems: "center",
}));

const HireMe: React.FunctionComponent<HireMeProps> = (props) => {
  const [isLoaded, setIsLoaded] = React.useState(false);

  return (
    <>
      <CustomContainerGrid>
        <CustomGridItem item md order={{ xs: 2, md: 1 }}>
          <Typography component="h2" variant="h4" textAlign="center">
            궁금한 점이 있다면
          </Typography>
          <Typography component="h2" variant="h4" textAlign="center">
            편하게 상담 하세요
          </Typography>
          <ButtonLink
            color="info"
            href="/hire-me"
            size="large"
            sx={{ marginTop: "2rem" }}
            variant="contained"
          >
            상담 문의
          </ButtonLink>
        </CustomGridItem>
        <CustomGridItem
          item
          md
          order={{ xs: 1, md: 2 }}
          sx={{ position: "relative" }}
        >
          {!isLoaded && (
            <Skeleton
              variant="rectangular"
              sx={{
                backgroundColor: "currentcolor",
                borderRadius: "4px",
                width: "100%",
                height: "100%",
                position: "absolute",
              }}
            />
          )}
        </CustomGridItem>
      </CustomContainerGrid>
    </>
  );
};

export default HireMe;
