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

  const toogleMenuMobile = () => {
    setMobile(false);
  };

  return (
    <AsideStyled>
      <ContainerStyled>
        <NavStyled>
          <NavLink to="/" onClick={toogleMenuMobile}>
            <img src={Logo} width={220} alt="Logo do meu portfolio" />
          </NavLink>
          <UlStyled mobile={mobile}>
            <li>
              <NavLink to="/" onClick={toogleMenuMobile}>
                Início
              </NavLink>
            </li>
            <li>
              <NavLink to="/sobre" onClick={toogleMenuMobile}>
                Sobre
              </NavLink>
            </li>
            <li>
              <NavLink to="/tecnologias" onClick={toogleMenuMobile}>
                Tecnologias
              </NavLink>
            </li>
            <li>
              <NavLink to="/projetos" onClick={toogleMenuMobile}>
                Projetos
              </NavLink>
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
