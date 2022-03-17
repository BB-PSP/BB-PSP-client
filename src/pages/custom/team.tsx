import { motion } from 'framer-motion';
import { GetStaticProps } from 'next';
import { useEffect } from 'react';
import { dehydrate, QueryClient, useQuery } from 'react-query';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import CommonLayout from '../../components/layout/common/CommonLayout';
import PageButton from '../../components/button/PageButton';
import { fetchTeams } from '../../hooks/api/useTeams';
import { selectedTeamState } from '../../store/Data/atom';
import { ITeam } from '../../store/Types';
import { breakpoints } from '../../styles/media';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  ${breakpoints.large} {
    width: 128rem;
    padding-top: 21.2rem;
  }
  ${breakpoints.medium} {
    width: 68rem;
    margin-top: 10rem;
  }
  ${breakpoints.small} {
    width: 35rem;
    margin-top: 10rem;
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
    column-gap: 3.9rem;
    row-gap: 5.8rem;
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
  ${(props) =>
    props.clicked
      ? `background-image: url(${props.colourLogo});`
      : `background-image: url(${props.blackLogo});`}
  background-position: center;
  ${breakpoints.large} {
    width: 21.7rem;
    height: 14.5rem;
  }
  ${breakpoints.medium} {
    width: 10rem;
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

function Team() {
  const { data } = useQuery('teamData', () => fetchTeams());
  const teams = data?.teamDTOList;
  const [selectedTeam, setSelectedTeam] =
    useRecoilState<string[]>(selectedTeamState);
  useEffect(() => {
    setSelectedTeam([]);
  }, []);
  return (
    <Wrapper>
      <GridContainer>
        {teams?.map((team: ITeam) => {
          const isClicked = selectedTeam.includes(team.name);
          return (
            <TeamCard
              variants={cardVariants}
              initial="unHovered"
              whileHover="hovered"
              onClick={() => {
                if (selectedTeam.includes(team.name)) {
                  setSelectedTeam(selectedTeam.filter((v) => v !== team.name));
                } else {
                  setSelectedTeam((prev) => [...prev, team.name]);
                }
              }}
              clicked={isClicked}
              key={team.name}
              {...team}
            />
          );
        })}
      </GridContainer>
      <PageButton prev="/" next="/custom/position" />
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

Team.PageLayout = CommonLayout;

export default Team;
