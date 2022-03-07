import { motion } from 'framer-motion';
import React from 'react';
import styled from 'styled-components';
import { breakpoints } from '../../styles/media';

const Wrapper = styled(motion.div)`
  position: absolute;
  z-index: 1;
  backface-visibility: hidden;
  transform: rotateY(0deg);
  display: flex;
  flex-direction: row;
  border-radius: 0.4rem;
  box-shadow: 0.2rem 0.4rem 0.8rem rgba(0, 0, 0.25);
  ${breakpoints.large} {
    width: 29rem;
    height: 16.2rem;
  }
  ${breakpoints.medium} {
    width: 29rem;
    height: 16.2rem;
  }
  ${breakpoints.small} {
    width: 29rem;
    height: 16.2rem;
  }
`;

const PhotoBox = styled.div`
  width: 100%;
  height: 100%;
  border-top-left-radius: 0.4rem;
  border-bottom-left-radius: 0.4rem;
  background-color: white;
`;

const ContentsBox = styled.div`
  width: 100%;
  height: 100%;
  border-top-right-radius: 0.4rem;
  border-bottom-right-radius: 0.4rem;
  background-color: rgba(39, 39, 39, 0.87);
`;

const LogoBox = styled.div`
  width: 100%;
  height: 8.8rem;
  border-top-right-radius: 0.4rem;
  border-bottom-right-radius: 0.4rem;
  background-image: url('/image/teamLogo/kiwoom.png');
  background-size: auto 3.7rem;
  background-repeat: no-repeat;
  background-position: center;
`;

const ProfileBox = styled.div`
  width: 100%;
  height: 7.4rem;
  border-top-right-radius: 0.4rem;
  border-bottom-right-radius: 0.4rem;
  padding: 0 2.2rem 2.3rem 2.2rem;
  text-align: center;
`;

const Name = styled.h2`
  font-family: 'RobotoMonoRegular';
  font-size: 1.4rem;
  line-height: 1.8rem;
  color: #fff;
`;

const SmallBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 1.7rem;
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

export default function PlayerFrontCard() {
  return (
    <Wrapper>
      <PhotoBox />
      <ContentsBox>
        <LogoBox />
        <ProfileBox>
          <Name>LEE.JEONG HU</Name>
          <SmallBox>
            <Position>CF</Position>
            <Birthday>98.08.20</Birthday>
          </SmallBox>
        </ProfileBox>
      </ContentsBox>
    </Wrapper>
  );
}
