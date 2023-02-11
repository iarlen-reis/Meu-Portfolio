import styled from "styled-components";
import { Colors } from "../../styles/GlobalStyles";

export const SectionContainerStyled = styled.section`
  padding-top: 2rem;
  width: 100%;
`;

export const RowStyled = styled.div`
  width: 100%;
  height: 100%;
`;

export const CardContainerStyled = styled.div`
  max-width: 32rem;
  min-height: 34rem;

  margin: 0 auto;

  padding: 1rem;

  border: 1px solid ${Colors.textColorSecundary};
  border-radius: 5px;
  background: ${Colors.tertiaryColor};
`;

export const CardTitleStyled = styled.div`
  font-size: 1.5rem;
  text-align: center;
  margin-bottom: 0.5rem;
  color: #fff;

  @media (max-width: 670px) {
    font-size: 1.2rem;
  }
`;

export const CardImageStyled = styled.div`
  width: 100%;
  margin-bottom: 1.5rem;
  display: flex;

  display: flex;

  img {
    max-width: 100%;
    max-height: 100px;
    margin: 0 auto;
  }
`;

export const CardDescriptionStyled = styled.div`
  max-width: 100%;
  color: #fff;
  text-align: start;

  display: flex;
  flex-direction: column;

  row-gap: 1rem;

  @media (max-width: 670px) {
    h2 {
      font-size: 1rem;
    }

    p {
      font-size: 0.9rem;
    }
  }
`;
