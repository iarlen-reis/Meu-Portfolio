import styled from "styled-components";
import { Colors, FontsSizes, FontFamilly } from "../../styles/GlobalStyles";

export const ProjectStyledContainer = styled.div`
  width: 100%;
  min-height: 100vh;

  padding-bottom: 4rem;

  color: ${Colors.textColorSecundary};
  background: ${Colors.primaryColor};
`;

export const ProjectDecriptionStyled = styled.h1`
  width: 100%;
  text-align: center;

  font-family: ${FontFamilly.fontItim};
  font-size: ${FontsSizes.fontBig};
`;

export const ProjectsCardContainerStyled = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  gap: 2rem;
  row-gap: 2.5rem;
  margin-top: 2rem;
`;
