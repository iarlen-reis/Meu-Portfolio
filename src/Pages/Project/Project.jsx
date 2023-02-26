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
import ReactGramImage from "/projects/image-reactgram.png";
import AgendaImage from "/projects/image-agenda.png";
import TodoListImage from "/projects/image-todolist.png";
import SecretWordImage from "/projects/image-secretWord.png";

const Project = () => {
  return (
    <ProjectStyledContainer>
      <ContainerStyled>
        <ProjectDecriptionStyled>Meus projetos</ProjectDecriptionStyled>
        <ProjectsCardContainerStyled>
          {/* 1 Life Shared */}
          <ProjectCard
            Image={LifeSharedImage}
            Title="Life Shared"
            Description="Life shared é uma aplicação onde o usuário pode se registrar,
            compartilhar seus momentos preferidos, a plataforma também tem uma
            dashboard para o usuário gerenciar as postagens."
            Github="https://github.com/iarlen-reis/Life-Shared"
            Deploy="https://www.life-shared.iarlenreis.com.br/"
          />

          {/* 2 ReactGram */}
          <ProjectCard
            Image={ReactGramImage}
            Title="ReactGram"
            Description="ReatGram é um clone do instagram, utilizando reactJs. Ela possui as funcionalidades
            de login, cadastro,  visualizar perfil, publicar imagens, curtir e comentar."
            Github="https://github.com/iarlen-reis/ReactGram-frontend"
            Deploy="https://reactgram.iarlenreis.com.br/"
          />

          {/* 3 FindRepository */}
          <ProjectCard
            Image={FetchGithubImage}
            Title="FindRepository"
            Description="FindRepository é uma aplicação que utiliza a API do github para buscar
            perfis, listar repositórios e futuramente irei adicionar a opção de
            salvar repositórios."
            Github="https://github.com/iarlen-reis/FetchGitHub"
            Deploy="https://www.fetch-github.iarlenreis.com.br/"
          />

          {/* 4 Agenda */}
          <ProjectCard
            Image={AgendaImage}
            Title="Agenda"
            Description="Esse foi um projeto que desenvolvi enquanto estava aprendendo 
            express.js, ele permite que o usuário criei uma conta e faça gerenciamento de contatos."
            Github="https://github.com/iarlen-reis/Agenda"
            Deploy="https://agenda.iarlenreis.com.br/"
          />

          {/* 5 SecretWord */}
          <ProjectCard
            Image={SecretWordImage}
            Title="Secret Word"
            Description="Foi um projeto desenvolvido quando estava apredendo ReactJs, 
            ele é um jogo classico de Forca, onde aprendi props do reactJs."
            Github="https://github.com/iarlen-reis/SecretWord"
            Deploy="https://secret-word.iarlenreis.com.br/"
          />

          {/* 6 TodoList */}
          <ProjectCard
            Image={TodoListImage}
            Title="TodoList"
            Description="TodoList foi um projeto que fiz quando estava aprendendo reactJs,
            ele foi feito utilizando react usando classes ao invés de componentes."
            Github="https://github.com/iarlen-reis/TodoList-React"
            Deploy="https://todolist-react.iarlenreis.com.br/"
          />
        </ProjectsCardContainerStyled>
      </ContainerStyled>
    </ProjectStyledContainer>
  );
};

export default Project;
