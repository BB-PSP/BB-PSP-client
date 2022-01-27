import type { NextPage } from 'next';
import styled from 'styled-components';
import { breakpoints } from '../styles/media';

const Background = styled.div`
  height: 100vh;
  background: linear-gradient(
    360deg,
    rgba(0, 0, 0, 0.37) -6.53%,
    rgba(25, 25, 25, 0.186927) 63.21%,
    rgba(51, 51, 51, 0) 94.15%
  );
  backdrop-filter: blur(6px);
  ${breakpoints.large} {
    width: 66.66%;
    margin: 0 auto;
    font-size: 50px;
  }
  ${breakpoints.medium} {
    width: 66.66%;
    margin: 0 auto;
    font-size: 30px;
  }
  ${breakpoints.small} {
    width: 66.66%;
    margin: 0 auto;
    font-size: 10px;
  }
`;

const Home: NextPage = () => {
  return <Background></Background>;
};

export default Home;
