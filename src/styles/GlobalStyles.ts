import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

*,
*::before,
*::after {
  font-family: "Quicksand", sans-serif;
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

body {
  color: black;
}

button {
  cursor: pointer;
}

*:disabled {
  cursor: not-allowed;
}

a {
  color: inherit;
  text-decoration: none;
}

ul {
  list-style: none;
}

`;

export default GlobalStyles;
