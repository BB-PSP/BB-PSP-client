import type { NextPage } from 'next';
import styled from 'styled-components';
import { breakpoints } from '../styles/media';

const TestDiv = styled.div`
  ${breakpoints.large} {
    font-size: 50px;
  }
  ${breakpoints.medium} {
    font-size: 30px;
  }
  ${breakpoints.small} {
    font-size: 10px;
  }
`;

const Home: NextPage = () => {
  return <TestDiv>test</TestDiv>;
};

export default Home;
