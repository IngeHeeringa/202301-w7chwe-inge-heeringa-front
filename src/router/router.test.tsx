import { render, screen } from "@testing-library/react";
import { createMemoryRouter, RouterProvider } from "react-router-dom";
import { routes } from "./router";

describe("Given the router element", () => {
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
});
