import styled from "styled-components";

import { Colors, FontsSizes, FontFamilly } from "../styles/GlobalStyles";

export const AboutStyledContainer = styled.section`
  width: 100%;
  height: 100vh;

  padding-left: 2rem;
  padding-top: 2rem;

  color: ${Colors.textColorSecundary};
  background: ${Colors.primaryColor};

  @media (max-width: 798px) {
    padding-left: 0;
  }
`;

export const AboutHeaderContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 0.5rem;

  text-align: start;

  margin-bottom: 1.5rem;

  h1 {
    font-family: ${FontFamilly.fontItim};
    font-size: ${FontsSizes.fontRegularPlus};
  }

  p {
    font-style: italic;
    font-size: ${FontsSizes.fontExtraSmall};
  }

  @media (max-width: 440px) {
    h1 {
      font-size: ${FontsSizes.fontRegular};
    }

    @media (max-width: 403px) {
      h1 {
        text-align: center;
      }
      p {
        text-align: center;
      }
    }

    @media (max-width: 357px) {
      h1 {
        font-size: ${FontsSizes.fontSmallPlus};
      }
    }

    @media (max-width: 292px) {
      h1 {
        font-size: 1.5rem;
      }
    }
  }
`;

export const AboutDescriptionContainer = styled.div`
  max-width: 900px;

  display: flex;
  flex-direction: column;

  align-self: flex-start;
  row-gap: 1rem;

  text-align: start;

  margin-bottom: 3rem;
`;

export const AboutDescriptionAdditionalContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  text-align: start;

  h2 {
    font-family: ${FontFamilly.fontItim};
  }
`;

export const AboutDescriptionAdditional = styled.div`
  display: flex;
  flex-direction: column;

  button {
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 1rem;

    font-weight: 500;
    cursor: pointer;

    border-radius: 4px;
    border: 1px solid ${Colors.secundaryColor};

    color: ${Colors.textColorSecundary};
    background: ${Colors.headerColor};

    outline: none;
  }

  button:nth-child(2) {
    margin-top: 1.2rem;
  }
`;

export const TextAdditionalContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  font-size: ${FontsSizes.fontExtraSmall};

  padding: 1.5rem 0.8rem;
  margin-bottom: 1.2rem;

  border-bottom-left-radius: 4px;

  background: ${Colors.tertiaryColor};
  color: ${Colors.textColorSecundary};
`;
