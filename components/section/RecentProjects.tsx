import * as React from "react";
import { useRouter } from "next/router";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper";
import { Box, BoxProps, Typography, styled } from "@mui/material";

interface RecentProjectsProps {}

const CustomWrapper = styled(Box)<BoxProps>(({ theme }) => ({
  margin: "6rem 1rem",
  overflow: "hidden",
  [theme.breakpoints.up("sm")]: {
    margin: "6rem 2rem",
  },
}));

const BannerWrapper = styled(Box)<BoxProps>(({ theme }) => ({
  textAlign: "center",
  marginBottom: "2rem",
  padding: theme.spacing(6, 2),
  background: "#ffffff",
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

const RecentProjects: React.FunctionComponent<RecentProjectsProps> = () => {
  const router = useRouter();

  const handleSlideClick = (projectIndex: number) => {
    router.push(`/projects/${projectIndex}`);
  };

  return (
    <CustomWrapper id="recentProjects">
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
          Office Management Service
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
          번거롭고 애매모호한 사무실 관리
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
          힘드셨죠?
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
          쉽고 편하게 만들어 드립니다
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
          복잡한 공사부터 사소한 관리까지 한번에 가능합니다
        </Typography>
      </BannerWrapper>

      {/* 기존 Swiper 부분 유지 */}
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        spaceBetween={30}
        slidesPerView={"auto"}
        centeredSlides={true}
        loop={true}
        style={{ overflow: "visible" }}
      >
        {[1, 2, 3, 4].map((index) => (
          <SwiperSlide
            key={index}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              margin: "0 auto",
            }}
            onClick={() => handleSlideClick(index)}
          >
            <img
              src={`/유지관리_${index}.jpeg`}
              alt={`유지관리 ${index}`}
              style={{
                width: "80%",
                height: "auto",
                objectFit: "cover",
                borderRadius: "8px",
                boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)",
                cursor: "pointer",
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </CustomWrapper>
  );
};

export default RecentProjects;
