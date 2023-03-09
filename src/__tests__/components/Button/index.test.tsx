import { render, screen } from "@testing-library/react";

import { Button } from "@components/Button";

describe("Button", () => {
    it("snap initial button", () => {
        render(<Button>Initial</Button>);

        const button = screen.getByRole("button");

        expect(button).toMatchSnapshot();
    });
});
