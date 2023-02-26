import { render, screen } from "@testing-library/react";
import { createMemoryRouter, RouterProvider } from "react-router-dom";
import { routes } from "./router";

describe("Given the router element", () => {
  describe("When the HomePage is rendered", () => {
    test("Then it should show a title with the text 'Welcome to Frenemies' in a heading", async () => {
      const expectedTitle = /welcome to frenemies/i;

      const router = createMemoryRouter(routes, {
        initialEntries: ["/"],
      });

      render(<RouterProvider router={router} />);

      const title = screen.getByRole("heading", {
        name: expectedTitle,
      });

      await expect(title).toBeInTheDocument();
    });
  });

  describe("When the RegisterPage is rendered", () => {
    test("Then it should show a submit button with the text 'Sign up'", async () => {
      const expectedButtonText = /sign up/i;

      const router = createMemoryRouter(routes, {
        initialEntries: ["/register"],
      });

      render(<RouterProvider router={router} />);

      const signUpButton = screen.getByRole("button", {
        name: expectedButtonText,
      });

      await expect(signUpButton).toBeInTheDocument();
    });
  });

  describe("When the LoginPage is rendered", () => {
    test("Then it should show a title with the text 'Welcome back' in a heading", async () => {
      const expectedTitle = /welcome back/i;

      const router = createMemoryRouter(routes, {
        initialEntries: ["/login"],
      });

      render(<RouterProvider router={router} />);

      const title = screen.getByRole("heading", {
        name: expectedTitle,
      });

      await expect(title).toBeInTheDocument();
    });
  });
});
