import Link from 'next/link';
import React from 'react';

import {
  Background,
  Box,
  Category,
  Content,
  ContentsBox,
  LogoBox,
  LogoBoxBackground,
  TeamName,
  Wrapper,
} from './styles';

interface TeamCardProps {
  company: string;
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
  console.log(team);
  return (
    <Link
      href={{
        pathname: `/kbo/${encodeURIComponent(team.name)}`,
        query: { name: JSON.stringify(team.name) },
      }}
      as={`/kbo/${encodeURIComponent(team.name)}`}
    >
      <Wrapper team={team}>
        <Background />
        <LogoBox team={team}>
          <LogoBoxBackground />
        </LogoBox>
        <ContentsBox>
          <TeamName>
            {team?.company} {team?.name}
          </TeamName>
          <Box>
            <Category>Last season</Category>
            <Content>{team?.lastSeason}</Content>
          </Box>
          <Box>
            <Category>Wins</Category>
            <Content>{team?.champCount}</Content>
          </Box>
          <Box>
            <Category>Foundation year</Category>
            <Content>{team?.foundedAt}</Content>
          </Box>
        </ContentsBox>
      </Wrapper>
    </Link>
  );
};

export default TeamCard;
