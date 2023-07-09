import { render } from "@testing-library/react";
import React from "react";
import LogoutIcon from "@mui/icons-material/Logout";
import { AppBarStyled, LogoStyled } from "./TopMenuStyled";
import TopMenu from "./TopMenu";

describe("TopMenu component", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = render(
      <TopMenu>
        <div>Test</div>
      </TopMenu>
    );
  });

  it("should render TopMenu component", () => {
    expect(wrapper).toBeTruthy();
  });

  it("should render AppBarStyled component", () => {
    expect(wrapper.getByTestId("app-bar-styled-component")).toBeInTheDocument();
  });

  it("should render LogoStyled component", () => {
    expect(wrapper.getByTestId("logo-styled-component")).toBeInTheDocument();
  });

  it("should render LogoutIcon component", () => {
    expect(wrapper.getByTestId("logout-icon-component")).toBeInTheDocument();
  });
});
