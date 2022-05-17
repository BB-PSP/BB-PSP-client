import { IPitcherProps } from '@store/Types';
import { Large, Medium, Small } from '@styles/MediaQuery';
import Link from 'next/link';

import PitcherBackCard from './PitcherBackCard';
import PitcherFrontCard from './PitcherFrontCard';
import { Card } from './styles';

const PitcherCard = (player: IPitcherProps) => {
  const pitcher_stat = player?.pitcher_stat;
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
            <PitcherFrontCard
              name={player_info.name}
              position={player_info.position}
              birth={player_info.birth}
              team={player_info.team}
            />
            <PitcherBackCard
              name={player_info.name}
              position={player_info.position}
              birth={player_info.birth}
              team={player_info.team}
              g={pitcher_stat._G}
              w={pitcher_stat._W}
              l={pitcher_stat._L}
              era={pitcher_stat._ERA}
            />
          </Card>
        </Large>
        <Medium>
          <Card>
            <PitcherBackCard
              name={player_info.name}
              position={player_info.position}
              birth={player_info.birth}
              team={player_info.team}
              g={pitcher_stat._G}
              w={pitcher_stat._W}
              l={pitcher_stat._L}
              era={pitcher_stat._ERA}
            />
          </Card>
        </Medium>
        <Small>
          <Card>
            <PitcherBackCard
              name={player_info.name}
              position={player_info.position}
              birth={player_info.birth}
              team={player_info.team}
              g={pitcher_stat._G}
              w={pitcher_stat._W}
              l={pitcher_stat._L}
              era={pitcher_stat._ERA}
            />
          </Card>
        </Small>
      </>
    </Link>
  );
};

export default PitcherCard;
