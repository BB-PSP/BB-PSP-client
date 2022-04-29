import ModalFrame from '@modal/ModalFrame';
import Link from 'next/link';
import { useState } from 'react';

import {
  ArrowImg,
  Button,
  ReplacementPlayerButton,
  TestImage,
  ViewAllBox,
  Wrapper,
} from './styles';

const ResultButton = () => {
  const [showModal, setShowModal] = useState(false);
  const openModal = () => {
    setShowModal(true);
  };
  return (
    <Wrapper>
      <Link href="/">
        <Button style={{ textAlign: 'right' }}>
          prev
          <ArrowImg
            src="/image/white_arrow_reverse.png"
            alt="이전 페이지 버튼"
          />
        </Button>
      </Link>
      <ReplacementPlayerButton onClick={openModal}>
        replacement player
      </ReplacementPlayerButton>
      {showModal ? <ModalFrame setShowModal={setShowModal} /> : null}
      <Link href="/custom/result/player/threeyear">
        <Button style={{ textAlign: 'left', width: '2.76vw' }}>
          <ViewAllBox>
            view all
            <TestImage
              src="/image/white_arrow.png"
              alt="3년치 성적 예측 페이지 버튼"
            />
          </ViewAllBox>
        </Button>
      </Link>
    </Wrapper>
  );
};

export default ResultButton;
