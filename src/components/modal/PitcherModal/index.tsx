import { usePitcherRecommend } from '@hooks/api/usePitcherRecommend';
import PitcherCard from '@PlayerCard/PitcherCard';
import { IPitcherProps } from '@store/Types';
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
  NoDataBox,
  Title,
} from './styles';

interface ModalProps {
  setShowModal: (showModal: boolean) => void;
}

const PitcherModal = ({ setShowModal }: ModalProps) => {
  const router = useRouter();
  const name = router.query?.player as string;
  const birth = router.query?.birth as string;
  const { isLoading, error, data } = usePitcherRecommend(2021, name, birth);
  if (isLoading) return <CommonLoading />;
  if (error) console.error(error);
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
            {data?.length === 0 ? (
              <NoDataBox>
                <NoData />
              </NoDataBox>
            ) : (
              <Grid>
                {data?.map((player: IPitcherProps) => {
                  return (
                    <PitcherCard key={player?.player_info.name} {...player} />
                  );
                })}
              </Grid>
            )}
          </Contents>
        </ModalBlock>
      </Background>
    </Container>
  );
};

export default PitcherModal;
