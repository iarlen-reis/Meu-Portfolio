import styled from "styled-components";

import { Colors, FontsSizes } from "../../styles/GlobalStyles";

export const FooterStyled = styled.footer`
  height: 100%;
  background: ${Colors.headerColor};
  font-size: ${FontsSizes.fontExtraSmall};

  border-top: 1px solid rgba(61, 61, 61, 0.5);
`;

export const FooterContentStyled = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const FooterContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;

  row-gap: 0.5rem;

  padding: 1rem;

  a {
    color: ${Colors.textColorSecundary};

    transition: 0.7s;

    &:hover {
      color: ${Colors.textColor};
    }
  }
`;

export const FooterInfoContainer = styled.div`
  small {
    display: flex;
    align-items: center;
    column-gap: 0.5rem;
    color: ${Colors.textColorSecundary};
  }
`;

export const FooterSimbolContainer = styled.span`
  font-size: 1.5rem;
  padding-bottom: 0.1rem;
`;
