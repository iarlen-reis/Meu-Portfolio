import React from "react";

import { ContainerStyled } from "../../styles/GlobalStyles";
import {
  ProjectStyledContainer,
  ProjectDecriptionStyled,
  ProjectsCardContainerStyled,
} from "./style";

import ProjectCard from "../../components/ProjectCard/ProjectCard";

const Project = () => {
  return (
    <ProjectStyledContainer>
      <ContainerStyled>
        <ProjectDecriptionStyled>
          <h1>Meus projetos</h1>
          <p>Esses são alguns do meus projetos!</p>
        </ProjectDecriptionStyled>
        <ProjectsCardContainerStyled>
          <ProjectCard />
        </ProjectsCardContainerStyled>
      </ContainerStyled>
    </ProjectStyledContainer>
  );
};

export default Project;
