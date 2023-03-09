import { render, screen } from "@testing-library/react";
import Users from "@pages/users";
import { usersMock } from "@mock/users";

describe("Users", () => {
    it("snapshot with users mock data", () => {
        const component = render(<Users users={usersMock} />).container;

        expect(component).toMatchSnapshot();
    });

    it("user list", () => {
        render(<Users users={usersMock} />);

        const ul = screen.getByTestId("user-list");
        expect(ul).toBeInTheDocument();
        expect(ul.childElementCount).toBe(2);
    });

    it("empty user list", () => {
        render(<Users users={[]} />);

        const ul = screen.queryByTestId("user-list");
        expect(ul).toBeNull();
    });
});
