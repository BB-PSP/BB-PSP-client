import { IBatterProps } from '@store/Types';
import { Large, Medium, Small } from '@styles/MediaQuery';
import Link from 'next/link';

import BatterBackCard from './BatterBackCard';
import BatterFrontCard from './BatterFrontCard';
import { Card } from './styles';

const BatterCard = (player: IBatterProps) => {
  const batter_stat = player?.batter_stat;
  const player_info = player?.player_info;
  return (
    <Link
      href={{
        pathname: '/result/batter/[player]/[birth]',
        query: {
          player: player.player_info.name,
          birth: player.player_info.birth,
        },
      }}
    >
      <button>
        <Large>
          <Card>
            <BatterFrontCard
              name={player_info.name}
              position={player_info.position}
              birth={player_info.birth}
              team={player_info.team}
            />
            <BatterBackCard
              name={player_info.name}
              position={player_info.position}
              birth={player_info.birth}
              team={player_info.team}
              hit={batter_stat._H}
              hr={batter_stat._HR}
              rbi={batter_stat._RBI}
              avg={batter_stat._AVG}
            />
          </Card>
        </Large>
        <Medium>
          <Card>
            <BatterFrontCard
              name={player_info.name}
              position={player_info.position}
              birth={player_info.birth}
              team={player_info.team}
            />
          </Card>
        </Medium>
        <Small>
          <Card>
            <BatterFrontCard
              name={player_info.name}
              position={player_info.position}
              birth={player_info.birth}
              team={player_info.team}
            />
          </Card>
        </Small>
      </button>
    </Link>
  );
};

export default BatterCard;
