import {
  Background,
  CloseButton,
  Container,
  Contents,
  Grid,
  ModalBlock,
  Title,
} from './styles';

interface ModalProps {
  setShowModal: (showModal: boolean) => void;
}

const ModalFrame = ({ setShowModal }: ModalProps) => {
  return (
    <Container>
      <Background>
        <CloseButton
          src="/image/modal_close.png"
          alt="모달창 닫기 버튼"
          onClick={() => setShowModal(false)}
        />
        <ModalBlock>
          <Contents>
            <Title>replacement player</Title>
            <Grid>
              {/* {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map((i) => {
                return <PlayerCard key={i} />;
              })} */}
            </Grid>
          </Contents>
        </ModalBlock>
      </Background>
    </Container>
  );
};

export default ModalFrame;
