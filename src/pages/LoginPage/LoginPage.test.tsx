import { render, screen } from "@testing-library/react";
import LoginPage from "./LoginPage";

describe("Given a LoginPage", () => {
  describe("When rendered", () => {
    test("Then it should show the title 'Welcome back' in a heading", () => {
      const expectedTitle = /welcome back/i;

      render(<LoginPage />);

      const title = screen.getByRole("heading", { name: expectedTitle });

      expect(title).toBeInTheDocument();
    });

    test("Then it should show the subtitle 'Log in to connect with your friends and enemies' in a heading", () => {
      const expectedSubtitle =
        /log in to connect with your friends and enemies/i;

      render(<LoginPage />);

      const subtitle = screen.getByText(expectedSubtitle);

      expect(subtitle).toBeInTheDocument();
    });
  });
});
