import axios from "axios";

function httpMake() {
  const http = axios.create({
    baseURL: "http://localhost:9999",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return http;
}

export { httpMake };
