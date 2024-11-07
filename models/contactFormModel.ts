// yup
import * as Yup from "yup";

export const ContactFormSchema = Yup.object().shape({
  name: Yup.string().min(3).max(32).label("Name"),
  email: Yup.string().email().required().label("Email"),
  subject: Yup.string().min(3).max(255).label("Subject"),
  message: Yup.string().min(3).max(2048).required().label("Message"),
  location: Yup.string().required("지역을 선택해주세요."),
  subLocation: Yup.string().when("location", {
    is: "서울",
    then: Yup.string().required("구를 선택해주세요."),
    otherwise: Yup.string(),
  }),
});
