import { API } from ".";

export type Photo = {
    albumId: number;
    id: number;
    title: string;
    url: string;
    thumbnailUrl: string;
};

export async function getAllPhoto() {
    try {
        const response = await API.get<Photo[]>("/photos");

        return response.data;
    } catch {
        return null;
    }
}
