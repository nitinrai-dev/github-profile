import { ThemeProvider } from "styled-components";
import { GlobalStyle, darkTheme } from "../Styles/GlobalStyle";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={darkTheme}>
        <GlobalStyle />
        <Header />
        <main>{children}</main>
    </ThemeProvider>
  );
};

export default Layout;
