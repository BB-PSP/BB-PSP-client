import styled from 'styled-components';
import PlayerCard from '../PlayerCard/PlayerCard';

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

interface ModalProps {
  setShowModal: (showModal: boolean) => void;
}

function ModalFrame({ setShowModal }: ModalProps) {
  return (
    <Container>
      <Background>
        <CloseButton
          src="/image/modal_close.png"
          onClick={() => setShowModal(false)}
        />
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

export default ModalFrame;
