/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link';
import styled from 'styled-components';
import { breakpoints } from '../styles/media';
import IndexLayout from '../components/layout/main/IndexLayout';
import IndexHeader from '../components/layout/main/IndexHeader';

const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SubTitle = styled.h2`
  position: relative;
  font-family: 'RobotoMonoRegular';
  color: #000;
  ${breakpoints.large} {
    font-size: 1.1vw;
    padding-top: 7.4vh;
  }
  ${breakpoints.medium} {
    font-size: 2.2vw;
    padding-top: 5.4vh;
  }
`;

const DescriptionBox = styled.section`
  text-align: center;
  ${breakpoints.large} {
    padding-top: 3.7vh;
  }
  ${breakpoints.medium} {
    padding-top: 3.7vh;
  }
`;

const Description = styled.p`
  font-family: 'RobotoMonoRegular';
  color: #565656;
  ${breakpoints.large} {
    font-size: 0.8vw;
    line-height: 2.5vh;
  }
  ${breakpoints.medium} {
    font-size: 1.6vw;
    line-height: 2.5vh;
  }
`;

const ButtonConatiner = styled.nav`
  position: absolute;
  display: flex;
  ${breakpoints.large} {
    bottom: 15.28vh;
    width: 66.66vw;
    flex-direction: row;
  }
  ${breakpoints.medium} {
    bottom: 45vh;
    flex-direction: column;
    align-items: flex-start;
  }
`;

const ProButtonBox = styled.div`
  flex-direction: column;
  ${breakpoints.large} {
    padding-right: 35.8vw;
  }
  ${breakpoints.medium} {
    margin-bottom: 8vh;
  }
`;

const CustomButtonBox = styled.div`
  flex-direction: column;
`;

const ProButton = styled.h3`
  &:hover {
    cursor: pointer;
  }
  color: #b70000;
  font-family: 'RobotoMonoRegular';
  ${breakpoints.large} {
    font-size: 1.46vw;
    line-height: 3.42vh;
  }
  ${breakpoints.medium} {
    font-size: 2.92vw;
  }
`;

const CustomButton = styled.h3`
  &:hover {
    cursor: pointer;
  }
  color: #b70000;
  font-family: 'RobotoMonoRegular';
  ${breakpoints.large} {
    font-size: 1.46vw;
    line-height: 3.42vh;
  }
  ${breakpoints.medium} {
    font-size: 2.92vw;
  }
`;

const ArrowImg = styled.img`
  ${breakpoints.large} {
    margin-top: 0.15vh;
    width: 5.4vw;
    height: auto;
  }
  ${breakpoints.medium} {
    margin-top: 0.7vh;
    width: 10.8vw;
    height: auto;
  }
`;

function Home() {
  return (
    <>
      <Wrapper>
        <IndexHeader />
        <div>
          <SubTitle>BB:PSP(Baseball: Player Stats Prediction)</SubTitle>
        </div>
        <DescriptionBox>
          <Description>Predict KBO Players' stats</Description>
        </DescriptionBox>
        <ButtonConatiner>
          <ProButtonBox>
            <Link href="/kbo">
              <ProButton>
                Professional team
                <ArrowImg src="image/arrow.png" />
              </ProButton>
            </Link>
          </ProButtonBox>
          <CustomButtonBox>
            <Link href="/custom/team">
              <CustomButton>
                Choose it yourself
                <ArrowImg src="image/arrow.png" />
              </CustomButton>
            </Link>
          </CustomButtonBox>
        </ButtonConatiner>
      </Wrapper>
    </>
  );
}

Home.PageLayout = IndexLayout;

export default Home;
