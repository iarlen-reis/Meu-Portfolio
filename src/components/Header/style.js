import styled from "styled-components";
import { Colors, FontsSizes } from "../../styles/GlobalStyles";

export const HeaderStyled = styled.header`
  background: ${Colors.headerColor};
  border-bottom: 1px solid rgba(61, 61, 61, 0.5);
`;

export const NavStyled = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  span {
    color: ${Colors.textColorSecundary};
    font-size: ${FontsSizes.fontRegular};
  }

  @media (max-width: 440px) {
    img {
      width: 160px;
    }
  }
`;

export const UlStyled = styled.ul`
  display: flex;
  align-items: center;
  column-gap: 1rem;

  a {
    position: relative;
    color: ${Colors.textColorSecundary};
    font-size: ${FontsSizes.fontSmall};
    transition: 0.6s;

    &::after {
      content: "";
      position: absolute;
      bottom: -1rem;
      left: 50%;
      width: 0;
      height: 0.2rem;
      transition: all 400ms ease-in-out;
      background: ${Colors.textColor};
    }

    &:hover::after {
      width: 100%;
      left: 1%;
    }
  }

  .active {
    color: ${Colors.textColor};
    font-weight: 800;
  }

  @media (max-width: 798px) {
    display: ${({ mobile }) => (mobile ? "flex" : "none")};
    position: absolute;
    width: 100%;
    height: 6rem;
    top: 5.7rem;
    right: 0;

    z-index: 2;

    align-items: center;
    justify-content: center;

    border-bottom: 1px solid rgba(61, 61, 61, 0.5);

    background-color: ${Colors.primaryColor};
  }

  @media (max-width: 600px) {
    a {
      font-size: ${FontsSizes.fontSmall};
    }
  }

  @media (max-width: 460px) {
    a {
      font-size: ${FontsSizes.fontExtraSmall};
    }
  }

  @media (max-width: 325px) {
    a {
      font-size: ${FontsSizes.fontSmallMenu};
    }
  }
`;

export const MobileMenuContainerStyled = styled.div`
  display: none;

  svg {
    cursor: pointer;
    color: #fff;
  }

  @media (max-width: 798px) {
    display: block;
  }
`;
