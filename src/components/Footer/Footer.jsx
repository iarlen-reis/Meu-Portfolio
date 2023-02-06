import React from "react";

import { ContainerStyled } from "../../styles/GlobalStyles";

import {
  FooterStyled,
  FooterContentStyled,
  FooterContactContainer,
  FooterInfoContainer,
  FooterSimbolContainer,
} from "./style";
const Footer = () => {
  return (
    <FooterStyled>
      <ContainerStyled>
        <FooterContentStyled>
          <FooterContactContainer>
            <a href="https://github.com/iarlen-reis" target="_blank">
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/iarlen-santos-reis-480119247/"
              target="_blank"
            >
              Linkedin
            </a>
            <a
              href="https://pt.vecteezy.com/vetor-gratis/projeto"
              target="_blank"
            >
              Projeto Vetores por Vecteezy
            </a>
          </FooterContactContainer>
          <FooterInfoContainer>
            <small>
              <FooterSimbolContainer>&#169;</FooterSimbolContainer> Todos os
              direitos reservados.
            </small>
          </FooterInfoContainer>
        </FooterContentStyled>
      </ContainerStyled>
    </FooterStyled>
  );
};

export default Footer;
