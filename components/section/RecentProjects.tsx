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
  padding: "2rem 1rem",
  background: "linear-gradient(135deg, #ECEBE2 0%, #ECEBE2 100%)",
  color: "#333",
  borderRadius: "8px",
  [theme.breakpoints.up("sm")]: {
    padding: "3rem",
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
        <Typography variant="h4" sx={{ marginBottom: "1rem" }}>
          번거롭고 애매모호한 사무실 관리 힘드셨죠?
        </Typography>
        <Typography variant="h5" sx={{ marginBottom: "0.5rem" }}>
          쉽고 편하게 만들어 드립니다.
        </Typography>
        <Typography variant="h6">
          복잡한 공사부터 사소한 관리까지 한번에 가능합니다.
        </Typography>
      </BannerWrapper>

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
                width: "80%", // 이미지 크기를 조정하여 슬라이드 중앙에 배치
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
