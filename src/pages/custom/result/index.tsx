import styled from 'styled-components';
import PlayerCard from '../../../components/PlayerCard/PlayerCard';
import CommonLayout from '../../../components/layout/CommonLayout';
import { IPlayer } from '../../../store/Types';
import { breakpoints } from '../../../styles/media';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  /* position: absolute;
  left: 50%;
  transform: translateX(-50%); */
  margin: 0 auto;
  ${breakpoints.large} {
    width: 135.3rem;
    padding-top: 39.6rem;
  }
  ${breakpoints.medium} {
    width: 68rem;
    padding-top: 24.6rem;
  }
  ${breakpoints.small} {
    width: 35rem;
    padding-top: 12.8rem;
  }
`;

const Container = styled.div`
  margin: 0 auto;
  ${breakpoints.large} {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 2rem;
    row-gap: 7rem;
    width: 128rem;
    height: 62.6rem;
    overflow-x: hidden;
    &::-webkit-scrollbar {
      width: 0.2rem;
      background-color: white;
    }
    &::-webkit-scrollbar-thumb {
      background-color: black;
    }
  }
  ${breakpoints.medium} {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
    row-gap: 4rem;
    /* width: 78rem; */
    width: 80.5rem;
    height: 55.6rem;
    overflow-x: hidden;
    &::-webkit-scrollbar {
      width: 0.2rem;
      background-color: white;
    }
    &::-webkit-scrollbar-thumb {
      background-color: black;
    }
  }
  ${breakpoints.small} {
    display: flex;
    flex-direction: column;
    height: 45rem;
    overflow-x: hidden;
    overflow-y: scroll;
  }
`;

function Result(player: IPlayer) {
  return (
    <Wrapper>
      <Container>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map((i) => {
          return <PlayerCard key={i} {...player} />;
        })}
      </Container>
    </Wrapper>
  );
}

Result.PageLayout = CommonLayout;

export default Result;
