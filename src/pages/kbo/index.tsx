import styled from 'styled-components';
import TeamSlider from '@kbo/TeamSlider';
import { GetStaticProps } from 'next';
import { dehydrate, QueryClient } from 'react-query';
import { fetchTeams, useTeams } from '@hooks/api/useTeams';
import CommonLayout from '@layout/common/CommonLayout';
import { breakpoints } from '@styles/media';

const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Slider = styled.div`
  position: relative;
  z-index: 1;
  ${breakpoints.large} {
    margin-top: 4.91vh;
    width: 69.27vw;
  }
  ${breakpoints.medium} {
    margin-top: 10vh;
    width: 77vw;
  }
  ${breakpoints.small} {
    width: 70vw;
  }
`;

const Kbo = () => {
  const { data } = useTeams(2021);
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
  await queryClient.prefetchQuery('teamData', () => fetchTeams(2021));
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

Kbo.PageLayout = CommonLayout;

export default Kbo;
