import * as React from "react";
import { Formik, Field } from "formik";
import emailjs from "@emailjs/browser";
import {
  Box,
  Typography,
  FormControl,
  FormControlLabel,
  FormGroup,
  Checkbox,
  MenuItem,
  Select,
  InputLabel,
  Button,
  TextField,
  Snackbar,
  Alert,
} from "@mui/material";
import { ContactFormSchema } from "models/contactFormModel";

const EMAIL_SERVICE_ID = "service_m0os7ra"; // EmailJS Service ID
const EMAIL_TEMPLATE_ID = "template_p46slsn"; // EmailJS Template ID
const EMAIL_PUBLIC_KEY = "R-8KYhXEh8S6y5KRw"; // EmailJS Public Key

interface ContactFormValues {
  paths: string[];
  companyName: string;
  name: string;
  phone: string;
  location: string;
  subLocation: string; // 추가 후
  area: string;
  startDate: string;
  budget: string;
  description: string;
  images: string[];
}
// 대한민국 시와 서울 구 리스트
const locationOptions = {
  서울: [
    "종로구",
    "중구",
    "용산구",
    "성동구",
    "광진구",
    "동대문구",
    "중랑구",
    "성북구",
    "강북구",
    "도봉구",
    "노원구",
    "은평구",
    "서대문구",
    "마포구",
    "양천구",
    "강서구",
    "구로구",
    "금천구",
    "영등포구",
    "동작구",
    "관악구",
    "서초구",
    "강남구",
    "송파구",
    "강동구",
  ],
  경기: [
    "수원시",
    "성남시",
    "의정부시",
    "안양시",
    "부천시",
    "광명시",
    "평택시",
    "과천시",
    "오산시",
    "시흥시",
    "군포시",
    "의왕시",
    "하남시",
    "용인시",
    "파주시",
    "이천시",
    "안성시",
    "김포시",
    "화성시",
    "광주시",
    "양주시",
    "포천시",
    "여주시",
  ],
  인천: [
    "중구",
    "동구",
    "미추홀구",
    "연수구",
    "남동구",
    "부평구",
    "계양구",
    "서구",
  ],
  강원: ["춘천시", "원주시", "강릉시", "동해시", "태백시", "속초시", "삼척시"],
  충북: ["청주시", "충주시", "제천시"],
  충남: [
    "천안시",
    "공주시",
    "보령시",
    "아산시",
    "서산시",
    "논산시",
    "계룡시",
    "당진시",
  ],
  대전: ["동구", "중구", "서구", "유성구", "대덕구"],
  세종: ["세종시"],
  경북: [
    "포항시",
    "경주시",
    "김천시",
    "안동시",
    "구미시",
    "영주시",
    "영천시",
    "상주시",
    "문경시",
    "경산시",
  ],
  경남: [
    "창원시",
    "진주시",
    "통영시",
    "사천시",
    "김해시",
    "밀양시",
    "거제시",
    "양산시",
  ],
  대구: ["중구", "동구", "서구", "남구", "북구", "수성구", "달서구", "달성군"],
  부산: [
    "중구",
    "서구",
    "동구",
    "영도구",
    "부산진구",
    "동래구",
    "남구",
    "북구",
    "해운대구",
    "사하구",
    "금정구",
    "강서구",
    "연제구",
    "수영구",
    "사상구",
  ],
  울산: ["중구", "남구", "동구", "북구", "울주군"],
  전북: ["전주시", "군산시", "익산시", "정읍시", "남원시", "김제시"],
  전남: ["목포시", "여수시", "순천시", "나주시", "광양시"],
  광주: ["동구", "서구", "남구", "북구", "광산구"],
  제주: ["제주시", "서귀포시"],
};

const ContactForm: React.FunctionComponent = () => {
  const [selectedCity, setSelectedCity] = React.useState<string>("");
  const [snackbar, setSnackbar] = React.useState<{
    open: boolean;
    message: string;
    severity: "success" | "error";
  }>({
    open: false,
    message: "",
    severity: "success",
  });

  const handleCloseSnackbar = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  const handleEmailSend = async (values: ContactFormValues) => {
    try {
      const templateParams = {
        ...values,
        location: `${values.location} ${values.subLocation}`.trim(),
      };

      const response = await emailjs.send(
        EMAIL_SERVICE_ID,
        EMAIL_TEMPLATE_ID,
        templateParams,
        EMAIL_PUBLIC_KEY
      );

      if (response.status === 200) {
        setSnackbar({
          open: true,
          message: "상담 신청이 성공적으로 전송되었습니다!",
          severity: "success",
        });
      }
    } catch (error) {
      console.error("이메일 전송 실패:", error); // 이미 있음
      setSnackbar({
        open: true,
        message: "전송 중 오류가 발생했습니다. 다시 시도해주세요.",
        severity: "error",
      });
    }
  };
  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "800px",
        margin: "0 auto",
        padding: "2rem",
        backgroundColor: "#fafafa",
        borderRadius: "8px",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Typography variant="h4" component="h2" textAlign="center" gutterBottom>
        상담 신청 폼
      </Typography>

      <Formik<ContactFormValues>
        initialValues={{
          paths: [],
          companyName: "",
          name: "",
          phone: "",
          location: "",
          subLocation: "", // 추가
          area: "",
          startDate: "",
          budget: "",
          description: "",
          images: [],
        }}
        onSubmit={async (values, { resetForm }) => {
          try {
            await handleEmailSend(values);
            resetForm();
          } catch (error) {
            console.error("Submit Error:", error);
          }
        }}
        validationSchema={ContactFormSchema}
      >
        {({
          errors,
          touched,
          values,
          setFieldValue,
          handleChange,
          handleBlur,
          handleSubmit,
          handleReset,
        }) => (
          <form
            onSubmit={(e) => {
              e.preventDefault(); // 추가

              handleSubmit(e);
            }}
            noValidate
          >
            {/* 기업명 */}
            <TextField
              fullWidth
              label="기업명"
              name="companyName"
              value={values.companyName}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.companyName && Boolean(errors.companyName)}
              helperText={touched.companyName && errors.companyName}
              sx={{ marginBottom: "1rem" }}
            />

            {/* 성함 */}
            <TextField
              fullWidth
              label="성함"
              name="name"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.name && Boolean(errors.name)}
              helperText={touched.name && errors.name}
              sx={{ marginBottom: "1rem" }}
            />

            {/* 연락처 */}
            <TextField
              fullWidth
              label="연락처"
              name="phone"
              value={values.phone}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.phone && Boolean(errors.phone)}
              helperText={touched.phone && errors.phone}
              sx={{ marginBottom: "1rem" }}
            />

            {/* 지역 선택 */}
            <FormControl fullWidth sx={{ marginBottom: "1rem" }}>
              <InputLabel>지역</InputLabel>
              <Select
                name="location"
                value={values.location} // 변경: values.location을 사용
                onChange={(e) => {
                  const city = e.target.value;
                  setFieldValue("location", city);
                  setFieldValue("subLocation", ""); // subLocation 초기화
                  setSelectedCity(city);
                }}
                onBlur={handleBlur}
                error={touched.location && Boolean(errors.location)}
              >
                {Object.keys(locationOptions).map((city) => (
                  <MenuItem key={city} value={city}>
                    {city}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            {/* 구 선택 (서울일 경우만) */}
            {selectedCity === "서울" && (
              <FormControl fullWidth sx={{ marginBottom: "1rem" }}>
                <InputLabel>구</InputLabel>
                <Select
                  name="subLocation"
                  value={values.subLocation} // 변경: values.subLocation을 직접 참조
                  onChange={(e) => {
                    const subLocation = e.target.value;
                    setFieldValue("subLocation", subLocation);
                  }}
                  onBlur={handleBlur}
                  error={touched.subLocation && Boolean(errors.subLocation)}
                >
                  {locationOptions["서울"].map((district) => (
                    <MenuItem key={district} value={district}>
                      {district}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            )}

            {/* 평수 */}
            <TextField
              fullWidth
              label="평수"
              name="area"
              value={values.area}
              onChange={handleChange}
              onBlur={handleBlur}
              sx={{ marginBottom: "1rem" }}
            />

            {/* 공사 희망일 */}
            <TextField
              fullWidth
              label="공사희망일"
              name="startDate"
              type="date"
              InputLabelProps={{ shrink: true }}
              value={values.startDate}
              onChange={handleChange}
              onBlur={handleBlur}
              sx={{ marginBottom: "1rem" }}
            />

            {/* 예산 */}
            <TextField
              fullWidth
              label="예산"
              name="budget"
              value={values.budget}
              onChange={handleChange}
              onBlur={handleBlur}
              sx={{ marginBottom: "1rem" }}
            />

            {/* 상세 설명 */}
            <TextField
              fullWidth
              label="상세설명 (자세히 기재해주세요)"
              name="description"
              multiline
              minRows={4}
              value={values.description}
              onChange={handleChange}
              onBlur={handleBlur}
              sx={{ marginBottom: "1rem" }}
            />

            {/* 버튼 그룹 */}
            <Box display="flex" justifyContent="flex-end" gap="1rem">
              <Button onClick={handleReset} type="reset" variant="outlined">
                초기화
              </Button>
              <Button type="submit" variant="contained">
                보내기
              </Button>
            </Box>
          </form>
        )}
      </Formik>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        sx={{ zIndex: 9999 }} // 추가
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbar.severity}
          sx={{ width: "100%" }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default ContactForm;
