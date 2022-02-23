import { motion } from 'framer-motion';
import React from 'react';
import { useQuery } from 'react-query';
import styled from 'styled-components';
import { ITeam } from '../../store/Types';
import { breakpoints } from '../../styles/media';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  ${breakpoints.large} {
    width: 128rem;
  }
  ${breakpoints.medium} {
    width: 68rem;
  }
  ${breakpoints.small} {
    width: 35rem;
  }
`;

const SubTitle = styled.h2`
  font-family: 'RobotoMonoRegular';
  color: #b70000;
  ${breakpoints.large} {
    font-size: 1.4rem;
    line-height: 1.846rem;
    padding-top: 16.7rem;
    padding-bottom: 21.2rem;
  }
  ${breakpoints.medium} {
    font-size: 1.4rem;
    line-height: 1.846rem;
    padding-top: 16.7rem;
    padding-bottom: 21.2rem;
  }
  ${breakpoints.small} {
    font-size: 1.1rem;
    line-height: 1.846rem;
    padding-top: 8.7rem;
    padding-bottom: 2.2rem;
  }
`;

const GridContainer = styled.div`
  display: grid;
  ${breakpoints.large} {
    grid-template-columns: repeat(5, 1fr);
    height: 39.8rem;
    column-gap: 4.9rem;
    row-gap: 10.8rem;
  }
  ${breakpoints.medium} {
    grid-template-columns: repeat(5, 1fr);
    height: 39.8rem;
    column-gap: 4.9rem;
    row-gap: 10.8rem;
  }
  ${breakpoints.small} {
    grid-template-columns: repeat(2, 1fr);
    height: 39.8rem;
    column-gap: 2.9rem;
    row-gap: 3.8rem;
  }
`;

const TeamCard = styled(motion.div)<ITeam>`
  cursor: grab;
  background-size: contain;
  background-repeat: no-repeat;
  background-image: url(${(props) => props.colourLogo});
  background-position: center;
  ${breakpoints.large} {
    width: 21.7rem;
    height: 14.5rem;
  }
  ${breakpoints.medium} {
    width: 15.7rem;
    height: 14.5rem;
  }
  ${breakpoints.small} {
    width: 15.7rem;
    height: 6.5rem;
  }
`;

const cardVariants = {
  unHovered: {
    scale: 1,
  },
  hovered: {
    scale: 1.1,
  },
};

export default function Custom() {
  const { isLoading, error, data } = useQuery('teamData', () =>
    fetch('/api/team').then((res) => res.json()),
  );
  const teams = data?.teamDTOList;
  const onCardClicked = (team: number) => {
    console.log(team);
  };
  return (
    <Wrapper>
      <SubTitle>BB:PSP(Baseball: Player Stats Prediction)</SubTitle>
      <GridContainer>
        {teams?.map((team: ITeam) => (
          <TeamCard
            variants={cardVariants}
            initial="unHovered"
            whileHover="hovered"
            key={team.name}
            name={team.name}
            colourLogo={team.colourLogo}
          />
        ))}
      </GridContainer>
    </Wrapper>
  );
}
