import { configureStore } from "@reduxjs/toolkit";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { userReducer } from "../../store/features/userSlice";
import LoginPage from "./LoginPage";

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
        </Provider>
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
        </Provider>
      );

      const subtitle = screen.getByText(expectedSubtitle);

      expect(subtitle).toBeInTheDocument();
    });
  });
});
