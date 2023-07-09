import React from "react";
import { render } from "@testing-library/react";
import { useContext } from "react";
import ClientRoutes from "./ClientRoutes";

jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useContext: jest.fn(),
}));

jest.mock("../../utils/apiClient", () => ({
  get: jest.fn(),
}));

describe("ClientRoutes component", () => {
  beforeEach(() => {
    useContext.mockReset();
  });

  it("renders without crashing", () => {
    useContext.mockReturnValueOnce({
      isLoggedIn: true,
    });

    const { container } = render(<ClientRoutes />);
    expect(container).toBeInTheDocument();
  });
});
