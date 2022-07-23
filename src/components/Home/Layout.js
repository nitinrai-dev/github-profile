import styled, { ThemeProvider } from "styled-components";
import SmoothScrollbar from "../Global/smoothScroll";
import { GlobalStyle, darkTheme } from "../Styles/GlobalStyle";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={darkTheme}>
      <StyledHome className="Home">
        <SmoothScrollbar />
        <GlobalStyle />
        <Header />
        <main>{children}</main>
      </StyledHome>
    </ThemeProvider>
  );
};

export default Layout;

const StyledHome = styled.div`
  width: 100vw;
  height: 100vh;
  & .scrollbar-track {
    background: transparent;
    & .scrollbar-thumb {
      background: ${({ theme }) => theme.pink};
      width: 2px;
      left: unset;
      right: 2px;
    }
  }
`
