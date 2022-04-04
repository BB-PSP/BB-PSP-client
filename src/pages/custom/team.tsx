import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import CommonLayout from '../../components/layout/common/CommonLayout';
import PageButton from '../../components/button/PageButton';
import { selectedTeamState } from '../../store/Data/atom';
import { ITeam } from '../../store/Types';
import { breakpoints } from '../../styles/media';
import team from '../../data/team.json';
import { GetStaticProps, InferGetStaticPropsType } from 'next/types';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const GridContainer = styled.div`
  display: grid;
  ${breakpoints.large} {
    padding-top: 19.63vh;
    grid-template-columns: repeat(5, 1fr);
    height: 36.85vh;
    column-gap: 2.6vw;
    row-gap: 10vh;
  }
  ${breakpoints.medium} {
    padding-top: 20vh;
    grid-template-columns: repeat(5, 1fr);
    height: 50vh;
    column-gap: 2.6vw;
    row-gap: 5vh;
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
    width: 11.3vw;
    height: 13.43vh;
  }
  ${breakpoints.medium} {
    width: 13vw;
    height: 13vh;
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

function Team({ teams }: InferGetStaticPropsType<typeof getStaticProps>) {
  console.log(teams);
  // const teams = team.teamDTOList;
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
              key={team.name}
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
  const teams = team.teamDTOList;
  return {
    props: { teams: teams },
  };
};

Team.PageLayout = CommonLayout;

export default Team;
