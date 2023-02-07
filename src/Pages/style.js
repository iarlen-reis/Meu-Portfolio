import styled from "styled-components";

import { Colors, FontsSizes, FontFamilly } from "../styles/GlobalStyles";

export const AboutStyledContainer = styled.section`
  width: 100%;
  height: 100vh;

  padding-left: 2rem;
  padding-top: 2rem;

  color: ${Colors.textColorSecundary};
  background: ${Colors.primaryColor};
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
    font-size: ${FontsSizes.fontRegular};
  }

  p {
    font-style: italic;
  }
`;

export const AboutDescriptionContainer = styled.div`
  max-width: 900px;

  display: flex;
  flex-direction: column;

  align-self: flex-start;
  row-gap: 1rem;

  text-align: start;
`;
