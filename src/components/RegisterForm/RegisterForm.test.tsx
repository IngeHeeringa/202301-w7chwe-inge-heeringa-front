import { render, screen } from "@testing-library/react";
import RegisterForm from "./RegisterForm";

describe("Given a RegisterForm component", () => {
  describe("When rendered", () => {
    test("Then it should show an input field for a username", async () => {
      render(<RegisterForm />);

      const inputField = screen.getByRole("textbox", { name: /username/i });

      expect(inputField).toBeInTheDocument();
    });

    test("Then it should show an input field for a password", async () => {
      render(<RegisterForm />);

      const inputField = screen.getByLabelText(/password/i);

      expect(inputField).toBeInTheDocument();
    });

    test("Then it should show an input field for an email address", async () => {
      render(<RegisterForm />);

      const inputField = screen.getByRole("textbox", { name: /email/i });

      expect(inputField).toBeInTheDocument();
    });

    test("Then it should show a button to upload an avatar with text 'Upload avatar'", async () => {
      render(<RegisterForm />);

      const uploadAvatarButton = screen.getByRole("button", {
        name: /upload avatar/i,
      });

      expect(uploadAvatarButton).toBeInTheDocument();
    });

    test("Then it should show a button to submit the form with text 'Sign up'", async () => {
      render(<RegisterForm />);

      const signUpButton = screen.getByRole("button", {
        name: /sign up/i,
      });

      expect(signUpButton).toBeInTheDocument();
    });
  });
});
