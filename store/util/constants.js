export const ROOT_URL = "https://berhentiapi.onrender.com/api";
// export const ROOT_URL = 'http://localhost:9090/api';

export const API_KEY = "?key=berhenti-user";

let BEARER_TOKEN = "";

export function getBearerToken() {
  return BEARER_TOKEN;
}

export function setBearerToken(token) {
  BEARER_TOKEN = token;
}
