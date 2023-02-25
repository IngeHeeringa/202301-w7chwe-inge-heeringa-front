import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import HomePage from "./HomePage";

describe("Given a HomePage", () => {
  describe("When rendered", () => {
    test("Then it should show the title 'Welcome to Frenemies' in a heading", () => {
      const expectedTitle = /welcome to frenemies/i;
      render(<HomePage />, { wrapper: BrowserRouter });

      const title = screen.getByRole("heading", { name: expectedTitle });

      expect(title).toBeInTheDocument();
    });

    test("Then it should show a call to action 'Sign up' in an anchor", () => {
      const expectedCallToAction = /sign up/i;
      render(<HomePage />, { wrapper: BrowserRouter });

      const callToAction = screen.getByRole("link", {
        name: expectedCallToAction,
      });

      expect(callToAction).toBeInTheDocument();
    });

    test("Then it should show a call to action 'Log in' in an anchor", () => {
      const expectedCallToAction = /log in/i;
      render(<HomePage />, { wrapper: BrowserRouter });

      const callToAction = screen.getByRole("link", {
        name: expectedCallToAction,
      });

      expect(callToAction).toBeInTheDocument();
    });
  });
});
