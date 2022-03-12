import React from 'react';
import styled from 'styled-components';
import { breakpoints } from '../../styles/media';

const Wrapper = styled.div`
  ${breakpoints.large} {
    position: absolute;
    z-index: 2;
    backface-visibility: hidden;
    transform: rotateY(180deg);
    width: 29rem;
    height: 16.2rem;
    display: flex;
    flex-direction: column;
    border-radius: 0.4rem;
    background-color: #97334a;
    box-shadow: 0.2rem 0.4rem 0.8rem rgba(0, 0, 0, 0.25);
    padding-top: 1.5rem;
    padding-bottom: 2.048rem;
  }
  ${breakpoints.medium} {
    width: 29rem;
    height: 16.2rem;
    display: flex;
    flex-direction: column;
    border-radius: 0.4rem;
    background-color: #97334a;
    box-shadow: 0.2rem 0.4rem 0.8rem rgba(0, 0, 0, 0.25);
    padding-top: 1.5rem;
    padding-bottom: 2.048rem;
  }
  ${breakpoints.small} {
    width: 29rem;
    height: 16.2rem;
    display: flex;
    flex-direction: column;
    border-radius: 0.4rem;
    background-color: #97334a;
    box-shadow: 0.2rem 0.4rem 0.8rem rgba(0, 0, 0, 0.25);
    padding-top: 1.5rem;
    padding-bottom: 2.048rem;
  }
`;

const LogoBox = styled.div`
  background-image: url('/image/teamLogo/kiwoom.png');
  background-size: auto 3.7rem;
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  height: 3.7rem;
`;

const ProfileBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0.8rem 2.5rem 0 2.5rem;
  padding-bottom: 0.6rem;
  border-bottom: 1px solid #fff;
`;

const Name = styled.h3`
  font-family: 'RobotoMonoRegular';
  font-size: 1.2rem;
  line-height: 1.6rem;
  color: #fff;
`;

const SmallBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 9rem;
`;

const Position = styled.h3`
  font-family: 'RobotoMonoRegular';
  font-size: 1.2rem;
  line-height: 1.6rem;
  color: #fff;
`;

const Birthday = styled.h3`
  font-family: 'RobotoMonoRegular';
  font-size: 1.2rem;
  line-height: 1.6rem;
  color: #fff;
`;

const StatContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 1.6rem 2.95rem 0 2.95rem;
  height: 4.352rem;
`;

const HitBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 1.9rem;
  height: 100%;
`;

const HRBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 1.5rem;
  height: 100%;
`;

const RBIBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 2.2rem;
  height: 100%;
`;

const AVGBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 3.1rem;
  height: 100%;
`;

const StatName = styled.h3`
  font-family: 'RobotoMonoRegular';
  font-size: 1.2rem;
  line-height: 1.6rem;
  color: #fff;
  text-align: center;
`;

const Stat = styled.h3`
  padding-top: 1.452rem;
  font-family: 'RobotoMonoRegular';
  font-size: 1rem;
  line-height: 1.3rem;
  color: #d6d6d6;
  text-align: center;
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
