import React from "react";

import { ContainerStyled } from "../../styles/GlobalStyles";
import {
  ProjectStyledContainer,
  ProjectDecriptionStyled,
  ProjectsCardContainerStyled,
} from "./style";

import ProjectCard from "../../components/ProjectCard/ProjectCard";

import LifeSharedImage from "/projects/image-life-shared.png";
import SearchCityImage from "/projects/image-search-city.png";
import RickAndMortyImage from "/projects/image-rick-and-morty.png";
import BarberShopImage from "/projects/image-barbershop.png";
import PaquetaImage from "/projects/image-paqueta.png";
import DevfinderImage from "/projects/image-devfinder.jpeg";

const Project = () => {
  return (
    <ProjectStyledContainer>
      <ContainerStyled>
        <ProjectDecriptionStyled>
          <h1>Meus projetos</h1>
          <p>Esses são meus principais projetos.</p>
        </ProjectDecriptionStyled>
        <ProjectsCardContainerStyled>
          {/* devfinder */}
          <ProjectCard
            Image={DevfinderImage}
            Title="Devfinder"
            Description="Devfinder é uma aplicação mobile, que foi construída 
            com react native a partir do layout do figma do frontend mentor."
            Github="https://github.com/iarlen-reis/GithubProfile"
            Deploy="https://www.dropbox.com/s/lbw3j0wv8597vwo/devfinder.apk?dl=0"
            techs={["React-native", "Expo", "Typescript", "Nativewind"]}
          />
          {/* Paquetá calçados */}
          <ProjectCard
            Image={PaquetaImage}
            Title="Paquetá calçados"
            Description="Paquetá calçados foi um desafio da plataforma Brchallenges, onde
            o desenvolvedor precisar desenvolver uma aplicação a partir do layout do figma."
            Github="https://github.com/iarlen-reis/BrChallenges-PaquetaCalcados"
            Deploy="https://paqueta-calcados.iarlenreis.com.br/"
            techs={["React", "Typescript", "Styled-components", "Axios"]}
          />
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
        </ProjectsCardContainerStyled>
      </ContainerStyled>
    </ProjectStyledContainer>
  );
};

export default Project;
