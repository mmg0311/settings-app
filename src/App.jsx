import React from "react";

// Sections
import Header from "./sections/Header";
import Sidebar from "./sections/Sidebar";
import Main from "./sections/Main";

// Styled
import { StyledWrapper } from "./styled";

const App = () => {
  const [isSidebarVisible, toggleSidebar] = React.useState(false);
  return (
    <StyledWrapper>
      <Header toggleSidebar={toggleSidebar} />
      <Sidebar visible={isSidebarVisible} />
      <Main />
    </StyledWrapper>
  );
};

export default App;
