import PlayerBackCard from './PlayerBackCard';
import PlayerFrontCard from './PlayerFrontCard';
import styled from 'styled-components';
import { breakpoints } from '../../styles/media';
import { Large, Medium, Small } from '../../styles/MediaQuery';
import Link from 'next/link';
import { IPlayer } from '../../store/Types';

const Card = styled.div`
  ${breakpoints.large} {
    height: 15vh;
    position: relative;
    transform-style: preserve-3d;
    transition: 1s;
    transform: rotateY(0deg);
    &:hover {
      transform: rotateY(180deg);
    }
    margin-right: 0.65vw;
  }
`;

export default function PlayerCard({ name }: IPlayer) {
  return (
    <Link
      href={{
        pathname: 'custom/result/[player]',
        query: { player: name },
      }}
    >
      <>
        <Large>
          <Card>
            <PlayerFrontCard />
            <PlayerBackCard />
          </Card>
        </Large>
        <Medium>
          <Card>
            <PlayerBackCard />
          </Card>
        </Medium>
        <Small>
          <Card>
            <PlayerBackCard />
          </Card>
        </Small>
      </>
    </Link>
  );
}
