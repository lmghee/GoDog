import axios from "axios";

function httpMake() {
  const http = axios.create({
    baseURL: process.env.BASE_URL,
    headers: {
      "Content-Type": "application/json",
    },
  });
  return http;
}

export { httpMake };
