import styled from 'styled-components';
import { breakpoints } from '../../styles/media';
import TeamSlider from '../../components/kbo/TeamSlider';
import { GetStaticProps } from 'next';
import { dehydrate, QueryClient, useQuery } from 'react-query';
import { fetchTeams } from '../../hooks/api/useTeams';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Subtitle = styled.h2`
  font-family: 'RobotoMonoRegular';
  color: #b70000;
  ${breakpoints.large} {
    font-size: 1.4rem;
    line-height: 1.846rem;
    padding-top: 16.7rem;
  }
  ${breakpoints.medium} {
    font-size: 1.4rem;
    line-height: 1.846rem;
    padding-top: 16.7rem;
  }
  ${breakpoints.small} {
    font-size: 1.4rem;
    line-height: 1.846rem;
    padding-top: 10.7rem;
  }
`;

const Slider = styled.div``;

export interface ITeamSliderProps {
  teams: {
    name: string;
    colourLogo: string;
    blackLogo: string;
    teamColour: string;
    foundedAt: number;
    champCount: number;
    lastSeason: number;
  };
}

export default function Kbo() {
  const { data } = useQuery('teamData', () => fetchTeams());
  const teams = data?.teamDTOList;
  return (
    <Wrapper>
      <Subtitle>choose professional team</Subtitle>
      <Slider>
        <TeamSlider {...teams} />
      </Slider>
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
