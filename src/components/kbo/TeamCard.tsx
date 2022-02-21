import { motion } from 'framer-motion';
import React from 'react';
import styled from 'styled-components';
import { breakpoints } from '../../styles/media';

const Wrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  width: 25rem;
  ${breakpoints.large} {
    height: 48.4rem;
  }
  ${breakpoints.medium} {
  }
  ${breakpoints.small} {
    height: 40rem;
  }
`;

const LogoBox = styled.div`
  background-image: url(/image/teamLogo_b/lg_b.png);
  background-repeat: no-repeat;
  background-position: center top;
  width: 100%;
  ${breakpoints.large} {
    height: 14.6rem;
  }
  ${breakpoints.medium} {
  }
  ${breakpoints.small} {
    height: 14.6rem;
  }
`;

const LogoBoxBackground = styled.div`
  background-color: #505050;
  position: relative;
  top: 1.6rem;
  height: 13rem;
  z-index: -1;
`;

const ContentsBox = styled.div`
  width: 100%;
  height: 33.8rem;
  background-color: rgba(39, 39, 39, 0.87);
  padding-top: 1.8rem;
  padding-left: 2.4rem;
  position: relative;
  z-index: 99;
  ${breakpoints.small} {
    height: 25rem;
    padding-top: 1rem;
    padding-left: 2.4rem;
  }
`;

const Order = styled.h2`
  font-family: 'NotoSansCJK-Regular'; // font 수정할것
  font-size: 3.2rem;
  line-height: 4.736rem;
  color: #fff;
  ${breakpoints.small} {
    font-size: 2.2rem;
    line-height: 2.736rem;
  }
`;

const TeamName = styled.h2`
  font-family: 'RobotoMonoLight';
  font-size: 2.4rem;
  line-height: 3.165rem;
  color: #fff;
  padding-top: 0.8rem;
  ${breakpoints.small} {
    font-size: 1.6rem;
    line-height: 2rem;
  }
`;

const Box = styled.div`
  ${breakpoints.large} {
    padding-top: 2rem;
  }
  ${breakpoints.medium} {
    padding-top: 2rem;
  }
  ${breakpoints.small} {
    padding-top: 1.4rem;
  }
`;

const Category = styled.p`
  font-family: 'RobotoMonoRegular';
  color: #c5c5c5;
  ${breakpoints.large} {
    font-size: 1.4rem;
    line-height: 1.846rem;
  }
  ${breakpoints.medium} {
    font-size: 1.4rem;
    line-height: 1.846rem;
  }
  ${breakpoints.small} {
    font-size: 1.2rem;
    line-height: 1.5rem;
  }
`;

const Content = styled.p`
  font-family: 'RobotoMonoRegular';
  font-size: 1.6rem;
  line-height: 2.4rem;
  color: #fff;
  padding-top: 0.4rem;
`;

export default function TeamCard() {
  return (
    <Wrapper>
      <LogoBox>
        <LogoBoxBackground />
      </LogoBox>
      <ContentsBox>
        <Order>1</Order>
        <TeamName>LG Twins</TeamName>
        <Box>
          <Category>Last season</Category>
          <Content>5</Content>
        </Box>
        <Box>
          <Category>Wins</Category>
          <Content>8</Content>
        </Box>
        <Box>
          <Category>Foundation year</Category>
          <Content>1979</Content>
        </Box>
      </ContentsBox>
    </Wrapper>
  );
}
