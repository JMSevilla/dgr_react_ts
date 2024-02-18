import { Api } from "../http-common";
import { MockDataProps } from "../types/types";
import { UserSchemaType } from "../schema/user-validation";
import { LoginSchemaType } from "../schema/login-validation";

class HttpRequest {
  public addNewUser(props: UserSchemaType) {
    return new Api().connect().post("/users", props);
  }
  public getAllUsers() {
    return new Api().connect().get("/users");
  }
  public checkUsername(username: string) {
    return new Api().connect().get(`/users?username=${username}`);
  }
}

export default new HttpRequest();
