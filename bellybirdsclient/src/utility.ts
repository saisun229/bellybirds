import axios, { AxiosResponse } from "axios"
export const IS_DEVELOPMENT = window.location.hostname === "localhost";
export const IS_PRODUCTION = !IS_DEVELOPMENT;

const API_URL = IS_PRODUCTION ? `${window.location.origin}:1337` : "http://localhost:1337";

export async function apiCall(path: string, payload: {[key: string]:any})  {
    console.log("api call request");
    const res = await fetch(`${API_URL}${path}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "x-access-token": window.localStorage.getItem("token") || "",
            "Access-Control-Allow-Origin": "true",
            "Access-Control-Allow-Credentials": "true"
        },
        body: JSON.stringify(payload)
    }).then(t => t.json())
    console.log("api call request response", res);
    return res;
}

export async function axiosApiCall(path: string, payload: {[key: string]:any})  {
    console.log("api call request");
    const config = {
        headers: {
          "Content-Type": "application/json",
          "x-access-token": localStorage.getItem("token") || ""
        }
      }
    const res: AxiosResponse = await axios.post(`${API_URL}${path}`, JSON.stringify(payload), config);
    console.log("api call request response", res.data);
    return res.data;
}