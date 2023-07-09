import React, { useContext } from "react";
import { render } from "@testing-library/react";
import { TextField } from "@mui/material";
import Login from "./Login";

jest.mock("../../utils/apiClient", () => ({
  get: jest.fn(),
}));

jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useContext: jest.fn(),
}));

describe("Login component", () => {
  beforeEach(() => {
    useContext.mockReset();

    useContext.mockReturnValueOnce({
      isLoggedIn: false,
    });
  });

  it("renders without crashing", () => {
    const { container } = render(<Login />);
    expect(container).toBeInTheDocument();
  });

  it("renders the wallet and password input fields", () => {
    const { getByLabelText } = render(<Login />);
    const walletInput = getByLabelText("Wallet");
    const passwordInput = getByLabelText("Password");

    expect(walletInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
  });
});
