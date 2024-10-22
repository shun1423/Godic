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
// type
interface SkillsProps {}

const CustomContainer = styled(Container)<ContainerProps>(({ theme }) => ({
  marginBottom: "5rem",
  marginTop: "5rem",
  scrollMarginTop: "2rem",
}));

const CustomGridItem = styled(Grid)<GridProps>(({ theme }) => ({
  alignItems: "center",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  marginBottom: "2rem",
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

  return (
    <CustomContainer id="skills" maxWidth={containerMaxWidth}>
      <Typography
        component="h2"
        variant="h4"
        textAlign="center"
        fontWeight="800"
      >
        오피스 종합 솔루션
      </Typography>
      <ContainerGrid marginTop="2rem">
        {skills.map((skill, index) => (
          <CustomGridItem
            item
            key={`${skill.title} - ${index}`}
            xs={12}
            sm={6}
            md={4}
          >
            {skill.Icon}
            <Typography variant="h6" marginTop="1rem">
              {skill.title}
            </Typography>
            <Typography variant="body1" marginTop="0.5rem">
              {skill.description}
            </Typography>
            <Grid
              container
              spacing={1}
              justifyContent="center"
              marginTop="1rem"
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
  );
};

export default Skills;
