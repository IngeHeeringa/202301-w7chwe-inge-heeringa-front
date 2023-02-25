import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import RegisterForm from "./RegisterForm";

describe("Given a RegisterForm component", () => {
  describe("When rendered", () => {
    test("Then it should show an input field for a username", async () => {
      const onSubmit = jest.fn();
      render(<RegisterForm onSubmit={onSubmit} />);

      const inputField = screen.getByRole("textbox", { name: /username/i });

      expect(inputField).toBeInTheDocument();
    });

    test("Then it should show an input field for a password", async () => {
      const onSubmit = jest.fn();
      render(<RegisterForm onSubmit={onSubmit} />);

      const inputField = screen.getByLabelText(/password/i);

      expect(inputField).toBeInTheDocument();
    });

    test("Then it should show an input field for an email address", async () => {
      const onSubmit = jest.fn();
      render(<RegisterForm onSubmit={onSubmit} />);

      const inputField = screen.getByRole("textbox", { name: /email/i });

      expect(inputField).toBeInTheDocument();
    });

    test("Then it should show a button to upload an avatar with text 'Upload avatar'", async () => {
      const onSubmit = jest.fn();
      render(<RegisterForm onSubmit={onSubmit} />);

      const uploadAvatarButton = screen.getByRole("button", {
        name: /upload avatar/i,
      });

      expect(uploadAvatarButton).toBeInTheDocument();
    });

    test("Then it should show a button to submit the form with text 'Sign up'", async () => {
      const onSubmit = jest.fn();
      render(<RegisterForm onSubmit={onSubmit} />);

      const signUpButton = screen.getByRole("button", {
        name: /sign up/i,
      });

      expect(signUpButton).toBeInTheDocument();
    });
  });

  describe("When it receives an onSubmit function and the user submits the form", () => {
    test("Then the received onSubmit function should be invoked", async () => {
      const onSubmit = jest.fn();
      render(<RegisterForm onSubmit={onSubmit} />);

      await userEvent.type(
        screen.getByRole("textbox", { name: /username/i }),
        "User"
      );
      await userEvent.type(screen.getByLabelText(/password/i), "user123");
      await userEvent.type(
        screen.getByRole("textbox", { name: /email/i }),
        "user@user.com"
      );

      await userEvent.click(screen.getByRole("button", { name: /sign up/i }));

      expect(onSubmit).toHaveBeenCalled();
    });
  });
});
