import * as React from "react";
// @mui
import { Box, BoxProps, Grid, styled, Typography } from "@mui/material";
// custom component
import ContactForm from "components/common/ContactForm";
import MainLayout from "components/layout/MainLayout";
// custom context
import ConstantsContext from "context/constantsContext";
// type
import type { NextPage } from "next";
import ContainerGrid from "components/common/ContainerGrid";

const CustomBox = styled(Box)<BoxProps>(({ theme }) => ({
  margin: "30% 1rem 5% 1rem",
  [theme.breakpoints.up(350)]: {
    margin: "20% 1rem 5% 1rem",
  },
  [theme.breakpoints.up("sm")]: {
    margin: "15% 2rem 5% 2rem",
  },
  [theme.breakpoints.up("md")]: {
    margin: "10% 2rem 5% 2rem",
  },
}));

const HireMe: NextPage = (props) => {
  const { pages } = React.useContext(ConstantsContext);

  return (
    <MainLayout pageData={pages && pages.hireMe}>
      <CustomBox>
        <ContainerGrid>
          <Grid
            item
            xs={12}
            md={6}
            alignItems="center"
            display="flex"
            flexDirection="column"
            justifyContent="center"
          >
            <Box
              sx={{
                width: {
                  xs: "100%",
                  md: "100%",
                },
              }}
            >
              <Typography component="h2" variant="h4" gutterBottom>
                상담문의
              </Typography>
              <Typography component="p" variant="body1">
                신규희 실장 : 010-8640-1007
              </Typography>
              <Typography component="p" variant="body1">
                박민수 팀장 : 010-5421-6472
              </Typography>
              <Typography
                component="p"
                variant="body1"
                sx={{ marginTop: "1rem" }}
              >
                Email: gothic1333@naver.com
              </Typography>
              <Typography
                component="p"
                variant="body1"
                sx={{ marginTop: "1rem" }}
              >
                내용을 기재해 주시면 순차적으로 빠른 연락 드리겠습니다.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6} display="flex" justifyContent="center">
            <ContactForm />
          </Grid>
        </ContainerGrid>
      </CustomBox>
    </MainLayout>
  );
};

export default HireMe;
