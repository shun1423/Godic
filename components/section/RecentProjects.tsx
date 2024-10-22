// react
import * as React from "react";
// next
import { useRouter } from "next/router";
// swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper"; // Import Autoplay module from swiper directly
// @mui
import { Box, BoxProps, Typography, styled } from "@mui/material";
// custom context
import ConstantsContext from "context/constantsContext";

// 타입 정의
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
  background: "linear-gradient(135deg, #ECEBE2 0%, #ECEBE2 100%)", // 부드러운 파스텔 색상으로 변경
  color: "#333", // 검정에 가까운 텍스트 색상으로 가독성 강화
  borderRadius: "8px",
  [theme.breakpoints.up("sm")]: {
    padding: "3rem",
  },
}));

const RecentProjects: React.FunctionComponent<RecentProjectsProps> = () => {
  const { projects } = React.useContext(ConstantsContext);
  const router = useRouter();

  const handleSlideClick = (projectId: string) => {
    router.push(`/projects/${projectId}`);
  };

  return (
    <CustomWrapper>
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
        {projects && projects.length > 0 ? (
          projects.map((project, index) => (
            <SwiperSlide
              key={project.id + index}
              style={{ margin: "0 auto" }}
              onClick={() => handleSlideClick(project.id)}
            >
              <img
                src={project.images[0].src}
                alt={project.images[0].alt}
                style={{
                  width: "100%",
                  height: "auto",
                  maxWidth: "21rem",
                  borderRadius: "8px",
                  boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)", // 부드러운 그림자 효과로 변경
                  cursor: "pointer",
                }}
              />
            </SwiperSlide>
          ))
        ) : (
          <SwiperSlide>
            <Typography sx={{ textAlign: "center", color: "#666" }}>
              {" "}
              {/* 무난한 회색으로 변경 */}
              현재 표시할 프로젝트가 없습니다.
            </Typography>
          </SwiperSlide>
        )}
      </Swiper>
    </CustomWrapper>
  );
};

export default RecentProjects;
