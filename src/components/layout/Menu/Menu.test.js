import { render } from "@testing-library/react";
import React from "react";
import Menu from "./Menu";
import MenuItem from "./MenuItem/MenuItem";
import { DrawerHeaderStyled, DrawerStyled } from "./MenuStyled";

describe("Menu component", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = render(
      <Menu>
        <div>Test</div>
      </Menu>
    );
  });

  it("should render Menu component", () => {
    expect(wrapper).toBeTruthy();
  });

  it("should render MenuItem component", () => {
    expect(wrapper.getByTestId("menu-item-component")).toBeInTheDocument();
  });

  it("should render DrawerHeaderStyled component", () => {
    expect(
      wrapper.getByTestId("drawer-header-styled-component")
    ).toBeInTheDocument();
  });

  it("should render DrawerStyled component", () => {
    expect(wrapper.getByTestId("drawer-styled-component")).toBeInTheDocument();
  });
});
