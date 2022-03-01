import styled from 'styled-components';
import PlayerCard from '../../../components/custom/PlayerCard';
import { breakpoints } from '../../../styles/media';

const Wrapper = styled.div`
  width: 128rem;
  margin: 0 auto;
  padding-top: 16.7rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const SubTitle = styled.h2`
  font-family: 'RobotoMonoRegular';
  color: #b70000;
  ${breakpoints.large} {
    font-size: 1.4rem;
    line-height: 1.846rem;
    padding-bottom: 21.2rem;
  }
  ${breakpoints.medium} {
    font-size: 1.4rem;
    line-height: 1.846rem;
    padding-bottom: 5.2rem;
  }
  ${breakpoints.small} {
    font-size: 1.1rem;
    line-height: 1.846rem;
    padding-bottom: 2.2rem;
  }
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 4rem;
  row-gap: 7rem;
  width: 135.3rem;
  height: 62.6rem;
  padding-right: 4rem;
  overflow-x: hidden;
  &::-webkit-scrollbar {
    width: 0.2rem;
    background-color: white;
  }
  &::-webkit-scrollbar-thumb {
    background-color: black;
  }
`;

export default function Result() {
  return (
    <Wrapper>
      <SubTitle>BB:PSP(Baseball: Player Stats Prediction)</SubTitle>
      <GridContainer>
        <PlayerCard />
        <PlayerCard />
        <PlayerCard />
        <PlayerCard />
        <PlayerCard />
        <PlayerCard />
        <PlayerCard />
        <PlayerCard />
        <PlayerCard />
        <PlayerCard />
        <PlayerCard />
        <PlayerCard />
        <PlayerCard />
        <PlayerCard />
        <PlayerCard />
        <PlayerCard />
        <PlayerCard />
      </GridContainer>
    </Wrapper>
  );
}
