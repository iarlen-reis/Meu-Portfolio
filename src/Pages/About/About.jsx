import React, { useState } from "react";
import { ContainerStyled } from "../../styles/GlobalStyles";
import {
  AboutStyledContainer,
  AboutHeaderContainer,
  AboutDescriptionContainer,
  AboutDescriptionAdditionalContainer,
  AboutDescriptionAdditional,
  TextAdditionalContainer,
} from "./style";

import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

const About = () => {
  const [plans, setPlans] = useState(false);
  const [techs, setTechs] = useState(false);

  const ChangePlans = () => {
    setPlans(!plans);
    setTechs(false);
  };

  const ChangeTechs = () => {
    setTechs(!techs);
    setPlans(false);
  };

  return (
    <AboutStyledContainer>
      <ContainerStyled>
        <AboutHeaderContainer>Informações</AboutHeaderContainer>
        <AboutDescriptionContainer>
          <p>
            Olá, meu nome é <strong>Iarlen Santos Reis</strong>, tenho 21 anos e
            sou morador da cidade de Salvador, na <strong>Bahia</strong>. Sou
            entusiasta de basquete e atividade física, principalmente
            musculação.
          </p>
          <p>
            Iniciei meus estudos de programação com a linguagem
            <strong> Python</strong>, a princípio para desenvolvimento de bots e
            automação de sites. Mas após alguns meses resolvi estudar
            <strong> desenvolvimento web</strong>, começando com HTML / CSS e
            foi assim que descobrir minha paixão pela web.
          </p>
          <p>
            Atualmente sou desenvolvedor web, focado na área de
            <strong> front-end </strong>
            utilizando <strong>ReactJs</strong>. Mas pretendo continuar
            expandindo meus conhecimentos e aprender mais sobre a área de
            back-end.
          </p>
        </AboutDescriptionContainer>
        <AboutDescriptionAdditionalContainer>
          <h2>Informações Adicionais</h2>
          <AboutDescriptionAdditional>
            <button onClick={ChangeTechs}>
              Tecnologias que pretendo aprender
              {techs ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </button>
            {techs && (
              <TextAdditionalContainer>
                <p>
                  - Atualmente estou me aprofundando mais no ecossistema do React e como a
                  nova documentação recomenda a utilização de um framework, estou migrando para o NextJs.
                </p>
                <p>
                  - Já em relação ao futuro, pretendo me aprofundar mais em react native,
                  para desenvolvimento de aplicações mobile. E no back-and aprender algum framework,
                  também no ecossistema do node, como nestJs ou um micro-framework, como o fastify.
                </p>
              </TextAdditionalContainer>
            )}
          </AboutDescriptionAdditional>
        </AboutDescriptionAdditionalContainer>
      </ContainerStyled>
    </AboutStyledContainer>
  );
};

export default About;
