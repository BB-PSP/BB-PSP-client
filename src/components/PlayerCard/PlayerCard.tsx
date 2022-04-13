import PlayerBackCard from './PlayerBackCard';
import PlayerFrontCard from './PlayerFrontCard';
import styled from 'styled-components';
import { breakpoints } from '../../styles/media';
import { Large, Medium, Small } from '../../styles/MediaQuery';
import Link from 'next/link';

const Card = styled.div`
  position: relative;
  ${breakpoints.large} {
    width: 15.1vw;
    height: 15vh;
    transform-style: preserve-3d;
    transition: 1s;
    transform: rotateY(0deg);
    &:hover {
      transform: rotateY(180deg);
    }
  }
  ${breakpoints.medium} {
    width: 100%;
    height: 20vh;
  }
`;

interface IPlayerCard {
  name: string;
  position: string;
  birth: string;
  team: string;
}

export default function PlayerCard(playerCard: IPlayerCard) {
  return (
    <Link
      href={{
        pathname: '/result/[player]',
        query: { player: playerCard.name },
      }}
    >
      <>
        <Large>
          <Card>
            <PlayerFrontCard {...playerCard} />
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
