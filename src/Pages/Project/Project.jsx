import React from "react";

import { ContainerStyled } from "../../styles/GlobalStyles";
import {
  ProjectStyledContainer,
  ProjectDecriptionStyled,
  ProjectsCardContainerStyled,
} from "./style";

import ProjectCard from "../../components/ProjectCard/ProjectCard";

import LifeSharedImage from "/projects/image-life-shared.png";
import FetchGithubImage from "/projects/image-fetch-github.png";
import contextApiImage from "/projects/image-context-api.png";

const Project = () => {
  return (
    <ProjectStyledContainer>
      <ContainerStyled>
        <ProjectDecriptionStyled>
          <h1>Meus projetos</h1>
          <p>Esses são alguns do meus projetos!</p>
        </ProjectDecriptionStyled>
        <ProjectsCardContainerStyled>
          <ProjectCard
            Image={LifeSharedImage}
            Title="Life Shared"
            Description="Life shared é uma aplicação onde o usuário pode se registrar,
            compartilhar seus momentos preferidos, a plataforma também uma
            dashboard de gerenciar as postagens."
            Technology={["ReactJs", "Firebase", "ContextAPI"]}
            Github="https://github.com/iarlen-reis/Life-Shared"
            Deploy="https://www.life-shared.iarlenreis.com.br/"
          />
          <ProjectCard
            Image={FetchGithubImage}
            Title="FindRepository"
            Description="FindRepository é uma aplicação que utiliza a API do github para buscar
            perfis e listar repositórios e futuramente irei adicionar a opção de
            salvar repositórios."
            Technology={["ReactJs", "Styled-components", "ContextAPI"]}
            Github="https://github.com/iarlen-reis/FetchGitHub"
            Deploy="https://www.fetch-github.iarlenreis.com.br/"
          />
          <ProjectCard
            Image={contextApiImage}
            Title="AuthContext"
            Description="AuthContext foi uma aplicação que desenvolvi quando estava treinando
            gerenciamento de estados com ContextAPI, persistência de dados com
            localstorage."
            Technology={["ReactJs", "Localstorage", "ContextAPI"]}
            Github="https://github.com/iarlen-reis/React-ContextAPI-Responsividade"
            Deploy="http://context-api.iarlenreis.com.br/"
          />
        </ProjectsCardContainerStyled>
      </ContainerStyled>
    </ProjectStyledContainer>
  );
};

export default Project;
