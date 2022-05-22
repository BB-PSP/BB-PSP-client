import ResultButton from '@button/ResultButton';
import styled from '@emotion/styled';
import { fetchBatter, useBatter } from '@hooks/api/useBatter';
import BlackLayout from '@layout/black/BlackLayout';
import ModalFrame from '@modal/ModalFrame';
import Profile from '@PlayerInfo/Profile';
import StatTable from '@PlayerInfo/StatTable';
import { breakpoints } from '@styles/media';
import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { dehydrate, QueryClient } from 'react-query';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  width: 66.67vw;
`;

const TopContentsContainer = styled.div`
  display: flex;
  flex-direction: row;
  background-color: rgba(39, 39, 39, 0.87);
  ${breakpoints.large} {
    margin-top: 6.48vh;
    height: 20vh;
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
    width: 100%;
    margin-top: 1.5vh;
    height: 56vh;
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

export const ReplacementPlayerButton = styled.button`
  position: absolute;
  background: rgba(255, 255, 255, 0.74);
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  font-family: 'RobotoMonoRegular';
  text-align: center;
  color: #272727;
  bottom: 5vh;
  left: 50%;
  transform: translate(-50%);
  ${breakpoints.large} {
    font-size: 1.15vw;
    line-height: 2.7vh;
    margin-top: 1.4vh;
    padding: 1.11vh 1.46vw;
    height: 5.19vh;
  }
  ${breakpoints.medium} {
    font-size: 2vw;
    line-height: 3vh;
    margin-top: 1.39vh;
    width: 25vw;
    height: 5.19vh;
  }
  ${breakpoints.small} {
    font-size: 2vw;
    line-height: 3vh;
    margin-top: 1.39vh;
    width: 25vw;
    height: 5.19vh;
    margin-left: 2vw;
  }
`;

const Player = () => {
  const router = useRouter();
  const name = router.query?.player as string;
  const birth = router.query?.birth as string;
  const { isLoading, error, data } = useBatter(2021, name, birth);
  if (isLoading) return <div>Loading...</div>;
  if (error) console.error(error);
  const batter_stat = data?.batter_stat;
  const player_info = data?.player_info;
  const [showModal, setShowModal] = useState(false);
  const openModal = () => {
    setShowModal(true);
  };
  return (
    <Wrapper>
      <TopContentsContainer>
        <Profile {...player_info} />
      </TopContentsContainer>
      <BottomContentsContainer>
        <StatTable {...batter_stat} />
        <ResultButton name={name} birth={birth} />
        <ReplacementPlayerButton onClick={openModal}>
          replacement player
        </ReplacementPlayerButton>
      </BottomContentsContainer>
      {showModal ? <ModalFrame setShowModal={setShowModal} /> : null}
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

Player.PageLayout = BlackLayout;

export default Player;
