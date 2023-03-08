import { NEXT_SERVER_API } from ".";
import { Assets } from "../assets";

export async function getAssets() {
    try {
        const response = await NEXT_SERVER_API.get<Assets>("/assets");

        return response.data;
    } catch {
        return null;
    }
}
