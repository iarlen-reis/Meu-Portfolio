import React from "react";

import LifeSharedImage from "/projects/image-life-shared.png";
import FetchGithubImage from "/projects/image-fetch-github.png";
import contextApiImage from "/projects/image-context-api.png";

import {
  ProjectCardContainerStyled,
  ProjectImageContainer,
  ProjectDescriptonContainer,
  ProjectTechnologyContainer,
  ProjectButtonContainer,
} from "./style";
const ProjectCard = () => {
  return (
    <>
      {/* 1 life-shared */}
      <ProjectCardContainerStyled>
        <ProjectImageContainer>
          <img src={LifeSharedImage} alt="Imagem do projeto life shared" />
        </ProjectImageContainer>
        <ProjectDescriptonContainer>
          <h2>Life Shared</h2>
          <p>
            Life shared é uma aplicação onde o usuário pode se registrar,
            compartilhar seus momentos preferidos, a plataforma também uma
            dashboard de gerenciar as postagens.
          </p>
        </ProjectDescriptonContainer>
        <ProjectTechnologyContainer>
          <h3>Tecnologias</h3>
          <p>ReactJs, Firebase, ContextAPI</p>
        </ProjectTechnologyContainer>
        <ProjectButtonContainer>
          <a href="https://github.com/iarlen-reis/Life-Shared" target="_blank">
            Github
          </a>
          <a href="https://www.life-shared.iarlenreis.com.br/" target="_blank">
            Site
          </a>
        </ProjectButtonContainer>
      </ProjectCardContainerStyled>

      {/* 2 Fetch-githbub */}

      <ProjectCardContainerStyled>
        <ProjectImageContainer>
          <img src={FetchGithubImage} alt="Imagem do projeto life shared" />
        </ProjectImageContainer>
        <ProjectDescriptonContainer>
          <h2>Fetch Github</h2>
          <p>
            Fetch github é uma aplicação que utiliza a API do github para buscar
            perfis e listar repositórios e futuramente irei adicionar a opção de
            salvar repositórios.
          </p>
        </ProjectDescriptonContainer>
        <ProjectTechnologyContainer>
          <h3>Tecnologias</h3>
          <p>ReactJs, Styled-components, contextAPI</p>
        </ProjectTechnologyContainer>
        <ProjectButtonContainer>
          <a href="https://github.com/iarlen-reis/FetchGitHub" target="_blank">
            Github
          </a>
          <a href="https://www.fetch-github.iarlenreis.com.br/" target="_blank">
            Site
          </a>
        </ProjectButtonContainer>
      </ProjectCardContainerStyled>

      {/* 3 context-api */}

      <ProjectCardContainerStyled>
        <ProjectImageContainer>
          <img src={contextApiImage} alt="Imagem do projeto life shared" />
        </ProjectImageContainer>
        <ProjectDescriptonContainer>
          <h2>ContextApi</h2>
          <p>
            ContextAPI foi uma aplicação que desenvolvi quando está aprendendo
            gerenciamento de estados com ContextAPI e persistencia de dados com
            localstorage.
          </p>
        </ProjectDescriptonContainer>
        <ProjectTechnologyContainer>
          <h3>Tecnologias</h3>
          <p>ReactJs, ContextAPI, Localstorage</p>
        </ProjectTechnologyContainer>
        <ProjectButtonContainer>
          <a
            href="https://github.com/iarlen-reis/React-ContextAPI-Responsividade"
            target="_blank"
          >
            Github
          </a>
          <a href="http://context-api.iarlenreis.com.br/" target="_blank">
            Site
          </a>
        </ProjectButtonContainer>
      </ProjectCardContainerStyled>
    </>
  );
};

export default ProjectCard;
