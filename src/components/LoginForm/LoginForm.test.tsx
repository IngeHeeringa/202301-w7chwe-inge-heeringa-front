import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event/";
import LoginForm from "./LoginForm";

describe("Given a LoginForm component", () => {
  describe("When rendered", () => {
    test("Then it should show an input field for a username", () => {
      const onSubmit = jest.fn();
      const error = false;

      render(<LoginForm onSubmit={onSubmit} error={error} />);

      const inputField = screen.getByLabelText(/username/i);

      expect(inputField).toBeInTheDocument();
    });

    test("Then it should show an input field for a password", () => {
      const onSubmit = jest.fn();
      const error = false;

      render(<LoginForm onSubmit={onSubmit} error={error} />);

      const inputField = screen.getByLabelText(/password/i);

      expect(inputField).toBeInTheDocument();
    });

    test("Then it should show a submit button with the text 'Log in'", () => {
      const onSubmit = jest.fn();
      const error = false;

      render(<LoginForm onSubmit={onSubmit} error={error} />);

      const submitButton = screen.getByRole("button", { name: /log in/i });

      expect(submitButton).toBeInTheDocument();
    });
  });

  describe("When it receives an onSubmit function and the user submits the form", () => {
    test("Then the received onSubmit function should be invoked", async () => {
      const onSubmit = jest.fn();
      const error = false;

      render(<LoginForm onSubmit={onSubmit} error={error} />);

      await userEvent.type(screen.getByLabelText(/username/i), "User");

      await userEvent.type(screen.getByLabelText(/password/i), "user123");

      await userEvent.click(screen.getByRole("button", { name: /log in/i }));

      expect(onSubmit).toHaveBeenCalled();
    });
  });
});
