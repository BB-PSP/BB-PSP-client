import Link from 'next/link';
import { useState } from 'react';
import styled from 'styled-components';
import { breakpoints } from '@styles/media';
import ModalFrame from '@modal/ModalFrame';

const Wrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  ${breakpoints.large} {
    width: 61vw;
    height: 6.57vh;
    bottom: 0;
    margin-top: 6.48vh;
  }
  ${breakpoints.medium} {
    height: 20vh;
    padding-top: 4vh;
  }
  ${breakpoints.small} {
    justify-content: space-between;
    height: 20vh;
    padding-top: 4vh;
  }
`;

const Button = styled.button`
  cursor: grab;
  font-family: 'RobotoMonoRegular';
  color: #fff;
  ${breakpoints.large} {
    font-size: 1.15vw;
    line-height: 2.69vh;
  }
  ${breakpoints.medium} {
    width: 4vw;
    font-size: 2vw;
    line-height: 3vh;
  }
  ${breakpoints.small} {
    width: 4vw;
    font-size: 2vw;
    line-height: 3vh;
  }
`;

const ArrowImg = styled.img`
  ${breakpoints.large} {
    margin-top: -0.6rem;
    width: 5.4vw;
    height: 3.06vh;
  }
  ${breakpoints.medium} {
    margin-top: -0.6rem;
    width: 10vw;
    height: 3.5vh;
  }
  ${breakpoints.small} {
    margin-top: -0.6rem;
    width: 10vw;
    height: auto;
  }
`;

const ViewAllBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const TestImage = styled.img`
  ${breakpoints.large} {
    margin-left: 0.52vw;
    margin-top: 1.85vh;
    width: 5.39vw;
    height: 3.06vh;
  }
  ${breakpoints.medium} {
    margin-left: 0.52vw;
    margin-top: 1.85vh;
    width: 10vw;
    height: 3.5vh;
  }
  ${breakpoints.small} {
    margin-left: 0.52vw;
    width: 10vw;
    height: auto;
  }
`;

const ReplacementPlayerButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.74);
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  font-family: 'RobotoMonoRegular';
  text-align: center;
  color: #272727;
  ${breakpoints.large} {
    font-size: 1.15vw;
    line-height: 2.69vh;
    margin-top: 1.39vh;
    padding: 1.11vh 1.46vw;
    height: 5.19vh;
    margin-left: 3vw;
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
