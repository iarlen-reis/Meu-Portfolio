import styled from "styled-components";

import { Colors, FontsSizes, FontFamilly } from "../../styles/GlobalStyles";

export const HomeStyledContainer = styled.section`
  width: 100%;
  height: 100vh;
  background: ${Colors.primaryColor};
`;

export const HomeContentStyled = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  column-gap: 2rem;

  padding-top: 4rem;
`;

export const HomeDescriptionStyled = styled.div`
  font-size: ${FontsSizes.fontBig};
  color: ${Colors.textColorSecundary};
  align-self: center;

  span {
    display: block;
    font-family: ${FontFamilly.fontItim};
    font-size: ${FontsSizes.fontExtraBig};
  }
`;

export const HomeEffectTyping = styled.div`
  text-transform: uppercase;
  font-size: ${FontsSizes.fontSmall};
  width: 300px;
  color: ${Colors.textColor};
  border-right: 2px solid rgba(255, 255, 255, 0.75);
  padding-right: 0.3rem;

  white-space: nowrap;
  overflow: hidden;

  animation: cursorEffect 700ms infinite normal,
    textTypingEffect 5s steps(40) normal;

  @keyframes cursorEffect {
    from {
      border-right-color: rgba(255, 255, 255, 0.75);
    }
    to {
      border-right-color: transparent;
    }
  }

  @keyframes textTypingEffect {
    from {
      width: 0;
    }
    to {
      width: 300px;
    }
  }
`;

export const HomeAnimationStyled = styled.div`
  position: relative;
  align-self: center;
`;
