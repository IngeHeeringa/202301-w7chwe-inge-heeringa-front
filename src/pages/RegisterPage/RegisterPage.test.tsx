import { render, screen } from "@testing-library/react";
import RegisterPage from "./RegisterPage";

describe("Given a RegisterPage", () => {
  describe("When rendered", () => {
    test("Then it should show the title 'Sign up today!' in a heading", () => {
      const expectedTitle = "Sign up today!";

      render(<RegisterPage />);

      const title = screen.getByRole("heading", { name: expectedTitle });

      expect(title).toBeInTheDocument();
    });

    test("Then it should show the subtitle 'Instantly connect with your friends and enemies'", () => {
      const expectedSubtitle =
        "Instantly connect with your friends and enemies";

      render(<RegisterPage />);

      const subtitle = screen.getByText(expectedSubtitle);

      expect(subtitle).toBeInTheDocument();
    });

    test("Then it should show a submit button to sign up", () => {
      const expectedButtonText = /sign up/i;

      render(<RegisterPage />);

      const signUpButton = screen.getByRole("button", {
        name: expectedButtonText,
      });

      expect(signUpButton).toBeInTheDocument();
    });
  });
});
