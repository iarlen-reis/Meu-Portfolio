import styled from "styled-components";

import { Colors, FontsSizes, FontFamilly } from "../../styles/GlobalStyles";

export const HomeStyledContainer = styled.section`
  width: 100%;
  height: 100vh;
  background: ${Colors.primaryColor};

  padding-left: 2rem;

  @media (max-width: 798px) {
    padding-left: 0;
  }
`;

export const HomeContentStyled = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;

  column-gap: 2rem;
  padding-top: 3rem;
  padding-left: 3rem;

  @media (max-width: 798px) {
    flex-direction: column;
    padding-top: 5rem;
    padding-left: 0;
  }
`;

export const HomeDescriptionStyled = styled.div`
  font-size: ${FontsSizes.fontBig};
  font-family: ${FontFamilly.fontItim};

  align-self: center;
  font-style: italic;

  color: ${Colors.textColorSecundary};

  span {
    display: block;
    font-family: ${FontFamilly.fontItim};
    font-size: ${FontsSizes.fontExtraBig};
  }

  @media (max-width: 975px) {
    span {
      font-size: ${FontsSizes.fontBigRegular};
    }
  }

  @media (max-width: 798px) {
    order: 1;
    padding-top: 2rem;
  }

  @media (max-width: 800px) {
    span {
      font-size: ${FontsSizes.fontBigExtraRegular};
    }
  }

  @media (max-width: 530px) {
    align-items: center;
    justify-content: center;

    text-align: start;
    font-size: ${FontsSizes.fontRegular};

    line-height: 2.5rem;

    span {
      font-size: ${FontsSizes.fontBig};
    }
  }
`;

export const HomeEffectTyping = styled.div`
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

  width: 300px;
  font-size: ${FontsSizes.fontSmall};
  font-style: italic;

  text-transform: uppercase;
  padding-right: 0.3rem;

  color: ${Colors.textColor};
  border-right: 2px solid rgba(255, 255, 255, 0.75);

  animation: cursorEffect 700ms infinite normal,
    textTypingEffect 5s steps(40) normal;

  white-space: nowrap;
  overflow: hidden;

  @media (max-width: 798px) {
    width: 225px;
    font-size: ${FontsSizes.fontSmallRegular};

    @keyframes textTypingEffect {
      from {
        width: 0;
      }
      to {
        width: 225px;
      }
    }
  }

  @media (max-width: 530px) {
    width: 220px;
    @keyframes textTypingEffect {
      from {
        width: 0;
      }
      to {
        width: 220px;
      }
    }
    margin: 0.5rem 0px;
    font-size: ${FontsSizes.fontSmallRegular};
  }
`;

export const HomeContactContainer = styled.div`
  display: flex;
  column-gap: 1rem;
  width: 200px;

  svg {
    font-size: 2rem;
    transition: 0.6s;
    color: ${Colors.textColorSecundary};
    cursor: pointer;

    &:hover {
      color: ${Colors.textColor};
    }
  }

  @media (max-width: 798px) {
    order: 2;
  }
`;

export const HomeAnimationStyled = styled.div`
  @keyframes profileAnimation {
    0% {
      top: -60px;
    }

    50% {
      top: 20px;
    }

    100% {
      top: -60px;
    }
  }

  height: 30rem;
  width: 50%;
  position: relative;
  align-self: center;

  img {
    max-width: 400px;
    position: absolute;
    top: 1rem;
    right: 0;
    margin: 0 auto;

    animation: profileAnimation 10s infinite normal;
  }

  @media (max-width: 798px) {
    @keyframes profileAnimation {
      0% {
        top: -15%;
      }
      50% {
        top: -25%;
      }
      100% {
        top: -15%;
      }
    }
    height: 15rem;
    margin: 0 auto;
    width: 350px;

    img {
      top: 0;
      bottom: 0;
      width: 350px;
      margin: 0 auto;
      align-self: center;
    }
  }

  @media (max-width: 386px) {
    width: 300px;

    img {
      width: 300px;
      max-width: 100%;
      margin: 0 auto;
    }
  }

  @media (max-width: 316px) {
    width: 250px;

    img {
      width: 250px;
    }
  }
`;
