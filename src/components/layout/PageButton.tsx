import Link from 'next/link';
import styled from 'styled-components';
import { IButton } from '../../store/Types';
import { breakpoints } from '../../styles/media';

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: absolute;
  ${breakpoints.large} {
    bottom: 7.1rem;
  }
  ${breakpoints.medium} {
    bottom: 3.1rem;
  }
  ${breakpoints.small} {
    bottom: 1rem;
  }
`;

const NextButtonText = styled.h3`
  cursor: grab;
  font-family: 'RobotoMonoRegular';
  font-size: 2.2rem;
  color: #b70000;
  ${breakpoints.large} {
    font-size: 2.2rem;
    line-height: 2.9rem;
    margin-left: 106.5rem;
  }
  ${breakpoints.medium} {
    font-size: 2.2rem;
    line-height: 2.9rem;
    margin-left: 46.5rem;
  }
  ${breakpoints.small} {
    font-size: 1.6rem;
    line-height: 2.9rem;
    margin-left: 20.5rem;
  }
`;

const ArrowImg = styled.img`
  ${breakpoints.large} {
    margin-top: -0.6rem;
    width: 10.35rem;
    height: auto;
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

const PrevButtonText = styled.h3`
  cursor: grab;
  font-family: 'RobotoMonoRegular';
  color: #b70000;
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

const ReversedArrowImg = styled.img`
  transform: scaleX(-1);
  ${breakpoints.large} {
    margin-top: -0.6rem;
    width: 10.35rem;
    height: auto;
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

function PageButton({ prev, next }: IButton) {
  return (
    <ButtonContainer>
      <Link href={prev}>
        <PrevButtonText>
          prev
          <ReversedArrowImg src="/image/Arrow.png" alt="화살표" />
        </PrevButtonText>
      </Link>
      <Link href={next}>
        <NextButtonText>
          next
          <ArrowImg src="/image/Arrow.png" alt="화살표" />
        </NextButtonText>
      </Link>
    </ButtonContainer>
  );
}

export default PageButton;
