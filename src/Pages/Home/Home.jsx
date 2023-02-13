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

import { BsGithub, BsLinkedin, BsDownload } from "react-icons/bs";

import devoloper from "/home/profile.png";

const Home = () => {
  return (
    <HomeStyledContainer>
      <ContainerStyled>
        <HomeContentStyled>
          <HomeDescriptionStyled>
            <p>
              Olá, Eu sou <span>Iarlen Reis.</span>
            </p>
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
              <a
                href="/home/CurriculoIarlenSantosReis.pdf"
                download="Currículo Iarlen Santos Reis"
              >
                <BsDownload />
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
