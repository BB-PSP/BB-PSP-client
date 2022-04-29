import Link from 'next/link';

import { ArrowImg, Button } from './styles';

const PrevButton = () => {
  return (
    <nav>
      <Link href="/">
        <Button>
          prev
          <ArrowImg
            src="/image/white_arrow_reverse.png"
            alt="이전 페이지 버튼"
          />
        </Button>
      </Link>
    </nav>
  );
};

export default PrevButton;
