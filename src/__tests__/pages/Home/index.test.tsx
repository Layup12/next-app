import { fireEvent, render } from "@testing-library/react";
import Home from "@pages/";

import { AxiosResponse } from "axios";

import { API } from "@services/";
import { photosMock } from "@mock/photos";
import { Photo } from "@services/photo";

jest.mock("@services/");
const mockedAxios = API as jest.Mocked<typeof API>;

describe("Home", () => {
    let response: Pick<AxiosResponse<Photo[]>, "data">;
    beforeAll(() => {
        response = {
            data: photosMock,
        };
    });
    it("render home page", async () => {
        mockedAxios.get.mockResolvedValue(response);
        const component = render(<Home />);

        const btn = component.getByRole("button");
        const imageWrapper = await component.findByTestId("image-wrapper");

        expect(imageWrapper).toBeInTheDocument();
        expect(imageWrapper.childElementCount).toBe(12);
        expect(btn).toBeEnabled();
    });

    it("render with error", async () => {
        mockedAxios.get.mockRejectedValue(response);
        const component = render(<Home />);

        const btn = component.getByRole("button");

        expect(btn).toBeDisabled();
    });

    it("click show more", async () => {
        mockedAxios.get.mockResolvedValue(response);
        const component = render(<Home />);

        const imageWrapper = await component.findByTestId("image-wrapper");
        const btn = component.getByRole("button");

        expect(imageWrapper).toBeInTheDocument();
        expect(imageWrapper.childElementCount).toBe(12);
        expect(btn).toBeEnabled();

        fireEvent.click(btn);
        const imageWrapperAfterClick = await component.findByTestId("image-wrapper");
        expect(imageWrapperAfterClick.childElementCount).toBe(15);
        expect(btn).toBeDisabled();
    });
});
