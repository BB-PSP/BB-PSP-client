import { motion } from 'framer-motion';
import { GetStaticProps } from 'next';
import Link from 'next/link';
import { dehydrate, QueryClient, useQuery } from 'react-query';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { fetchTeams } from '../../hooks/api/useTeams';
import { selectedTeamState } from '../../store/Data/atom';
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
    width: 15.7rem;
    height: 14.5rem;
  }
  ${breakpoints.small} {
    width: 15.7rem;
    height: 6.5rem;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  ${breakpoints.large} {
    margin-top: 5.4rem;
  }
  ${breakpoints.medium} {
    margin-top: 5.4rem;
  }
  ${breakpoints.small} {
    margin-top: 8rem;
  }
`;

const NextButtonText = styled.h3`
  cursor: grab;
  font-family: 'RobotoMonoRegular';
  font-size: 2.2rem;
  color: #b70000;
  ${breakpoints.large} {
    font-size: 2.2rem;
    line-height: 2.9rem;
    margin-left: 106.5rem;
  }
  ${breakpoints.medium} {
    font-size: 2.2rem;
    line-height: 2.9rem;
    margin-left: 46.5rem;
  }
  ${breakpoints.small} {
    font-size: 1.6rem;
    line-height: 2.9rem;
    margin-left: 20.5rem;
  }
`;

const ArrowImg = styled.img`
  ${breakpoints.large} {
    margin-top: -0.6rem;
    width: 10.35rem;
    height: auto;
  }
  ${breakpoints.medium} {
    margin-top: -0.6rem;
    width: 10.35rem;
    height: auto;
  }
  ${breakpoints.small} {
    margin-top: -0.6rem;
    width: 6rem;
    height: auto;
  }
`;

const PrevButtonText = styled.h3`
  cursor: grab;
  font-family: 'RobotoMonoRegular';
  color: #b70000;
  text-align: right;
  ${breakpoints.large} {
    font-size: 2.2rem;
    line-height: 2.9rem;
  }
  ${breakpoints.medium} {
    font-size: 2.2rem;
    line-height: 2.9rem;
  }
  ${breakpoints.small} {
    font-size: 1.6rem;
    line-height: 2.9rem;
  }
`;

const ReversedArrowImg = styled.img`
  transform: scaleX(-1);
  ${breakpoints.large} {
    margin-top: -0.6rem;
    width: 10.35rem;
    height: auto;
  }
  ${breakpoints.medium} {
    margin-top: -0.6rem;
    width: 8.35rem;
    height: auto;
  }
  ${breakpoints.small} {
    margin-top: -0.6rem;
    width: 6rem;
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

export default function Team() {
  const { data } = useQuery('teamData', () => fetchTeams());
  const teams = data?.teamDTOList;
  const [selectedTeam, setSelectedTeam] =
    useRecoilState<string[]>(selectedTeamState);
  return (
    <Wrapper>
      <SubTitle>BB:PSP(Baseball: Player Stats Prediction)</SubTitle>
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
      <ButtonContainer>
        <Link href="/">
          <PrevButtonText>
            prev
            <ReversedArrowImg src="/image/Arrow.png" alt="화살표" />
          </PrevButtonText>
        </Link>
        <Link href="/custom/position">
          <NextButtonText>
            next
            <ArrowImg src="/image/Arrow.png" alt="화살표" />
          </NextButtonText>
        </Link>
      </ButtonContainer>
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
