import React, { useState } from "react";

import { ContainerStyled } from "../../styles/GlobalStyles";

import {
  TechnologyContainerStyled,
  TechnologyDescriptionContainer,
} from "./style";

import CarouselCard from "../../components/Carousel/Carousel";

const Technology = () => {
  return (
    <TechnologyContainerStyled>
      <ContainerStyled>
        <TechnologyDescriptionContainer>
          <h1>Tecnologias</h1>
          <p>Deslize para o lado para ver as tecnologias.</p>
        </TechnologyDescriptionContainer>
        <CarouselCard />
      </ContainerStyled>
    </TechnologyContainerStyled>
  );
};

export default Technology;
