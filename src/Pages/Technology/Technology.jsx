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
  const [skills, setSkills] = useState("");

  const skillsInfos = [
    "Sou o javascript!",
    "Sou o NodeJs!",
    "Sou o ReactJs!",
    "Sou o HTML!",
    "Sou o CSS!",
  ];

  return (
    <TechnologyContainerStyled>
      <ContainerStyled>
        <TechnologyDescriptionContainer>
          <h1>Tecnologias</h1>
          <p>Essas são as tecnologias que utilizo.</p>
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
            {skills ? (
              <p>{skillsInfos[skills]}</p>
            ) : (
              <p>Selecione uma das opções!</p>
            )}
          </TechnologyTextContainer>
        </TechnologyContainer>
      </ContainerStyled>
    </TechnologyContainerStyled>
  );
};

export default Technology;
