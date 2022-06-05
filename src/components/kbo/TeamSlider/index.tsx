import TeamCard from '@kbo/TeamCard';

import { Row, TeamSliderContainer } from './styles';

export interface TeamSliderProps {
  name: string;
  colourLogo: string;
  blackLogo: string;
  teamColour: string;
  foundedAt: number;
  champCount: number;
  lastSeason: number;
}

const TeamSlider = (teams: TeamSliderProps) => {
  const teamArr = Object.values(teams);
  return (
    <div>
      <TeamSliderContainer>
        <Row>
          {teamArr.map((team) => {
            return <TeamCard key={team.name} {...team} />;
          })}
        </Row>
      </TeamSliderContainer>
    </div>
  );
};

export default TeamSlider;
