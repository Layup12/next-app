import axios from "axios";

const configApi = {
    baseURL: process.env.API_HOST,
    headers: {
        "Content-Type": "application/json",
    },
};

export const NEXT_SERVER_API = axios.create(configApi);
