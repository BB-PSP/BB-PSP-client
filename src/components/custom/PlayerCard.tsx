import PlayerBackCard from './PlayerBackCard';
import PlayerFrontCard from './PlayerFrontCard';
import styled from 'styled-components';

const Card = styled.div`
  height: 16.2rem;
  position: relative;
  transform-style: preserve-3d;
  transition: 1s;
  transform: rotateY(0deg);
  &:hover {
    transform: rotateY(180deg);
  }
`;

export default function PlayerCard() {
  return (
    <Card>
      <PlayerFrontCard />
      <PlayerBackCard />
    </Card>
  );
}
