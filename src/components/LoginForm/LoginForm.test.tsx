import { render, screen } from "@testing-library/react";
import LoginForm from "./LoginForm";

describe("Given a LoginForm component", () => {
  describe("When rendered", () => {
    test("Then it should show an input field for a username", () => {
      render(<LoginForm />);

      const inputField = screen.getByRole("textbox", { name: /username/i });

      expect(inputField).toBeInTheDocument();
    });

    test("Then it should show an input field for a password", () => {
      render(<LoginForm />);

      const inputField = screen.getByLabelText(/password/i);

      expect(inputField).toBeInTheDocument();
    });

    test("Then it should show a submit button with the text 'Log in'", () => {
      render(<LoginForm />);

      const submitButton = screen.getByRole("button", { name: /log in/i });

      expect(submitButton).toBeInTheDocument();
    });
  });
});
