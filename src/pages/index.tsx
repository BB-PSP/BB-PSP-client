import type { NextPage } from 'next';
import styled from 'styled-components';
import { breakpoints } from '../styles/media';

const Background = styled.div`
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
    font-size: 4.8rem;
  }
  ${breakpoints.medium} {
    font-size: 3.2rem;
  }
  ${breakpoints.small} {
    font-size: 2.4rem;
  }
  color: #b70000;
`;

const SubTitle = styled.p`
  font-family: 'RobotoMonoRegular';
  color: #e8e8e8;
  ${breakpoints.large} {
    font-size: 2.4rem;
    padding-top: 8rem;
  }
  ${breakpoints.medium} {
    font-size: 1.6rem;
    padding-top: 5.33rem;
  }
  ${breakpoints.small} {
    font-size: 1.2rem;
    padding-top: 2.66rem;
  }
`;

const DescriptionBox = styled.div`
  margin: 0 auto;
  ${breakpoints.large} {
    width: 40rem;
    padding-top: 4rem;
  }
  ${breakpoints.medium} {
    width: 30rem;
    padding-top: 3rem;
  }
  ${breakpoints.small} {
    width: 20rem;
    padding-top: 2rem;
  }
`;

const Description = styled.p`
  font-family: 'RobotoMonoRegular';
  color: #bebebe;
  ${breakpoints.large} {
    font-size: 2rem;
    line-height: 2.66rem;
  }
  ${breakpoints.medium} {
    font-size: 1.8rem;
    line-height: 2.44rem;
  }
  ${breakpoints.small} {
    font-size: 1.15rem;
    line-height: 1.77rem;
  }
`;

const HomeImageBox = styled.div`
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  ${breakpoints.large} {
    width: 104rem;
    margin-top: 6.4rem;
  }
  ${breakpoints.medium} {
    margin-top: 5rem;
  }
  ${breakpoints.small} {
    margin-top: 4rem;
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
      {/* <HomeImageBox>
        <HomeImage src="image/baseball_gradationmask.png" />
      </HomeImageBox> */}
    </Background>
  );
};

export default Home;
