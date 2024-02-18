import * as yup from "yup";

export const userSchema = yup.object({
  firstname: yup.string().required("firstname is required").default(""),
  middlename: yup.string().optional().default(""),
  lastname: yup.string().required("lastname is required.").default(""),
  username: yup.string().required("username is required").default(""),
  userType: yup.string(),
  password: yup
    .string()
    .required("Password is required.")
    .min(8, "Password must be atleast 8 characters.")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
      "Password must contain at least one uppercase letter, one lowercase letter."
    )
    .oneOf([yup.ref("password")]),
  confirmPassword: yup
    .string()
    .required("Confirm password is required.")
    .oneOf([yup.ref("password")], "Password must match"),
  token: yup.string(),
});

export type UserSchemaType = yup.InferType<typeof userSchema>;
