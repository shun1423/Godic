// react
import * as React from "react";
// @mui
import {
  Container,
  ContainerProps,
  Grid,
  GridProps,
  Typography,
  styled,
  Box,
} from "@mui/material";
// custom component
import ContainerGrid from "components/common/ContainerGrid";
// custom icons
import IllustratorCCIcon from "components/icon/IllustratorCC";
import LightroomCCIcon from "components/icon/LightroomCC";
import PhotoshopIcon from "components/icon/Photoshop";
// context
import ComponentsContext from "context/componentsContext";
import { Construction, Hardware, Work } from "@mui/icons-material";

// 기존 SkillsProps와 Example 컴포넌트 Props 설정
interface SkillsProps {}

const CustomContainer = styled(Container)<ContainerProps>(({ theme }) => ({
  marginBottom: "10rem", // 아래 여백을 더 넉넉히 추가
  marginTop: "10rem", // 위 여백을 더 넉넉히 추가
  scrollMarginTop: "2rem",
}));

const CustomGridItem = styled(Grid)<GridProps>(({ theme }) => ({
  alignItems: "center",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  marginBottom: "3rem", // 항목 간 간격을 추가
  textAlign: "center",
}));

const Skills: React.FunctionComponent<SkillsProps> = (props) => {
  const { containerMaxWidth } = React.useContext(ComponentsContext);

  const skills = [
    {
      Icon: <Hardware fontSize="large" />,
      title: "인테리어",
      description: "사무실 인테리어, 옥외 광고, 냉난방기 공사",
      extraIcons: [<LightroomCCIcon key="1" />, <PhotoshopIcon key="2" />],
    },
    {
      Icon: <Work fontSize="large" />,
      title: "사무관리",
      description: "사무용 가구 구매 및 이동, 기업이사",
      extraIcons: [<IllustratorCCIcon key="1" />, <LightroomCCIcon key="2" />],
    },
    {
      Icon: <Construction fontSize="large" />,
      title: "시설관리",
      description: "시설 유지 및 보수, 정기 점검",
      extraIcons: [<PhotoshopIcon key="1" />, <IllustratorCCIcon key="2" />],
    },
  ];

  const companyLogos = [
    "함께한기업1.png",
    "함께한기업2.png",
    "함께한기업3.png",
    "함께한기업4.png",
    "함께한기업5.png",
  ];

  return (
    <Box sx={{ py: 12, width: "100%" }}>
      {" "}
      {/* 전체 컴포넌트의 위아래 여백 */}
      <CustomContainer id="skills" maxWidth={containerMaxWidth}>
        <Typography
          component="h2"
          variant="h4"
          textAlign="center"
          fontWeight="800"
          sx={{ marginBottom: "4rem" }} // 제목과 항목 간 여백
        >
          오피스 종합 솔루션
        </Typography>
        <ContainerGrid marginTop="3rem">
          {skills.map((skill, index) => (
            <CustomGridItem
              item
              key={`${skill.title} - ${index}`}
              xs={12}
              sm={6}
              md={4}
            >
              {skill.Icon}
              <Typography variant="h6" marginTop="1.5rem">
                {skill.title}
              </Typography>
              <Typography variant="body1" marginTop="1rem">
                {skill.description}
              </Typography>
              <Grid
                container
                spacing={2} // 아이콘 간의 여백을 넓힘
                justifyContent="center"
                marginTop="1.5rem"
              >
                {skill.extraIcons.map((extraIcon, i) => (
                  <Grid item key={i}>
                    {extraIcon}
                  </Grid>
                ))}
              </Grid>
            </CustomGridItem>
          ))}
        </ContainerGrid>
      </CustomContainer>
      {/* Example 컴포넌트 추가 */}
      <Container
        maxWidth="lg"
        sx={{
          marginTop: "8rem", // Skills와 Example 간의 간격을 넓힘
          marginBottom: "8rem", // Example 아래 여백을 추가
          padding: { xs: 3, md: 5 },
        }}
      >
        <Typography
          component="h2"
          variant="h4"
          fontWeight="bold"
          textAlign="center"
          gutterBottom
        >
          많은 기업들이 인정한 공간 혁신 솔루션
        </Typography>
        <Grid
          container
          spacing={4}
          justifyContent="center"
          sx={{
            mt: 6,
            gap: { xs: 3, sm: 4, lg: 5 },
            maxWidth: { xs: "100%", sm: "600px", lg: "none" },
            mx: "auto",
          }}
        >
          {companyLogos.map((logo, index) => (
            <Grid item xs={6} sm={4} md={2} key={index}>
              <img
                src={`/${logo}`}
                alt={`Company logo ${index + 1}`}
                style={{
                  maxWidth: "100%",
                  maxHeight: "48px",
                  objectFit: "contain",
                }}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Skills;
