import { breakpoints } from '@styles/media';
import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 100;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CloseButton = styled.img`
  ${breakpoints.large} {
    width: 3.23vw;
    height: auto;
  }
  ${breakpoints.medium} {
    width: 6vw;
    height: auto;
  }
  ${breakpoints.small} {
    width: 6vw;
    height: auto;
  }
`;

export const Background = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(5px);
  animation: modal-bg-show 1s;
  @keyframes modal-bg-show {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const ModalBlock = styled.div`
  background-color: white;
  border-radius: 1rem;
  ${breakpoints.large} {
    width: 40vw;
    height: 74.81vh;
  }
  ${breakpoints.medium} {
    width: 50vw;
    height: 70vh;
  }
  ${breakpoints.small} {
    width: 70vw;
    height: 70vh;
  }
`;

export const Contents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  ${breakpoints.large} {
    padding-top: 4.9vh;
  }
  ${breakpoints.medium} {
    padding-top: 3vh;
  }
  ${breakpoints.small} {
    padding-top: 3vh;
  }
`;

export const Title = styled.h2`
  font-family: 'RobotoMonoRegular';
  color: #272727;
  ${breakpoints.large} {
    font-size: 1.15vw;
    line-height: 2.69vh;
    padding-bottom: 5.28vh;
  }
  ${breakpoints.medium} {
    font-size: 2vw;
    line-height: 3vh;
    padding-bottom: 3vh;
  }
  ${breakpoints.small} {
    font-size: 2vw;
    line-height: 3vh;
    padding-bottom: 3vh;
  }
`;

export const Grid = styled.div`
  margin: 0 auto;
  display: grid;
  ${breakpoints.large} {
    grid-template-columns: repeat(2, 1fr);
    height: 62.04vh;
    width: 32.81vw;
    column-gap: 2.6vw;
    row-gap: 3.7vh;
  }
  ${breakpoints.medium} {
    grid-template-columns: repeat(1, 1fr);
    height: 61vh;
    width: 40vw;
    column-gap: 2.6vw;
    row-gap: 3.7vh;
  }
  overflow: scroll;
`;
