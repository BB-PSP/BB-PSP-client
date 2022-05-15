import styled from '@emotion/styled';
import { breakpoints } from '@styles/media';
import React from 'react';

const Wrapper = styled.div`
  position: absolute;
  z-index: 1;
  backface-visibility: hidden;
  transform: rotateY(0deg);
  display: flex;
  flex-direction: row;
  border-radius: 0.4rem;
  box-shadow: 0.2rem 0.4rem 0.8rem rgba(0, 0, 0.25);
  ${breakpoints.large} {
    width: 15.1vw;
    height: 15vh;
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
    width: 8.28vw;
    height: 8.33vh;
    margin-top: 3.33vh;
    padding-left: 1.51vw;
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
  font-size: 0.73vw;
  line-height: 1.71vh;
  color: #fff;
`;

const LittleBox = styled.div`
  display: flex;
  flex-direction: row;
`;

const Position = styled.h3`
  font-family: 'RobotoMonoBold';
  font-size: 0.73vw;
  line-height: 1.71vh;
  color: #fff;
  padding-right: 0.83vw;
`;

const Birthday = styled.h3`
  font-family: 'RobotoMonoBold';
  font-size: 0.73vw;
  line-height: 1.71vh;
  color: #fff;
`;

const RightBox = styled.div<StyledProps>`
  width: 6.82vw;
  height: 100%;
  background-image: url(${(props) => '/image/teamLogo/' + props.team + '.png'});
  /* background-image: url('/image/teamLogo/${(props) => props.team}.png'); */
  /* background-image: url('/image/teamLogo/lg.png'); */
  background-size: auto 4.81vh;
  background-repeat: no-repeat;
  background-position: center;
`;

interface StyledProps {
  team: string;
}

interface IPlayerFrontCard {
  name: string;
  position: string;
  birth: string;
  team: string;
}

export default function PlayerFrontCard({
  name,
  position,
  birth,
  team,
}: IPlayerFrontCard) {
  console.log(team);
  return (
    <Wrapper>
      <ContentsBox>
        <LeftBox>
          <Name>{name}</Name>
          <LittleBox>
            <Position>{position}</Position>
            <Birthday>{birth}</Birthday>
          </LittleBox>
        </LeftBox>
        <RightBox team={team} />
      </ContentsBox>
    </Wrapper>
  );
}
