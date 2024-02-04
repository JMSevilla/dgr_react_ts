import { Api } from "../http-common";
import { MockDataProps } from "../types/types";

export class HttpRequest {
  public addNewPosts(props: MockDataProps) {
    return new Api().connect().post("/posts", props);
  }
}
