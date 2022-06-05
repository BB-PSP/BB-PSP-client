import styled from '@emotion/styled';
import { fetchTeams, useTeams } from '@hooks/api/useTeams';
import TeamSlider from '@kbo/TeamSlider';
import CommonLayout from '@layout/common/CommonLayout';
import { ITeam } from '@store/Types';
import { breakpoints } from '@styles/media';
import CommonLoading from 'components/loading/commonLoading';
import { GetStaticProps } from 'next';
import { useEffect } from 'react';
import { dehydrate, QueryClient } from 'react-query';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Slider = styled.div`
  position: relative;
  z-index: 1;
  ${breakpoints.large} {
    margin-top: 4.91vh;
    width: 69vw;
    min-width: 100rem;
  }
  ${breakpoints.medium} {
    width: 80vw;
  }
  ${breakpoints.small} {
    width: 70vw;
  }
`;

function imagePreload(urls: string[]) {
  urls.map((url) => {
    new Image().src = url;
  });
}

const Kbo = () => {
  const { isLoading, error, data } = useTeams(2021);
  if (isLoading) return <CommonLoading />;
  if (error) console.error(error);
  const teams = data?.teamDTOList;
  const color = teams.map((team: ITeam) => team.colourLogo);
  useEffect(() => {
    imagePreload(color);
  }, []);
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
  await queryClient.prefetchQuery('teamData', () => fetchTeams(2021));
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

Kbo.PageLayout = CommonLayout;

export default Kbo;
