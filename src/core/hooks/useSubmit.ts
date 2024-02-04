import { AxiosResponse } from "axios";
import { HttpRequest } from "../api/api";
import { MockDataProps } from "../types/types";

export const useSubmit = (props: MockDataProps) => {
  function initializedPost() {
    const result = new HttpRequest().addNewPosts(props);
    result.then((response: AxiosResponse) => {
      console.log(response.data);
    });
  }

  return {
    initializedPost,
  };
};
