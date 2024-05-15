import * as Yup from "yup";

export const ParticipantRegisterSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Your full name should be 3 or more characters.")
    .max(32, "Your full name should not be more than 32 characters.")
    .required("This field is required."),
  email: Yup.string()
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{1,}$/,
      "Email is not valid."
    )
    .required("This field is required."),
});
