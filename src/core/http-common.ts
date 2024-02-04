import axios from "axios";

export class Api {
  connect() {
    const baseUrl = process.env.REACT_APP_PUBLIC_URL;
    const instance = axios.create({
      baseURL: baseUrl,
      headers: {
        "Content-Type": "application/json",
      },
    });
    return instance;
  }
}
