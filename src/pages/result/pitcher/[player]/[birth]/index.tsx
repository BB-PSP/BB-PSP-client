import ResultButton from '@button/ResultButton';
import styled from '@emotion/styled';
import { fetchPitcher, usePitcher } from '@hooks/api/usePitcher';
import BlackLayout from '@layout/black/BlackLayout';
import ModalFrame from '@modal/ModalFrame';
import Profile from '@PlayerInfo/Profile';
import PitcherTable from '@PlayerInfo/StatTable/PitcherTable';
import { breakpoints } from '@styles/media';
import BlackLoading from 'components/loading/blackLoading';
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
  ${breakpoints.medium} {
    width: 88vw;
  }
  ${breakpoints.small} {
    width: 90vw;
  }
`;

const TopContentsContainer = styled.div`
  display: flex;
  flex-direction: row;
  background-color: rgba(39, 39, 39, 0.87);
  width: 100%;
  ${breakpoints.large} {
    margin-top: 6.48vh;
    height: 20.28vh;
  }
  ${breakpoints.medium} {
    margin-top: 6vh;
    height: 20vh;
  }
  ${breakpoints.small} {
    margin-top: 5vh;
    height: 15vh;
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
  width: 100%;
  ${breakpoints.large} {
    margin-top: 1.57vh;
    height: 54.54vh;
  }
  ${breakpoints.medium} {
    margin-top: 1.57vh;
    height: 55vh;
  }
  ${breakpoints.small} {
    margin-top: 2vh;
    height: 50vh;
  }
`;

const ReplacementPlayerButton = styled.button`
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
    margin-top: 1.4vh;
    height: 5.2vh;
  }
  ${breakpoints.small} {
    font-size: 2vw;
    line-height: 3vh;
    height: 4vh;
    bottom: 3vh;
  }
`;

const Player = () => {
  const [showModal, setShowModal] = useState(false);
  const router = useRouter();
  const name = router.query?.player as string;
  const birth = router.query?.birth as string;
  const { isLoading, error, data } = usePitcher(2021, name, birth);
  if (isLoading) return <BlackLoading />;
  if (error) console.error(error);
  const pitcher_stat = data?.pitcher_stat;
  const player_info = data?.player_info;
  const openModal = () => {
    setShowModal(true);
  };
  return (
    <Wrapper>
      <TopContentsContainer>
        <Profile {...player_info} />
      </TopContentsContainer>
      <BottomContentsContainer>
        <PitcherTable {...pitcher_stat} />
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
