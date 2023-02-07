import React from "react";
import { useState } from "react";

import { NavLink } from "react-router-dom";

import { ContainerStyled } from "../../styles/GlobalStyles";

import {
  AsideStyled,
  NavStyled,
  UlStyled,
  MobileMenuContainerStyled,
} from "./style";

import { RiMenu3Fill, RiCloseLine } from "react-icons/ri";

import Logo from "/logo-dragon.png";

const Header = () => {
  const [mobile, setMobile] = useState(false);

  const changeMobileState = () => {
    setMobile(!mobile);
  };

  return (
    <AsideStyled>
      <ContainerStyled>
        <NavStyled>
          <img src={Logo} width={220} alt="Logo do meu portfolio" />
          <UlStyled mobile={mobile}>
            <li>
              <NavLink to="/">Início</NavLink>
            </li>
            <li>
              <NavLink to="/sobre">Sobre</NavLink>
            </li>
            <li>
              <NavLink to="/habilidades">Habilidades</NavLink>
            </li>
            <li>
              <NavLink to="/projetos">Projetos</NavLink>
            </li>
          </UlStyled>
          <MobileMenuContainerStyled>
            {!mobile ? (
              <RiMenu3Fill size={35} onClick={changeMobileState} />
            ) : (
              <RiCloseLine size={35} onClick={changeMobileState} />
            )}
          </MobileMenuContainerStyled>
        </NavStyled>
      </ContainerStyled>
    </AsideStyled>
  );
};

export default Header;
