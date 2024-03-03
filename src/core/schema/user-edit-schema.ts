import * as yup from "yup";

export const userEditSchema = yup.object({
  id: yup.string(),
  firstname: yup.string().required("firstname is required").default(""),
  middlename: yup.string().optional().default(""),
  lastname: yup.string().required("lastname is required.").default(""),
  username: yup.string().required("username is required").default(""),
});

export type UserEditSchemaType = yup.InferType<typeof userEditSchema>;
