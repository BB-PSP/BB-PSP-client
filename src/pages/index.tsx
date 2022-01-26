import type { NextPage } from 'next';
import Link from 'next/link';
import styled from 'styled-components';

const TestDiv = styled.div`
  width: 200px;
  background: yellow;
`;

const Home: NextPage = () => {
  return <TestDiv>Home</TestDiv>;
};

export default Home;
