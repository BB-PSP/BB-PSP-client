import styled from '@emotion/styled';
import { breakpoints } from '@styles/media';
import React from 'react';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  background-color: #97334a;
  box-shadow: 0.2rem 0.4rem 0.8rem rgba(0, 0, 0, 0.25);
  ${breakpoints.large} {
    z-index: 2;
    backface-visibility: hidden;
    transform: rotateY(180deg);
    width: 15.1vw;
    height: 15vh;
    border-radius: 0.4rem;
    padding-top: 1.39vh;
    padding-bottom: 1.9vh;
  }
  ${breakpoints.medium} {
    width: 40vw;
    height: 20vh;
    border-radius: 0.4rem;
    padding-top: 1.39vh;
    padding-bottom: 1.9vh;
  }
`;

const LogoBox = styled.div`
  background-image: url('/image/teamLogo/kiwoom.png');
  background-repeat: no-repeat;
  background-position: center;
  ${breakpoints.large} {
    width: 100%;
    height: 3.43vh;
    background-size: auto 3.43vh;
  }
  ${breakpoints.medium} {
    width: 100%;
    height: 7vh;
    background-size: auto 5vh;
  }
`;

const ProfileBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0.74vh 1.3vw 0 1.3vw;
  padding-bottom: 0.56vh;
  border-bottom: 1px solid #fff;
`;

const Name = styled.h3`
  font-family: 'RobotoMonoRegular';
  color: #fff;
  ${breakpoints.large} {
    font-size: 0.63vw;
    line-height: 1.48vh;
  }
  ${breakpoints.medium} {
    font-size: 1.2vw;
    line-height: 2vh;
  }
`;

const SmallBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  ${breakpoints.large} {
    width: 4.69vw;
  }
  ${breakpoints.medium} {
    width: 9vw;
  }
`;

const Position = styled.h3`
  font-family: 'RobotoMonoRegular';
  color: #fff;
  ${breakpoints.large} {
    font-size: 0.63vw;
    line-height: 1.48vh;
  }
  ${breakpoints.medium} {
    font-size: 1.2vw;
    line-height: 2vh;
  }
`;

const Birthday = styled.h3`
  font-family: 'RobotoMonoRegular';
  color: #fff;
  ${breakpoints.large} {
    font-size: 0.63vw;
    line-height: 1.48vh;
  }
  ${breakpoints.medium} {
    font-size: 1.2vw;
    line-height: 2vh;
  }
`;

const StatContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 1.48vh 1.53vw 0 1.53vw;
  ${breakpoints.large} {
    height: 4.03vh;
  }
`;

const HitBox = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  ${breakpoints.large} {
    width: 0.99vw;
  }
`;

const HRBox = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  ${breakpoints.large} {
    width: 0.78vw;
  }
`;

const RBIBox = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  ${breakpoints.large} {
    width: 1.15vw;
  }
`;

const AVGBox = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  ${breakpoints.large} {
    width: 1.61vw;
  }
`;

const StatName = styled.h3`
  font-family: 'RobotoMonoRegular';
  text-align: center;
  color: #fff;
  ${breakpoints.large} {
    font-size: 0.63vw;
    line-height: 1.48vh;
  }
  ${breakpoints.medium} {
    font-size: 1vw;
    line-height: 2vh;
  }
`;

const Stat = styled.h3`
  font-family: 'RobotoMonoRegular';
  color: #d6d6d6;
  text-align: center;
  ${breakpoints.large} {
    padding-top: 1.34vh;
    font-size: 0.52vw;
    line-height: 1.2vh;
  }
  ${breakpoints.medium} {
    padding-top: 2vh;
    font-size: 1vw;
    line-height: 2vh;
  }
`;

export default function PlayerBackCard() {
  return (
    <Wrapper>
      <LogoBox />
      <ProfileBox>
        <Name>LEE.JEONG HU</Name>
        <SmallBox>
          <Position>CF</Position>
          <Birthday>98.08.20</Birthday>
        </SmallBox>
      </ProfileBox>
      <StatContainer>
        <HitBox>
          <StatName>H</StatName>
          <Stat>180</Stat>
        </HitBox>
        <HRBox>
          <StatName>HR</StatName>
          <Stat>35</Stat>
        </HRBox>
        <RBIBox>
          <StatName>RBI</StatName>
          <Stat>111</Stat>
        </RBIBox>
        <AVGBox>
          <StatName>AVG</StatName>
          <Stat>0.360</Stat>
        </AVGBox>
      </StatContainer>
    </Wrapper>
  );
}
