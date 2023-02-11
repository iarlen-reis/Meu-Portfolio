import styled from "styled-components";

import { Colors, FontFamilly, FontsSizes } from "../../styles/GlobalStyles";

export const TechnologyContainerStyled = styled.section`
  width: 100%;
  min-height: 100vh;

  color: ${Colors.textColorSecundary};
  background: ${Colors.primaryColor};

  padding-bottom: 5rem;
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
