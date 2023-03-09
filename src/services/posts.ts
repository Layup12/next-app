import { API } from ".";

export type Post = {
    userId: number;
    id: number;
    title: string;
    body: string;
};

export async function getPost(id: string) {
    try {
        const response = await API.get<Post>(`/posts/${id}`);

        return response.data;
    } catch {
        return null;
    }
}

export async function getAllPosts() {
    try {
        const response = await API.get<Post[]>("/posts");

        return response.data;
    } catch {
        return null;
    }
}
