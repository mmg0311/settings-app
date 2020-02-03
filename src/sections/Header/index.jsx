import React from "react";

// Styled
import { StyledHeader, StyledMenu } from "./styled";

// Icons
import { MenuIcon } from "../../assets/icons";

const Header = ({ toggleSidebar }) => {
  return (
    <StyledHeader>
      <StyledMenu onClick={() => toggleSidebar(visible => !visible)}>
        <MenuIcon color="#000" size="24" />
      </StyledMenu>
    </StyledHeader>
  );
};

export default Header;
