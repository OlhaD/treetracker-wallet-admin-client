import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

jest.mock("./utils/apiClient", () => ({
  get: jest.fn(),
}));

describe("App component", () => {
  it("renders without crashing", () => {
    render(<App />);
  });

  it("renders the Router component", () => {
    const { getByTestId } = render(<App />);
    expect(getByTestId("router-component")).toBeInTheDocument();
  });

  it("renders the Layout component", () => {
    const { getByTestId } = render(<App />);
    expect(getByTestId("layout-component")).toBeInTheDocument();
  });

  it("renders the ClientRoutes component", () => {
    const { getByTestId } = render(<App />);
    expect(getByTestId("client-routes-component")).toBeInTheDocument();
  });
});
