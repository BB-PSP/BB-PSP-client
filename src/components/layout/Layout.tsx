import { ReactNode, useEffect } from 'react';
import styled from 'styled-components';
import { breakpoints } from '../../styles/media';

const handleResize = () => {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
};

const Container = styled.div`
  position: relative;
  width: 100vw;
  ${breakpoints.large} {
    min-height: 100vh;
    height: 108rem;
  }
  ${breakpoints.medium} {
    min-height: 100vh;
    height: 108rem;
  }
  ${breakpoints.small} {
    min-height: calc(var(--vh, 1vh) * 100);
  }
`;

const BackImage = styled.img`
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translate3d(-50%, 0, 0);
  ${breakpoints.large} {
    width: 104.6rem;
    height: fit-content;
    object-fit: contain;
  }
  ${breakpoints.medium} {
    width: 80rem;
    height: fit-content;
    object-fit: contain;
  }
  ${breakpoints.small} {
    width: 30rem;
    height: fit-content;
    object-fit: contain;
  }
`;

const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`;

interface IProps {
  children: ReactNode;
}

export default function Layout({ children }: IProps) {
  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return (
    <Container>
      <BackImage src="/image/home.png" alt="home" />
      <Wrapper>{children}</Wrapper>
    </Container>
  );
}
