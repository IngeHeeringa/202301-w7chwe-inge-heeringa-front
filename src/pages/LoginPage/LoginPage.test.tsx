import { configureStore } from "@reduxjs/toolkit";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event/";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { userReducer } from "../../store/features/userSlice";
import LoginPage from "./LoginPage";
import { UserState } from "../../types";

const store = configureStore({
  reducer: { user: userReducer },
});

describe("Given a LoginPage", () => {
  describe("When rendered", () => {
    test("Then it should show the title 'Welcome back' in a heading", () => {
      const expectedTitle = /welcome back/i;

      render(
        <Provider store={store}>
          <LoginPage />
        </Provider>,
        { wrapper: BrowserRouter }
      );

      const title = screen.getByRole("heading", { name: expectedTitle });

      expect(title).toBeInTheDocument();
    });

    test("Then it should show the subtitle 'Log in to connect with your friends and enemies' in a heading", () => {
      const expectedSubtitle =
        /log in to connect with your friends and enemies/i;

      render(
        <Provider store={store}>
          <LoginPage />
        </Provider>,
        { wrapper: BrowserRouter }
      );

      const subtitle = screen.getByText(expectedSubtitle);

      expect(subtitle).toBeInTheDocument();
    });
  });

  describe("When the login form is submitted successfully", () => {
    test("Then it should show a redirect button to the home page", async () => {
      const mockUserStateTrue: UserState = {
        username: "User",
        token: "123",
        isLogged: true,
      };

      jest.mock("../../store/hooks", () => ({
        ...jest.requireActual("../../store/hooks"),
        useAppSelector: () => mockUserStateTrue,
      }));

      render(
        <Provider store={store}>
          <LoginPage />
        </Provider>,
        { wrapper: BrowserRouter }
      );

      await userEvent.type(screen.getByLabelText(/username/i), "User");
      await userEvent.type(screen.getByLabelText(/password/i), "user123");
      await userEvent.click(screen.getByRole("button", { name: /log in/i }));

      const redirectButton = await screen.findByRole(
        "button",
        {
          name: /go to home/i,
        },
        { timeout: 3000 }
      );

      expect(redirectButton).toBeInTheDocument();
    });
  });
});
