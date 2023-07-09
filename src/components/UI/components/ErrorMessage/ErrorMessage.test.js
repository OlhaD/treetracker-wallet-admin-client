import React from "react";
import { render } from "@testing-library/react";
import { Alert } from "@mui/material";
import ErrorMessage from "./ErrorMessage";

describe("ErrorMessage component", () => {
  it("renders without crashing", () => {
    const { container } = render(
      <ErrorMessage message="" onClose={() => {}} />
    );
    expect(container).toBeInTheDocument();
  });

  it("renders the Alert component with the correct severity", () => {
    const { getByRole } = render(
      <ErrorMessage message="" onClose={() => {}} />
    );
    const alertComponent = getByRole("alert");

    expect(alertComponent).toBeInTheDocument();
    expect(alertComponent).toHaveAttribute("severity", "error");
  });

  it("displays the provided error message", () => {
    const message = "An error occurred.";
    const { getByText } = render(
      <ErrorMessage message={message} onClose={() => {}} />
    );
    const alertComponent = getByText(message);

    expect(alertComponent).toBeInTheDocument();
  });

  it("calls the onClose function when the Alert is closed", () => {
    const onCloseMock = jest.fn();
    const { getByRole } = render(
      <ErrorMessage message="" onClose={onCloseMock} />
    );
    const alertComponent = getByRole("alert");

    alertComponent.click();

    expect(onCloseMock).toHaveBeenCalledTimes(1);
  });
});
