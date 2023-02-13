import styled from "styled-components";

import { Colors, FontsSizes, FontFamilly } from "../../styles/GlobalStyles";

export const AboutStyledContainer = styled.main`
  width: 100%;
  min-height: 100vh;

  padding-left: 2rem;
  padding-top: 2rem;
  padding-bottom: 4rem;

  color: ${Colors.textColorSecundary};
  background: ${Colors.primaryColor};

  @media (max-width: 798px) {
    padding-left: 0;
  }
`;

export const AboutHeaderContainer = styled.h1`
  width: 100%;
  text-align: start;

  margin-bottom: 1.2rem;

  font-family: ${FontFamilly.fontItim};
  font-size: ${FontsSizes.fontBig};

  @media (max-width: 440px) {
    font-size: ${FontsSizes.fontRegular};
  }

  @media (max-width: 357px) {
    font-size: ${FontsSizes.fontSmallPlus};
  }

  @media (max-width: 292px) {
    font-size: 1.5rem;
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
    font-size: ${FontsSizes.fontRegularPlus};
  }

  @media (max-width: 610px) {
    h2 {
      font-size: ${FontsSizes.fontRegularPlus};
    }
  }

  @media (max-width: 500px) {
    h2 {
      font-size: ${FontsSizes.fontSmallPlus};
    }
  }

  @media (max-width: 292px) {
    h2 {
      font-size: 1.5rem;
    }
  }
`;

export const AboutDescriptionAdditional = styled.div`
  display: flex;
  flex-direction: column;

  button {
    display: flex;
    align-items: center;
    justify-content: space-between;
    column-gap: 0.5rem;

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
  flex-direction: column;
  row-gap: 0.5rem;
  font-size: ${FontsSizes.fontExtraSmall};

  padding: 1.5rem 0.8rem;
  margin-bottom: 1.2rem;

  border-bottom-left-radius: 4px;

  background: ${Colors.tertiaryColor};
  color: ${Colors.textColorSecundary};
`;
