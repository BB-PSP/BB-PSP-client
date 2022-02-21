import { motion } from 'framer-motion';
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled(motion.div)`
  width: 25rem;
  height: 48.4rem;
  display: flex;
  flex-direction: column;
`;

const LogoBox = styled.div`
  width: 100%;
  height: 14.6rem;
  background-image: url(/image/teamLogo_b/lg_b.png);
  background-repeat: no-repeat;
  background-position: center top;
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
`;

const Order = styled.h2`
  font-family: 'NotoSansCJK-Regular'; // font 수정할것
  font-size: 3.2rem;
  line-height: 4.736rem;
  color: #fff;
`;

const TeamName = styled.h2`
  font-family: 'RobotoMonoLight';
  font-size: 2.4rem;
  line-height: 3.165rem;
  color: #fff;
  padding-top: 0.8rem;
`;

const Box = styled.div`
  padding-top: 2rem;
`;

const Category = styled.p`
  font-family: 'RobotoMonoRegular';
  font-size: 1.4rem;
  line-height: 1.846rem;
  color: #c5c5c5;
`;

const Content = styled.p`
  font-family: 'RobotoMonoRegular';
  font-size: 1.6rem;
  line-height: 2.4rem;
  color: #fff;
  padding-top: 0.4rem;
`;

export default function TeamCard({ team }) {
  return (
    <Wrapper>
      <LogoBox>
        <LogoBoxBackground />
      </LogoBox>
      <ContentsBox>
        <Order>1</Order>
        <TeamName>{team.name}</TeamName>
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
