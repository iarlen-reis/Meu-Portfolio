import React from "react";
import { ContainerStyled } from "../../styles/GlobalStyles";

import {
  HomeStyledContainer,
  HomeContentStyled,
  HomeDescriptionStyled,
  HomeAnimationStyled,
  HomeEffectTyping,
  HomeContactContainer,
} from "./style";

import { BsGithub, BsLinkedin } from "react-icons/bs";

import devoloper from "/home/profile.png";

const Home = () => {
  return (
    <HomeStyledContainer>
      <ContainerStyled>
        <HomeContentStyled>
          <HomeDescriptionStyled>
            Olá, Eu sou <span>Iarlen Reis.</span>
            <HomeEffectTyping>desenvolvedor front-end</HomeEffectTyping>
            <HomeContactContainer>
              <a href="https://github.com/iarlen-reis" target="_blank">
                <BsGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/iarlen-santos-reis-480119247/"
                target="_blank"
              >
                <BsLinkedin />
              </a>
            </HomeContactContainer>
          </HomeDescriptionStyled>
          <HomeAnimationStyled>
            <img
              src={devoloper}
              alt="Imagem de desenvolvedor mexendo no computador"
            />
          </HomeAnimationStyled>
        </HomeContentStyled>
      </ContainerStyled>
    </HomeStyledContainer>
  );
};

export default Home;
