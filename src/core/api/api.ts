import { Api } from "../http-common";
import { MockDataProps } from "../types/types";
import { UserSchemaType } from "../schema/user-validation";
import { LoginSchemaType } from "../schema/login-validation";
import { UserEditSchemaType } from "../schema/user-edit-schema";

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
  public deleteUser(id: string) {
    return new Api().connect().delete(`/users/${id}`);
  }
  public updateUserProfile(props: UserEditSchemaType) {
    return new Api().connect().put(`/users/${props.id}`, props);
  }
}

export default new HttpRequest();
