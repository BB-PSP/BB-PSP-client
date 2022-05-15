import styled from '@emotion/styled';
import { useBatters } from '@hooks/api/useBatters';
import { fetchPlayers } from '@hooks/api/usePlayers';
import CommonLayout from '@layout/common/CommonLayout';
import { breakpoints } from '@styles/media';
import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import { dehydrate, QueryClient } from 'react-query';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-left: 2.6vw;
`;

const Container = styled.div`
  overflow-x: hidden;
  position: absolute;
  bottom: 0;
  ${breakpoints.large} {
    margin-top: 19.54vh;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 1.04vw;
    row-gap: 3.7vh;
    width: 70.94vw;
    height: 63.33vh;
    white-space: nowrap;
    padding-right: 2.6vw;
  }
  ${breakpoints.medium} {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2vw;
    row-gap: 2vh;
    width: 82.6vw;
    height: 80vh;
    padding-right: 2.6vw;
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
  const { data } = useBatters(2021, 'Eagles');
  const router = useRouter();
  const team = router.query.proteam;
  // console.log(data);
  // 쿼리로 선택한 팀을 받아온다.
  // 그 팀의 선수들을 전부 불러오는 api를 호출한다.
  return (
    <Wrapper>
      <Container>
        {/* {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map((i) => {
          return <PlayerCard key={i} name={'홍창기'} />;
        })} */}
      </Container>
    </Wrapper>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { params } = context;
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery('playerData', () =>
    fetchPlayers(2021, 'Twins'),
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
