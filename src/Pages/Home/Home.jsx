import React from "react";
import { ContainerStyled } from "../../styles/GlobalStyles";

import {
  HomeStyledContainer,
  HomeContentStyled,
  HomeDescriptionStyled,
  HomeAnimationStyled,
  HomeEffectTyping,
} from "./style";

import devoloper from "/home/developer.png";

const Home = () => {
  return (
    <HomeStyledContainer>
      <ContainerStyled>
        <HomeContentStyled>
          <HomeDescriptionStyled>
            Olá, Meu nome é <span>Iarlen Reis.</span>
            <HomeEffectTyping>desenvolvedor front-end</HomeEffectTyping>
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
