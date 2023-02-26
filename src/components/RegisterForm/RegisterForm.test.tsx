import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import RegisterForm from "./RegisterForm";

describe("Given a RegisterForm component", () => {
  describe("When rendered", () => {
    test("Then it should show an input field for a username", async () => {
      const onSubmit = jest.fn();
      const error = false;

      render(<RegisterForm onSubmit={onSubmit} error={error} />);

      const inputField = screen.getByLabelText(/username/i);

      expect(inputField).toBeInTheDocument();
    });

    test("Then it should show an input field for a password", async () => {
      const onSubmit = jest.fn();
      const error = false;

      render(<RegisterForm onSubmit={onSubmit} error={error} />);

      const inputField = screen.getByLabelText(/password/i);

      expect(inputField).toBeInTheDocument();
    });

    test("Then it should show an input field for an email address", async () => {
      const onSubmit = jest.fn();
      const error = false;

      render(<RegisterForm onSubmit={onSubmit} error={error} />);

      const inputField = screen.getByLabelText(/email/i);

      expect(inputField).toBeInTheDocument();
    });

    test("Then it should show a button to upload an avatar with text 'Upload avatar'", async () => {
      const onSubmit = jest.fn();
      const error = false;

      render(<RegisterForm onSubmit={onSubmit} error={error} />);

      const uploadAvatarButton = screen.getByRole("button", {
        name: /upload avatar/i,
      });

      expect(uploadAvatarButton).toBeInTheDocument();
    });

    test("Then it should show a button to submit the form with text 'Sign up'", async () => {
      const onSubmit = jest.fn();
      const error = false;

      render(<RegisterForm onSubmit={onSubmit} error={error} />);

      const signUpButton = screen.getByRole("button", {
        name: /sign up/i,
      });

      expect(signUpButton).toBeInTheDocument();
    });
  });

  describe("When it receives an onSubmit function and the user submits the form", () => {
    test("Then the received onSubmit function should be invoked", async () => {
      const onSubmit = jest.fn();
      const error = false;

      render(<RegisterForm onSubmit={onSubmit} error={error} />);

      await userEvent.type(screen.getByLabelText(/username/i), "User");
      await userEvent.type(screen.getByLabelText(/password/i), "user123");
      await userEvent.type(screen.getByLabelText(/email/i), "user@user.com");
      await userEvent.click(screen.getByRole("button", { name: /sign up/i }));

      expect(onSubmit).toHaveBeenCalled();
    });
  });

  describe("When it receives an onSubmit function and a positive error state", () => {
    test("Then it should show the feedback 'User already exists'", async () => {
      const onSubmit = jest.fn();
      const error = true;
      const expectedFeedbackMessage = /user already exists/i;

      render(<RegisterForm onSubmit={onSubmit} error={error} />, {
        wrapper: BrowserRouter,
      });

      const feedbackMessage = screen.getByText(expectedFeedbackMessage);

      expect(feedbackMessage).toBeInTheDocument();
    });

    test("Then it should show a redirect link to the login page with text 'go to the login page'", async () => {
      const onSubmit = jest.fn();
      const error = true;
      const expectedRedirectText = /go to the login page/i;

      render(<RegisterForm onSubmit={onSubmit} error={error} />, {
        wrapper: BrowserRouter,
      });

      const redirectText = screen.getByRole("link", {
        name: expectedRedirectText,
      });

      expect(redirectText).toBeInTheDocument();
    });
  });
});
