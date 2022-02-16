/* eslint-disable react/no-unescaped-entities */
import type { NextPage } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import home from '../../public/image/home.png';
import baseball_gradationmask from '../../public/image/baseball_gradationmask.png';
import styled from 'styled-components';
import { breakpoints } from '../styles/media';
import Layout from '../components/layout';
import { Children } from 'react';
import type { ReactElement } from 'react';

const Wrapper = styled.main`
  height: 100vh;
  background-color: #333;
  text-align: center;
  margin: 0 auto;
  padding-top: 9.4rem;
  ${breakpoints.large} {
    width: 127.6rem;
  }
  ${breakpoints.medium} {
    width: 680px;
  }
  ${breakpoints.small} {
    width: 100vw;
  }
`;

const Title = styled.h1`
  font-family: 'PlayfairDisplayBold';
  ${breakpoints.large} {
    font-size: 4.8rem;
  }
  ${breakpoints.medium} {
    font-size: 4.8rem;
  }
  ${breakpoints.small} {
    font-size: 4rem;
  }
  color: #b70000;
`;

const SubTitle = styled.h2`
  font-family: 'RobotoMonoRegular';
  color: #000;
  ${breakpoints.large} {
    font-size: 2.2rem;
    padding-top: 8rem;
  }
  ${breakpoints.medium} {
    font-size: 2.2rem;
    padding-top: 5.33rem;
  }
  ${breakpoints.small} {
    font-size: 1.3rem;
    padding-top: 2.66rem;
  }
`;

const DescriptionBox = styled.section`
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
  color: #565656;
  ${breakpoints.large} {
    font-size: 1.6rem;
    line-height: 2.66rem;
  }
  ${breakpoints.medium} {
    font-size: 1.6rem;
    line-height: 2.44rem;
  }
  ${breakpoints.small} {
    font-size: 1.15rem;
    line-height: 1.77rem;
  }
`;

const HomeImageBox = styled.div`
  padding-top: 7.7rem;
`;

const HomeImage = styled(Image)``;

const ButtonConatiner = styled.nav`
  display: flex;
  justify-content: space-between;
  ${breakpoints.large} {
    margin-top: 45rem;
    flex-direction: row;
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

export default function Home() {
  return (
    <Layout>
      <Wrapper>
        <Title>bb:</Title>
        <SubTitle>BB:PSP(Baseball: Player Stats Prediction)</SubTitle>
        <DescriptionBox>
          <Description>Predict KBO Players' stats</Description>
        </DescriptionBox>
        {/* <HomeImageBox>
          <HomeImage src={baseball_gradationmask} alt="BB:PSP HomePage" />
        </HomeImageBox> */}
        <ButtonConatiner>
          <ProButtonBox>
            <ProButton>Professional team</ProButton>
            <Link href="/kbo">
              <ArrowImg src="image/arrow.png" />
            </Link>
          </ProButtonBox>
          <CustomButtonBox>
            <CustomButton>Choose it yourself</CustomButton>
            <Link href="/custom">
              <ArrowImg src="image/arrow.png" />
            </Link>
          </CustomButtonBox>
        </ButtonConatiner>
      </Wrapper>
    </Layout>
  );
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
