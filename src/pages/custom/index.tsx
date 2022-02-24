import { motion } from 'framer-motion';
import { GetStaticProps } from 'next';
import React from 'react';
import { dehydrate, QueryClient, useQuery } from 'react-query';
import styled from 'styled-components';
import { fetchTeams } from '../../hooks/api/useTeams';
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

const TeamCard = styled(motion.div)<ITeam & { clicked: boolean }>`
  cursor: grab;
  background-size: contain;
  background-repeat: no-repeat;
  background-image: url(${(props) =>
    props.clicked ? props.colourLogo : props.blackLogo});
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
  const { data } = useQuery('teamData', () => fetchTeams());
  // if (isLoading) return <div>Loading</div>;
  // if (error) return 'An error has occurred: ' + error?.message;
  const teams = data?.teamDTOList;
  // const [selectedName, setSelectedName] = useState<string>('');
  const selectedTeam: Array<string> = new Array<string>();

  return (
    <Wrapper>
      <SubTitle>BB:PSP(Baseball: Player Stats Prediction)</SubTitle>
      <GridContainer>
        {teams?.map((team: ITeam) => (
          <TeamCard
            variants={cardVariants}
            initial="unHovered"
            whileHover="hovered"
            onClick={() => {
              if (selectedTeam.includes(team.name)) {
                for (let i = 0; i < selectedTeam.length; i++) {
                  if (selectedTeam[i] === team.name) {
                    selectedTeam.splice(i, 1);
                    i--;
                  }
                }
              } else {
                selectedTeam.push(team.name);
              }
              console.log(selectedTeam);
            }}
            clicked={selectedTeam.includes(team.name)}
            // onClick={() => setSelectedName(team.name)}
            // clicked={selectedName === team.name}
            key={team.name}
            name={team.name}
            colourLogo={team.colourLogo}
            blackLogo={team.blackLogo}
          />
        ))}
      </GridContainer>
    </Wrapper>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery('teamData', () => fetchTeams());

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};
