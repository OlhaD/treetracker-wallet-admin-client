import HomeIcon from "@mui/icons-material/Home";
import ThumbsUpDownIcon from "@mui/icons-material/ThumbsUpDown";
import ListItemText from "@mui/material/ListItemText";
import * as React from "react";
import {
  ItemButtonStyled,
  ItemIconStyled,
  LinkItemStyled,
} from "./MenuItemStyled";

const MenuItem = ({ open }) => {
  return (
    <>
      <LinkItemStyled to="/" data-testid="link-item-styled-component-1">
        <ItemButtonStyled
          open={open}
          data-testid="item-button-styled-component-1"
        >
          <ItemIconStyled
            open={open}
            data-testid="item-icon-styled-component-1"
          >
            <HomeIcon />
          </ItemIconStyled>
          <ListItemText
            primary={"Home"}
            sx={{ opacity: open ? 1 : 0, marginLeft: open ? "1rem" : 0 }}
          />
        </ItemButtonStyled>
      </LinkItemStyled>
      <LinkItemStyled
        to="/send-tokens"
        data-testid="link-item-styled-component-2"
      >
        <ItemButtonStyled
          open={open}
          data-testid="item-button-styled-component-2"
        >
          <ItemIconStyled
            open={open}
            data-testid="item-icon-styled-component-2"
          >
            <ThumbsUpDownIcon />
          </ItemIconStyled>
          <ListItemText
            primary={"Send Tokens"}
            sx={{ opacity: open ? 1 : 0, marginLeft: open ? "1rem" : 0 }}
          />
        </ItemButtonStyled>
      </LinkItemStyled>
    </>
  );
};

export default MenuItem;
