import styled from '@emotion/styled';
import { fetchPlayers, usePlayers } from '@hooks/api/usePlayers';
import CommonLayout from '@layout/common/CommonLayout';
import BatterCard from '@PlayerCard/BatterCard';
import PitcherCard from '@PlayerCard/PitcherCard';
import { IBatterProps, IPitcherProps } from '@store/Types';
import { breakpoints } from '@styles/media';
import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import { dehydrate, QueryClient } from 'react-query';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  ${breakpoints.medium} {
    padding-top: 10vh;
  }
`;

const Container = styled.div`
  overflow-x: hidden;
  ${breakpoints.large} {
    position: absolute;
    bottom: 0;
    margin-top: 19.54vh;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 1.04vw;
    row-gap: 3.7vh;
    width: 70.94vw;
    height: 63.33vh;
    white-space: nowrap;
    padding-left: 2vw;
    padding-right: 2.6vw;
  }
  ${breakpoints.medium} {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    width: 85vw;
    height: 60vh;
  }
  &::-webkit-scrollbar {
    background-color: transparent;
    width: 0.4rem;
  }
  &::-webkit-scrollbar-track {
    background: #fff;
  }
  &::-webkit-scrollbar-thumb {
    background: #3d3d3d;
    background-clip: padding-box;
    &:hover {
      background: #606060;
    }
  }
`;

const Team = () => {
  const router = useRouter();
  const position = router.query?.position as string;
  const proteam = router.query?.proteam as string;
  const { isLoading, error, data } = usePlayers(position, 2021, proteam);
  if (isLoading) return <div>Loading...</div>;
  if (error) console.error(error);
  return (
    <Wrapper>
      <Container>
        {position === 'batters'
          ? data.map((player: IBatterProps) => {
              return <BatterCard key={player?.player_info?.name} {...player} />;
            })
          : data.map((player: IPitcherProps) => {
              return (
                <PitcherCard key={player?.player_info?.name} {...player} />
              );
            })}
      </Container>
    </Wrapper>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const proteam = context.params?.proteam as string;
  const position = context.params?.position as string;
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery('playerData', () =>
    fetchPlayers(position, 2021, proteam),
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

Team.PageLayout = CommonLayout;

export default Team;
