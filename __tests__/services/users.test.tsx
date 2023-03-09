import { AxiosResponse } from "axios";

import { getAllUsers, User } from "@services/users";
import { API } from "@services/";
import { usersMock } from "@mock/users";

jest.mock("@services/");
const mockedAxios = API as jest.Mocked<typeof API>;

describe("Get user list", () => {
    let response: Pick<AxiosResponse<User[]>, "data">;
    beforeAll(() => {
        response = {
            data: usersMock,
        };
    });

    it("resolved", async () => {
        mockedAxios.get.mockResolvedValue(response);
        const data = await getAllUsers();

        expect(mockedAxios.get).toBeCalledTimes(1);
        expect(data).toEqual(usersMock);
    });

    it("rejected", async () => {
        mockedAxios.get.mockRejectedValue(null);
        const data = await getAllUsers();

        expect(mockedAxios.get).toBeCalledTimes(1);
        expect(data).toEqual(null);
    });

    afterEach(() => {
        jest.clearAllMocks();
    });
});
