import axios from "axios";

const baseURL = "https://jsonplaceholder.typicode.com/";

const configApi = {
    baseURL,
    headers: {
        "Content-Type": "application/json",
    },
};

export const API = axios.create(configApi);
