import styled from '@emotion/styled';
import PlayerBackCard from '@PlayerCard/PlayerBackCard';
import PlayerFrontCard from '@PlayerCard/PlayerFrontCard';
import { IBatterProps } from '@store/Types';
import { breakpoints } from '@styles/media';
import { Large, Medium, Small } from '@styles/MediaQuery';
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

export default function PlayerCard(player: IBatterProps) {
  const batter_stat = player?.batter_stat;
  const player_info = player?.player_info;
  return (
    <Link
      href={{
        pathname: '/result/[player]',
        query: { player: player.player_info.name },
      }}
    >
      <>
        <Large>
          <Card>
            <PlayerFrontCard
              name={player_info.name}
              position={player_info.position}
              birth={player_info.birth}
              team={player_info.team}
            />
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
