import styled from "styled-components";
import { Colors, FontsSizes } from "../../styles/GlobalStyles";

export const AsideStyled = styled.aside`
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
`;

export const UlStyled = styled.ul`
  display: flex;
  align-items: center;
  column-gap: 0.7rem;

  a {
    color: ${Colors.textColorSecundary};
    font-size: ${FontsSizes.fontSmall};
    transition: 0.6s;

    &:hover {
      color: ${Colors.textColor};
    }
  }
`;
