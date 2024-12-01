import * as React from "react";
import {
  Container,
  ContainerProps,
  Grid,
  GridProps,
  Typography,
  styled,
  Box,
  Paper,
} from "@mui/material";
import ContainerGrid from "components/common/ContainerGrid";
import ComponentsContext from "context/componentsContext";
import { Construction, Hardware, Work } from "@mui/icons-material";
import {
  PenTool,
  Ruler,
  FileStack,
  Briefcase,
  Wrench,
  Settings,
  CheckCircle2,
} from "lucide-react";

interface SkillsProps {}

const CustomContainer = styled(Container)<ContainerProps>(({ theme }) => ({
  marginBottom: "10rem",
  marginTop: "10rem",
  scrollMarginTop: "2rem",
}));

const ServiceCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  height: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
  cursor: "pointer",
  backgroundColor: "#ffffff",
  maxWidth: "400px", // 이 부분만 추가
  margin: "0 auto", // 이 부분만 추가
  "&:hover": {
    transform: "translateY(-8px)",
    boxShadow: theme.shadows[8],
  },
}));

const CustomGridItem = styled(Grid)<GridProps>(() => ({
  alignItems: "stretch",
  marginBottom: "2rem",
}));

const StyledIcon = styled(Box)(({ theme }) => ({
  "& svg": {
    width: "24px",
    height: "24px",
    strokeWidth: 1.5,
    color: theme.palette.primary.main,
  },
}));

const FeatureList = styled(Box)(({ theme }) => ({
  width: "100%",
  marginTop: theme.spacing(3),
  "& > div": {
    display: "flex",
    alignItems: "center",
    marginBottom: theme.spacing(1.5),
    "& svg": {
      marginRight: theme.spacing(1),
      color: theme.palette.success.main,
    },
  },
}));

const Skills: React.FunctionComponent<SkillsProps> = (props) => {
  const { containerMaxWidth } = React.useContext(ComponentsContext);

  const skills = [
    {
      Icon: <Hardware fontSize="large" sx={{ color: "#000000" }} />,
      title: "공사",
      description:
        "인테리어, 간판, 집기 설치부터 네트워크까지 통합 구축 서비스",
      features: [
        "인테리어",
        "옥외간판 설치",
        "냉낭반기 설치",
        "사무용가구 납품 및 설치",
        "네트워크 공사",
      ],
      extraIcons: [
        <StyledIcon key="1">
          <PenTool />
        </StyledIcon>,
        <StyledIcon key="2">
          <Ruler />
        </StyledIcon>,
      ],
    },
    {
      Icon: <Work fontSize="large" sx={{ color: "#000000" }} />,
      title: "관리",
      description: "청소, 이사, 유지보수 등 사무실 종합 관리 서비스",
      features: [
        "전문청소",
        "기업이사",
        "유지보수",
        "레이아웃 변경 (자리이동)",
      ],
      extraIcons: [
        <StyledIcon key="1">
          <FileStack />
        </StyledIcon>,
        <StyledIcon key="2">
          <Briefcase />
        </StyledIcon>,
      ],
    },
  ];

  const companyLogos = [
    "함께한기업1.png",
    "함께한기업2.png",
    "함께한기업3.png",
    "함께한기업4.png",
    "함께한기업5.png",
    "함께한기업6.png",
    "함께한기업7.png",
  ];

  return (
    <Box
      sx={{
        py: 12,
        width: "100%",
        background: "#ffffff",
        overflow: "hidden",
      }}
    >
      <CustomContainer id="skills" maxWidth={containerMaxWidth}>
        <Box sx={{ textAlign: "center", mb: 8 }}>
          <Typography
            component="h2"
            variant="h3"
            fontWeight="800"
            sx={{
              mb: 2,
              color: "#000000",
            }}
          >
            오피스 종합 솔루션
          </Typography>
          <Typography
            variant="h6"
            color="text.secondary"
            sx={{ maxWidth: "800px", mx: "auto", px: 2 }}
          >
            스마트하고 효율적인 업무 환경을 위한 맞춤형 솔루션을 제공합니다
          </Typography>
        </Box>

        <ContainerGrid marginTop="3rem">
          {skills.map((skill, index) => (
            <CustomGridItem
              item
              key={`${skill.title} - ${index}`}
              xs={12}
              md={6} // sm={6}, md={4} 에서 변경
            >
              <ServiceCard elevation={2}>
                <Box sx={{ mb: 3 }}>{skill.Icon}</Box>
                <Typography
                  variant="h5"
                  component="h3"
                  fontWeight="700"
                  sx={{ mb: 2 }}
                >
                  {skill.title}
                </Typography>
                <Typography
                  variant="body1"
                  color="text.secondary"
                  sx={{ mb: 3 }}
                >
                  {skill.description}
                </Typography>
                <FeatureList>
                  {skill.features.map((feature, i) => (
                    <Box key={i}>
                      <CheckCircle2 size={20} />
                      <Typography variant="body2">{feature}</Typography>
                    </Box>
                  ))}
                </FeatureList>
                <Grid
                  container
                  spacing={2}
                  justifyContent="center"
                  sx={{ mt: "auto", pt: 3 }}
                >
                  {skill.extraIcons.map((extraIcon, i) => (
                    <Grid item key={i}>
                      {extraIcon}
                    </Grid>
                  ))}
                </Grid>
              </ServiceCard>
            </CustomGridItem>
          ))}
        </ContainerGrid>
      </CustomContainer>

      <Container
        maxWidth="lg"
        sx={{
          mt: 12,
          mb: 8,
          position: "relative",
          backgroundColor: "#ffffff",
          px: { xs: 2, sm: 4, md: 6 },
        }}
      >
        <Box
          sx={{
            textAlign: "center",
            mb: 8,
            position: "relative",
          }}
        >
          <Typography
            component="h2"
            variant="h3"
            fontWeight="800"
            sx={{ mb: 3 }}
          >
            신뢰할 수 있는 파트너
          </Typography>
          <Typography
            variant="h6"
            color="text.secondary"
            sx={{ maxWidth: "800px", mx: "auto", mb: 6 }}
          >
            국내 유수 기업들과 함께 성장하고 있습니다
          </Typography>
          <Grid
            container
            spacing={4}
            justifyContent="center"
            alignItems="center"
            sx={{
              gap: { xs: 3, sm: 4, lg: 5 },
              maxWidth: "100%",
              mx: "auto",
            }}
          >
            {companyLogos.map((logo, index) => (
              <Grid
                item
                xs={6}
                sm={4}
                md={2}
                key={index}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  transition: "transform 0.3s ease-in-out",
                  "&:hover": {
                    transform: "scale(1.05)",
                  },
                }}
              >
                <img
                  src={`/${logo}`}
                  alt={`Partner company logo ${index + 1}`}
                  style={{
                    maxWidth: "100%",
                    height: "auto",
                    maxHeight: "48px",
                    objectFit: "contain",
                  }}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Skills;
