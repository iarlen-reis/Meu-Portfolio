import styled from "styled-components";
import { Colors, FontFamilly, FontsSizes } from "../../styles/GlobalStyles";

export const ProjectCardContainerStyled = styled.article`
  width: 32rem;
  min-height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  row-gap: 0.4rem;
  padding-bottom: 0.4rem;

  border: 1px solid rgba(51, 51, 51, 0.5);
  border-radius: 6px;

  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

  color: ${Colors.textColorSecundary};
  background: ${Colors.tertiaryColor};
`;

export const ProjectImageContainer = styled.div`
  width: 100%;

  border-top-left-radius: 6px;
  border-top-right-radius: 6px;

  overflow: hidden;

  img {
    width: 100%;
    border-bottom: 1px solid rgba(61, 61, 61, 0.5);
  }
`;

export const ProjectDescriptonContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  row-gap: 0.6rem;

  text-align: start;

  padding: 0 0.6rem;
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
  padding: 0.6rem 0.6rem;

  column-gap: 1rem;

  border-top: 1px solid rgba(61, 61, 61, 0.5);

  a {
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;

    column-gap: 0.5rem;

    font-weight: 500;

    padding: 0.5rem 0.6rem;

    border-radius: 4px;

    color: ${Colors.textColorSecundary};
    background: ${Colors.secundaryColor};

    transition: 0.5s ease-in;

    &:hover {
      background: ${Colors.headerColor};
    }
  }
`;
