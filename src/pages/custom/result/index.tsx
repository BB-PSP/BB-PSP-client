import styled from 'styled-components';
import PlayerCard from '../../../components/PlayerCard/PlayerCard';
import CommonLayout from '../../../components/layout/common/CommonLayout';
import { IPlayer } from '../../../store/Types';
import { breakpoints } from '../../../styles/media';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  ${breakpoints.large} {
    margin-top: 19.63vh;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 1.04vw;
    row-gap: 3.7vh;
    width: 66.67vw;
    height: 64.33vh;
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
