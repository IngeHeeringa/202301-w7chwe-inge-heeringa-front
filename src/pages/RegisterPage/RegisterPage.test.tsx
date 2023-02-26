import { configureStore } from "@reduxjs/toolkit";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { userReducer } from "../../store/features/userSlice";
import RegisterPage from "./RegisterPage";

const store = configureStore({
  reducer: { user: userReducer },
});

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
});
