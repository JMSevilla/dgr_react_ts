import { configureStore } from "@reduxjs/toolkit";
import submitReducer from "./submitSlice";

export default configureStore({
  reducer: {
    submitSlice: submitReducer,
  },
});
