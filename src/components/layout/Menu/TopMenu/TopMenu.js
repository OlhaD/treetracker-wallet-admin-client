import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import LogoutIcon from "@mui/icons-material/Logout";
import * as React from "react";
import { AppBarStyled, LogoStyled, ToolbarStyled } from "./TopMenuStyled";
import AuthContext from "../../../../store/auth-context";
import { FlexDiv } from "../../../UI/styledComponents/CommonStyled";
import IconLogo from "../../../UI/IconLogo";

const TopMenu = ({ handleDrawerOpen, open }) => {
  const authContext = React.useContext(AuthContext);

  const logoutHandler = () => authContext.logout();

  return (
    <AppBarStyled
      position="fixed"
      open={open}
      data-testid="app-bar-styled-component"
    >
      <ToolbarStyled>
        <FlexDiv>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <LogoStyled
            variant="h6"
            noWrap
            component="div"
            data-testid="logo-styled-component"
          >
            <IconLogo />
          </LogoStyled>
        </FlexDiv>
        <div>
          <LogoutIcon
            color="inherit"
            style={{ cursor: "pointer" }}
            onClick={logoutHandler}
            data-testid="logout-icon-component"
          ></LogoutIcon>
        </div>
      </ToolbarStyled>
    </AppBarStyled>
  );
};

export default TopMenu;
