import type { NextPage } from 'next';
import Link from 'next/link';
import styled from 'styled-components';
import { breakpoints } from '../styles/media';

const Background = styled.div`
  overflow: hidden;
  height: 100vh;
  padding-top: 8vh;
  text-align: center;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-family: 'PlayfairDisplayBold';
  ${breakpoints.largest} {
    font-size: 4.8rem;
  }
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

const SubTitle = styled.h2`
  font-family: 'RobotoMonoRegular';
  color: #000;
  ${breakpoints.largest} {
    font-size: 2.4rem;
    padding-top: 8rem;
  }
  ${breakpoints.large} {
    font-size: 2.4rem;
    padding-top: 8rem;
  }
  ${breakpoints.medium} {
    font-size: 1.6rem;
    padding-top: 5.33rem;
  }
  ${breakpoints.small} {
    font-size: 1.04rem;
    padding-top: 2.66rem;
  }
`;

const DescriptionBox = styled.div`
  margin: 0 auto;
  ${breakpoints.largest} {
    width: 47rem;
    padding-top: 4rem;
  }
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
  color: #565656;
  ${breakpoints.largest} {
    font-size: 2rem;
    line-height: 2.66rem;
  }
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
  background-size: cover;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 0%);
  ${breakpoints.largest} {
    height: 58rem;
    width: auto;
  }
  ${breakpoints.large} {
    height: 35rem;
    width: auto;
  }
  ${breakpoints.medium} {
    width: auto;
  }
  ${breakpoints.small} {
    width: auto;
  }
`;

const HomeImage = styled.img``;

const ButtonConatiner = styled.div`
  position: relative;
  display: flex;
  z-index: 99;
  margin: 0 auto;
  ${breakpoints.largest} {
    margin-top: 45rem;
    width: 98rem;
    flex-direction: row;
    justify-content: space-between;
  }
  ${breakpoints.large} {
    margin-top: 15rem;
    width: 78rem;
    flex-direction: row;
    justify-content: space-between;
  }
  ${breakpoints.medium} {
    margin-top: 15rem;
    flex-direction: column;
    align-items: center;
  }
  ${breakpoints.small} {
    margin-top: 8rem;
    flex-direction: column;
    align-items: center;
  }
`;

const ProButtonBox = styled.div`
  flex-direction: column;
`;

const CustomButtonBox = styled.div`
  flex-direction: column;
  ${breakpoints.medium} {
    padding-top: 10rem;
  }
  ${breakpoints.small} {
    padding-top: 5rem;
  }
`;

const ProButton = styled.h3`
  color: #b70000;
  font-family: 'RobotoMono-Regular';
  ${breakpoints.largest} {
    font-size: 2.8rem;
  }
  ${breakpoints.large} {
    font-size: 2.5rem;
  }
  ${breakpoints.medium} {
    font-size: 2.5rem;
  }
  ${breakpoints.small} {
    font-size: 1.5rem;
  }
`;

const CustomButton = styled.h3`
  color: #b70000;
  font-family: 'RobotoMono-Regular';
  ${breakpoints.largest} {
    font-size: 2.8rem;
  }
  ${breakpoints.large} {
    font-size: 2.5rem;
  }
  ${breakpoints.medium} {
    font-size: 2.5rem;
  }
  ${breakpoints.small} {
    font-size: 1.5rem;
  }
`;

const ArrowImg = styled.img`
  &:hover {
    cursor: pointer;
  }
  ${breakpoints.largest} {
    margin-top: 1.6rem;
    width: 7rem;
    height: auto;
  }
  ${breakpoints.large} {
    margin-top: 1.6rem;
    width: 7rem;
    height: auto;
  }
  ${breakpoints.medium} {
    margin-top: 1.6rem;
    width: 4rem;
    height: auto;
  }
  ${breakpoints.small} {
    margin-top: 1rem;
    width: 4rem;
    height: auto;
  }
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
      <ButtonConatiner>
        <Link href="/kbo">
          <ProButtonBox>
            <ProButton>Professional team</ProButton>
            <ArrowImg
              onClick={() => console.log('pro')}
              src="image/arrow.png"
            ></ArrowImg>
          </ProButtonBox>
        </Link>
        <Link href="/custom">
          <CustomButtonBox>
            <CustomButton>Choose it yourself</CustomButton>
            <ArrowImg src="image/arrow.png" />
          </CustomButtonBox>
        </Link>
      </ButtonConatiner>
    </Background>
  );
};

export default Home;
