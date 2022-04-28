import { IButton } from '@store/Types';
import { breakpoints } from '@styles/media';
import Link from 'next/link';
import styled from 'styled-components';

const ButtonContainer = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: absolute;
  ${breakpoints.large} {
    width: 68vw;
    bottom: 6.5vh;
  }
  ${breakpoints.medium} {
    width: 80vw;
    bottom: 2.9vh;
  }
  ${breakpoints.small} {
    width: 90vw;
    bottom: 1.8vh;
  }
`;

const ArrowImg = styled.img`
  ${breakpoints.large} {
    margin-top: -0.6rem;
    width: 5.4vw;
    height: auto;
  }
  ${breakpoints.medium} {
    margin-top: -0.6rem;
    width: 9vw;
    height: auto;
  }
  ${breakpoints.small} {
    margin-top: -0.8vh;
    width: 13vw;
    height: auto;
  }
`;

const ReversedArrowImg = styled.img`
  transform: scaleX(-1);
  ${breakpoints.large} {
    margin-top: -0.6rem;
    width: 5.4vw;
    height: auto;
  }
  ${breakpoints.medium} {
    margin-top: -0.6rem;
    width: 9vw;
    height: auto;
  }
  ${breakpoints.small} {
    margin-top: -0.8vh;
    width: 13vw;
    height: auto;
  }
`;

const Button = styled.button`
  cursor: grab;
  font-family: 'RobotoMonoRegular';
  color: #b70000;
  ${breakpoints.large} {
    font-size: 1.15vw;
    line-height: 2.69vh;
  }
  ${breakpoints.medium} {
    font-size: 2vw;
    line-height: 3vh;
  }
  ${breakpoints.small} {
    font-size: 3.3vw;
    line-height: 3vh;
  }
`;

function PageButton({ prev, next }: IButton) {
  return (
    <ButtonContainer>
      <Link href={prev}>
        <Button style={{ textAlign: 'right' }}>
          prev
          <ReversedArrowImg src="/image/arrow.png" alt="이전 페이지 버튼" />
        </Button>
      </Link>
      <Link href={next}>
        <Button style={{ textAlign: 'left' }}>
          next
          <ArrowImg src="/image/arrow.png" alt="다음 페이지 버튼" />
        </Button>
      </Link>
    </ButtonContainer>
  );
}

export default PageButton;
