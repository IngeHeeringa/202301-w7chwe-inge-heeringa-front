import { configureStore } from "@reduxjs/toolkit";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event/";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { userReducer } from "../../store/features/userSlice";
import RegisterPage from "./RegisterPage";

const store = configureStore({
  reducer: { user: userReducer },
});

jest.mock("../../hooks/useUser", () => ({
  __esModule: true,
  default: () => ({
    registerUser: jest.fn(),
  }),
}));

describe("Given a RegisterPage", () => {
  describe("When rendered", () => {
    test("Then it should show the title 'Sign up today!' in a heading", () => {
      const expectedTitle = /sign up today!/i;

      render(
        <Provider store={store}>
          <RegisterPage />
        </Provider>
      );

      const title = screen.getByRole("heading", { name: expectedTitle });

      expect(title).toBeInTheDocument();
    });

    test("Then it should show the subtitle 'Instantly connect with your friends and enemies'", () => {
      const expectedSubtitle =
        /instantly connect with your friends and enemies/i;

      render(
        <Provider store={store}>
          <RegisterPage />
        </Provider>
      );

      const subtitle = screen.getByText(expectedSubtitle);

      expect(subtitle).toBeInTheDocument();
    });

    test("Then it should show a submit button to sign up", () => {
      const expectedButtonText = /sign up/i;

      render(
        <Provider store={store}>
          <RegisterPage />
        </Provider>
      );

      const signUpButton = screen.getByRole("button", {
        name: expectedButtonText,
      });

      expect(signUpButton).toBeInTheDocument();
    });
  });

  describe("When the register form is submitted successfully", () => {
    test("Then it should show a redirect button to the login page", async () => {
      render(
        <Provider store={store}>
          <RegisterPage />
        </Provider>,
        { wrapper: BrowserRouter }
      );

      await userEvent.type(screen.getByLabelText(/username/i), "User");
      await userEvent.type(screen.getByLabelText(/password/i), "user123");
      await userEvent.type(screen.getByLabelText(/email/i), "user@user.com");
      await userEvent.click(screen.getByRole("button", { name: /sign up/i }));

      const redirectButton = await screen.findByRole("button", {
        name: /log in/i,
      });

      expect(redirectButton).toBeInTheDocument();
    });
  });
});
