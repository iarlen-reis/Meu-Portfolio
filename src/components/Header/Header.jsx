import React from "react";
import { NavLink } from "react-router-dom";

import { ContainerStyled } from "../../styles/GlobalStyles";

import { AsideStyled, NavStyled, UlStyled } from "./style";

const Header = () => {
  return (
    <AsideStyled>
      <ContainerStyled>
        <NavStyled>
          <span>Portfolio</span>
          <UlStyled>
            <li>
              <NavLink to="/">Início</NavLink>
            </li>
            <li>
              <NavLink to="/about">Sobre</NavLink>
            </li>
            <li>
              <NavLink to="/skills">Habilidades</NavLink>
            </li>
            <li>
              <NavLink to="/projects">Projetos</NavLink>
            </li>
          </UlStyled>
        </NavStyled>
      </ContainerStyled>
    </AsideStyled>
  );
};

export default Header;
