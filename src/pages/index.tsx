/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link';
import styled from 'styled-components';
import { breakpoints } from '../styles/media';
import Layout from '../components/layout/Layout';
import type { ReactElement } from 'react';
import { motion } from 'framer-motion';

const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  height: 100%;
  text-align: center;
  margin: 0 auto;
  ${breakpoints.large} {
    padding-top: 9.4rem;
    width: 127.6rem;
  }
  ${breakpoints.medium} {
    padding-top: 9.4rem;
    width: 68rem;
  }
  ${breakpoints.small} {
    padding-top: 4rem;
    width: 35rem;
  }
`;

const Title = styled(motion.h1)`
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
    padding-top: 8rem;
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
    padding-top: 4rem;
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

const ButtonConatiner = styled.nav`
  display: flex;
  justify-content: space-between;
  ${breakpoints.large} {
    flex-direction: row;
    margin-top: auto;
    margin-bottom: 16.5rem;
  }
  ${breakpoints.medium} {
    flex-direction: row;
    align-items: center;
    margin-top: 10.5rem;
  }
  ${breakpoints.small} {
    flex-direction: column;
    align-items: center;
    margin-top: 5rem;
  }
`;

const ProButtonBox = styled.div`
  flex-direction: column;
`;

const CustomButtonBox = styled.div`
  flex-direction: column;
  ${breakpoints.small} {
    padding-top: 5rem;
  }
`;

const ProButton = styled.h3`
  color: #b70000;
  font-family: 'RobotoMonoRegular';
  ${breakpoints.large} {
    font-size: 2.8rem;
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
  font-family: 'RobotoMonoRegular';
  ${breakpoints.large} {
    font-size: 2.8rem;
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

// const testVariants = {
//   hidden: { opacity: 0, x: -200, y: 0 },
//   enter: { opacity: 1, x: 0, y: 0 },
//   exit: { opacity: 0, x: 0, y: -100 },
// };

export default function Home() {
  return (
    <Wrapper>
      <Title>bb:</Title>
      <SubTitle>BB:PSP(Baseball: Player Stats Prediction)</SubTitle>
      <DescriptionBox>
        <Description>Predict KBO Players' stats</Description>
      </DescriptionBox>
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
  );
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
