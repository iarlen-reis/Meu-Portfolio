import styled from "styled-components";

import { Colors, FontFamilly, FontsSizes } from "../../styles/GlobalStyles";

export const TechnologyContainerStyled = styled.section`
  width: 100%;
  height: 100vh;

  color: ${Colors.textColorSecundary};
  background: ${Colors.primaryColor};

  @media (max-width: 500px) {
    height: 100%;
  }
`;

export const TechnologyDescriptionContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: center;
  padding-top: 2rem;
  row-gap: 0.6rem;

  h1 {
    font-size: ${FontsSizes.fontBig};
    font-family: ${FontFamilly.fontItim};
  }

  p {
    font-style: italic;
    font-size: ${FontsSizes.fontExtraSmall};
  }

  @media (max-width: 450px) {
    h1 {
      font-size: ${FontsSizes.fontRegularPlus};
    }
  }

  @media (max-width: 450px) {
    h1 {
      font-size: ${FontsSizes.fontRegular};
    }
  }
`;

export const TechnologyContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  column-gap: 1rem;

  margin-top: 2rem;

  @media (max-width: 600px) {
    flex-direction: column;
    column-gap: 0rem;
    row-gap: 1rem;
  }
`;

export const TechnologyButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;

  label {
    padding: 0.5rem 1rem;

    text-align: center;
    font-weight: 600;

    border-radius: 4px;
    border: none;

    cursor: pointer;

    transition: 0.4s;

    color: ${Colors.textColorSecundary};
    background: ${Colors.secundaryColor};

    &:hover {
      background: ${Colors.tertiaryColor};
    }
  }

  @media (max-width: 600px) {
    flex-direction: row;
    align-self: center;
    column-gap: 0.5rem;
    row-gap: 0;
  }

  @media (max-width: 515px) {
    label {
      padding: 0.5rem 0.6rem;
    }
  }

  @media (max-width: 450px) {
    label {
      padding: 0.4rem 0.5rem;
      font-size: 0.8rem;
    }
  }

  @media (max-width: 375px) {
    label {
      padding: 0.4rem 0.5rem;
      font-size: 0.7rem;
    }
  }

  @media (max-width: 330px) {
    label {
      padding: 0.4rem 0.5rem;
      font-size: 0.6rem;
    }
  }

  @media (max-width: 300px) {
    label {
      padding: 0.4rem 0.4rem;
      font-size: 0.56rem;
    }
  }

  input {
    display: none;
  }

  input[type="radio"]:checked + label {
    background: ${Colors.tertiaryColor};
  }
`;

export const TechnologyTextContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 0.5rem 1rem;

  border: 1px solid ${Colors.textColorSecundary};
  border-radius: 4px;
`;
