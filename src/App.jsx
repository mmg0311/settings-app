import React from "react";

// Sections
import Header from "./sections/Header";
import Sidebar from "./sections/Sidebar";
import Main from "./sections/Main";

// Styled
import { StyledWrapper } from "./styled";

const App = () => {
  return (
    <StyledWrapper>
      <Header />
      <Sidebar />
      <Main />
    </StyledWrapper>
  );
};

export default App;
