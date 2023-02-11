import styled from "styled-components";
import { Colors, FontFamilly, FontsSizes } from "../../styles/GlobalStyles";

export const ProjectCardContainerStyled = styled.div`
  width: 20rem;
  min-height: 30rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  row-gap: 0.4rem;

  padding: 0.9rem 0.8rem;

  border: 1px solid ${Colors.textColorSecundary};
  border-radius: 4px;

  color: ${Colors.textColorSecundary};
  background: ${Colors.tertiaryColor};
`;

export const ProjectImageContainer = styled.div`
  width: 100%;
  background-position: center;
  background-size: cover;

  img {
    max-width: 100%;
    border: 1px solid ${Colors.headerColor};
    border-radius: 4px;

    transition: 0.5s;

    &:hover {
      transform: scale(1.5);
    }
  }

  @media (max-width: 798px) {
    img {
      &:hover {
        transform: none;
      }
    }
  }
`;

export const ProjectDescriptonContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  row-gap: 0.6rem;

  text-align: center;

  margin-bottom: 0.7rem;

  h2 {
    font-size: ${FontsSizes.fontSmallPlus};
    font-family: ${FontFamilly.fontItim};
  }

  p {
    text-align: start;
  }
`;

export const ProjectTechnologyContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  text-align: center;

  row-gap: 0.4rem;

  margin-bottom: 0.9rem;

  h3 {
    font-family: ${FontFamilly.fontItim};
    font-size: ${FontsSizes.fontSmall};
  }

  p {
    max-width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    font-weight: 600;

    flex-wrap: wrap;
  }
`;

export const ProjectButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  column-gap: 1rem;

  a {
    width: 30%;
    display: flex;
    align-items: center;
    justify-content: center;

    font-weight: 500;

    padding: 0.4rem 0.6rem;

    border-radius: 4px;

    color: ${Colors.textColorSecundary};
    background: ${Colors.headerColor};

    transition: 0.5s;

    &:hover {
      background: ${Colors.secundaryColor};
    }
  }
`;
