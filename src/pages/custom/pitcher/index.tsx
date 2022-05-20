import styled from '@emotion/styled';
import { useCustomPitcher } from '@hooks/api/useCustomPitcher';
import { fetchPlayers, usePlayers } from '@hooks/api/usePlayers';
import CommonLayout from '@layout/common/CommonLayout';
import BatterCard from '@PlayerCard/BatterCard';
import PitcherCard from '@PlayerCard/PitcherCard';
import {
  ageRangeState,
  selectedPositionState,
  selectedTeamState,
} from '@store/Data/atom';
import { IBatterProps, IPitcherProps } from '@store/Types';
import { breakpoints } from '@styles/media';
import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import { dehydrate, QueryClient } from 'react-query';
import { useRecoilValue } from 'recoil';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  ${breakpoints.medium} {
    padding-top: 10vh;
  }
`;

const Container = styled.div`
  overflow-x: hidden;
  ${breakpoints.large} {
    position: absolute;
    bottom: 0;
    margin-top: 19.54vh;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 1.04vw;
    row-gap: 3.7vh;
    width: 70.94vw;
    height: 63.33vh;
    white-space: nowrap;
    padding-left: 2vw;
    padding-right: 2.6vw;
  }
  ${breakpoints.medium} {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    width: 85vw;
    height: 60vh;
  }
  &::-webkit-scrollbar {
    background-color: transparent;
    width: 0.4rem;
  }
  &::-webkit-scrollbar-track {
    background: #fff;
  }
  &::-webkit-scrollbar-thumb {
    background: #3d3d3d;
    background-clip: padding-box;
    &:hover {
      background: #606060;
    }
  }
`;

const Pitcher = () => {
  const team = useRecoilValue(selectedTeamState);
  const position = useRecoilValue(selectedPositionState);
  const age = useRecoilValue(ageRangeState);
  console.log(team, position, age);
  const { data, isSuccess, isError } = useCustomPitcher(
    2021,
    age[1],
    age[0],
    position,
    team,
  );
  console.log(isSuccess);
  return (
    <Wrapper>
      <Container>pitcher</Container>
    </Wrapper>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};

Pitcher.PageLayout = CommonLayout;

export default Pitcher;
