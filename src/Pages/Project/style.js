import styled from "styled-components";
import { Colors, FontsSizes, FontFamilly } from "../../styles/GlobalStyles";

export const ProjectStyledContainer = styled.div`
  width: 100%;
  min-height: 100vh;

  padding-bottom: 4rem;

  color: ${Colors.textColorSecundary};
  background: ${Colors.primaryColor};
`;

export const ProjectDecriptionStyled = styled.div`
width: 100%;
text-align: start;
  h1 {
    width: 100%;

    font-family: ${FontFamilly.fontItim};
    font-size: ${FontsSizes.fontBig};

    margin-bottom: 0.4rem;
  }

  p {
    font-style: italic;
    font-size: 1rem;

  }

  @media (max-width: 1088px) {
    text-align: center;

  }

  @media (max-width: 590px) {
    h1 {
        font-size: ${FontsSizes.fontRegular};
    }

    p {
      max-width: 300px;
      margin: 0 auto;
    }

  }

  @media (max-width: 420px) {
    h1 {
        font-size: ${FontsSizes.fontSmallPlus};
    }
  }
`

export const ProjectsCardContainerStyled = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: start;
  flex-wrap: wrap;

  gap: 2rem;
  row-gap: 2.5rem;
  margin-top: 2rem;

  @media (max-width: 1088px) {
    justify-content: center;
  }
`;
