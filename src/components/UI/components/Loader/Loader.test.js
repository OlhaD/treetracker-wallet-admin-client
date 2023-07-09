import React from "react";
import { render } from "@testing-library/react";
import { CircularProgress } from "@mui/material";
import { LoaderGrid } from "./LoaderStyled";
import { Loader } from "./Loader";

describe("Loader component", () => {
  it("renders without crashing", () => {
    const { container } = render(<Loader />);
    expect(container).toBeInTheDocument();
  });

  it("renders the LoaderGrid component", () => {
    const { getByTestId } = render(<Loader />);
    const loaderGridComponent = getByTestId("loader-grid-component");
    expect(loaderGridComponent).toBeInTheDocument();
  });

  it("renders the CircularProgress component", () => {
    const { getByTestId } = render(<Loader />);
    const circularProgressComponent = getByTestId(
      "circular-progress-component"
    );
    expect(circularProgressComponent).toBeInTheDocument();
  });
});
