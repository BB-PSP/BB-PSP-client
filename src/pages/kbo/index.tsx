import styled from 'styled-components';
import { breakpoints } from '../../styles/media';
import TeamSlider from '../../components/kbo/TeamSlider';
import { GetStaticProps } from 'next';
import { dehydrate, QueryClient, useQuery } from 'react-query';
import { fetchTeams } from '../../hooks/api/useTeams';
import CommonLayout from '../../components/layout/common/CommonLayout';
import { ITeam } from '../../store/Types';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* ${breakpoints.large} {
    padding-top: 23.7rem;
  }
  ${breakpoints.medium} {
    padding-top: 23.7rem;
  }
  ${breakpoints.small} {
    padding-top: 13.7rem;
  } */
`;

const Slider = styled.div``;

const Kbo = () => {
  const { data } = useQuery<ITeam, Error>('teamData', () => fetchTeams());
  const teams = data?.teamDTOList;
  return (
    <Wrapper>
      <Slider>
        <TeamSlider {...teams} />
      </Slider>
    </Wrapper>
  );
};

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
