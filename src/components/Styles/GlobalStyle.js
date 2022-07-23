import styled, { createGlobalStyle, css } from "styled-components";
import Mutant from "./Fonts/Mutant.otf";

export const lightTheme = {
  purple: 'linear-gradient(120deg,#D270FF,#8338EC)',
  pink: '#FF006E',
  background: 'radial-gradient(circle farthest-corner at 50% 50%,#f9fafe,#f9fafe 53%,#eff2f9)',
  text: '#121316',
  textLight: 'hsl(0, 0%, 13%)',
  textLighter: 'hsl(0, 0%, 30%)',
  light: 'hsl(222, 59%, 93%)',
  lighter: 'hsla(0,0%,100%,1)',
  hsl: '0,0%,100%',
  boxShadow: '0 10px 2rem 0 rgba(74,64,250,.04)',
  transPrime: 'all .5s cubic-bezier(.7, 0, .3, 1)',
}

export const darkTheme = {
  purple: 'linear-gradient(120deg,#D270FF,#8338EC)',
  pink: '#FF006E',
  background: "#121316",
  text: 'hsl(0, 0%, 100%)',
  textLight: 'hsl(0, 0%, 80%)',
  textLighter: 'hsl(0, 0%, 70%)',
  light: 'hsla(0,0%,100%,0.04)',
  lighter: 'hsla(0,0%,100%,0.08)',
  hsl: '0,0%,100%',
  boxShadow: '0 10px 2rem 0 rgba(74,64,250,.04)',
  transPrime: 'all .5s cubic-bezier(.7, 0, .3, 1)',
}

export const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: "Mutant";
    src: url(${Mutant}) format("opentype");
}
*, ::before, ::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
:focus-visible {
    outline-offset: 2px;
    outline: 1px solid ${({ theme }) => theme.pink} !important;
}
html {
    scroll-behavior: smooth;
    font-size: 100%; /* 16px */
}
body {
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    font-family: 'Oswald', sans-serif;
    font-weight: 300;
    letter-spacing: 0.03em;
    -webkit-font-smoothing: antialiased;
    overflow-x: hidden;
}
a {
    color: ${({ theme }) => theme.text};
    text-decoration: none;
    cursor: pointer;
}
h1 {
    font-size: 3.052rem;
    font-family: 'Mutant';
}
h2 {font-size: 2.074rem;}

h3 {font-size: 1.728rem;}

h4 {font-size: 1.44rem;}

h5 {font-size: 1.2rem;}

small {font-size: 0.833rem;}

h1, h2, h3, h4, h5 {
    line-height: 1.3;
    font-weight: 300;
}

@media (max-width: 600px) {
h1 {font-size: 2.2rem}
h2 {font-size: 1.8rem}
h3 {font-size: 1.5rem}
h4 {font-size: 1.3rem}
}
`;

export const Container = styled.div`
  margin-inline: auto;
  width: calc(100vw - 5rem);
  height: 100%;

  ${(props) =>
    props.fluid &&
    css`
      padding-inline: 0;
      max-width: 100vh;
    `}
  @media (max-width: 540px) {
    ${(props) =>
      props.mobFluid &&
      css`
        padding-inline: 0;
      `}
  }

  @media (max-width: 540px) {
    width: calc(100vw - 3rem);
  }
`;
