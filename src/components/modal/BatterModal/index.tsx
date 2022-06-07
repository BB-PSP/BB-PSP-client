import { useBatterRecommend } from '@hooks/api/useBatterRecommend';
import BatterCard from '@PlayerCard/BatterCard';
import { IBatterProps } from '@store/Types';
import CommonLoading from 'components/loading/commonLoading';
import NoData from 'components/nodata';
import { useRouter } from 'next/router';

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

const BatterModal = ({ setShowModal }: ModalProps) => {
  const router = useRouter();
  const name = router.query?.player as string;
  const birth = router.query?.birth as string;
  const { isLoading, error, data } = useBatterRecommend(2021, name, birth);
  if (isLoading) return <CommonLoading />;
  if (error) console.error(error);
  if (data?.length === 0) return <NoData />;
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
              {data?.map((player: IBatterProps) => {
                return (
                  <BatterCard key={player?.player_info.name} {...player} />
                );
              })}
            </Grid>
          </Contents>
        </ModalBlock>
      </Background>
    </Container>
  );
};

export default BatterModal;
