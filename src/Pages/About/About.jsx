import React from "react";
import { ContainerStyled } from "../../styles/GlobalStyles";
import {
  AboutStyledContainer,
  AboutHeaderContainer,
  AboutDescriptionContainer,
} from "../style";

const About = () => {
  return (
    <AboutStyledContainer>
      <ContainerStyled>
        <AboutHeaderContainer>
          <h1>Informações sobre mim</h1>
          <p>Essas são algumas das informações sobre mim.</p>
        </AboutHeaderContainer>
        <AboutDescriptionContainer>
          <p>
            Olá, meu nome é Iarlen Santos Reis, tenho 21 anos e sou morador da
            cidade de Salvador, na Bahia. Sou entusiasta de basquete e atividade
            física, principalmente musculação.
          </p>
          <p>
            Iniciei meus estudos de programação com a linguagem Python, a
            princípio para desenvolvimento de bots e automação de sites. Mas
            após alguns meses resolvi estudar desenvolvimento web, começando com
            HTML / CSS e foi assim que descobrir minha paixão pela web.
          </p>
          <p>
            Atualmente sou desenvolvedor web, focado na área de front-end
            utilizando ReactJs. Mas pretendo continuar expandindo meus
            conhecimentos e aprender mais sobre a área de back-end.
          </p>
        </AboutDescriptionContainer>
      </ContainerStyled>
    </AboutStyledContainer>
  );
};

export default About;
