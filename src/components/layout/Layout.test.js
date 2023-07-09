import { render } from "@testing-library/react";
import React from "react";
import Layout from "./Layout";
import { StyledContent } from "./LayoutStyled";
import Menu from "./Menu/Menu";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material";

const theme = createTheme({
  zIndex: {
    drawer: 1200,
  },
});

describe("Layout component", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = render(
      <ThemeProvider theme={theme}>
        <Router>
          <Layout>
            <div>Test</div>
          </Layout>
        </Router>
      </ThemeProvider>
    );
  });

  it("should render Layout component", () => {
    expect(wrapper).toBeTruthy();
  });

  it("should render Menu component", () => {
    expect(wrapper.getByTestId("menu-component")).toBeInTheDocument();
  });

  it("should render StyledContent component", () => {
    expect(wrapper.getByTestId("styled-content-component")).toBeInTheDocument();
  });
});
