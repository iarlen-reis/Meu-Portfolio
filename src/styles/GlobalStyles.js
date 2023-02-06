import styled, { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Roboto Mono";
    }

    ul {
      list-style: none;
    }

    a {
      text-decoration: none;
    }


`;

export const ContainerStyled = styled.div`
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 1rem;
  margin: 0 auto;
`;

export const Colors = {
  headerColor: "#0b0b0b",
  primaryColor: "#0f0f0f",
  secundaryColor: "#393E46",
  textColor: "#e3b505",
  textColorSecundary: "#EEEEEE",
  tealColor: "#89C9B8",
};

export const FontFamilly = {
  fontItim: "Itim",
  fontRoboto: "Roboto Mono",
};

export const FontsSizes = {
  fontRegular: "2rem",
  fontRegularPlus: "2.5rem",

  fontSmall: "1.3rem",
  fontSmallRegular: "1rem",
  fontExtraSmall: "0.9rem",

  fontBig: "3rem",
  fontBigExtraRegular: "3.5rem",

  fontBigRegular: "4rem",
  fontExtraBig: "5rem",
};

export default GlobalStyles;
