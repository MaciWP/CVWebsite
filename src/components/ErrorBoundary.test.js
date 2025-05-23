import React from "react";
import { render, screen } from "@testing-library/react";
import ErrorBoundary from "./ErrorBoundary";

function ProblemChild() {
  throw new Error("Error!");
}

test("renders fallback UI on error", () => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  render(
    <ErrorBoundary>
      <ProblemChild />
    </ErrorBoundary>,
  );
  expect(screen.getByText(/something went wrong/i)).toBeInTheDocument();
});
