import React from "react";
import { UserSchemaType } from "../schema/user-validation";
import { UseFormHandleSubmit } from "react-hook-form";
import { Button } from "../../components";
import useApi from "../api/api";
import { useUserContext } from "../UserContext";
import { useEncrypt } from "./useEncrypt";
/**
 * When creating custom hook > functions > react element > context API
 */

interface Props {
  handleSubmit: UseFormHandleSubmit<UserSchemaType>;
}

const key =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c";

export const useDataSubmit = ({ handleSubmit }: Props) => {
  const { getAllUsers } = useUserContext();
  const { encrypt } = useEncrypt();

  const onSubmit = (values: UserSchemaType) => {
    const obj: UserSchemaType = {
      firstname: values.firstname,
      middlename: values.middlename,
      lastname: values.lastname,
      username: values.username,
      password: encrypt({ password: values.password }),
      userType: values.userType,
      confirmPassword: "",
      token: encrypt({ password: key }),
    };
    const response = useApi.addNewUser(obj);
    return response.then(() => {
      getAllUsers();
    });
  };

  const submitButton = (
    <Button variant="contained" onClick={handleSubmit(onSubmit)} size="small">
      Submit
    </Button>
  );

  return {
    submitButton,
  };
};
