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
        <AboutHeaderContainer>
          <h1>Informações</h1>
          <p>Esse é um breve resumo sobre mim.</p>
        </AboutHeaderContainer>
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
            <button onClick={ChangePlans} plans={plans ? "true" : "false"}>
              Cursos que já concluir
              {plans ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </button>
            {plans && (
              <TextAdditionalContainer>
                <p>
                  - Curso de javascript moderno do basico ao avancado, professor
                  Otávio miranda (146 horas).
                </p>
                <p>
                  - React do Zero a Maestria, Professor Matheus Battisti (30
                  horas).
                </p>
              </TextAdditionalContainer>
            )}
            <button onClick={ChangeTechs}>
              Tecnologias que pretendo aprender no futuro
              {techs ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </button>
            {techs && (
              <TextAdditionalContainer>
                <p>
                  Pretendo aprender mais sobre back-end, logo inicialmente
                  pretendo dominar completamente o nodeJs, por ser semelhante ao
                  javascript. Já na área de front-end, pretendo aprender mais
                  sobre o reactJs e progredir para o nextJs.
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
