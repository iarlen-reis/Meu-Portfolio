import React from "react";

import JavaScriptImage from "/carousel/javascript.png";
import ReactImage from "/carousel/react.png";
import HtmlImage from "/carousel/html.png";
import CssImage from "/carousel/css.png";

import Carousel from "react-elastic-carousel";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 900, itemsToShow: 1 },
  { width: 1200, itemsToShow: 2 },
];

import {
  SectionContainerStyled,
  RowStyled,
  CardTitleStyled,
  CardContainerStyled,
  CardImageStyled,
  CardDescriptionStyled,
} from "./style";

const Carouselcard = () => {
  return (
    <SectionContainerStyled>
      <RowStyled>
        <Carousel breakPoints={breakPoints} showArrows={false}>
          {/* 1 javascript */}

          <CardContainerStyled>
            <CardTitleStyled>
              <h2>JavaScript</h2>
            </CardTitleStyled>
            <CardImageStyled>
              <img src={JavaScriptImage} alt="Imagem do logo do javascript" />
            </CardImageStyled>
            <CardDescriptionStyled>
              <h3>O que javaScript?</h3>
              <p>
                JavaScript é uma linguagem de programação de alto nível, É
                amplamente compatível com todos os navegadores e é usado para
                criar aplicativos da web, jogos, aplicativos móveis, entre
                outros..
              </p>
              <h3>O que sei sobre javaScript?</h3>
              <ul>
                <li>- Tipos de dados.</li>
                <li>- Operações lógicas.</li>
                <li>- Estruturas de controle.</li>
                <li>- Manipulação de DOM.</li>
                <li>- Arrays e objetos.</li>
                <li>- Funções e classes.</li>
              </ul>
            </CardDescriptionStyled>
          </CardContainerStyled>

          {/* 2 reactjs */}
          <CardContainerStyled>
            <CardTitleStyled>
              <h2>React Js</h2>
            </CardTitleStyled>
            <CardImageStyled>
              <img src={ReactImage} alt="Imagem do logo do react" />
            </CardImageStyled>
            <CardDescriptionStyled>
              <h3>O que ReactJs?</h3>
              <p>
                React.js é uma biblioteca JavaScript de código aberto para criar
                interfaces de usuário. Ele foi criado pelo Facebook e é
                amplamente utilizado na criação de aplicativos web complexos e
                escaláveis.
              </p>
              <h3>O que sei sobre ReactJs?</h3>
              <ul>
                <li>- Componetização.</li>
                <li>- Estado e Props.</li>
                <li>- Hooks.</li>
                <li>- Gerenciamento de estado.</li>
                <li>- Integração com APIs.</li>
              </ul>
            </CardDescriptionStyled>
          </CardContainerStyled>

          {/* 3 html */}
          <CardContainerStyled>
            <CardTitleStyled>
              <h2>React Js</h2>
            </CardTitleStyled>
            <CardImageStyled>
              <img src={HtmlImage} alt="Imagem do logo do react" />
            </CardImageStyled>
            <CardDescriptionStyled>
              <h3>O que é HTML?</h3>
              <p>
                HTML é a linguagem de marcação padrão usada para criar páginas
                da web. Ele define a estrutura de conteúdo de uma página da web,
                incluindo textos, imagens, links e outros elementos.
              </p>
              <h3>O que sei sobre HTML?</h3>
              <ul>
                <li>- Elementos HTML.</li>
                <li>- Atributos.</li>
                <li>- Semântica.</li>
                <li>- Multimídia.</li>
                <li>- Acessibilidade.</li>
              </ul>
            </CardDescriptionStyled>
          </CardContainerStyled>

          {/* 4 CSS */}
          <CardContainerStyled>
            <CardTitleStyled>
              <h2>React Js</h2>
            </CardTitleStyled>
            <CardImageStyled>
              <img src={CssImage} alt="Imagem do logo do react" />
            </CardImageStyled>
            <CardDescriptionStyled>
              <h3>O que CSS?</h3>
              <p>
                CSS é a linguagem de estilo usada para estilizar páginas da web.
                Ele permite controlar a aparência de elementos HTML, como
                fontes, cores, margens, espaçamentos e outros.
              </p>
              <h3>O Que sei sobre CSS?</h3>
              <ul>
                <li>- Seletores.</li>
                <li>- Propriedades.</li>
                <li>- Layout (Flex e grid).</li>
                <li>- Animações e transições.</li>
                <li>- Media queries.</li>
              </ul>
            </CardDescriptionStyled>
          </CardContainerStyled>
        </Carousel>
      </RowStyled>
    </SectionContainerStyled>
  );
};

export default Carouselcard;
