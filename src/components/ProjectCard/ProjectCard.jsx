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
const ProjectCard = ({
  Image,
  Title,
  Description,
  Technology,
  Github,
  Deploy,
}) => {
  return (
    <ProjectCardContainerStyled>
      <ProjectImageContainer>
        <img src={Image} alt={Title} />
      </ProjectImageContainer>
      <ProjectDescriptonContainer>
        <h2>{Title}</h2>
        <p>{Description}</p>
      </ProjectDescriptonContainer>
      <ProjectTechnologyContainer>
        <h3>Tecnologias</h3>
        <p>
          {Technology.map((tech) => (
            <>{tech} </>
          ))}
        </p>
      </ProjectTechnologyContainer>
      <ProjectButtonContainer>
        <a href={Github} target="_blank">
          Github
        </a>
        <a href={Deploy} target="_blank">
          Site
        </a>
      </ProjectButtonContainer>
    </ProjectCardContainerStyled>
  );
};

export default ProjectCard;
