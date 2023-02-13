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
            <a
              href="https://github.com/iarlen-reis"
              target="_blank"
              title="Meu perfil no Github"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/iarlen-santos-reis-480119247/"
              target="_blank"
              title="Meu perfil no linkedin"
            >
              Linkedin
            </a>
          </FooterContactContainer>
          <FooterInfoContainer>
            <small title="Direitos reservados.">
              <FooterSimbolContainer>&#169;</FooterSimbolContainer> Iarlen Reis
              2023
            </small>
          </FooterInfoContainer>
        </FooterContentStyled>
      </ContainerStyled>
    </FooterStyled>
  );
};

export default Footer;
