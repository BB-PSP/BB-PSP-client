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

const ContentsBox = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  border-radius: 0.4rem;
  background-color: rgba(39, 39, 39, 0.87);
`;

const LeftBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-right: 1px solid #fff;
  ${breakpoints.large} {
    width: 15.9rem;
    height: 9rem;
    margin-top: 3.6rem;
    padding-left: 2.9rem;
  }
  ${breakpoints.medium} {
    width: 15.9rem;
    height: 9rem;
    margin-top: 3.6rem;
    padding-left: 2.9rem;
  }
`;

const Name = styled.h3`
  font-family: 'RobotoMonoBold';
  font-size: 1.4rem;
  line-height: 1.846rem;
  color: #fff;
`;

const LittleBox = styled.div`
  display: flex;
  flex-direction: row;
`;

const Position = styled.h3`
  font-family: 'RobotoMonoBold';
  font-size: 1.4rem;
  line-height: 1.846rem;
  color: #fff;
  padding-right: 1.6rem;
`;

const Birthday = styled.h3`
  font-family: 'RobotoMonoBold';
  font-size: 1.4rem;
  line-height: 1.846rem;
  color: #fff;
`;

const RightBox = styled.div`
  width: 13.1rem;
  height: 100%;
  background-image: url('/image/teamLogo/kiwoom.png');
  background-size: auto 5.2rem;
  background-repeat: no-repeat;
  background-position: center;
`;

export default function PlayerFrontCard() {
  return (
    <Wrapper>
      <ContentsBox>
        <LeftBox>
          <Name>이정후</Name>
          <LittleBox>
            <Position>CF</Position>
            <Birthday>98.08.20</Birthday>
          </LittleBox>
        </LeftBox>
        <RightBox></RightBox>
      </ContentsBox>
    </Wrapper>
  );
}
