import type { NextPage } from 'next';
import Link from 'next/link';
import styled from 'styled-components';
import { theme } from '../styles/theme';

const TestDiv = styled.div`
  @media ${(props) => props.theme.tablet} {
    width: 100%;
    height: 300px;
    margin: 0 auto;
    background: #333;
  }
  @media ${(props) => props.theme.mobile} {
    width: 100%;
    height: 300px;
    margin: 0 auto;
    background: #123456;
  }
`;

const Home: NextPage = () => {
  return <TestDiv></TestDiv>;
};

export default Home;
