import ResultButton from '@button/ResultButton';
import styled from '@emotion/styled';
import { fetchPitcher, usePitcher } from '@hooks/api/usePitcher';
import BlackLayout from '@layout/black/BlackLayout';
import Profile from '@PlayerInfo/Profile';
import PitcherTable from '@PlayerInfo/StatTable/PitcherTable';
import { breakpoints } from '@styles/media';
import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import { dehydrate, QueryClient } from 'react-query';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TopContentsContainer = styled.div`
  display: flex;
  flex-direction: row;
  background-color: rgba(39, 39, 39, 0.87);
  ${breakpoints.large} {
    margin-top: 6.48vh;
    height: 20.28vh;
  }
  ${breakpoints.medium} {
    margin-top: 6.48vh;
    height: 20.28vh;
  }
  ${breakpoints.small} {
    margin-top: 5vh;
    height: 10vh;
  }
`;

const BottomContentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: linear-gradient(
    180deg,
    rgba(39, 39, 39, 0.87) 16.23%,
    rgba(39, 39, 39, 0.433227) 65.57%,
    rgba(39, 39, 39, 0) 100%
  );
  ${breakpoints.large} {
    margin-top: 1.57vh;
    height: 54.54vh;
  }
  ${breakpoints.medium} {
    margin-top: 1.57vh;
    padding-right: 3.33vw;
    padding-left: 3.33vw;
    height: 50.54vh;
  }
  ${breakpoints.small} {
    margin-top: 2vh;
    height: 50vh;
  }
`;

const Player = () => {
  const router = useRouter();
  const name = router.query?.player as string;
  const birth = router.query?.birth as string;
  const { isLoading, error, data } = usePitcher(2021, name, birth);
  if (isLoading) return <div>Loading...</div>;
  if (error) console.error(error);
  const pitcher_stat = data?.pitcher_stat;
  const player_info = data?.player_info;
  return (
    <Wrapper>
      <TopContentsContainer>
        <Profile {...player_info} />
      </TopContentsContainer>
      <BottomContentsContainer>
        <PitcherTable {...pitcher_stat} />
        <ResultButton name={name} birth={birth} />
      </BottomContentsContainer>
    </Wrapper>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const name = context.params?.player as string;
  const birth = context.params?.birth as string;
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery('pitcher', () =>
    fetchPitcher(2021, name, birth),
  );

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  };
};

Player.PageLayout = BlackLayout;

export default Player;
