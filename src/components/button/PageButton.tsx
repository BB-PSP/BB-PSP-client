import Link from 'next/link';
import styled from 'styled-components';
import { IButton } from '@store/Types';
import { breakpoints } from '@styles/media';

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: absolute;
  ${breakpoints.large} {
    bottom: 6.48vh;
  }
  ${breakpoints.medium} {
    bottom: 2.87vh;
  }
  ${breakpoints.small} {
    bottom: 2.87vh;
  }
`;

const NextButtonText = styled.h3`
  cursor: grab;
  font-family: 'RobotoMonoRegular';
  font-size: 2.2rem;
  color: #b70000;
  ${breakpoints.large} {
    font-size: 1.15vw;
    line-height: 2.69vh;
    margin-left: 55.47vw;
  }
  ${breakpoints.medium} {
    font-size: 2vw;
    line-height: 3vh;
    margin-left: 60vw;
  }
  ${breakpoints.small} {
    font-size: 3.3vw;
    line-height: 3vh;
    margin-left: 60vw;
  }
`;

const ArrowImg = styled.img`
  ${breakpoints.large} {
    margin-top: -0.6rem;
    width: 5.39vw;
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

const PrevButtonText = styled.h3`
  cursor: grab;
  font-family: 'RobotoMonoRegular';
  color: #b70000;
  text-align: right;
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

const ReversedArrowImg = styled.img`
  transform: scaleX(-1);
  ${breakpoints.large} {
    margin-top: -0.6rem;
    width: 5.39vw;
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

function PageButton({ prev, next }: IButton) {
  return (
    <ButtonContainer>
      <Link href={prev}>
        <PrevButtonText>
          prev
          <ReversedArrowImg src="/image/arrow.png" alt="화살표" />
        </PrevButtonText>
      </Link>
      <Link href={next}>
        <NextButtonText>
          next
          <ArrowImg src="/image/arrow.png" alt="화살표" />
        </NextButtonText>
      </Link>
    </ButtonContainer>
  );
}

export default PageButton;
