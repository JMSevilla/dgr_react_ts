import axios from "axios";

export class Api {
  connect() {
    const baseUrl = "http://localhost:3000";
    const instance = axios.create({
      baseURL: baseUrl,
      headers: {
        "Content-Type": "application/json",
      },
    });
    return instance;
  }
}
