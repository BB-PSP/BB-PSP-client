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
  ${breakpoints.small} {
  }
`;

const TeamLogoBox = styled(motion.div)<{ clicked: boolean }>`
  cursor: grab;
  display: flex;
  align-items: center;
  justify-content: center;
  ${breakpoints.large} {
    width: 11.3vw;
    height: 13.43vh;
  }
  ${breakpoints.medium} {
    width: 13vw;
    height: 13vh;
  }
`;

const TeamLogo = styled.img`
  position: relative;
  ${breakpoints.large} {
    width: auto;
    height: 13.43vh;
    /* width: 11.3vw;
    height: auto; */
  }
  ${breakpoints.medium} {
    width: 14vw;
    height: auto;
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

function Team({
  teams,
  color,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const [selectedTeam, setSelectedTeam] =
    useRecoilState<string[]>(selectedTeamState);
  useEffect(() => {
    setSelectedTeam([]);
    imagePreload(color);
  }, []);
  function imagePreload(urls: string[]) {
    // const preloadedCorlorImages = urls.map((url) => {
    //   return (new Image().src = url);
    // });
    urls.map((url) => {
      new Image().src = url;
    });
  }

  return (
    <Wrapper>
      <GridContainer>
        {teams?.map((team: ITeam) => {
          const isClicked = selectedTeam.includes(team.name);
          return (
            <TeamLogoBox
              key={team.name}
              variants={cardVariants}
              initial="unhovered"
              whileHover="hovered"
              onClick={() => {
                if (selectedTeam.includes(team.name)) {
                  setSelectedTeam(selectedTeam.filter((v) => v !== team.name));
                } else {
                  setSelectedTeam((prev) => [...prev, team.name]);
                }
              }}
              clicked={isClicked}
            >
              {isClicked ? (
                <TeamLogo alt={`${team?.name} Logo`} src={team?.colourLogo} />
              ) : (
                <TeamLogo alt={`${team?.name} Logo`} src={team?.blackLogo} />
              )}
            </TeamLogoBox>
          );
        })}
      </GridContainer>
      <PageButton prev="/" next="/custom/position" />
    </Wrapper>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const teams = team.teamDTOList;
  const colourLogo = teams.map((team) => team.colourLogo);
  return {
    props: { teams: teams, color: colourLogo },
  };
};

Team.PageLayout = CommonLayout;

export default Team;
