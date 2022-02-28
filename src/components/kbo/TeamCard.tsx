import React, { useState } from 'react';
import HoveredTeamCard from './HoveredTeamCard';
import UnhoveredTeamCard from './UnhoveredTeamCard';
import styled from 'styled-components';
import { Large, Medium, Small } from '../../styles/MediaQuery';

const Wrapper = styled.div``;

interface ITeamCardProps {
  team: {
    name: string;
    colourLogo: string;
    blackLogo: string;
    teamColour: string;
    linearGradient: string;
    foundedAt: number;
    champCount: number;
    lastSeason: number;
  };
}

export default function TeamCard({ team }: ITeamCardProps) {
  const [hoverIndex, setHoverIndex] = useState<number>(-1);
  const showCardHover = (index: number) => {
    setHoverIndex(index);
  };
  const hiddenCardHover = () => {
    setHoverIndex(-1);
  };
  return (
    <Wrapper
      onMouseEnter={() => showCardHover(0)}
      onMouseLeave={() => hiddenCardHover()}
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
  );
}
