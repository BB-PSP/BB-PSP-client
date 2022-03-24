import React, { useState } from 'react';
import HoveredTeamCard from './HoveredTeamCard';
import UnhoveredTeamCard from './UnhoveredTeamCard';
import styled from 'styled-components';
import { Large, Medium, Small } from '../../styles/MediaQuery';
import Link from 'next/link';
import { useSetRecoilState } from 'recoil';
import { selectedProTeamState } from '../../store/Data/atom';
import { breakpoints } from '../../styles/media';

const Wrapper = styled.div`
  ${breakpoints.large} {
    margin-right: 1.04vw;
  }
  ${breakpoints.medium} {
    margin-right: 1.04vw;
  }
`;

interface TeamCardProps {
  name: string;
  colourLogo: string;
  blackLogo: string;
  teamColour: string;
  linearGradient: string;
  foundedAt: number;
  champCount: number;
  lastSeason: number;
}

const TeamCard = (team: TeamCardProps) => {
  const [hoverIndex, setHoverIndex] = useState<number>(-1);
  const setSelectedProTeam = useSetRecoilState(selectedProTeamState);
  const showCardHover = (index: number) => {
    setHoverIndex(index);
  };
  const hiddenCardHover = () => {
    setHoverIndex(-1);
  };
  const onClick = () => {
    setSelectedProTeam(team);
  };
  return (
    <Link
      as={`/kbo/${team.name}`}
      href={{
        pathname: '/kbo/[team]',
        query: { team: JSON.stringify(team) },
      }}
    >
      <Wrapper
        onMouseEnter={() => showCardHover(0)}
        onMouseOut={() => hiddenCardHover()}
        onClick={() => {
          onClick();
        }}
      >
        <Large>
          {hoverIndex === -1 ? (
            <UnhoveredTeamCard team={team} />
          ) : (
            <HoveredTeamCard team={team} />
          )}
        </Large>
        <Medium>
          <HoveredTeamCard team={team} />
        </Medium>
        <Small>
          <HoveredTeamCard team={team} />
        </Small>
      </Wrapper>
    </Link>
  );
};

export default TeamCard;
