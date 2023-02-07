import React, { useState } from "react";

import { ContainerStyled } from "../../styles/GlobalStyles";

import {
  TechnologyContainerStyled,
  TechnologyDescriptionContainer,
  TechnologyContainer,
  TechnologyButtonsContainer,
  TechnologyTextContainer,
} from "./style";

const Technology = () => {
  const [skills, setSkills] = useState("0");

  const skillsInfos = [
    "Sou javascript",
    "Sou o NodeJs!",
    "Sou o ReactJs!",
    "Sou o HTML!",
    "Sou o CSS!",
  ];

  const skillsTech = [];

  return (
    <TechnologyContainerStyled>
      <ContainerStyled>
        <TechnologyDescriptionContainer>
          <h1>Tecnologias</h1>
          <p>Selecione uma das tecnologias abaixo.</p>
        </TechnologyDescriptionContainer>
        <TechnologyContainer>
          <TechnologyButtonsContainer>
            <input
              type="radio"
              value={0}
              onChange={({ target }) => setSkills(target.value)}
              name="skills"
              id="javascript"
            />
            <label htmlFor="javascript">
              <span>JavaScript</span>
            </label>

            <input
              value={1}
              onChange={({ target }) => setSkills(target.value)}
              type="radio"
              name="skills"
              id="nodejs"
            />
            <label htmlFor="nodejs">
              <span>NodeJs</span>
            </label>

            <input
              value={2}
              onChange={({ target }) => setSkills(target.value)}
              type="radio"
              name="skills"
              id="reactjs"
            />
            <label htmlFor="reactjs">
              <span>ReactJs</span>
            </label>

            <input
              value={3}
              onChange={({ target }) => setSkills(target.value)}
              type="radio"
              name="skills"
              id="html"
            />
            <label htmlFor="html">
              <span>HTML</span>
            </label>

            <input
              value={4}
              onChange={({ target }) => setSkills(target.value)}
              type="radio"
              name="skills"
              id="css"
            />
            <label htmlFor="css">
              <span>CSS</span>
            </label>
          </TechnologyButtonsContainer>
          <TechnologyTextContainer>
            {skills === "0" && (
              <p>
                JavaScript é uma linguagem de programação de alto nível, É
                amplamente compatível com todos os navegadores e é usado para
                criar aplicativos da web, jogos, aplicativos móveis, entre
                outros.. <br /> <br /> O que sei sobre JavaScript? <br /> <br />
                - Variáveis e tipos de dados <br /> - Operações matemáticas e
                lógicas. <br /> - Estruturas de controle e repetição. <br /> -
                Arrays e objetos. <br /> - Funções e classes. <br /> - Eventos e
                manipulação de DOM.
              </p>
            )}
            {skills === "1" && (
              <p>
                Node.js é uma plataforma de desenvolvimento de código aberto
                baseada em JavaScript que permite a criação de aplicativos de
                alta escalabilidade e performace, O nodejs permite o
                desenvolvedor escrever aplicações javascript no lado do
                servidor. <br /> <br /> O que sei sobre NodeJs? <br /> <br />
                - Manipulação de arquivos e fluxo de dados (Fs). <br /> -
                Express.js (Criação de Apis | CRUD). <br /> - MongoDB (Moogose),
                mySql (Sequelize).
              </p>
            )}
            {skills === "2" && (
              <p>
                React.js é uma biblioteca JavaScript de código aberto para criar
                interfaces de usuário. Ele foi criado pelo Facebook e é
                amplamente utilizado na criação de aplicativos web complexos e
                escaláveis. <br /> <br /> O que sei sobre ReactJs? <br /> <br />
                - Componetização. <br /> - Estado e Props. <br /> - Hooks <br />{" "}
                - Gerenciamento de estado. <br /> - Integração com APIs
                externas.
              </p>
            )}
            {skills === "3" && (
              <p>
                HTML é a linguagem de marcação padrão usada para criar páginas
                da web. Ele define a estrutura de conteúdo de uma página da web,
                incluindo textos, imagens, links e outros elementos. <br />
                <br /> O que sei sobre HTML? <br /> <br />
                - Elementos HTML. <br /> - Atributos. <br /> - Semântica. <br />
                - Multimídia. <br /> - Acessibilidade.
              </p>
            )}
            {skills === "4" && (
              <p>
                CSS é a linguagem de estilo usada para estilizar páginas da web.
                Ele permite controlar a aparência de elementos HTML, como
                fontes, cores, margens, espaçamentos e outros.
                <br />
                <br /> O Que sei sobre CSS? <br /> <br />
                - Seletores. <br /> - Propriedades. <br /> - Layout (Flex e
                grid). <br />
                - Animações e transições. <br /> - Media queries.
              </p>
            )}
          </TechnologyTextContainer>
        </TechnologyContainer>
      </ContainerStyled>
    </TechnologyContainerStyled>
  );
};

export default Technology;
