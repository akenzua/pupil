import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const appHeading = screen.getByText(/planetry bodies/i);
  expect(appHeading).toBeInTheDocument();
});
