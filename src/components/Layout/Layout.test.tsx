import { render, screen } from "@testing-library/react";
import Layout from "./Layout";

describe("Given a Layout component", () => {
  describe("When rendered", () => {
    test("Then it should show the main content of the app", () => {
      render(<Layout />);

      const mainContent = screen.getByRole("main");

      expect(mainContent).toBeInTheDocument();
    });
  });
});
