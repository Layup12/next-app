import axios from "axios";

const baseURL = "http://localhost:3000/api";

const configApi = {
    baseURL,
    headers: {
        "Content-Type": "application/json",
    },
};

export const NEXT_SERVER_API = axios.create(configApi);
