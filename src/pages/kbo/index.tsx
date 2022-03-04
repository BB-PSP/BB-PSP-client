import styled from 'styled-components';
import { breakpoints } from '../../styles/media';
import TeamSlider from '../../components/kbo/TeamSlider';
import { GetStaticProps } from 'next';
import { dehydrate, QueryClient, useQuery } from 'react-query';
import { fetchTeams } from '../../hooks/api/useTeams';
import CommonLayout from '../../components/layout/CommonLayout';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ${breakpoints.large} {
    padding-top: 23.7rem;
  }
  ${breakpoints.medium} {
    padding-top: 23.7rem;
  }
  ${breakpoints.small} {
    padding-top: 13.7rem;
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

function Kbo() {
  const { data } = useQuery('teamData', () => fetchTeams());
  const teams = data?.teamDTOList;
  return (
    <Wrapper>
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

Kbo.PageLayout = CommonLayout;

export default Kbo;
