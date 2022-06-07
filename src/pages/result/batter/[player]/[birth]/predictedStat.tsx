import PrevButton from '@button/PrevButton';
import styled from '@emotion/styled';
import { fetchBatter, useBatter } from '@hooks/api/useBatter';
import { useBatterPrediction } from '@hooks/api/useBatterPrediction';
import BlackLayout from '@layout/black/BlackLayout';
import BatterPredictTable from '@PlayerInfo/StatTable/BatterPredictTable';
import BatterTable from '@PlayerInfo/StatTable/BatterTable';
import { breakpoints } from '@styles/media';
import CommonLoading from 'components/loading/commonLoading';
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
  margin-top: 5vh;
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
    margin-top: 2vh;
    margin-bottom: 3vh;
  }
  ${breakpoints.small} {
    margin-top: 10vh;
    margin-bottom: 3vh;
  }
`;

const PredictedStat = () => {
  const router = useRouter();
  const name = router.query?.player as string;
  const birth = router.query?.birth as string;
  const { isLoading, error, data } = useBatter(2021, name, birth);
  const predictedData = useBatterPrediction(2021, name, birth);
  if (predictedData.isLoading) return <CommonLoading />;
  const predictedStat = predictedData?.data;
  if (isLoading) return <CommonLoading />;
  if (error) console.error(error);
  const batter_stat = data?.batter_stat;
  return (
    <Wrapper>
      <ContentsContainer>
        <StatContainer>
          <BatterTable {...batter_stat} />
          <BatterPredictTable {...predictedStat} />
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

PredictedStat.PageLayout = BlackLayout;

export default PredictedStat;
