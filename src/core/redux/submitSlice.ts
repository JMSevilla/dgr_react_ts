import { createSlice } from "@reduxjs/toolkit";
import { UserSchemaType } from "../schema/user-validation";
import useApi from "../api/api";

const state: UserSchemaType = {
  firstname: "",
  middlename: "",
  lastname: "",
  password: "",
  confirmPassword: "",
  username: "",
  userType: "",
};

export const submitSlice = createSlice({
  name: "submitSlice",
  initialState: state,
  reducers: {
    onSubmit: (state, action) => {
      state = action.payload;
      useApi.addNewUser(action.payload);
    },
  },
});

export const { onSubmit } = submitSlice.actions;

export default submitSlice.reducer;
