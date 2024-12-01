import * as Yup from "yup";

export const ContactFormSchema = Yup.object().shape({
  companyName: Yup.string().required("기업명을 입력해주세요."),
  name: Yup.string().required("성함을 입력해주세요."),
  phone: Yup.string().required("연락처를 입력해주세요."),
  location: Yup.string().required("지역을 선택해주세요."),
  subLocation: Yup.string().when("location", {
    is: "서울",
    then: Yup.string().required("구를 선택해주세요."),
  }),
  area: Yup.string().required("평수를 입력해주세요."),
  startDate: Yup.string().required("공사희망일을 선택해주세요."),
  budget: Yup.string().required("예산을 입력해주세요."),
  description: Yup.string(), // optional로 변경
});
