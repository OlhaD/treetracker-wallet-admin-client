import { render } from "@testing-library/react";
import React from "react";
import MenuItem from "./MenuItem";

describe("MenuItem component", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = render(
      <MenuItem data-testid="menu-item-component-1">
        <div>Test</div>
      </MenuItem>
    );
  });

  it("should render MenuItem component", () => {
    expect(wrapper).toBeTruthy();
  });

  it("should render ItemButtonStyled component", () => {
    const itemButtons = wrapper.queryAllByTestId(
      "item-button-styled-component-1"
    );
    expect(itemButtons.length).toBeGreaterThanOrEqual(1);
  });

  it("should render ItemIconStyled component", () => {
    const itemIcons = wrapper.queryAllByTestId("item-icon-styled-component-1");
    expect(itemIcons.length).toBeGreaterThanOrEqual(1);
  });

  it("should render LinkItemStyled component", () => {
    const linkItems = wrapper.queryAllByTestId("link-item-styled-component-1");
    expect(linkItems.length).toBeGreaterThanOrEqual(1);
  });
});
