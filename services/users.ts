import axios from "axios";
import { API } from ".";

export type User = {
    id: number;
    name: string;
    username: string;
    email: string;
    address: {
        street: string;
        suite: string;
        city: string;
        zipcode: string;
    };
};

export async function getUser(id: string) {
    try {
        const response = await API.get<User>(`/users/${id}`);

        return response.data;
    } catch {
        return null;
    }
}

export async function getAllUsers() {
    try {
        const response = await API.get<User[]>("/users");

        return response.data;
    } catch {
        return null;
    }
}

export async function get() {
    try {
        const response = await axios.get<User[]>("https://jsonplaceholder.typicode.com/users");
        return response.data;
    } catch {
        return null;
    }
}
