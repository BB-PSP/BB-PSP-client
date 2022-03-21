import React from 'react';
import styled from 'styled-components';
import { breakpoints } from '../../styles/media';

const Wrapper = styled.div`
  ${breakpoints.large} {
    position: absolute;
    z-index: 2;
    backface-visibility: hidden;
    transform: rotateY(180deg);
    width: 15.1vw;
    height: 15vh;
    display: flex;
    flex-direction: column;
    border-radius: 0.4rem;
    background-color: #97334a;
    box-shadow: 0.2rem 0.4rem 0.8rem rgba(0, 0, 0, 0.25);
    padding-top: 1.39vh;
    padding-bottom: 1.9vh;
  }
`;

const LogoBox = styled.div`
  background-image: url('/image/teamLogo/kiwoom.png');
  background-size: auto 3.43vh;
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  height: 3.43vh;
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
  font-size: 0.63vw;
  line-height: 1.48vh;
  color: #fff;
`;

const SmallBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 4.69vw;
`;

const Position = styled.h3`
  font-family: 'RobotoMonoRegular';
  font-size: 0.63vw;
  line-height: 1.48vh;
  color: #fff;
`;

const Birthday = styled.h3`
  font-family: 'RobotoMonoRegular';
  font-size: 0.63vw;
  line-height: 1.48vh;
  color: #fff;
`;

const StatContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 1.48vh 1.53vw 0 1.53vw;
  height: 4.03vh;
`;

const HitBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 0.99vw;
  height: 100%;
`;

const HRBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 0.78vw;
  height: 100%;
`;

const RBIBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 1.15vw;
  height: 100%;
`;

const AVGBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 1.61vw;
  height: 100%;
`;

const StatName = styled.h3`
  font-family: 'RobotoMonoRegular';
  font-size: 0.63vw;
  line-height: 1.48vh;
  color: #fff;
  text-align: center;
`;

const Stat = styled.h3`
  padding-top: 1.34vh;
  font-family: 'RobotoMonoRegular';
  font-size: 0.52vw;
  line-height: 1.2vh;
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
