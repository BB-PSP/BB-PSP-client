import Link from 'next/link';
import styled from 'styled-components';

const Wrapper = styled.div`
  height: 7.1rem;
  margin-top: 7rem;
`;

const ArrowImg = styled.img`
  margin-top: -0.6rem;
  width: 10.35rem;
  height: 3.3rem;
`;

const PrevButtonText = styled.h3`
  cursor: grab;
  font-family: 'RobotoMonoRegular';
  color: #fff;
  text-align: right;
  font-size: 2.2rem;
  line-height: 2.9rem;
`;

const PrevButton = () => {
  return (
    <Wrapper>
      <Link href="/">
        <PrevButtonText>
          prev
          <ArrowImg src="/image/white_arrow_reverse.png" alt="화살표" />
        </PrevButtonText>
      </Link>
    </Wrapper>
  );
};

export default PrevButton;
