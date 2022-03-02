import PlayerBackCard from './PlayerBackCard';
import PlayerFrontCard from './PlayerFrontCard';
import styled from 'styled-components';
import { breakpoints } from '../../styles/media';
import { Large, Medium, Small } from '../../styles/MediaQuery';

const Card = styled.div`
  ${breakpoints.large} {
    height: 16.2rem;
    position: relative;
    transform-style: preserve-3d;
    transition: 1s;
    transform: rotateY(0deg);
    &:hover {
      transform: rotateY(180deg);
    }
  }
  ${breakpoints.medium} {
    height: 16.2rem;
    position: relative;
  }
  ${breakpoints.small} {
    height: 16.2rem;
    height: 100%;
    margin-bottom: 4rem;
  }
`;

export default function PlayerCard() {
  return (
    <>
      <Large>
        <Card>
          <PlayerFrontCard />
          <PlayerBackCard />
        </Card>
      </Large>
      <Medium>
        <Card>
          <PlayerFrontCard />
          <PlayerBackCard />
        </Card>
      </Medium>
      <Small>
        <Card>
          <PlayerBackCard />
        </Card>
      </Small>
    </>
  );
}
