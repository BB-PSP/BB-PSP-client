import Link from 'next/link';
import { useState } from 'react';
import styled from 'styled-components';
import { breakpoints } from '../../styles/media';
import PlayerCard from '../PlayerCard/PlayerCard';
import PlayerFrontCard from '../PlayerCard/PlayerFrontCard';

const Wrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  height: 7.1rem;
  margin-top: 7rem;
`;

const NextButtonText = styled.h3`
  cursor: grab;
  width: 5.3rem;
  font-family: 'RobotoMonoRegular';
  font-size: 2.2rem;
  line-height: 2.901rem;
  color: #fff;
`;

const ArrowImg = styled.img`
  ${breakpoints.large} {
    margin-top: -0.6rem;
    width: 10.35rem;
    height: 3.3rem;
  }
  ${breakpoints.medium} {
    margin-top: -0.6rem;
    width: 10.35rem;
    height: auto;
  }
  ${breakpoints.small} {
    margin-top: -0.6rem;
    width: 6rem;
    height: auto;
  }
`;

const ViewAllBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const PrevButtonText = styled.h3`
  cursor: grab;
  font-family: 'RobotoMonoRegular';
  color: #fff;
  text-align: right;
  ${breakpoints.large} {
    font-size: 2.2rem;
    line-height: 2.9rem;
  }
  ${breakpoints.medium} {
    font-size: 2.2rem;
    line-height: 2.9rem;
  }
  ${breakpoints.small} {
    font-size: 1.6rem;
    line-height: 2.9rem;
  }
`;

const TestImage = styled.img`
  margin-left: 1rem;
  margin-top: 2rem;
  width: 10.35rem;
  height: 3.3rem;
`;

const ReplacementPlayerButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 29.5rem;
  height: 5.6rem;
  margin-top: 1.5rem;
  background: rgba(255, 255, 255, 0.74);
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
`;

const ButtonText = styled.h3`
  font-family: 'RobotoMonoRegular';
  font-size: 2.2rem;
  line-height: 2.9rem;
  text-align: center;
  color: #272727;
`;

const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 100;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CloseButton = styled.img`
  width: 6.2rem;
  height: 6.2rem;
`;

const Background = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(5px);
  animation: modal-bg-show 1s;
  @keyframes modal-bg-show {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const ModalBlock = styled.div`
  background-color: white;
  border-radius: 1rem;
  width: 76.6rem;
  height: 80.8rem;
`;

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 5.3rem;
`;

const Title = styled.h2`
  font-family: 'RobotoMonoRegular';
  font-size: 2.2rem;
  line-height: 2.9rem;
  color: #272727;
  padding-bottom: 5.7rem;
`;

const Grid = styled.div`
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  height: 67rem;
  width: 63rem;
  column-gap: 5rem;
  row-gap: 4rem;
  overflow: scroll;
`;

function ResultButton() {
  const [showModal, setShowModal] = useState(false);
  const openModal = () => {
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
  };
  return (
    <Wrapper>
      <Link href="/">
        <PrevButtonText>
          prev
          <ArrowImg src="/image/white_arrow_reverse.png" alt="화살표" />
        </PrevButtonText>
      </Link>
      <ReplacementPlayerButton onClick={openModal}>
        <ButtonText>replacement player</ButtonText>
      </ReplacementPlayerButton>
      {showModal ? <ModalFrame closeModal={closeModal} /> : null}
      <Link href="/">
        <ViewAllBox>
          <NextButtonText>view all</NextButtonText>
          <TestImage src="/image/white_arrow.png" />
        </ViewAllBox>
      </Link>
    </Wrapper>
  );
}

function ModalFrame(closeModal) {
  return (
    <Container>
      <Background>
        <CloseButton src="/image/modal_close.png" onClick={closeModal} />
        <ModalBlock>
          <Contents>
            <Title>replacement player</Title>
            <Grid>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map((i) => {
                return <PlayerCard key={i} />;
              })}
            </Grid>
          </Contents>
        </ModalBlock>
      </Background>
    </Container>
  );
}

export default ResultButton;
