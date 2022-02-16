import Image from 'next/image';
import { ReactNode } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  min-height: 100vh;
  width: 100vw;
  height: 107.9rem;
  overflow: hidden;
`;

const Wrapper = styled.div`
  position: absolute;

  width: 100%;
  height: 100%;
`;

const BackImage = styled.img`
  position: absolute;
  left: 50%;
  bottom: 0;

  width: 104.6rem;
  height: fit-content;

  object-fit: contain;

  transform: translate3d(-50%, 0, 0);
`;

interface IProps {
  children: ReactNode;
}

export default function Layout({ children }: IProps) {
  return (
    <Container>
      <BackImage src="/image/home.png" alt="home" />
      <Wrapper>{children}</Wrapper>
    </Container>
  );
}
