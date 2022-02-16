import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';
import kiwoom from '../../../public/image/teamLogo/kiwoom.png';

const Wrapper = styled.div`
  width: 25rem;
  height: 48.4rem;
`;

const LogoBox = styled.div`
  width: 100%;
  height: 14.6rem;
`;

const LogoBackground = styled.div`
  position: relative;
  /* margin-top: 1.6rem; */
  width: 100%;
  height: 13rem;
  background-color: #505050;
`;

const ContentsBox = styled.div`
  width: 100%;
  height: 33.8rem;
  background-color: #272727;
  padding-top: 1.8rem;
  padding-left: 2.4rem;
`;

const Order = styled.h2`
  font-family: 'NotoSansCJK-Regular';
  font-size: 3.2rem;
  line-height: 4.736rem;
  color: #fff;
`;

const TeamName = styled.h2`
  font-family: 'RobotoMono-Regular';
  font-size: 2.4rem;
  line-height: 3.165rem;
  color: #fff;
  padding-top: 0.8rem;
`;

const Box = styled.div`
  padding-top: 2rem;
`;

const Category = styled.p`
  font-family: 'RobotoMono-Regular';
  font-size: 1.4rem;
  line-height: 1.846rem;
  color: #c5c5c5;
`;

const Content = styled.p`
  font-family: 'RobotoMono-Regular';
  font-size: 1.6rem;
  line-height: 2.4rem;
  color: #fff;
  padding-top: 0.4rem;
`;

const LogoImage = styled.img`
  position: absolute;
  bottom: 0;
`;

export default function TeamCard() {
  return (
    <Wrapper>
      <LogoBox>
        <LogoBackground>
          <LogoImage src="/image/teamLogo/kiwoom.png" alt="키움" />
        </LogoBackground>
      </LogoBox>
      <ContentsBox>
        <Order>1</Order>
        <TeamName>KIWOOM HEROES</TeamName>
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
