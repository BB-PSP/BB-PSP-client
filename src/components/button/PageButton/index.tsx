import { IButton } from '@store/Types';
import Link from 'next/link';

import { ArrowImg, Button, ButtonContainer, ReversedArrowImg } from './styles';

const PageButton = ({ prev, next }: IButton) => {
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
};

export default PageButton;
