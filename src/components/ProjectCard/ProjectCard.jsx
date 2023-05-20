import React from "react";

import {
  ProjectCardContainerStyled,
  ProjectImageContainer,
  ProjectDescriptonContainer,
  ProjectTechContainer,
  ProjectButtonContainer,
} from "./style";

import { TbBrandGithub } from "react-icons/tb";
import { SlRocket } from "react-icons/sl";

const ProjectCard = ({ Image, Title, Description, Github, Deploy, techs }) => {
  return (
    <ProjectCardContainerStyled>
      <ProjectImageContainer>
        <img src={Image} alt={Title} />
      </ProjectImageContainer>
      <ProjectDescriptonContainer>
        <h2>{Title}</h2>
        <p>{Description}</p>
      </ProjectDescriptonContainer>
      <ProjectTechContainer>
          {techs && techs.map(tech => <span key={tech}>{tech}</span>)}
      </ProjectTechContainer>
      <ProjectButtonContainer>
        <a href={Github} target="_blank" title="Repositório no Github">
          <TbBrandGithub size={20} /> Github
        </a>
        <a href={Deploy} target="_blank" title="Aplicação em deploy">
          Deploy
          <SlRocket size={20} />
        </a>
      </ProjectButtonContainer>
    </ProjectCardContainerStyled>
  );
};

export default ProjectCard;
