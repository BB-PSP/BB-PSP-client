import type { NextPage } from 'next';
import styled from 'styled-components';
import { breakpoints } from '../styles/media';

const Background = styled.div`
  position: relative;
  overflow: hidden;
  height: 100vh;
  padding-top: 8vh;
  text-align: center;
  width: 66.66vw;
  margin: 0 auto;
  background: linear-gradient(
    360deg,
    rgba(0, 0, 0, 0.37) -6.53%,
    rgba(25, 25, 25, 0.186927) 63.21%,
    rgba(51, 51, 51, 0) 94.15%
  );
  backdrop-filter: blur(6px);
`;

const Title = styled.p`
  font-family: 'PlayfairDisplayBold';
  ${breakpoints.large} {
    font-size: 1.6rem;
    line-height: 2.13rem;
  }
  /* ${breakpoints.medium} {
  } */
  ${breakpoints.small} {
    font-size: 3.2rem;
    line-height: 4.27rem;
  }
  color: #b70000;
`;

const SubTitle = styled.p`
  font-family: 'PlayfairDisplayRegular';
  color: #e8e8e8;
  ${breakpoints.large} {
    font-size: 0.6rem;
    padding-top: 6.75vh;
  }
  /* ${breakpoints.medium} {
    padding-top: 6.75vh;
  } */
  ${breakpoints.small} {
    font-size: 1.6rem;
    padding-top: 5.33rem;
  }
`;

const DescriptionBox = styled.div`
  margin: 0 auto;
  ${breakpoints.large} {
    padding-top: 1.33rem;
    width: 13.33rem;
  }
  /* ${breakpoints.medium} {
    width: 25.8vw;
  } */
  ${breakpoints.small} {
    padding-top: 2.66rem;
    width: 26.66rem;
  }
`;

const Description = styled.p`
  font-family: 'PlayfairDisplayRegular';
  ${breakpoints.large} {
    font-size: 0.66rem;
    line-height: 0.89rem;
  }
  ${breakpoints.small} {
    font-size: 1.33rem;
    line-height: 1.77rem;
  }
  color: #bebebe;
`;

const HomeImageBox = styled.div`
  height: 100%;
  padding: 0 9.14vw;
  opacity: 50%;
  ${breakpoints.large} {
    margin-top: 5.3vh;
  }
  ${breakpoints.medium} {
    margin-top: 27vh;
  }
  ${breakpoints.small} {
    margin-top: 53vh;
  }
`;

const HomeImage = styled.img`
  max-width: 100%;
  height: auto;
`;

const Home: NextPage = () => {
  return (
    <Background>
      <Title>BB:PSP</Title>
      <SubTitle>BB:PSP(Baseball: Player Stats Prediction)</SubTitle>
      <DescriptionBox>
        <Description>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's
        </Description>
      </DescriptionBox>
      <HomeImageBox>
        <HomeImage src="image/home.png" />
      </HomeImageBox>
    </Background>
  );
};

export default Home;
