import { createGlobalStyle } from "styled-components";
import Colors from "../../config/colors";
import Typography from "../../config/typography";

export default createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    width: 100vw;
    min-height: 100vh;

    color: ${Colors.lightGrey};

    display: flex;
    justify-content: center;
    font-family: ${Typography.Roboto}
  }

  button, input, textarea, select {
    outline: none;
    border: none;
    background: none;
    color: inherit;

    padding: 0px;
  }

  #root {
    width: 100%;
    font-family: ${Typography.Roboto}
  }
`;
