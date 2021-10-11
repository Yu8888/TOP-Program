import { render, screen, cleanup } from "@testing-library/react";
import SingleActivity from "../components/SingleActivity";
import "@testing-library/jest-dom";
test("should render SingleActivity", () => {
  render(<SingleActivity />);
  const item = screen.getByTestId("activity-1");
  expect(item).toBeInTheDocument();
});
