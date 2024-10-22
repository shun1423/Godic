import * as React from "react";
import { Formik, Field } from "formik";
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
} from "@mui/material";
import { ContactFormSchema } from "models/contactFormModel";

const koreanRegions = [
  "서울",
  "경기",
  "인천",
  "강원",
  "충북",
  "충남",
  "대전",
  "세종",
  "경북",
  "경남",
  "대구",
  "부산",
  "울산",
  "전북",
  "전남",
  "광주",
  "제주",
];

const ContactForm: React.FunctionComponent = () => {
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

      <Formik
        initialValues={{
          paths: [],
          name: "",
          phone: "",
          location: "",
          area: "",
          startDate: "",
          budget: "",
          description: "",
          images: [],
        }}
        onSubmit={(values) => console.log(values)}
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
          <form onSubmit={handleSubmit} noValidate>
            {/* 고딕을 알게 된 경로 */}
            <FormControl component="fieldset" sx={{ marginBottom: "1rem" }}>
              <Typography variant="h6">고딕을 알게된 경로</Typography>
              <FormGroup row>
                {["인스타그램", "홈페이지", "소개", "네이버 검색", "기타"].map(
                  (label) => (
                    <FormControlLabel
                      key={label}
                      control={
                        <Checkbox
                          value={label}
                          checked={values.paths?.includes(label) || false}
                          onChange={(e) => {
                            const newPaths = e.target.checked
                              ? [...(values.paths || []), label]
                              : values.paths.filter((path) => path !== label);
                            setFieldValue("paths", newPaths);
                          }}
                        />
                      }
                      label={label}
                    />
                  )
                )}
              </FormGroup>
            </FormControl>

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
                value={values.location}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.location && Boolean(errors.location)}
              >
                {koreanRegions.map((region) => (
                  <MenuItem key={region} value={region}>
                    {region}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

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

            {/* 이미지 첨부 */}
            <TextField
              fullWidth
              name="images"
              type="file"
              inputProps={{ multiple: true }}
              onChange={(e) =>
                setFieldValue("images", Array.from(e.currentTarget.files))
              }
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
    </Box>
  );
};

export default ContactForm;
