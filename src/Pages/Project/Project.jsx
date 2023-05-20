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
import SearchCityImage from "/projects/image-search-city.png";
import RickAndMortyImage from "/projects/image-rick-and-morty.png";
import BarberShopImage from "/projects/image-barbershop.png";

const Project = () => {
  return (
    <ProjectStyledContainer>
      <ContainerStyled>
        <ProjectDecriptionStyled>
          <h1>Meus projetos</h1>
          <p>Esses são meus principais projetos.</p>
        </ProjectDecriptionStyled>
        <ProjectsCardContainerStyled>
          {/* BarberShop */}
          <ProjectCard
            Image={BarberShopImage}
            Title="BarberShop"
            Description="BarberShop é uma aplicação para gerenciamento de barbearia,
            ela possui autenticação e integração com Google Firebase."
            Github="https://github.com/iarlen-reis/BarberShop"
            Deploy="https://barbershop.iarlenreis.com.br/"
            techs={["React", "Typescript", "Styled-components", "Firebase"]}
          />
          {/* RickAndMorty */}
          <ProjectCard
            Image={RickAndMortyImage}
            Title="RickAndMorty"
            Description="RickAndMory é uma aplicação que utiliza a API do RickAndMortyAPI
            para encontrar informações sobre os personagens."
            Github="https://github.com/iarlen-reis/RickAndMorty"
            Deploy="https://rick-and-morty.iarlenreis.com.br/"
            techs={["React", "Typescript", "Styled-components", "Axios"]}
          />
          {/* Life Shared */}
          <ProjectCard
            Image={LifeSharedImage}
            Title="Life Shared"
            Description="Life shared é uma aplicação onde o usuário pode se registrar,
            compartilhar seus momentos preferidos, a plataforma também tem uma
            dashboard para o usuário gerenciar as postagens."
            Github="https://github.com/iarlen-reis/Life-Shared"
            Deploy="https://www.life-shared.iarlenreis.com.br/"
            techs={["React", "Firebase"]}
          />
          {/* SearchCity */}
          <ProjectCard
            Image={SearchCityImage}
            Title="SearchCity"
            Description="SearchCity é uma aplicação front-end, que utiliza as APIs
            do IBGE para encontrar informações sobre cidades do Brasil."
            Github="https://github.com/iarlen-reis/SearchCity"
            Deploy="https://search-city.iarlenreis.com.br/"
            techs={["React", "Typescript", "Styled-components", "Axios"]}
          />
          {/* FindRepository */}
          <ProjectCard
            Image={FetchGithubImage}
            Title="FindRepository"
            Description="FindRepository é uma aplicação que utiliza a API do github para buscar
            perfis, listar repositórios e futuramente irei adicionar a opção de
            salvar repositórios."
            Github="https://github.com/iarlen-reis/FetchGitHub"
            Deploy="https://www.fetch-github.iarlenreis.com.br/"
            techs={["React", "Styled-components", "Axios"]}
            
          />


        </ProjectsCardContainerStyled>
      </ContainerStyled>
    </ProjectStyledContainer>
  );
};

export default Project;
