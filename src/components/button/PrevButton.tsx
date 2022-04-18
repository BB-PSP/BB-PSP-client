import Link from 'next/link';
import styled from 'styled-components';
import { breakpoints } from '@styles/media';

const ArrowImg = styled.img`
  margin-top: -0.6rem;
  ${breakpoints.large} {
    width: 10.35rem;
  }
  ${breakpoints.medium} {
    width: 10.35rem;
  }
  ${breakpoints.small} {
    width: 5.35rem;
  }
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
    font-size: 1.4rem;
    line-height: 2rem;
  }
`;

const PrevButton = () => {
  return (
    <div>
      <Link href="/">
        <PrevButtonText>
          prev
          <ArrowImg src="/image/white_arrow_reverse.png" alt="화살표" />
        </PrevButtonText>
      </Link>
    </div>
  );
};

export default PrevButton;
