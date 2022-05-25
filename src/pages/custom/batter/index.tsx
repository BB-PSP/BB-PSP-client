import styled from '@emotion/styled';
import { useCustomBatter } from '@hooks/api/useCustomBatter';
import CommonLayout from '@layout/common/CommonLayout';
import BatterCard from '@PlayerCard/BatterCard';
import {
  ageRangeState,
  salaryRangeState,
  selectedPositionState,
  selectedTeamState,
} from '@store/Data/atom';
import { IBatterProps } from '@store/Types';
import { breakpoints } from '@styles/media';
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

const Batter = () => {
  const team = useRecoilValue(selectedTeamState);
  const position = useRecoilValue(selectedPositionState);
  const age = useRecoilValue(ageRangeState);
  const salary = useRecoilValue(salaryRangeState);
  const { isLoading, error, data } = useCustomBatter(
    2021,
    age[0],
    age[1],
    position,
    team,
    salary[0],
    salary[1],
  );
  if (isLoading) return <div>Loading...</div>;
  if (error) console.error(error);
  return (
    <Wrapper>
      <Container>
        {data.map((player: IBatterProps) => {
          return <BatterCard key={player?.player_info?.name} {...player} />;
        })}
      </Container>
    </Wrapper>
  );
};

Batter.PageLayout = CommonLayout;

export default Batter;
