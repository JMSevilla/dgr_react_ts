import { Api } from "../http-common";

export class HttpRequest {
  public fetchUsers() {
    return new Api().connect().get("/users");
  }
}
