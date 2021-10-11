import { render, screen, cleanup } from "@testing-library/react";
import OnBorderPage from "../pages/OnBorderFormPage";
import "@testing-library/jest-dom";
test("should render OnBorderPage", () => {
  render(<OnBorderPage />);
  const item = screen.getByTestId("schedule");
  expect(item).toBeInTheDocument();
});
