import Link from 'next/link';
import { useState } from 'react';
import styled from 'styled-components';
import { breakpoints } from '../../styles/media';
import ModalFrame from '../modal/ModalFrame';

const Wrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  ${breakpoints.large} {
    height: 6.57vh;
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

const NextButtonText = styled.h3`
  cursor: grab;
  font-family: 'RobotoMonoRegular';
  color: #fff;
  ${breakpoints.large} {
    width: 2.76vw;
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

const PrevButtonText = styled.h3`
  cursor: grab;
  font-family: 'RobotoMonoRegular';
  color: #fff;
  text-align: right;
  ${breakpoints.large} {
    font-size: 1.15vw;
    line-height: 2.69vh;
    padding-right: 20.23vw;
  }
  ${breakpoints.medium} {
    font-size: 2vw;
    line-height: 3vh;
  }
  ${breakpoints.small} {
    font-size: 2vw;
    line-height: 3vh;
  }
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
    /* margin-top: 1.85vh; */
    width: 10vw;
    height: auto;
  }
`;

const ReplacementPlayerButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.74);
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  ${breakpoints.large} {
    margin-top: 1.39vh;
    padding: 1.11vh 1.46vw;
    height: 5.19vh;
    margin-right: 16.98vw;
  }
  ${breakpoints.medium} {
    margin-top: 1.39vh;
    width: 25vw;
    height: 5.19vh;
  }
  ${breakpoints.small} {
    margin-top: 1.39vh;
    width: 25vw;
    height: 5.19vh;
    margin-left: 2vw;
  }
`;

const ButtonText = styled.h3`
  font-family: 'RobotoMonoRegular';
  text-align: center;
  color: #272727;
  ${breakpoints.large} {
    font-size: 1.15vw;
    line-height: 2.69vh;
  }
  ${breakpoints.medium} {
    font-size: 2vw;
    line-height: 3vh;
  }
  ${breakpoints.small} {
    font-size: 2vw;
    line-height: 3vh;
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
