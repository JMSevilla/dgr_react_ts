import React, { useEffect } from "react";
import { UserSchemaType } from "../schema/user-validation";
import { UseFormHandleSubmit } from "react-hook-form";
import { Button } from "../../components";
import { useUserContext } from "../UserContext";
import { useEncrypt } from "./useEncrypt";
import { useMutation } from "react-query";
import { onSubmit as SubmitActions } from "../redux/submitSlice";
import { useDispatch } from "react-redux";
/**
 * When creating custom hook > functions > react element > context API
 */

interface Props {
  handleSubmit: UseFormHandleSubmit<UserSchemaType>;
}

const key =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c";

export const useDataSubmit = ({ handleSubmit }: Props) => {
  const { encrypt } = useEncrypt();

  const dispatch = useDispatch();

  const onSubmit = async (values: UserSchemaType) => {
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
    dispatch(SubmitActions(obj));
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
