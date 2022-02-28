import React, { useState } from 'react';
import HoveredTeamCard from './HoveredTeamCard';
import UnhoveredTeamCard from './UnhoveredTeamCard';

interface ITeamCardProps {
  team: {
    name: string;
    colourLogo: string;
    blackLogo: string;
    teamColour: string;
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
    <div
      onMouseEnter={() => showCardHover(0)}
      onMouseLeave={() => hiddenCardHover()}
    >
      {hoverIndex === -1 ? (
        <UnhoveredTeamCard team={team} />
      ) : (
        <HoveredTeamCard team={team} />
      )}
    </div>
  );
}
