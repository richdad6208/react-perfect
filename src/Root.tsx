import { createGlobalStyle } from "styled-components";
import Coins from "./screen/Coins";

const GlobalStyle = createGlobalStyle`
body {
  background: gray; 
}
`;

function Root() {
  return (
    <>
      <GlobalStyle />
      <Coins />
    </>
  );
}

export default Root;
