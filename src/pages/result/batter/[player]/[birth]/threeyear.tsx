import PrevButton from '@button/PrevButton';
import styled from '@emotion/styled';
import { fetchBatter, useBatter } from '@hooks/api/useBatter';
import BlackFullLayout from '@layout/black/BlackFullLayout';
import BatterTable from '@PlayerInfo/StatTable/BatterTable';
import { breakpoints } from '@styles/media';
import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import { dehydrate, QueryClient } from 'react-query';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ContentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(
    180deg,
    rgba(39, 39, 39, 0.87) 16.23%,
    rgba(39, 39, 39, 0.433227) 65.57%,
    rgba(39, 39, 39, 0) 100%
  );
  ${breakpoints.large} {
    margin-top: 10vh;
  }
  ${breakpoints.medium} {
    margin-top: 10vh;
  }
  ${breakpoints.small} {
    margin-top: 5vh;
  }
`;

const StatContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const ButtonContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  ${breakpoints.large} {
    margin-top: 16.11vh;
    margin-bottom: 6.48vh;
  }
  ${breakpoints.medium} {
    margin-top: 16.11vh;
    margin-bottom: 6.48vh;
  }
  ${breakpoints.small} {
    margin-bottom: 3vh;
  }
`;

const Threeyear = () => {
  const router = useRouter();
  const name = router.query?.player as string;
  const birth = router.query?.birth as string;
  const { isLoading, error, data } = useBatter(2021, name, birth);
  if (isLoading) return <div>Loading...</div>;
  if (error) console.error(error);
  const batter_stat = data?.batter_stat;
  return (
    <Wrapper>
      <ContentsContainer>
        <StatContainer>
          <BatterTable {...batter_stat} />
          <BatterTable {...batter_stat} />
          <BatterTable {...batter_stat} />
        </StatContainer>
        <ButtonContainer>
          <PrevButton />
        </ButtonContainer>
      </ContentsContainer>
    </Wrapper>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const name = context.params?.player as string;
  const birth = context.params?.birth as string;
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery('batter', () =>
    fetchBatter(2021, name, birth),
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

Threeyear.PageLayout = BlackFullLayout;

export default Threeyear;
