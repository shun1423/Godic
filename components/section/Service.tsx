import * as React from "react";
import {
  Box,
  Grid,
  Typography,
  styled,
  Divider,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

interface ManagementSectionProps {
  title: string;
  subtitle: string;
  items: { title: string; description: string | string[] }[];
}

const SectionContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(6, 4), // 좌우 패딩을 추가하여 공간 확보
  backgroundColor: "#f9f9f9",
  marginBottom: theme.spacing(8),
  width: "100%",
}));

const ManagementSection: React.FC<ManagementSectionProps> = ({
  title,
  subtitle,
  items,
}) => (
  <SectionContainer>
    <Box sx={{ maxWidth: "100%", width: "100%" }}>
      {" "}
      {/* 전체 너비로 설정 */}
      <Typography
        variant="h4"
        component="h2"
        fontWeight="bold"
        gutterBottom
        textAlign="center"
      >
        {title}
      </Typography>
      <Typography
        variant="h6"
        component="h3"
        fontWeight="medium"
        color="text.secondary"
        textAlign="center"
        gutterBottom
      >
        {subtitle}
      </Typography>
      <Grid container spacing={4} sx={{ marginTop: 4 }}>
        {items.map((item, index) => (
          <Grid item xs={12} key={index}>
            {/* 모든 아이템을 화면 너비 전체로 확장 */}
            <Typography variant="h6" fontWeight="bold">
              {item.title}
            </Typography>
            {Array.isArray(item.description) ? (
              <List>
                {item.description.map((desc, idx) => (
                  <ListItem key={idx} disableGutters>
                    <ListItemText primary={`- ${desc}`} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <Typography variant="body2" color="text.secondary" marginTop={1}>
                {item.description}
              </Typography>
            )}
          </Grid>
        ))}
      </Grid>
    </Box>
  </SectionContainer>
);

const Services: React.FC = () => {
  const officeManagementItems = [
    {
      title: "사무용 가구",
      description: [
        "가성비 좋은 중소기업 브랜드 제품을 제공하며, 레이아웃에 알맞게 세팅해드립니다.",
        "책상, 의자, 서랍, 파티션, 탕비장, 임원용 가구 등 모든 품목의 가구 주문이 가능",
      ],
    },
    {
      title: "기업이사",
      description: [
        "전문업체와 함께 책임지고 기간 안에 이사 및 건물 내 이동을 돕습니다.",
        "인사 이동으로 인한 레이아웃 변경 시 평면도 제공",
      ],
    },
  ];

  const facilityManagementItems = [
    {
      title: "시설 유지관리 (상황에 따라 요금 발생)",
      description: [
        "조명, 콘센트, 도어, 가구, 벽면 찍힘 등",
        "네트워크 공사 및 점검",
      ],
    },
    {
      title: "전문 청소 (월 요금 별도)",
      description: [
        "년 2회 P타일(데코타일) 기계청소 및 왁스 작업",
        "월 1회 정기적으로 카펫 기계 청소",
        "년 2회 냉난방기 필터 및 내부 청소",
        "년 4회 분기별 대청소(창틀, 유리, 화장실, 공용구역 등)",
      ],
    },
  ];

  return (
    <Box>
      {/* Office Management Section */}
      <ManagementSection
        title="Office Management"
        subtitle="효율적인 사무 공간을 위한 맞춤 솔루션"
        items={officeManagementItems}
      />

      <Divider variant="middle" />

      {/* Facility Management Section */}
      <ManagementSection
        title="Facility Management"
        subtitle="전문적인 시설 유지 및 청소 서비스"
        items={facilityManagementItems}
      />
    </Box>
  );
};

export default Services;
