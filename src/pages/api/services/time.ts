import { NEXT_SERVER_API } from ".";
import { Time } from "../time";

export async function getTime() {
    try {
        const response = await NEXT_SERVER_API.get<Time>("/time");

        return response.data.time;
    } catch {
        return null;
    }
}
