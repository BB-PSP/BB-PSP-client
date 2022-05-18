import { useRouter } from 'next/router';

import { ArrowImg, Button } from './styles';

const PrevButton = () => {
  const router = useRouter();
  return (
    <nav>
      <Button onClick={() => router.back()}>
        prev
        <ArrowImg src="/image/white_arrow_reverse.png" alt="이전 페이지 버튼" />
      </Button>
    </nav>
  );
};

export default PrevButton;
