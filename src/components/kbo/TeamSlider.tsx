import React from 'react';
import styled from 'styled-components';
import { breakpoints } from '@styles/media';
import TeamCard from '@kbo/TeamCard';

const Wrapper = styled.div`
  width: 100%;
`;

const TeamSliderContainer = styled.div`
  position: relative;
  align-items: center;
  overflow-y: hidden;
  overflow-x: scroll;
  ${breakpoints.large} {
    height: 71.39vh;
    width: 100%;
    white-space: nowrap;
    padding-bottom: 5rem;
    &::-webkit-scrollbar {
      background: transparent;
      height: 0.5rem;
    }
    &::-webkit-scrollbar-track {
      background: #fff;
    }
    &::-webkit-scrollbar-thumb {
      background: #3d3d3d;
      background-clip: padding-box;
      &:hover {
        background: #606060;
      }
    }
  }
  ${breakpoints.medium} {
    height: 60vh;
    width: 100%;
  }
  ${breakpoints.small} {
    height: 60vh;
    width: 100%;
  }
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  width: 200%;
  height: 100%;
  ${breakpoints.medium} {
    width: 500%;
  }
  ${breakpoints.small} {
    width: 1000%;
  }
`;

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
    <Wrapper>
      <TeamSliderContainer>
        <Row>
          {teamArr.map((team) => {
            return <TeamCard key={team.name} {...team} />;
          })}
        </Row>
      </TeamSliderContainer>
    </Wrapper>
  );
};

export default TeamSlider;
