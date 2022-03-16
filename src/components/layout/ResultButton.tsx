import Link from 'next/link';
import { useState } from 'react';
import styled from 'styled-components';
import { breakpoints } from '../../styles/media';
import ModalFrame from '../modal/ModalFrame';

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

const ResultButton = () => {
  const [showModal, setShowModal] = useState(false);
  const openModal = () => {
    setShowModal(true);
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
      {showModal ? <ModalFrame setShowModal={setShowModal} /> : null}
      <Link href="/custom/result/player/threeyear">
        <ViewAllBox>
          <NextButtonText>view all</NextButtonText>
          <TestImage src="/image/white_arrow.png" />
        </ViewAllBox>
      </Link>
    </Wrapper>
  );
};

export default ResultButton;
