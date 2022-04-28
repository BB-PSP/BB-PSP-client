import CommonLayout from '@layout/common/CommonLayout';
import PlayerCard from '@PlayerCard/PlayerCard';
import { IPlayer } from '@store/Types';
import { breakpoints } from '@styles/media';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  overflow-x: hidden;
  position: absolute;
  bottom: 0;
  ${breakpoints.large} {
    margin-top: 19.54vh;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 1.04vw;
    row-gap: 3.7vh;
    width: 66.67vw;
    height: 64.33vh;
  }
  ${breakpoints.medium} {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2vw;
    row-gap: 2vh;
    width: 82.6vw;
    height: 80vh;
    padding-right: 2.6vw;
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
